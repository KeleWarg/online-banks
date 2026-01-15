# Fonts Directory

## Schnyder S Font Files

To use Schnyder S Bold font properly, you need to add the font files to this directory:

### Required Files:
- `SchnydreS-Bold.woff2` (recommended for modern browsers)
- `SchnydreS-Bold.woff` (fallback for older browsers)

### Where to get Schnyder S:
1. **Commercial License**: Purchase from Dinamo Typefaces or other font distributors
2. **Adobe Fonts**: If you have an Adobe Creative Cloud subscription
3. **Font Foundry**: Check with the original type foundry

### File Structure:
```
public/fonts/
├── SchnydreS-Bold.woff2
├── SchnydreS-Bold.woff
└── README.md (this file)
```

### Alternative Fonts:
If you don't have access to Schnyder S, you can use these similar serif fonts:
- **Playfair Display** (Google Fonts)
- **Crimson Text** (Google Fonts)  
- **Lora** (Google Fonts)
- **Georgia** (system font)

## How to Reference Schnyder S in Your Components:

### Option 1: Tailwind Classes
```jsx
<h1 className="font-schnyder-bold text-4xl font-bold">
  Your Title Here
</h1>
```

### Option 2: Inline Styles
```jsx
<h1 style={{ 
  fontFamily: 'Schnyder S', 
  fontWeight: 700 
}}>
  Your Title Here
</h1>
```

### Option 3: CSS Classes
```css
.title-schnyder {
  font-family: 'Schnyder S', serif;
  font-weight: 700;
}
```
