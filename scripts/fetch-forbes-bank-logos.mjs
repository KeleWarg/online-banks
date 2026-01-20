#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { load as loadHtml } from "cheerio";

const SOURCE_URL = "https://www.forbes.com/advisor/banking/best-online-banks/";
const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36";

const PROVIDERS = [
  { name: "Bank5 Connect", slug: "bank5-connect" },
  { name: "Quontic Bank", slug: "quontic-bank" },
  { name: "Ally Bank", slug: "ally-bank" },
  { name: "Discover® Bank", slug: "discover-bank" },
  { name: "Synchrony Bank", slug: "synchrony-bank" },
  { name: "NBKC Bank", slug: "nbkc-bank" },
  { name: "SoFi®", slug: "sofi" },
  { name: "EverBank", slug: "everbank" },
  { name: "Capital One 360", slug: "capital-one-360" },
  { name: "First Internet Bank", slug: "first-internet-bank" },
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTPUT_DIR = path.resolve(__dirname, "../src/assets/brands/banks");

const args = process.argv.slice(2);
const urlsFileIndex = args.findIndex((arg) => arg === "--urls");
const urlsFilePath = urlsFileIndex >= 0 ? args[urlsFileIndex + 1] : null;

const normalize = (value) =>
  value
    .toLowerCase()
    .replace(/[®™]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const extractSrcFromSrcset = (srcset) => {
  if (!srcset) return "";
  const first = srcset.split(",")[0]?.trim();
  return first ? first.split(" ")[0] : "";
};

const stripThumbor = (url) => {
  if (!url) return "";
  if (!url.includes("thumbor.forbes.com")) return url;
  const index = url.lastIndexOf("https://");
  return index >= 0 ? url.slice(index) : url;
};

const getImageUrl = (attributes) => {
  const candidates = [
    attributes["data-src"],
    attributes["data-lazy-src"],
    attributes["data-original"],
    attributes["data-orig-file"],
    attributes["src"],
    extractSrcFromSrcset(attributes["srcset"]),
    extractSrcFromSrcset(attributes["data-srcset"]),
  ].filter(Boolean);
  return candidates[0] || "";
};

const fetchHtml = async () => {
  const response = await fetch(SOURCE_URL, {
    headers: {
      "User-Agent": USER_AGENT,
      Accept: "text/html,application/xhtml+xml",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch HTML (${response.status})`);
  }

  const html = await response.text();
  if (html.includes("Please enable JS") || html.includes("captcha-delivery")) {
    throw new Error("Blocked by bot protection.");
  }
  return html;
};

const buildLogoMapFromHtml = (html) => {
  const $ = loadHtml(html);
  const images = $("img")
    .map((_, img) => ({
      alt: $(img).attr("alt") || "",
      attributes: img.attribs || {},
    }))
    .get()
    .map((img) => ({
      alt: img.alt,
      src: stripThumbor(getImageUrl(img.attributes)),
    }))
    .filter((img) => img.src);

  const map = new Map();
  for (const provider of PROVIDERS) {
    const normalizedProvider = normalize(provider.name);
    const match = images.find((img) =>
      normalize(img.alt).includes(normalizedProvider)
    );
    if (match) {
      map.set(provider.name, match.src);
    }
  }
  return map;
};

const buildLogoMapFromFile = async (filePath) => {
  const payload = JSON.parse(await fs.readFile(filePath, "utf8"));
  return new Map(Object.entries(payload));
};

const downloadLogo = async (provider, url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${provider.name} logo (${response.status})`);
  }

  const urlPath = new URL(url).pathname;
  const extension = path.extname(urlPath) || ".png";
  const filename = `${provider.slug}${extension}`;
  const outputPath = path.join(OUTPUT_DIR, filename);
  const buffer = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(outputPath, buffer);
  return outputPath;
};

const run = async () => {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  let logoMap;
  try {
    if (urlsFilePath) {
      logoMap = await buildLogoMapFromFile(urlsFilePath);
    } else {
      const html = await fetchHtml();
      logoMap = buildLogoMapFromHtml(html);
    }
  } catch (error) {
    if (!urlsFilePath) {
      throw new Error(
        "Unable to fetch logos from the site. Try running with --urls scripts/forbes-logos.json"
      );
    }
    throw error;
  }

  const missing = PROVIDERS.filter((provider) => !logoMap.has(provider.name));
  if (missing.length) {
    throw new Error(
      `Missing logos for: ${missing.map((provider) => provider.name).join(", ")}`
    );
  }

  const results = [];
  for (const provider of PROVIDERS) {
    const url = logoMap.get(provider.name);
    const savedPath = await downloadLogo(provider, url);
    results.push({ provider: provider.name, url, savedPath });
  }

  console.log("Downloaded logos:");
  results.forEach((result) => {
    console.log(`- ${result.provider}: ${path.relative(process.cwd(), result.savedPath)}`);
  });
};

run().catch((error) => {
  console.error("Logo fetch failed:", error.message);
  process.exit(1);
});
