import React from "react";
import { SectionTitle, SectionDescription, CTAButton, TableCell } from "./common";
import { COST_DATA, PLAN_DETAILS_DATA, USER_OPINION_DATA, CLAIMS_DATA } from "../data/insurance-providers";

// Interface for component props
interface PetInsuranceComparisonProps {
  onCTAClick?: () => void;
}

// Main component
export const PetInsuranceComparison: React.FC<PetInsuranceComparisonProps> = ({ onCTAClick }) => {
  return (
    <div className="bg-white w-full min-w-[378px] min-h-screen">
      <div className="max-w-[1440px] min-w-[378px] mx-auto px-0 sm:px-6 md:px-8 lg:px-0">
        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-5">
            <main className="col-span-6 sm:col-span-8 md:col-span-10 lg:col-span-12 flex flex-col items-start gap-8 sm:gap-10 md:gap-12 bg-white py-4 sm:py-6 md:py-0 w-full mx-auto">
            <div className="flex flex-col items-start gap-10 w-full">
              
              {/* Our Analysis Section */}
              <section id="best-value-analysis" className="flex flex-col items-start gap-6 mt-6 pt-10 w-full border-t border-[#CED4DB]">
                <div style={{
                  width: '100%',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '24px',
                  display: 'inline-flex'
                }}>
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '24px',
                    display: 'flex'
                  }}>
                    <div style={{
                      alignSelf: 'stretch',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      gap: '8px',
                      display: 'flex'
                    }}>
                      <h2 className="text-[32px] sm:text-[32px] md:text-[32px] lg:text-[40px] leading-[39px] sm:leading-[39px] md:leading-[39px] lg:leading-[48px]" style={{color: 'black', fontFamily: 'Work Sans', fontWeight: 700}}>
                        Our Analysis of the Best Online Banks
                      </h2>
                      <div style={{
                        alignSelf: 'stretch',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: '16px',
                        display: 'flex'
                      }}>
                        <div style={{
                          color: '#333333',
                          fontSize: '18px',
                          fontFamily: 'Georgia',
                          fontWeight: '400',
                          lineHeight: '29.12px',
                          wordWrap: 'break-word'
                        }}>
                          If you’re searching for a bank account with low fees and high savings rates, an online bank is one of the best places to consider.
                        </div>
                        <div style={{
                          color: '#333333',
                          fontSize: '18px',
                          fontFamily: 'Georgia',
                          fontWeight: '400',
                          lineHeight: '29.12px',
                          wordWrap: 'break-word'
                        }}>
                          We analyzed the products and services of 60 online banks, comparing the factors that matter most: available accounts, digital banking tools, service fees, ATM networks, interest rates and the overall customer experience.
                        </div>
                      </div>
                      <img
                        style={{
                          alignSelf: 'stretch',
                          width: '100%',
                          height: 'auto',
                          objectFit: 'contain'
                        }}
                        src="/Chart.png"
                        alt="Online Banks Analysis Chart"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Summary of Best Online Banks Section */}
              <section id="insurance-cost" className="flex flex-col items-start gap-6 mt-6 pt-10 w-full border-t border-[#CED4DB]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <SectionTitle level="h3">Summary of Best Online Banks</SectionTitle>
                    <SectionDescription>
                      The table below shows each bank’s Forbes Advisor rating and what it’s best for.
                    </SectionDescription>
                  </div>
                </div>
                
                <div className="w-full overflow-x-auto">
                  <table className="w-full table-fixed border-separate border-spacing-0 min-w-[800px]">
                    <thead>
                      <tr>
                        <TableCell isHeader className="w-[25%] rounded-tl-[8px] ">Provider</TableCell>
                        <TableCell isHeader className="w-[30%]">Forbes Advisor Rating</TableCell>
                        <TableCell isHeader className="w-[30%]">Best For</TableCell>
                        <TableCell isHeader className="w-[15%] rounded-tr-[16px]">Apply Now</TableCell>
                      </tr>
                    </thead>
                    <tbody>
                      {COST_DATA.map((row, index) => (
                        <tr key={row.provider}>
                          <TableCell isProvider>{row.provider}</TableCell>
                          <TableCell>{row.dogCost}</TableCell>
                          <TableCell>{row.catCost}</TableCell>
                          <TableCell>
                            <a 
                              href={row.applyNowUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200"
                            >
                              Apply Now
                            </a>
                          </TableCell>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <CTAButton onClick={onCTAClick} />
              </section>

              {/* How To Choose an Online Bank Section */}
              <section id="plan-details" className="flex flex-col items-start gap-10 pt-10 w-full border-t border-[#CED4DB]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <SectionTitle level="h3">How To Choose an Online Bank</SectionTitle>
                    <SectionDescription>
                      Here are some factors to consider when choosing an online bank:
                    </SectionDescription>
                  </div>
                </div>
                
                <div className="flex flex-col items-start gap-6 w-full">
                  <ul className="list-disc pl-5 space-y-3 text-[#333333] text-[18px] leading-[29.12px]" style={{ fontFamily: 'Georgia' }}>
                    <li><strong>Fees.</strong> Look for low or no monthly, overdraft and ATM fees, and check for ATM fee reimbursements.</li>
                    <li><strong>APYs.</strong> Online banks often pay higher rates. Compare the <a href="https://www.forbes.com/advisor/banking/what-is-apy/" target="_blank" rel="noreferrer" className="text-[#007AC8] underline">APY</a> on savings and checking products.</li>
                    <li><strong>Minimums.</strong> Lower minimum deposit and balance requirements make accounts easier to maintain.</li>
                    <li><strong>Products.</strong> Some online banks are full-service (checking, savings, money market accounts, CDs) while others are limited.</li>
                    <li><strong>ATM network.</strong> Look for broad surcharge-free ATM access where you live and travel.</li>
                    <li><strong>Customer experience.</strong> Consider support availability, response times and chat options.</li>
                    <li><strong>Digital experience.</strong> Prioritize a reliable website and highly rated mobile app.</li>
                    <li><strong>Safety.</strong> Verify FDIC insurance (or <a href="https://www.forbes.com/advisor/banking/what-is-the-national-credit-union-administration/" target="_blank" rel="noreferrer" className="text-[#007AC8] underline">NCUA</a> for credit unions).</li>
                  </ul>
                </div>
              </section>

              {/* Pros and Cons Section */}
              <section id="user-opinion" className="flex flex-col items-start gap-6 pt-10 w-full border-t border-[#CED4DB]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <SectionTitle level="h3">Pros and Cons of Online Banks</SectionTitle>
                    <SectionDescription>
                      Online banks often deliver higher rates and lower fees, but they don’t offer full branch access.
                    </SectionDescription>
                  </div>
                </div>
                
                <div className="w-full overflow-x-auto">
                  <table className="w-full table-fixed border-separate border-spacing-0 min-w-[900px]">
                    <thead>
                      <tr>
                        <TableCell isHeader className="w-[50%] rounded-tl-[8px]">Pros of Online Banks</TableCell>
                        <TableCell isHeader className="w-[50%] rounded-tr-[16px]">Cons of Online Banks</TableCell>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <TableCell>Lower fees (monthly maintenance, overdrafts, ATM, P2P transfers, incoming wire transfers, foreign transactions)</TableCell>
                        <TableCell>No branch access, so banking and customer service are handled online or on the phone</TableCell>
                      </tr>
                      <tr>
                        <TableCell>Higher rates on checking, savings, CDs and money market accounts</TableCell>
                        <TableCell>ATM networks may be limited compared to traditional brick-and-mortar banks</TableCell>
                      </tr>
                      <tr>
                        <TableCell>Extra features like automated savings tools, goal trackers, budgeting tools and mobile wallet integration</TableCell>
                        <TableCell>May not accept cash deposits</TableCell>
                      </tr>
                      <tr>
                        <TableCell>Easy application processes to open accounts</TableCell>
                        <TableCell>Limited range of services (fewer account options or lack of lending and investment products)</TableCell>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Online vs Traditional Section */}
              <section id="claims-feedback" className="flex flex-col items-start gap-6 pt-10 w-full border-t border-[#CED4DB]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <SectionTitle level="h3">Online Banks vs. Traditional Banks</SectionTitle>
                    <SectionDescription>
                      Here’s how online banks compare with traditional brick-and-mortar banks.
                    </SectionDescription>
                  </div>
                </div>
                
                <div className="w-full overflow-x-auto">
                  <table className="w-full table-fixed border-separate border-spacing-0 min-w-[900px]">
                    <thead>
                      <tr>
                        <TableCell isHeader className="w-[50%] rounded-tl-[8px]">Online Banks</TableCell>
                        <TableCell isHeader className="w-[50%] rounded-tr-[16px]">Traditional Banks</TableCell>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <TableCell>Don’t usually have branch locations</TableCell>
                        <TableCell>Operate brick-and-mortar locations</TableCell>
                      </tr>
                      <tr>
                        <TableCell>Tend to offer more generous rates and lower fees</TableCell>
                        <TableCell>Typically offer less competitive rates and charge more fees</TableCell>
                      </tr>
                      <tr>
                        <TableCell>Usually have a limited range of products and services</TableCell>
                        <TableCell>Tend to offer more financial products and services</TableCell>
                      </tr>
                      <tr>
                        <TableCell>May offer 24/7 virtual customer service</TableCell>
                        <TableCell>—</TableCell>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* How to Choose the Right Pet Insurance Section */}
              <section id="how-to-choose" className="flex flex-col items-start gap-6 pt-10 w-full border-t border-[#CED4DB]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <h2 className="text-black text-[32px] sm:text-[32px] md:text-[32px] lg:text-[40px] font-bold leading-[39px] sm:leading-[39px] md:leading-[39px] lg:leading-[48px]" style={{ fontFamily: 'Work Sans', fontWeight: 700 }}>
                      How to Choose the Right Online Bank
                    </h2>
                    <p className="text-[#333333] text-[18px] leading-[29.12px] font-normal tracking-[0]" style={{ fontFamily: 'Georgia' }}>
                      These key considerations help you compare accounts and find the best fit.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-8 w-full">
                  {/* Consider Your Pet's Potential Health Problems */}
                  <div className="w-full bg-[#f6f8fa] rounded-lg p-6 flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#203468] rounded-lg flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 26.667v-6.667m0-6.667h.017M36.667 20c0 9.205-7.462 16.667-16.667 16.667S3.333 29.205 3.333 20 10.795 3.333 20 3.333 36.667 10.795 36.667 20z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <h3 className="text-black text-xl font-bold leading-[26px]" style={{ fontFamily: 'Work Sans' }}>
                        Fees
                      </h3>
                      <p className="text-[#333333] text-[18px] leading-[29.12px] font-normal tracking-[0]" style={{ fontFamily: 'Georgia' }}>
                        Look for an online bank that keeps fees of all types to a minimum, including monthly fees, overdraft fees and ATM fees. Fee reimbursements are a plus.
                      </p>
                    </div>
                  </div>

                  {/* Determine What Policy Features Are Important to You */}
                  <div className="w-full bg-[#f6f8fa] rounded-lg p-6 flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#203468] rounded-lg flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M35 20c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C5 11.716 11.716 5 20 5c8.284 0 15 6.716 15 15z" stroke="white" strokeWidth="2"/>
                          <path d="M25 17.5l-6.667 6.667L15 20.833" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <h3 className="text-black text-xl font-bold leading-[26px]" style={{ fontFamily: 'Work Sans' }}>
                        Prioritize the Features You Actually Use
                      </h3>
                      <p className="text-[#333333] text-[18px] leading-[29.12px] font-normal tracking-[0]" style={{ fontFamily: 'Georgia' }}>
                        Decide whether you need strong checking features, high savings APY, fee-free ATM access or both. Some banks specialize in savings while others focus on everyday checking.
                      </p>
                      <p className="text-[#333333] text-[18px] leading-[29.12px] font-normal tracking-[0]" style={{ fontFamily: 'Georgia' }}>
                        Look for perks like early direct deposit, budgeting tools, or cash-back on debit if those are meaningful to you.
                      </p>
                    </div>
                  </div>

                  {/* Consider the Waiting Periods */}
                  <div className="w-full bg-[#f6f8fa] rounded-lg p-6 flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#203468] rounded-lg flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 10v10l6.667 3.333M36.667 20c0 9.205-7.462 16.667-16.667 16.667S3.333 29.205 3.333 20 10.795 3.333 20 3.333 36.667 10.795 36.667 20z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <h3 className="text-black text-xl font-bold leading-[26px]" style={{ fontFamily: 'Work Sans' }}>
                        Compare APYs and Rate Tiers
                      </h3>
                      <p className="text-[#333333] text-[18px] leading-[29.12px] font-normal tracking-[0]" style={{ fontFamily: 'Georgia' }}>
                        Savings APYs can vary by balance tiers or require qualifying direct deposits. Verify how the advertised rate is earned and whether there are caps or minimums.
                      </p>
                    </div>
                  </div>

                  {/* Choose Reimbursement Levels */}
                  <div className="w-full bg-[#f6f8fa] rounded-lg p-6 flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#203468] rounded-lg flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 36.667c9.205 0 16.667-7.462 16.667-16.667S29.205 3.333 20 3.333 3.333 10.795 3.333 20 10.795 36.667 20 36.667z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M20 13.333V20m0 6.667h.017" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <h3 className="text-black text-xl font-bold leading-[26px]" style={{ fontFamily: 'Work Sans' }}>
                        Understand Fees and Balance Requirements
                      </h3>
                      <p className="text-[#333333] text-[18px] leading-[29.12px] font-normal tracking-[0]" style={{ fontFamily: 'Georgia' }}>
                        Monthly fees, minimum balance requirements and overdraft policies can materially change the value of an account. Favor banks with low fees and clear rules.
                      </p>
                    </div>
                  </div>

                  {/* Check Your Pet's Eligibility */}
                  <div className="w-full bg-[#f6f8fa] rounded-lg p-6 flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#203468] rounded-lg flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.333 20L18.333 25l8.334-10m5 5c0 9.205-7.462 16.667-16.667 16.667S3.333 29.205 3.333 20 10.795 3.333 20 3.333 36.667 10.795 36.667 20z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <h3 className="text-black text-xl font-bold leading-[26px]" style={{ fontFamily: 'Work Sans' }}>
                        Check Eligibility and Access
                      </h3>
                      <p className="text-[#333333] text-[18px] leading-[29.12px] font-normal tracking-[0]" style={{ fontFamily: 'Georgia' }}>
                        Consider ATM network access, deposit methods (mobile check, cash deposit options) and whether the bank is available in your state.
                      </p>
                    </div>
                  </div>

                  {/* Compare Quotes for Plans That Match Your Wish List */}
                  <div className="w-full bg-[#f6f8fa] rounded-lg p-6 flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#203468] rounded-lg flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M33.333 5H6.667C5.747 5 5 5.746 5 6.667v26.666C5 34.254 5.747 35 6.667 35h26.666c.92 0 1.667-.746 1.667-1.667V6.667C35 5.746 34.253 5 33.333 5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M25 5v30M11.667 13.333h6.666m-6.666 6.667h6.666m-6.666 6.667h6.666" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <h3 className="text-black text-xl font-bold leading-[26px]" style={{ fontFamily: 'Work Sans' }}>
                        Compare Rates and Fee Structures
                      </h3>
                      <p className="text-[#333333] text-[18px] leading-[29.12px] font-normal tracking-[0]" style={{ fontFamily: 'Georgia' }}>
                        Compare APYs, fee policies and minimum balances across several banks before choosing. A slightly lower APY can be worth it if the account has better access or fewer fees.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Sections */}
                <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex'}}>
                  {/* Compare Plans Available By Company */}
                  <div style={{width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                      <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                          <div style={{alignSelf: 'stretch', color: '#333333', fontSize: 24, fontFamily: 'Work Sans', fontWeight: '700', lineHeight: '29px', wordWrap: 'break-word'}}>Compare Account Types by Bank</div>
                          <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
                            <p style={{color: '#333333', fontSize: 18, fontFamily: 'Georgia', fontWeight: '400', lineHeight: '29.12px', wordWrap: 'break-word', margin: 0}}>
                              Start by comparing account types. Most online banks offer a mix of checking, savings and CDs, with some also offering money market accounts. <strong>Checking accounts</strong> are for everyday spending with debit cards, bill pay and direct deposit. <strong>Savings accounts</strong> offer higher interest for cash reserves and emergency funds. <strong>Money market accounts</strong> are savings-like with limited transaction access and higher yields. <strong>Certificates of deposit (CDs)</strong> provide fixed-rate savings for a set term.
                            </p>
                            <div>
                              <span style={{color: '#333333', fontSize: 18, fontFamily: 'Georgia', fontWeight: '400', lineHeight: '29.12px', wordWrap: 'break-word'}}>Related: </span>
                              <a
                                href="https://www.forbes.com/advisor/banking/best-online-banks/"
                                style={{color: '#007AC8', fontSize: 18, fontFamily: 'Georgia', fontWeight: '700', textDecoration: 'underline', lineHeight: '29.12px', wordWrap: 'break-word'}}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Best Online Banks
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Coverage Levels */}
                  <div style={{width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                      <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                          <div style={{alignSelf: 'stretch', color: '#333333', fontSize: 24, fontFamily: 'Work Sans', fontWeight: '700', lineHeight: '29px', wordWrap: 'break-word'}}>Rates and Fee Structure</div>
                          <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
                            <p style={{color: '#333333', fontSize: 18, fontFamily: 'Georgia', fontWeight: '400', lineHeight: '29.12px', wordWrap: 'break-word', margin: 0}}>
                              The best online bank for you balances APY, fees and access. Compare how each bank handles minimum balances, overdraft policies and ATM reimbursements. <strong>APY and rate tiers</strong>: some banks offer higher rates only at certain balances or with direct deposit. <strong>Monthly fees</strong>: look for no-fee accounts or easy ways to waive fees. <strong>ATM access and reimbursements</strong>: check network size and reimbursement limits if you use cash often.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="flex flex-col items-start gap-6 pt-10 w-full border-t border-[#CED4DB]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <SectionTitle level="h2">Frequently Asked Questions</SectionTitle>
                    <SectionDescription>
                      Common questions about online banks, rates, and account access.
                    </SectionDescription>
                  </div>
                </div>
                
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="w-full p-6 bg-[#f8f9fa] rounded-lg">
                    <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'Work Sans' }}>
                      Are online banks safe?
                    </h3>
                    <p className="text-gray-700" style={{ fontFamily: 'Work Sans' }}>
                      Most online banks are FDIC‑insured (or NCUA‑insured for credit unions), which protects deposits up to applicable limits per depositor.
                    </p>
                  </div>
                  
                  <div className="w-full p-6 bg-[#f8f9fa] rounded-lg">
                    <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'Work Sans' }}>
                      Do online banks have ATMs?
                    </h3>
                    <p className="text-gray-700" style={{ fontFamily: 'Work Sans' }}>
                      Yes. Most partner with large ATM networks and may reimburse out‑of‑network fees up to a monthly limit.
                    </p>
                  </div>
                  
                  <div className="w-full p-6 bg-[#f8f9fa] rounded-lg">
                    <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'Work Sans' }}>
                      Can I deposit cash with an online bank?
                    </h3>
                    <p className="text-gray-700" style={{ fontFamily: 'Work Sans' }}>
                      Some online banks support cash deposits through partner retail locations, but many are check‑ and electronic‑deposit only.
                    </p>
                  </div>
                  
                  <div className="w-full p-6 bg-[#f8f9fa] rounded-lg">
                    <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'Work Sans' }}>
                      Why can’t I open a bank account online?
                    </h3>
                    <p className="text-gray-700" style={{ fontFamily: 'Work Sans' }}>
                      Identity verification issues, ChexSystems flags, or location restrictions can prevent account opening. Check requirements for each bank.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};