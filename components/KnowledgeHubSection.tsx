'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  metaTitle: string
  metaDescription: string
  category: string
  introduction: string
  sections: {
    title: string
    content: string
    impact?: string
    solution?: string
    tip?: string
  }[]
  conclusion: string
  cta: {
    text: string
    link: string
    buttonText: string
  }
}

const blogPosts: BlogPost[] = [
  {
    id: 'tax-mistakes',
    title: 'Common Tax Mistakes SMEs Make in Kenya (And How to Avoid Them)',
    metaTitle: 'Common Tax Mistakes SMEs Make in Kenya | FBC',
    metaDescription: 'Learn the most common tax mistakes SMEs make in Kenya and how to avoid penalties, audits, and compliance risks with expert guidance.',
    category: 'Tax Compliance',
    introduction: 'Small and Medium Enterprises (SMEs) form the backbone of Kenya\'s economy. However, many businesses face tax penalties, audits, and cash flow strain not because of fraud, but due to avoidable compliance mistakes.\n\nUnderstanding common tax errors can help your business remain compliant, reduce risk, and improve financial stability.',
    sections: [
      {
        title: '1. Late or Non-Filing of Tax Returns',
        content: 'Failing to file VAT, PAYE, or Corporation Tax on time attracts penalties and daily interest from KRA.',
        impact: '• Accumulating fines\n• Increased audit risk\n• Business cash flow pressure',
        solution: 'Create a tax compliance calendar and automate reminders or outsource filing to professionals.',
      },
      {
        title: '2. Mixing Personal and Business Finances',
        content: 'Many SMEs use one account for both personal and business expenses, making it difficult to track taxable income accurately.',
        impact: '• Inaccurate financial statements\n• Disallowed expenses during audits',
        solution: 'Maintain separate bank accounts and clearly classify all transactions.',
      },
      {
        title: '3. Poor Record Keeping',
        content: 'Missing invoices, receipts, or unsupported expenses weaken your tax position.',
        impact: '• Disallowed deductions\n• Difficulty defending tax positions',
        solution: 'Adopt accounting software and maintain digital records for at least seven years.',
      },
      {
        title: '4. Misunderstanding Allowable Deductions',
        content: 'Some SMEs overclaim deductions while others fail to claim legitimate expenses.',
        impact: '• Penalties for overclaiming\n• Higher tax liability for underclaiming',
        solution: 'Seek professional tax advice to ensure deductions comply with Kenyan tax laws.',
      },
      {
        title: '5. Ignoring Withholding Tax Obligations',
        content: 'Failure to deduct and remit withholding tax transfers the liability to the business.',
        solution: 'Understand applicable rates and remit promptly to avoid penalties.',
      },
    ],
    conclusion: 'Proactive tax compliance is significantly cheaper than resolving penalties and disputes.',
    cta: {
      text: 'Need help with tax compliance?',
      link: '/contact',
      buttonText: 'Talk to a Tax Advisor at FBC',
    },
  },
  {
    id: 'audit-preparation',
    title: 'How to Prepare for Financial Audits: A Practical Guide for Kenyan Businesses',
    metaTitle: 'How to Prepare for Financial Audits in Kenya | FBC',
    metaDescription: 'Learn how to prepare for financial audits in Kenya, reduce compliance risks, and improve investor confidence with this practical guide.',
    category: 'Audit Preparation',
    introduction: 'Financial audits are no longer limited to large corporations. SMEs face audits from regulators, lenders, and investors as part of compliance and due diligence.\n\nProper preparation reduces stress and improves credibility.',
    sections: [
      {
        title: '1. Maintain Accurate Financial Statements',
        content: 'Ensure the following are current and reconciled:\n• Income Statement\n• Balance Sheet\n• Cash Flow Statement\n\nDiscrepancies raise audit red flags.',
      },
      {
        title: '2. Strengthen Internal Controls',
        content: 'Auditors assess how transactions are approved and recorded.',
        solution: 'Key controls include:\n• Segregation of duties\n• Authorization procedures\n• Secure access to systems',
      },
      {
        title: '3. Reconcile Tax and Accounting Records',
        content: 'Differences between tax filings and financial statements are a major audit concern.',
        tip: 'Regularly reconcile VAT, PAYE, and withholding tax.',
      },
      {
        title: '4. Organize Supporting Documentation',
        content: 'Auditors commonly request:\n• Contracts\n• Bank statements\n• Invoices\n• Payroll records\n\nHaving these ready accelerates the audit process.',
      },
      {
        title: '5. Conduct a Pre-Audit Review',
        content: 'A pre-audit review helps identify gaps before formal audits begin.',
      },
    ],
    conclusion: 'Audit readiness improves compliance, investor confidence, and operational discipline.',
    cta: {
      text: 'Preparing for an audit?',
      link: '/contact',
      buttonText: 'Schedule a Pre-Audit Review with FBC',
    },
  },
  {
    id: 'financial-planning',
    title: 'Financial Planning for Growing Businesses: A Strategic Guide',
    metaTitle: 'Financial Planning for Growing Businesses | FBC',
    metaDescription: 'Discover how effective financial planning helps growing businesses manage cash flow, reduce risk, and achieve sustainable growth.',
    category: 'Financial Planning',
    introduction: 'Growth is a positive milestone—but without financial planning, it can expose businesses to cash shortages, compliance risks, and poor decisions.\n\nStrategic planning ensures growth is sustainable.',
    sections: [
      {
        title: '1. Forecast Cash Flow',
        content: 'Growth often increases expenses before revenue stabilizes.',
        solution: 'Focus on:\n• Payroll\n• Supplier payments\n• Tax obligations\n\nCash flow forecasting prevents operational disruptions.',
      },
      {
        title: '2. Budget for Expansion',
        content: 'Plan for:\n• Staffing\n• Technology upgrades\n• Compliance costs\n• Marketing investments\n\nGrowth should be intentional and measurable.',
      },
      {
        title: '3. Choose the Right Financing Structure',
        content: 'Understand the implications of:\n• Loans\n• Equity financing\n• Retained earnings\n\nEach option affects ownership and long-term stability.',
      },
      {
        title: '4. Improve Financial Reporting',
        content: 'Accurate and timely financial data supports informed decision-making.\n\nGrowth demands data-driven leadership, not intuition.',
      },
      {
        title: '5. Plan for Tax Efficiency',
        content: 'Expansion may push businesses into higher tax brackets.\n\nStrategic planning helps manage tax exposure legally.',
      },
    ],
    conclusion: 'Sustainable growth is built on structure, discipline, and strategic foresight.',
    cta: {
      text: 'Planning your next growth phase?',
      link: '/contact',
      buttonText: 'Talk to a Financial Planning Expert at FBC',
    },
  },
  {
    id: 'types-of-taxes',
    title: 'Types of Taxes in Kenya: A Comprehensive Guide by KRA',
    metaTitle: 'Types of Taxes in Kenya: A Comprehensive Guide by KRA | FBC',
    metaDescription: 'Understanding the different types of taxes in Kenya is essential for individuals, businesses, and investors to remain compliant with the law and avoid unnecessary penalties.',
    category: 'Tax Compliance',
    introduction: 'Understanding the different types of taxes in Kenya is essential for individuals, businesses, and investors to remain compliant with the law and avoid unnecessary penalties. The Kenya Revenue Authority (KRA) is mandated to assess, collect, and account for government revenue in accordance with various tax laws. This article provides a clear overview of the main taxes administered by KRA and who they apply to.',
    sections: [
      {
        title: '1. Income Tax',
        content: 'Income Tax is charged on income earned by individuals and businesses in Kenya under the Income Tax Act (Cap 470).',
        solution: 'Applies to:\n• Employment income (PAYE)\n• Business and professional income\n• Rental income\n• Investment income\n\nKey compliance points:\n• Individuals and companies must file annual returns\n• Employers must deduct and remit PAYE monthly\n• Penalties apply for late filing and underpayment',
      },
      {
        title: '2. Pay As You Earn (PAYE)',
        content: 'PAYE is a form of Income Tax deducted by employers from employees\' salaries.',
        solution: 'Employer obligations include:\n• Accurate payroll computation\n• Monthly remittance to KRA\n• Filing PAYE returns by the 9th of the following month\n\nFailure to comply attracts penalties and interest.',
      },
      {
        title: '3. Value Added Tax (VAT)',
        content: 'VAT is charged on the supply of taxable goods and services in Kenya under the VAT Act, 2013.',
        solution: 'Key features:\n• Registration threshold: KES 5 million annual turnover\n• Standard rate: 16%\n• Monthly VAT returns are mandatory\n• Use of eTIMS-compliant invoices is required',
      },
      {
        title: '4. Withholding Tax',
        content: 'Withholding Tax is deducted at source when certain payments are made, such as professional services, management fees, rent, royalties and interest.',
        solution: 'The tax withheld is remitted to KRA and may be used as a tax credit by the recipient.',
      },
      {
        title: '5. Turnover Tax (TOT)',
        content: 'Turnover Tax applies to small businesses with annual turnover between KES 1 million and KES 25 million.',
        solution: 'Key points:\n• Calculated as a percentage of gross sales\n• Paid monthly\n• Simplified compliance compared to Income Tax',
      },
      {
        title: '6. Capital Gains Tax (CGT)',
        content: 'CGT is charged on gains arising from the transfer of property or shares.',
        solution: 'Rate: 15% of the net gain\nApplies to:\n• Sale of land and buildings\n• Transfer of company shares',
      },
      {
        title: '7. Excise Duty',
        content: 'Excise Duty applies to specific goods and services such as alcoholic beverages, tobacco, fuel, and airtime and data services.',
        solution: 'It is governed by the Excise Duty Act.',
      },
      {
        title: '8. Customs & Import Duty',
        content: 'Charged on imported goods under the East African Community Customs Management Act (EACCMA).',
        solution: 'Rates depend on:\n• Product classification\n• Country of origin\n• Applicable exemptions',
      },
    ],
    conclusion: 'Understanding Kenya\'s tax structure helps taxpayers meet their obligations and make informed financial decisions. Proactive compliance not only avoids penalties but also supports business sustainability.',
    cta: {
      text: 'How Financial Beacon Consulting Helps:',
      link: '/contact',
      buttonText: 'FBC assists individuals and businesses with tax planning, compliance reviews, and advisory services tailored to Kenyan tax laws.',
    },
  },
  {
    id: 'tax-procedures-act',
    title: 'The Tax Procedures Act (Kenya): Key Compliance Obligations Explained',
    metaTitle: 'The Tax Procedures Act (Kenya): Key Compliance Obligations Explained | FBC',
    metaDescription: 'The Tax Procedures Act (TPA) provides the framework for tax administration in Kenya. Understanding this Act is critical for every taxpayer registered with KRA.',
    category: 'Tax Compliance',
    introduction: 'The Tax Procedures Act (TPA) provides the framework for tax administration in Kenya. It governs how taxes are assessed, collected, enforced, and disputed. Understanding this Act is critical for every taxpayer registered with KRA.',
    sections: [
      {
        title: 'Purpose of the Tax Procedures Act',
        content: 'The Act aims to:\n• Harmonize tax administration\n• Promote voluntary compliance\n• Provide enforcement mechanisms for KRA',
      },
      {
        title: '1. Taxpayer Registration',
        content: 'Every person required to pay tax must register with KRA, maintain updated taxpayer details, and deregister upon cessation of business.',
        impact: 'Failure to register is an offence under the Act.',
      },
      {
        title: '2. Filing of Tax Returns',
        content: 'Taxpayers must file accurate returns by the prescribed deadlines, submit nil returns where applicable, and maintain supporting documentation.',
        impact: 'Late filing attracts penalties even where no tax is payable.',
      },
      {
        title: '3. Record Keeping',
        content: 'Taxpayers are required to keep proper records for at least five years, maintain documents supporting income and expenses, and produce records upon request by KRA.',
        impact: 'Poor record keeping is a common cause of tax disputes.',
      },
      {
        title: '4. Assessments and Audits',
        content: 'KRA has the power to issue additional assessments, conduct tax audits and investigations, and adjust declared income where discrepancies exist.',
      },
      {
        title: '5. Objections and Appeals',
        content: 'If a taxpayer disagrees with an assessment, an objection must be lodged within 30 days with supporting documents provided.',
        solution: 'Appeals may proceed to the Tax Appeals Tribunal',
      },
      {
        title: '6. Penalties and Interest',
        content: 'Common penalties include late filing penalties, late payment interest, and understatement penalties.',
        impact: 'The Act provides strict enforcement mechanisms.',
      },
    ],
    conclusion: 'The Tax Procedures Act underpins Kenya\'s tax compliance environment. Understanding its provisions helps taxpayers avoid enforcement actions and manage disputes effectively.',
    cta: {
      text: 'How Financial Beacon Consulting Helps:',
      link: '/contact',
      buttonText: 'FBC supports clients through compliance reviews, audit support, and objection management to reduce exposure to penalties.',
    },
  },
  {
    id: 'vat-compliance',
    title: 'VAT Compliance in Kenya: Requirements Under the VAT Act, 2013',
    metaTitle: 'VAT Compliance in Kenya: Requirements Under the VAT Act, 2013 | FBC',
    metaDescription: 'Value Added Tax (VAT) is one of the most significant sources of revenue in Kenya. Compliance with the VAT Act, 2013 is mandatory for registered businesses.',
    category: 'Tax Compliance',
    introduction: 'Value Added Tax (VAT) is one of the most significant sources of revenue in Kenya. Compliance with the VAT Act, 2013 is mandatory for registered businesses and is closely monitored by KRA.',
    sections: [
      {
        title: 'VAT Registration',
        content: 'A business must register for VAT if annual taxable turnover exceeds KES 5 million or it voluntarily chooses to register.',
        impact: 'Operating without registration is an offence.',
      },
      {
        title: 'VAT Invoicing and eTIMS',
        content: 'VAT-registered businesses must issue tax invoices for taxable supplies, use eTIMS-compliant invoicing systems, and maintain proper sales and purchase records.',
      },
      {
        title: 'Filing VAT Returns',
        content: 'VAT returns are filed monthly. Deadline: On or before the 20th day of the following month. Returns must reflect accurate input and output tax.',
      },
      {
        title: 'Zero-Rated vs Exempt Supplies',
        content: 'Understanding the difference is critical:',
        solution: 'Zero-rated: VAT charged at 0%, input tax is claimable\nExempt: No VAT charged, input tax not claimable\n\nMisclassification often leads to penalties.',
      },
      {
        title: 'VAT Refunds',
        content: 'VAT refunds may arise from excess input tax or zero-rated supplies.',
        tip: 'Refund claims are subject to audit and verification by KRA.',
      },
      {
        title: 'Penalties for Non-Compliance',
        content: 'Non-compliance may result in late filing penalties, interest on unpaid VAT, disallowed input tax, and audits and enforcement actions.',
      },
    ],
    conclusion: 'VAT compliance requires accuracy, consistency, and proper systems. Businesses that proactively manage VAT obligations significantly reduce audit risks.',
    cta: {
      text: 'How Financial Beacon Consulting Helps:',
      link: '/contact',
      buttonText: 'FBC provides VAT compliance reviews, eTIMS advisory, and audit support to ensure businesses meet statutory obligations.',
    },
  },
  {
    id: 'income-tax-explained',
    title: 'Income Tax in Kenya Explained: A Guide Under the Income Tax Act (Cap 470)',
    metaTitle: 'Income Tax in Kenya Explained: A Guide Under the Income Tax Act | FBC',
    metaDescription: 'Income Tax is one of the primary taxes administered by KRA. Understanding how Income Tax works is essential for compliance and effective financial planning.',
    category: 'Tax Compliance',
    introduction: 'Income Tax is one of the primary taxes administered by the Kenya Revenue Authority (KRA) and is governed by the Income Tax Act (Cap 470). It applies to income earned by individuals, partnerships, and companies. Understanding how Income Tax works is essential for compliance and effective financial planning.',
    sections: [
      {
        title: 'Categories of Income Subject to Tax',
        content: '1. Employment Income\nThis includes salaries and wages, allowances and bonuses, and benefits in kind (such as company vehicles or housing). Employment income is taxed through the Pay As You Earn (PAYE) system.',
      },
      {
        title: '2. Business and Professional Income',
        content: 'Applies to sole proprietors, partnerships, and professionals (consultants, lawyers, accountants).',
        solution: 'Tax is computed on net profit after allowable deductions.',
      },
      {
        title: '3. Rental Income',
        content: 'Rental income may be taxed under Residential Rental Income Tax (simplified regime), or Normal Income Tax for commercial properties.',
      },
      {
        title: '4. Investment Income',
        content: 'Includes interest, dividends, and royalties. Often subject to withholding tax at source.',
      },
      {
        title: 'Allowable Deductions',
        content: 'Taxpayers may deduct expenses that are wholly and exclusively incurred in the production of income and properly documented.',
        solution: 'Examples include rent, salaries, utilities, and depreciation (capital allowances).',
      },
      {
        title: 'Filing and Payment Obligations',
        content: 'Annual income tax returns must be filed. Advance tax may apply to businesses. Instalment tax applies to companies.',
      },
      {
        title: 'Penalties for Non-Compliance',
        content: 'Late filing penalties, interest on unpaid tax, and additional assessments and audits may apply.',
      },
    ],
    conclusion: 'Income Tax compliance requires accurate reporting, proper records, and timely filing. Understanding the Income Tax Act helps taxpayers avoid disputes and penalties.',
    cta: {
      text: 'How Financial Beacon Consulting Helps:',
      link: '/contact',
      buttonText: 'FBC assists clients with income tax planning, returns preparation, and compliance reviews.',
    },
  },
  {
    id: 'paye-kenya',
    title: 'PAYE in Kenya: Employer Obligations, Rates, and Compliance Risks',
    metaTitle: 'PAYE in Kenya: Employer Obligations, Rates, and Compliance Risks | FBC',
    metaDescription: 'Pay As You Earn (PAYE) is a method of collecting Income Tax from employment income. Employers act as tax agents for KRA and are legally responsible for deducting and remitting PAYE correctly.',
    category: 'Tax Compliance',
    introduction: 'Pay As You Earn (PAYE) is a method of collecting Income Tax from employment income. Employers act as tax agents for KRA and are legally responsible for deducting and remitting PAYE correctly.',
    sections: [
      {
        title: 'Who Is Required to Operate PAYE?',
        content: 'Any employer who pays salaries, wages, allowances, or benefits in kind must deduct PAYE where applicable.',
      },
      {
        title: 'PAYE Rates and Reliefs',
        content: 'PAYE is calculated using graduated tax bands, personal reliefs, and insurance and pension reliefs (where applicable).',
        tip: 'Accurate payroll computation is essential.',
      },
      {
        title: 'Employer Responsibilities',
        content: 'Employers must register for PAYE, deduct correct amounts, remit PAYE by the 9th day of the following month, file monthly PAYE returns, and issue payslips and P9 forms.',
      },
      {
        title: 'Common PAYE Compliance Mistakes',
        content: 'Common mistakes include incorrect treatment of allowances, failure to tax benefits in kind, late remittance, and payroll system errors.',
      },
      {
        title: 'Penalties and Enforcement',
        content: 'Non-compliance may result in penalties for late filing, interest on unpaid tax, and payroll audits by KRA.',
      },
    ],
    conclusion: 'PAYE compliance is a critical employer obligation. Errors can result in significant financial exposure and reputational risk.',
    cta: {
      text: 'How Financial Beacon Consulting Helps:',
      link: '/contact',
      buttonText: 'FBC supports employers with payroll reviews, PAYE compliance audits, and advisory services.',
    },
  },
  {
    id: 'withholding-tax',
    title: 'Withholding Tax in Kenya: What Businesses and Professionals Need to Know',
    metaTitle: 'Withholding Tax in Kenya: What Businesses and Professionals Need to Know | FBC',
    metaDescription: 'Withholding Tax is a tax deducted at source when certain payments are made. It ensures early tax collection and improves compliance.',
    category: 'Tax Compliance',
    introduction: 'Withholding Tax is a tax deducted at source when certain payments are made. It ensures early tax collection and improves compliance. Both the payer and recipient must understand their obligations to avoid disputes.',
    sections: [
      {
        title: 'Payments Subject to Withholding Tax',
        content: 'Common payments include professional and consultancy fees, management and training fees, rent, interest and dividends, and royalties.',
        tip: 'Rates vary depending on residency status.',
      },
      {
        title: 'Who Is Responsible?',
        content: 'The payer deducts and remits the tax. The recipient claims the tax as a credit (where applicable).',
        impact: 'Failure to withhold makes the payer liable for the tax.',
      },
      {
        title: 'Filing and Remittance',
        content: 'Withholding tax must be remitted monthly. Payment is due by the 20th day of the following month. Returns must be filed via iTax.',
      },
      {
        title: 'Withholding Tax Certificates',
        content: 'Payers must issue certificates to recipients to enable them to claim tax credits when filing annual returns.',
      },
      {
        title: 'Common Compliance Risks',
        content: 'Common risks include applying wrong tax rates, failure to withhold, poor documentation, and late remittance.',
      },
    ],
    conclusion: 'Withholding Tax compliance is often misunderstood but heavily enforced by KRA. Proper systems and controls reduce exposure to penalties.',
    cta: {
      text: 'How Financial Beacon Consulting Helps:',
      link: '/contact',
      buttonText: 'FBC provides withholding tax advisory, compliance checks, and support during audits.',
    },
  },
  {
    id: 'turnover-tax',
    title: 'Turnover Tax (TOT) for SMEs in Kenya: A Simple Compliance Guide',
    metaTitle: 'Turnover Tax (TOT) for SMEs in Kenya: A Simple Compliance Guide | FBC',
    metaDescription: 'Turnover Tax (TOT) is a simplified tax regime introduced by KRA to ease tax compliance for Small and Medium Enterprises (SMEs).',
    category: 'Tax Compliance',
    introduction: 'Turnover Tax (TOT) is a simplified tax regime introduced by the Kenya Revenue Authority (KRA) to ease tax compliance for Small and Medium Enterprises (SMEs). It is designed for businesses with relatively low turnover and is charged on gross sales rather than net profit.',
    sections: [
      {
        title: 'What Is Turnover Tax?',
        content: 'Turnover Tax is a tax charged on the gross business income of eligible businesses, regardless of expenses incurred. It is governed under the Income Tax Act (Cap 470) and administered by KRA.',
      },
      {
        title: 'Who Is Eligible for Turnover Tax?',
        content: 'A business qualifies for TOT if annual turnover is between KES 1 million and KES 25 million, the business is not registered for VAT, and the business is not engaged in excluded activities such as professional services.',
        solution: 'Excluded from TOT:\n• Incorporated companies\n• Professionals such as lawyers, doctors, accountants, and consultants\n• Rental income and employment income',
      },
      {
        title: 'Turnover Tax Rate',
        content: 'Rate: 3% of gross turnover. Tax is payable regardless of profitability.',
      },
      {
        title: 'Filing and Payment Obligations',
        content: 'TOT returns are filed monthly. Deadline: On or before the 20th day of the following month. Payment is made via the iTax system.',
        impact: 'Failure to file attracts penalties even if no sales were made.',
      },
      {
        title: 'Advantages of Turnover Tax',
        content: 'Simplified compliance, no need to compute allowable expenses, and predictable tax liability.',
      },
      {
        title: 'Challenges and Risks',
        content: 'Tax payable even when business makes a loss. Incorrect registration may lead to penalties. Businesses may outgrow the TOT threshold without proper migration.',
      },
      {
        title: 'Transitioning Out of TOT',
        content: 'When turnover exceeds the threshold or business circumstances change, the taxpayer must deregister from TOT and register under the appropriate tax regime (Income Tax and/or VAT).',
      },
    ],
    conclusion: 'Turnover Tax provides a simplified compliance framework for SMEs, but it may not be suitable for all businesses. Proper evaluation ensures optimal tax treatment.',
    cta: {
      text: 'How Financial Beacon Consulting Helps:',
      link: '/contact',
      buttonText: 'FBC assists SMEs in assessing eligibility, filing returns, and transitioning between tax regimes smoothly.',
    },
  },
  {
    id: 'capital-gains-tax',
    title: 'Capital Gains Tax in Kenya: What Property and Shareholders Must Know',
    metaTitle: 'Capital Gains Tax in Kenya: What Property and Shareholders Must Know | FBC',
    metaDescription: 'Capital Gains Tax (CGT) is charged on gains realized from the transfer of property or shares in Kenya. It applies to individuals and businesses.',
    category: 'Tax Compliance',
    introduction: 'Capital Gains Tax (CGT) is charged on gains realized from the transfer of property or shares in Kenya. It applies to individuals and businesses and is an important consideration in property transactions and corporate restructuring.',
    sections: [
      {
        title: 'What Is Capital Gains Tax?',
        content: 'Capital Gains Tax is imposed on the net gain realized from the disposal of land and buildings situated in Kenya, and shares of Kenyan companies. It is governed by the Income Tax Act (Cap 470).',
      },
      {
        title: 'Capital Gains Tax Rate',
        content: 'Rate: 15% of the net gain. Calculated as the difference between transfer value, and adjusted cost (purchase price plus incidental costs).',
      },
      {
        title: 'Transactions Subject to CGT',
        content: 'CGT applies to sale of property, exchange of property, transfer of shares, and gift transfers (subject to exemptions).',
      },
      {
        title: 'Exemptions from Capital Gains Tax',
        content: 'Certain transactions are exempt, including transfer of property between spouses, transfer upon death, government compulsory acquisition, and transfer of principal private residence (subject to conditions).',
      },
      {
        title: 'Filing and Payment of CGT',
        content: 'CGT is filed and paid on or before transfer. Payment is required before registration of property transfer. Returns are filed via iTax.',
      },
      {
        title: 'CGT on Shares',
        content: 'CGT applies to private company share transfers and sale of shares outside the Nairobi Securities Exchange (NSE).',
        tip: 'Listed shares traded on the NSE are currently exempt.',
      },
      {
        title: 'Penalties for Non-Compliance',
        content: 'Failure to comply may result in penalties and interest, delays in property registration, and additional tax assessments.',
      },
    ],
    conclusion: 'Capital Gains Tax is a critical aspect of property and share transactions. Early tax planning helps taxpayers manage liabilities and avoid transaction delays.',
    cta: {
      text: 'How Financial Beacon Consulting Helps:',
      link: '/contact',
      buttonText: 'FBC provides CGT computation, advisory, and compliance support during property and share transfers.',
    },
  },
  {
    id: 'kra-audits',
    title: 'KRA Audits and Investigations: What Kenyan Taxpayers Should Expect',
    metaTitle: 'KRA Audits and Investigations: What Kenyan Taxpayers Should Expect | FBC',
    metaDescription: 'The Kenya Revenue Authority (KRA) regularly conducts tax audits and investigations to ensure compliance with tax laws. Understanding how KRA audits work helps taxpayers prepare adequately.',
    category: 'Audit Preparation',
    introduction: 'The Kenya Revenue Authority (KRA) regularly conducts tax audits and investigations to ensure compliance with tax laws. These audits can be stressful for individuals and businesses, particularly where records are incomplete or tax positions are unclear. Understanding how KRA audits work helps taxpayers prepare adequately and manage risk.',
    sections: [
      {
        title: 'What Is a KRA Tax Audit?',
        content: 'A tax audit is a review conducted by KRA to verify accuracy of tax returns filed, completeness of income declarations, proper application of tax laws, and adequacy of records maintained. Audits may cover one or several tax heads.',
      },
      {
        title: 'Types of KRA Audits',
        content: '1. Desk Audits\nThese are conducted remotely and may involve requests for supporting documents, clarifications on filed returns, and reconciliations of declared figures.',
      },
      {
        title: '2. Field Audits',
        content: 'KRA officers may visit business premises to review physical records, inspect operations, and interview management or staff.',
      },
      {
        title: '3. Investigations',
        content: 'Investigations are more detailed and may arise from suspected tax evasion, third-party information, or data inconsistencies. They often involve multiple tax periods.',
      },
      {
        title: 'Common Triggers for Audits',
        content: 'KRA audits may be triggered by persistent nil or low tax declarations, inconsistent VAT or PAYE filings, large refund claims, mismatch between declared income and third-party data, or failure to adopt eTIMS.',
      },
      {
        title: 'Taxpayer Rights and Obligations',
        content: 'During an audit, taxpayers are entitled to written notification, reasonable time to provide documents, and fair treatment and due process.',
        solution: 'Taxpayers are obligated to cooperate with auditors, provide accurate records, and respond within stipulated timelines.',
      },
      {
        title: 'Outcomes of an Audit',
        content: 'Audit outcomes may include no adjustment, additional tax assessment, penalties and interest, or enforcement actions where non-compliance is severe.',
      },
      {
        title: 'Managing Audit Risk',
        content: 'Effective risk management includes proper record keeping, regular internal tax reviews, timely filing and payment, and seeking professional advisory support.',
      },
    ],
    conclusion: 'KRA audits are a normal part of tax administration. Prepared taxpayers are better positioned to manage audits efficiently and minimize exposure.',
    cta: {
      text: 'How Financial Beacon Consulting Helps:',
      link: '/contact',
      buttonText: 'FBC supports clients through audit preparation, document reviews, representation during audits, and dispute resolution.',
    },
  },
  {
    id: 'monthly-compliance-checklist',
    title: 'Monthly Tax Compliance Checklist for Kenyan Businesses',
    metaTitle: 'Monthly Tax Compliance Checklist for Kenyan Businesses | FBC',
    metaDescription: 'Consistent monthly tax compliance is essential for businesses operating in Kenya. This checklist provides a practical guide to help businesses stay compliant.',
    category: 'Tax Compliance',
    introduction: 'Consistent monthly tax compliance is essential for businesses operating in Kenya. Failure to meet filing and payment obligations can result in penalties, interest, and audits. This checklist provides a practical guide to help businesses stay compliant.',
    sections: [
      {
        title: '1. PAYE Compliance',
        content: 'Compute accurate payroll, deduct PAYE from employees, remit PAYE by the 9th of the following month, and file monthly PAYE returns.',
      },
      {
        title: '2. Value Added Tax (VAT)',
        content: 'Issue eTIMS-compliant tax invoices, reconcile sales and purchases, file VAT returns by the 20th of the following month, and pay VAT due.',
      },
      {
        title: '3. Withholding Tax',
        content: 'Identify payments subject to withholding, apply correct tax rates, remit withholding tax by the 20th of the following month, and issue withholding tax certificates.',
      },
      {
        title: '4. Turnover Tax (Where Applicable)',
        content: 'Confirm eligibility for TOT, compute tax on gross turnover, file TOT returns monthly, and pay tax by the due date.',
      },
      {
        title: '5. Record Keeping',
        content: 'Maintain invoices, receipts, and contracts, update accounting records, and store documents securely for at least five years.',
      },
      {
        title: '6. Reconciliation and Review',
        content: 'Reconcile iTax ledger, review tax positions, and identify potential risks early.',
      },
      {
        title: '7. Non-KRA Statutory Deductions (Mentioned for Awareness)',
        content: 'While not administered by KRA, ensure compliance with NSSF, NHIF, and Housing Levy (where applicable).',
      },
      {
        title: 'Benefits of Using a Compliance Checklist',
        content: 'Reduces penalties and interest, improves audit readiness, enhances financial control, and supports informed decision-making.',
      },
    ],
    conclusion: 'A structured compliance approach ensures businesses remain aligned with statutory requirements and reduces operational risk.',
    cta: {
      text: 'How Financial Beacon Consulting Helps:',
      link: '/contact',
      buttonText: 'FBC provides ongoing compliance support, monthly tax reviews, and advisory services tailored to business needs.',
    },
  },
]

