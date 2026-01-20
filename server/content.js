export const CONTENT_LIBRARY = {
  education: {
    apy_basics: {
      id: 'apy_basics',
      title: 'APY Basics',
      body: 'APY is the annual percentage yield you earn on savings. It includes compound interest, so a higher APY generally means your money grows faster over time.',
      link: { text: 'APY guide', url: '/advisor/banking/what-is-apy/' },
      type: 'education'
    },
    fdic_insurance: {
      id: 'fdic_insurance',
      title: 'FDIC Insurance',
      body: 'FDIC insurance protects your deposits up to $250,000 per depositor, per bank, per ownership category. Most online banks are FDIC insured.',
      link: { text: 'FDIC coverage', url: '/advisor/banking/fdic-insurance/' },
      type: 'education'
    },
    cds_explainer: {
      id: 'cds_explainer',
      title: 'CDs Explained',
      body: 'A certificate of deposit (CD) locks your money for a set term in exchange for a fixed rate. Longer terms usually offer higher rates.',
      link: { text: 'CDs guide', url: '/advisor/banking/best-cd-rates/' },
      type: 'education'
    },
    checking_vs_savings: {
      id: 'checking_vs_savings',
      title: 'Checking vs Savings',
      body: 'Checking accounts are for everyday spending and bill pay. Savings accounts are for earning interest on balances you do not use daily.',
      link: { text: 'Compare accounts', url: '/advisor/banking/checking-vs-savings/' },
      type: 'education'
    },
    atm_fees: {
      id: 'atm_fees',
      title: 'ATM Fees',
      body: 'Some online banks reimburse out-of-network ATM fees, while others do not. Look for a large fee-free ATM network if you use cash often.',
      link: { text: 'ATM fee tips', url: '/advisor/banking/avoid-atm-fees/' },
      type: 'education'
    }
  },
  fee_breakdowns: {
    monthly_fees: {
      id: 'monthly_fees',
      title: 'Monthly Fees',
      body: 'Many online banks charge no monthly maintenance fees. When they do, fees can often be waived by maintaining a balance or using direct deposit.',
      link: { text: 'Fee-free banks', url: '/advisor/banking/no-fee-checking-accounts/' },
      type: 'education'
    }
  }
};

export const findEducationContent = (topic) => {
  const normalized = topic.toLowerCase();
  const mappings = [
    { id: 'apy_basics', keywords: ['apy', 'yield', 'interest rate'] },
    { id: 'fdic_insurance', keywords: ['fdic', 'insurance', 'insured'] },
    { id: 'cds_explainer', keywords: ['cd', 'certificate of deposit'] },
    { id: 'checking_vs_savings', keywords: ['checking', 'savings', 'difference'] },
    { id: 'atm_fees', keywords: ['atm', 'fee', 'cash withdrawal'] }
  ];

  for (const mapping of mappings) {
    if (mapping.keywords.some((keyword) => normalized.includes(keyword))) {
      return CONTENT_LIBRARY.education[mapping.id];
    }
  }

  if (normalized.includes('fee')) {
    return CONTENT_LIBRARY.fee_breakdowns.monthly_fees;
  }

  return null;
};