export default function KnowledgeHubSection() {
  const [isVisible, setIsVisible] = useState(true) // Start visible for mobile compatibility
  const [expandedPost, setExpandedPost] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const sectionRef = useRef<HTMLElement>(null)

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))]

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.introduction.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.metaDescription.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  useEffect(() => {
    // Set visible immediately for mobile compatibility
    setIsVisible(true)
    
    // Also use IntersectionObserver for animation on desktop
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { 
        threshold: 0.01, // Lower threshold for mobile
        rootMargin: '50px' // Add margin to trigger earlier
      }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const togglePost = (postId: string) => {
    setExpandedPost(expandedPost === postId ? null : postId)
  }

  // Generate Article schemas for all blog posts
  useEffect(() => {
    if (typeof window === 'undefined') return

    blogPosts.forEach((post) => {
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.metaDescription,
        author: {
          '@type': 'Organization',
          name: 'Financial Beacon Consulting',
          url: 'https://financialbeaconconsulting.co.ke',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Financial Beacon Consulting',
          logo: {
            '@type': 'ImageObject',
            url: 'https://financialbeaconconsulting.co.ke/logo/logo.png',
          },
        },
        datePublished: new Date().toISOString(),
        dateModified: new Date().toISOString(),
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://financialbeaconconsulting.co.ke/knowledge-hub#${post.id}`,
        },
        articleSection: post.category,
        keywords: post.metaDescription,
        inLanguage: 'en-KE',
      }

      const scriptId = `article-schema-${post.id}`
      if (document.getElementById(scriptId)) {
        return // Already added
      }

      const script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      script.text = JSON.stringify(schema)
      document.head.appendChild(script)
    })
  }, [])

  return (
    <section
        ref={sectionRef}
        id="knowledge-hub"
        className="py-20 bg-gradient-to-br from-white via-light-grey to-white relative overflow-hidden"
      >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-deep-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-emerald/10 text-emerald rounded-full text-sm font-semibold">
              Knowledge Hub
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-deep-blue">
            Expert Financial Insights
          </h1>
          <div className="w-24 h-1 bg-emerald mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto px-4">
            Practical guides and expert advice to help your business navigate tax compliance, audits, and financial planning in Kenya.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search articles by title, topic, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 pl-12 sm:pl-14 bg-white border-2 border-emerald/20 rounded-xl focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20 text-deep-blue placeholder:text-text-secondary transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
              />
              <svg
                className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-deep-blue transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-emerald text-white shadow-lg shadow-emerald/30'
                    : 'bg-white text-deep-blue border-2 border-emerald/20 hover:border-emerald/40 hover:bg-emerald/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          {filteredPosts.length !== blogPosts.length && filteredPosts.length > 0 && (
            <div className="text-center mt-4">
              <p className="text-text-secondary text-sm sm:text-base">
                Showing <span className="font-semibold text-emerald">{filteredPosts.length}</span> of{' '}
                <span className="font-semibold text-deep-blue">{blogPosts.length}</span> articles
              </p>
            </div>
          )}
        </div>

        {/* Blog Posts */}
        <div className="space-y-6 sm:space-y-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border-2 border-emerald/20">
              <svg className="w-16 h-16 text-emerald/50 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xl font-semibold text-deep-blue mb-2">No articles found</p>
              <p className="text-text-secondary mb-4">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All')
                }}
                className="px-6 py-2 bg-emerald text-white rounded-lg hover:bg-emerald-dark transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            filteredPosts.map((post, index) => {
              const isExpanded = expandedPost === post.id
              return (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-emerald/10 hover:border-emerald/30 transform hover:-translate-y-1"
                >
                {/* Post Header */}
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-deep-blue mb-4 leading-tight">
                        {post.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mb-4">
                        <span className="flex items-center gap-2 px-3 py-1 bg-emerald/10 text-emerald rounded-full font-semibold">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                          </svg>
                          {post.category}
                        </span>
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          {post.sections.length} Key Points
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => togglePost(post.id)}
                      className="flex-shrink-0 w-12 h-12 bg-emerald/10 hover:bg-emerald text-emerald hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                      aria-label={isExpanded ? 'Collapse article' : 'Expand article'}
                    >
                      <svg
                        className={`w-6 h-6 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* Introduction */}
                  <div className="prose prose-lg max-w-none mb-6">
                    <p className="text-text-primary leading-relaxed whitespace-pre-line">
                      {post.introduction}
                    </p>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-8 space-y-8 animate-fade-in">
                      {post.sections.map((section, sectionIndex) => (
                        <div
                          key={sectionIndex}
                          className="border-l-4 border-emerald pl-6 py-4 bg-emerald/5 rounded-r-lg"
                        >
                          <h3 className="text-xl font-bold text-deep-blue mb-3">
                            {section.title}
                          </h3>
                          <p className="text-text-primary mb-4 leading-relaxed whitespace-pre-line">
                            {section.content}
                          </p>
                          {section.impact && (
                            <div className="bg-white/50 rounded-lg p-4 mb-4">
                              <h4 className="font-semibold text-deep-blue mb-2 flex items-center gap-2">
                                <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                Impact:
                              </h4>
                              <p className="text-text-secondary whitespace-pre-line">
                                {section.impact}
                              </p>
                            </div>
                          )}
                          {section.solution && (
                            <div className="bg-emerald/10 rounded-lg p-4 mb-4">
                              <h4 className="font-semibold text-emerald mb-2 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Solution:
                              </h4>
                              <p className="text-text-primary whitespace-pre-line">
                                {section.solution}
                              </p>
                            </div>
                          )}
                          {section.tip && (
                            <div className="bg-deep-blue/5 rounded-lg p-4">
                              <h4 className="font-semibold text-deep-blue mb-2 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Tip:
                              </h4>
                              <p className="text-text-primary">
                                {section.tip}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}

                      {/* Conclusion */}
                      <div className="bg-gradient-to-r from-deep-blue to-emerald rounded-xl p-6 text-white">
                        <p className="text-lg font-medium mb-4">
                          {post.conclusion}
                        </p>
                        <Link
                          href={post.cta.link}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald font-semibold rounded-lg hover:bg-emerald/10 hover:text-white transition-all duration-300 transform hover:scale-105"
                        >
                          <span>{post.cta.buttonText}</span>
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* CTA Button (when collapsed) */}
                  {!isExpanded && (
                    <div className="mt-6 pt-6 border-t border-emerald/10">
                      <Link
                        href={post.cta.link}
                        className="inline-flex items-center gap-2 text-emerald hover:text-emerald-dark font-semibold transition-colors duration-300"
                      >
                        <span>{post.cta.text}</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </article>
              )
            })
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-deep-blue to-emerald rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-4">
              Need Personalized Financial Advice?
            </h3>
            <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Our experts are ready to help you navigate tax compliance, prepare for audits, and plan for sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-emerald font-bold rounded-lg hover:bg-emerald/10 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="tel:+254754029431"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50"
              >
                Call: 0754029431
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
