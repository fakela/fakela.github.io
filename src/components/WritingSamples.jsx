import { useState } from 'react'

const samples = [
  // ── GlueOps / How-to guides ──────────────────────────────────────
  {
    company: 'GlueOps',
    category: 'How-to guides',
    title: 'Creating Your AWS Account for GlueOps',
    description: 'Step-by-step guide for setting up AWS accounts and service quotas for the platform.',
    context: 'Cloud infrastructure onboarding documentation',
    portfolioLink: '/portfolio/cloud-native-docs-glueops',
    pdf: '/downloads/pdf/Amazon Web Services (AWS) _ GlueOps.pdf',
    image: '/images/samples/glueops-aws.png'
  },
  {
    company: 'GlueOps',
    category: 'How-to guides',
    title: 'Deploy Your First App',
    description: 'Getting started guide for deploying applications on the GlueOps platform.',
    context: 'Centralised scattered GitHub information into one docs site',
    portfolioLink: '/portfolio/cloud-native-docs-glueops',
    pdf: '/downloads/pdf/Deploy Your First App _ GlueOps.pdf',
    image: '/images/samples/glueops-getting-started.png'
  },
  {
    company: 'GlueOps',
    category: 'How-to guides',
    title: 'Deployment Configurations',
    description: 'Reference for setting up deployment repository structure and configurations.',
    context: 'Unified deployment instructions across multiple platforms',
    portfolioLink: '/portfolio/cloud-native-docs-glueops',
    pdf: '/downloads/pdf/Deployment Configurations _ GlueOps.pdf',
    image: '/images/samples/glueops-deployment.png'
  },
  {
    company: 'GlueOps',
    category: 'How-to guides',
    title: 'Manage Environment Secrets',
    description: 'Guide for managing secrets and environment variables on the GlueOps platform.',
    context: 'Security and configuration documentation',
    portfolioLink: '/portfolio/cloud-native-docs-glueops',
    pdf: '/downloads/pdf/Manage Environment Secrets _ GlueOps.pdf',
    image: '/images/samples/glueops-secrets.png'
  },
  {
    company: 'GlueOps',
    category: 'How-to guides',
    title: 'Create GitHub App',
    description: 'Guide for creating and configuring a GitHub App for GlueOps integration.',
    context: 'Part of the platform setup documentation',
    portfolioLink: '/portfolio/cloud-native-docs-glueops',
    pdf: '/downloads/pdf/Create GitHub App _ GlueOps.pdf',
    image: '/images/samples/glueops-github-app.png'
  },
  {
    company: 'GlueOps',
    category: 'How-to guides',
    title: 'Create GitHub OAuth App',
    description: 'Guide for creating and configuring a GitHub OAuth App for GlueOps authentication.',
    context: 'Part of the platform setup documentation',
    portfolioLink: '/portfolio/cloud-native-docs-glueops',
    pdf: '/downloads/pdf/Create GitHub OAuth App _ GlueOps.pdf',
    image: '/images/samples/glueops-github-oauth.png'
  },
  {
    company: 'GlueOps',
    category: 'How-to guides',
    title: 'Captain Domains',
    description: 'Guide for configuring custom domains and DNS settings on the GlueOps platform.',
    context: 'Networking and domain configuration documentation',
    portfolioLink: '/portfolio/cloud-native-docs-glueops',
    pdf: '/downloads/pdf/Captain Domains _ GlueOps.pdf',
    image: '/images/samples/glueops-captain-domains.png'
  },

  // ── Bacalhau / How-to guides ─────────────────────────────────────
  {
    company: 'Bacalhau',
    category: 'How-to guides',
    title: 'Getting Started with Bacalhau',
    description: 'Developer onboarding guide for installing the CLI and running a first job.',
    context: 'Redesigned the onboarding path that helped grow users from 200 to 6K',
    portfolioLink: '/portfolio/documentation-acquisition-bacalhau',
    pdf: '/downloads/pdf/Getting Started with Bacalhau _ Bacalhau Docs.pdf',
    image: '/images/samples/bacalhau-getting-started.png'
  },
  {
    company: 'Bacalhau',
    category: 'How-to guides',
    title: 'Installation',
    description: 'Installation guide for the Bacalhau CLI and local environment setup.',
    context: 'Part of the Diátaxis-structured documentation for Bacalhau v1',
    portfolioLink: '/portfolio/documentation-acquisition-bacalhau',
    pdf: '/downloads/pdf/Installation.pdf',
    image: '/images/samples/bacalhau-installation.png'
  },
  {
    company: 'Bacalhau',
    category: 'How-to guides',
    title: 'Write a SpecConfig',
    description: 'Guide for writing job specification configurations on the distributed compute platform.',
    context: 'Part of the Diátaxis-structured documentation for Bacalhau v1',
    portfolioLink: '/portfolio/documentation-acquisition-bacalhau',
    pdf: '/downloads/pdf/SpecConfig.pdf',
    image: '/images/samples/bacalhau-specconfig.png'
  },
  {
    company: 'Bacalhau',
    category: 'How-to guides',
    title: 'Docker Workload Onboarding',
    description: 'Guide for running Docker containers as distributed compute jobs on Bacalhau.',
    context: 'Infrastructure documentation for the Bacalhau platform',
    portfolioLink: '/portfolio/documentation-acquisition-bacalhau',
    pdf: '/downloads/pdf/docker.pdf',
    image: '/images/samples/glueops-docker.png'
  },
  {
    company: 'Bacalhau',
    category: 'How-to guides',
    title: 'Reading Data from Multiple S3 Buckets',
    description: 'Guide for running distributed compute jobs across multiple S3 data sources.',
    context: 'Advanced how-to guide for Bacalhau data workflows',
    portfolioLink: '/portfolio/documentation-acquisition-bacalhau',
    pdf: '/downloads/pdf/Reading Data from Multiple S3 Buckets using Bacalhau _ Bacalhau Docs2.pdf',
    image: '/images/samples/bacalhau-s3-buckets.png'
  },
  {
    company: 'Bacalhau',
    category: 'How-to guides',
    title: 'Running WASM Workloads',
    description: 'Guide for running WebAssembly workloads on the Bacalhau distributed compute platform.',
    context: 'Advanced workload guide for Bacalhau v1',
    portfolioLink: '/portfolio/documentation-acquisition-bacalhau',
    pdf: '/downloads/pdf/WASM.pdf',
    image: '/images/samples/bacalhau-wasm.png'
  },
  {
    company: 'Bacalhau',
    category: 'How-to guides',
    title: 'Observability',
    description: 'Guide for monitoring and observing distributed compute jobs on Bacalhau.',
    context: 'Operations documentation for the Bacalhau platform',
    portfolioLink: '/portfolio/documentation-acquisition-bacalhau',
    pdf: '/downloads/pdf/Observability.pdf',
    image: '/images/samples/bacalhau-observability.png'
  },
  {
    company: 'Bacalhau',
    category: 'How-to guides',
    title: 'Architecture Overview',
    description: 'Conceptual documentation covering the architecture of the Bacalhau distributed compute platform.',
    context: 'Conceptual docs written as part of the Diátaxis-structured documentation system',
    portfolioLink: '/portfolio/documentation-acquisition-bacalhau',
    pdf: '/downloads/pdf/Architecture _ Bacalhau Docs.pdf',
    image: '/images/samples/bacalhau-architecture_tmp-01.png'
  },

  // ── Orbital / API references ─────────────────────────────────────
  {
    company: 'Orbital',
    category: 'API references',
    title: 'Generate Hosted Payment Links (HPP)',
    description: 'API endpoint documentation for generating hosted payment page deposit links.',
    context: 'Migrated from Postman into ReadMe as part of 40+ endpoint migration',
    portfolioLink: '/portfolio/rebuilding-orbital-docs',
    pdf: '/downloads/pdf/Generate Hosted Payment Links with Orbital HPP.pdf',
    image: '/images/samples/orbital-generate-deposit-link.png'
  },
  {
    company: 'Orbital',
    category: 'API references',
    title: 'Verify Webhook Signatures',
    description: 'Step-by-step guide for verifying webhook payload signatures for payment notifications.',
    context: 'Wrote to support merchant integration security',
    portfolioLink: '/portfolio/rebuilding-orbital-docs',
    pdf: '/downloads/pdf/Verifying Webhook Signatures.pdf',
    image: '/images/samples/orbital-verify-webhooks.png'
  },
  {
    company: 'Orbital',
    category: 'API references',
    title: 'Generate EPP Signature',
    description: 'API reference for generating unique signatures for Embedded Payment Page integration.',
    context: 'Part of the Orbital API reference documentation',
    portfolioLink: '/portfolio/rebuilding-orbital-docs',
    pdf: '/downloads/pdf/Generate EPP Signature.pdf',
    image: '/images/samples/orbital-epp-signature.png'
  },
  {
    company: 'Orbital',
    category: 'API references',
    title: 'How to Create API Keys',
    description: 'Guide for creating and managing API keys for authentication.',
    context: 'Part of the merchant onboarding documentation',
    portfolioLink: '/portfolio/rebuilding-orbital-docs',
    pdf: '/downloads/pdf/How to Create API Keys.pdf',
    image: '/images/samples/orbital-api-keys.png'
  },
  {
    company: 'Orbital',
    category: 'API references',
    title: 'Get Payments by Date',
    description: 'API endpoint documentation for retrieving payment records by date range.',
    context: 'Part of the Orbital API reference documentation',
    portfolioLink: '/portfolio/rebuilding-orbital-docs',
    pdf: '/downloads/pdf/Get Payments by Date.pdf',
    image: '/images/samples/orbital-payments-by-date.png'
  },
  {
    company: 'Orbital',
    category: 'API references',
    title: 'Create Crypto Deposit Invoices via API',
    description: 'API documentation for creating cryptocurrency deposit invoices programmatically.',
    context: 'Part of the Orbital API reference documentation',
    portfolioLink: '/portfolio/rebuilding-orbital-docs',
    pdf: '/downloads/pdf/Create Crypto Deposit Invoices via API.pdf',
    image: '/images/samples/orbital-crypto-deposit.png'
  },

  // ── Orbital / Knowledge base ─────────────────────────────────────
  {
    company: 'Orbital',
    category: 'Knowledge base',
    title: 'How to Approve and Reject Transactions',
    description: 'Guide for reviewing and managing transaction approvals in the Client Portal.',
    context: 'Client Portal knowledge base article',
    portfolioLink: '/portfolio/rebuilding-orbital-docs',
    pdf: '/downloads/pdf/How to Approve and Reject Transactions.pdf',
    image: '/images/samples/orbital-approve-transactions.png'
  },
  {
    company: 'Orbital',
    category: 'Knowledge base',
    title: 'How to Send a Single Manual Payout',
    description: 'Step-by-step guide for sending manual payouts via the Client Portal.',
    context: 'Client Portal knowledge base article',
    portfolioLink: '/portfolio/rebuilding-orbital-docs',
    pdf: '/downloads/pdf/How to Send a Single Manual Payout.pdf',
    image: '/images/samples/orbital-manual-payout.png'
  },
  {
    company: 'Orbital',
    category: 'Knowledge base',
    title: 'How to Send a Mass Payout',
    description: 'Guide for sending bulk payouts to multiple recipients via the Client Portal.',
    context: 'Client Portal knowledge base article',
    portfolioLink: '/portfolio/rebuilding-orbital-docs',
    pdf: '/downloads/pdf/How to Send a Mass Payout.pdf',
    image: '/images/samples/orbital-binance-pay.png'
  },
  {
    company: 'Orbital',
    category: 'Knowledge base',
    title: 'How to Create and Manage Beneficiaries',
    description: 'Guide for creating and managing payment beneficiaries in the Client Portal.',
    context: 'Client Portal knowledge base article',
    portfolioLink: '/portfolio/rebuilding-orbital-docs',
    pdf: '/downloads/pdf/How to Create and Manage Beneficiaries.pdf',
    image: '/images/samples/orbital-beneficiaries.png'
  },
  {
    company: 'Orbital',
    category: 'Knowledge base',
    title: 'How to Whitelist IP Addresses',
    description: 'Guide for configuring IP allow lists for API security.',
    context: 'Client Portal knowledge base article',
    portfolioLink: '/portfolio/rebuilding-orbital-docs',
    pdf: '/downloads/pdf/How to Whitelist IP Address (IP Allow List).pdf',
    image: '/images/samples/orbital-ip-whitelist.png'
  },
  {
    company: 'Orbital',
    category: 'Knowledge base',
    title: 'Orbital Documentation Hub',
    description: 'Landing page for the Orbital documentation and developer hub.',
    context: 'Designed the documentation hub structure and navigation',
    portfolioLink: '/portfolio/rebuilding-orbital-docs',
    pdf: '/downloads/pdf/Orbital Documentation.pdf',
    image: '/images/samples/orbital-release-notes.png'
  },
  {
    company: 'Orbital',
    category: 'Knowledge base',
    title: 'How to Set Up Your Embedded Payment Page',
    description: 'Guide for configuring and embedding the Orbital payment page into merchant checkout flows.',
    context: 'Merchant integration knowledge base article',
    portfolioLink: '/portfolio/rebuilding-orbital-docs',
    pdf: '/downloads/pdf/How to Set up your Embedded Payment Page.pdf',
    image: '/images/samples/orbital-embedded-payment_tmp-01.png'
  },
  {
    company: 'Orbital',
    category: 'Knowledge base',
    title: 'Send Payouts via Binance Pay',
    description: 'Guide for sending payouts through the Binance Pay integration in the Client Portal.',
    context: 'Client Portal knowledge base article',
    portfolioLink: '/portfolio/rebuilding-orbital-docs',
    pdf: '/downloads/pdf/Send Payouts via Binance Pay.pdf',
    image: '/images/samples/orbital-binance-pay.png'
  },
  {
    company: 'Orbital',
    category: 'Knowledge base',
    title: 'Update Missing Travel Rule Information',
    description: 'Guide for updating travel rule compliance information for rapid deposit addresses.',
    context: 'Compliance and regulatory knowledge base article',
    portfolioLink: '/portfolio/rebuilding-orbital-docs',
    pdf: '/downloads/pdf/Update Missing Travel Rule Information for Rapid Deposit Address.pdf',
    image: '/images/samples/orbital-travel-rule.png'
  },
  {
    company: 'Orbital',
    category: 'Knowledge base',
    title: 'WooCommerce Integration',
    description: 'Guide for integrating Orbital payments with WooCommerce storefronts.',
    context: 'Merchant integration knowledge base article',
    portfolioLink: '/portfolio/rebuilding-orbital-docs',
    pdf: '/downloads/pdf/WooCommerce Integration.pdf',
    image: '/images/samples/orbital-woocommerce.png'
  },
  {
    company: 'Orbital',
    category: 'Knowledge base',
    title: 'Get Corporate Account or Wallet Details',
    description: 'Guide for retrieving corporate account and wallet information for payment setup.',
    context: 'Merchant onboarding knowledge base article',
    portfolioLink: '/portfolio/rebuilding-orbital-docs',
    pdf: '/downloads/pdf/How to Get Corporate Account or Wallet Details for Payments.pdf',
    image: '/images/samples/orbital-onboarding-checklist.png'
  },

  {
    company: 'Orbital',
    category: 'API references',
    title: 'API Error Reference',
    description: 'Complete reference for Orbital API error codes, error types, and troubleshooting guidance.',
    context: 'Part of the Orbital API reference documentation',
    portfolioLink: '/portfolio/rebuilding-orbital-docs',
    pdf: '/downloads/pdf/Orbital API Error Reference.pdf',
    image: '/images/samples/orbital-api-keys.png'
  },

  // ── Orbital / Release notes ──────────────────────────────────────
  {
    company: 'Orbital',
    category: 'Release notes',
    title: 'Orbital 2025 Release Notes',
    description: 'Product release notes covering new features, improvements, and changes across 2025.',
    context: 'Created a consistent release notes cadence tied to product releases',
    portfolioLink: '/portfolio/rebuilding-orbital-docs',
    pdf: '/downloads/pdf/Orbital - 2025 Release Notes.pdf',
    image: '/images/samples/orbital-2025-release-notes.png'
  },

  // ── GenLayer / API references ────────────────────────────────────
  {
    company: 'GenLayer',
    category: 'API references',
    title: 'JSON-RPC API Reference',
    description: "Complete API reference for GenLayer's JSON-RPC interface.",
    context: 'Converted from dense whitepaper into developer-friendly API docs',
    portfolioLink: '/portfolio/building-genlayer-docs',
    pdf: '/downloads/pdf/JSON-RPC API _ Detailed GenLayer Documentation.pdf',
    image: '/images/samples/genlayer-jsonrpc-api.png'
  },

  // ── GenLayer / SDK & CLI ─────────────────────────────────────────
  {
    company: 'GenLayer',
    category: 'SDK & CLI',
    title: 'CLI Reference',
    description: 'Command-line interface reference for GenLayer developer tooling.',
    context: 'Authored as part of a 50+ page documentation build',
    portfolioLink: '/portfolio/building-genlayer-docs',
    pdf: '/downloads/pdf/GenLayer CLI Reference _ Detailed GenLayer Documentation.pdf',
    image: '/images/samples/genlayer-cli-reference.png'
  },
  {
    company: 'GenLayer',
    category: 'SDK & CLI',
    title: 'ERC-20 Token Contract',
    description: 'Documentation for the ERC-20 token contract implementation on the GenLayer platform.',
    context: 'Contract reference authored as part of the 50+ page documentation build',
    portfolioLink: '/portfolio/building-genlayer-docs',
    pdf: '/downloads/pdf/ERC-20 Token Contract Documentation _ Detailed GenLayer Documentation.pdf',
    image: '/images/samples/genlayer-erc20.png'
  },

  // ── GenLayer / How-to guides ─────────────────────────────────────
  {
    company: 'GenLayer',
    category: 'How-to guides',
    title: 'Install GenLayer',
    description: 'Installation guide for setting up the GenLayer development environment.',
    context: 'Getting started guide authored as part of the 50+ page documentation build',
    portfolioLink: '/portfolio/building-genlayer-docs',
    pdf: '/downloads/pdf/Install GenLayer _ Detailed GenLayer Documentation.pdf',
    image: '/images/samples/genlayer-install.png'
  },
  {
    company: 'GenLayer',
    category: 'How-to guides',
    title: 'Introduction to GenLayer',
    description: 'Conceptual overview of the GenLayer protocol, intelligent contracts, and architecture.',
    context: 'Converted from whitepaper into developer-friendly conceptual documentation',
    portfolioLink: '/portfolio/building-genlayer-docs',
    pdf: '/downloads/pdf/Introduction _ Detailed GenLayer Documentation.pdf',
    image: '/images/samples/genlayer-introduction.png'
  },
  {
    company: 'GenLayer',
    category: 'How-to guides',
    title: 'What Are Intelligent Contracts',
    description: 'Conceptual guide explaining GenLayer intelligent contracts and how they differ from traditional smart contracts.',
    context: 'Converted from whitepaper concepts into developer-friendly explanations',
    portfolioLink: '/portfolio/building-genlayer-docs',
    pdf: '/downloads/pdf/What Are Intelligent Contracts _ Detailed GenLayer Documentation.pdf',
    image: '/images/samples/genlayer-intelligent-contracts.png'
  },
  {
    company: 'GenLayer',
    category: 'How-to guides',
    title: 'Optimistic Democracy',
    description: 'Documentation explaining the Optimistic Democracy consensus mechanism in GenLayer.',
    context: 'Translated from academic whitepaper into developer-facing documentation',
    portfolioLink: '/portfolio/building-genlayer-docs',
    pdf: '/downloads/pdf/Optimistic Democracy _ Detailed GenLayer Documentation.pdf',
    image: '/images/samples/genlayer-optimistic-democracy.png'
  },
  {
    company: 'GenLayer',
    category: 'How-to guides',
    title: 'Managing Intelligent Contract Operations (Equivalence Principle)',
    description: 'Guide for managing intelligent contract operations using the Equivalence Principle on GenLayer.',
    context: 'Authored as part of the 50+ page documentation build from whitepaper',
    portfolioLink: '/portfolio/building-genlayer-docs',
    pdf: '/downloads/pdf/Managing Intelligent Contract Operations with the Equivalence Principle _ Detailed GenLayer Documentation.pdf',
    image: '/images/samples/genlayer-equivalence.png'
  },
  {
    company: 'GenLayer',
    category: 'How-to guides',
    title: 'Limitations of the GenLayer Simulator',
    description: 'Reference documentation covering known limitations of the GenLayer simulator environment.',
    context: 'Part of the honest, accurate documentation for a developer-facing platform',
    portfolioLink: '/portfolio/building-genlayer-docs',
    pdf: '/downloads/pdf/Limitations of the GenLayer Simulator _ Detailed GenLayer Documentation.pdf',
    image: '/images/samples/genlayer-limitations.png'
  },
  {
    company: 'GenLayer',
    category: 'How-to guides',
    title: 'Crafting Prompts for LLM and Web Browsing',
    description: 'Guide for writing effective prompts for LLM interactions and web browsing in GenLayer intelligent contracts.',
    context: 'Practical how-to guide for developers building AI-integrated contracts',
    portfolioLink: '/portfolio/building-genlayer-docs',
    pdf: '/downloads/pdf/Crafting Prompts for LLM and Web Browsing Interactions _ Detailed GenLayer Documentation.pdf',
    image: '/images/samples/genlayer-prompts.png'
  },
  {
    company: 'GenLayer',
    category: 'How-to guides',
    title: 'Prompt Injection',
    description: 'Documentation covering prompt injection risks and mitigations for GenLayer intelligent contracts.',
    context: 'Security documentation authored as part of the GenLayer docs build',
    portfolioLink: '/portfolio/building-genlayer-docs',
    pdf: '/downloads/pdf/Prompt Injection _ Detailed GenLayer Documentation.pdf',
    image: '/images/samples/genlayer-intelligent-contracts.png'
  },
  {
    company: 'GenLayer',
    category: 'How-to guides',
    title: 'Wizard of Coin Contract',
    description: 'Tutorial for building a Wizard of Coin contract as an example on the GenLayer platform.',
    context: 'Example-driven tutorial to help developers get started with intelligent contracts',
    portfolioLink: '/portfolio/building-genlayer-docs',
    pdf: '/downloads/pdf/Wizard of Coin Contract _ Detailed GenLayer Documentation.pdf',
    image: '/images/samples/genlayer-wizard-coin.png'
  },

  // ── Calimero / SDK & CLI ─────────────────────────────────────────
  {
    company: 'Calimero',
    category: 'SDK & CLI',
    title: 'JavaScript SDK',
    description: "SDK documentation for Calimero's JavaScript client library.",
    context: 'Maintained through a major product pivot in the NEAR ecosystem',
    portfolioLink: '/portfolio/documenting-product-pivot-calimero',
    pdf: '/downloads/pdf/JavaScript SDK - Calimero Docs.pdf',
    image: '/images/samples/calimero-js-sdk.png'
  },
  {
    company: 'Calimero',
    category: 'SDK & CLI',
    title: 'Rust SDK',
    description: "SDK documentation for Calimero's Rust client library.",
    context: 'Updated alongside new features during product direction change',
    portfolioLink: '/portfolio/documenting-product-pivot-calimero',
    pdf: '/downloads/pdf/Rust SDK - Calimero Docs.pdf',
    image: '/images/samples/calimero-rust-sdk.png'
  },

  // ── Calimero / Knowledge base ────────────────────────────────────
  {
    company: 'Calimero',
    category: 'Knowledge base',
    title: 'Identity',
    description: 'Documentation covering identity management and authentication in the Calimero network.',
    context: 'Maintained through a major product pivot in the NEAR ecosystem',
    portfolioLink: '/portfolio/documenting-product-pivot-calimero',
    pdf: '/downloads/pdf/Identity - Calimero Docs.pdf',
    image: '/images/samples/calimero-identity.png'
  },
  {
    company: 'Calimero',
    category: 'Knowledge base',
    title: 'Nodes',
    description: 'Documentation covering node setup, configuration, and management on the Calimero network.',
    context: 'Updated alongside the product pivot to private network protocols',
    portfolioLink: '/portfolio/documenting-product-pivot-calimero',
    pdf: '/downloads/pdf/Nodes - Calimero Docs.pdf',
    image: '/images/samples/calimero-nodes.png'
  },

  // ── Mindee / API references ──────────────────────────────────────
  {
    company: 'Mindee',
    category: 'API references',
    title: 'Document Catalog',
    description: 'Reference for all supported document types and APIs in the Mindee platform.',
    context: 'Core API documentation for the Mindee platform',
    portfolioLink: '/portfolio/25-issues-30-days-mindee',
    pdf: '/downloads/pdf/Document Catalog _ V1 _ Mindee.pdf',
    image: '/images/samples/mindee-document-catalog.png'
  },
  {
    company: 'Mindee',
    category: 'API references',
    title: 'Error Management',
    description: 'Reference for error codes, types, and handling strategies in the Mindee API.',
    context: 'Resolved as part of 25+ documentation issues cleared in the first 30 days',
    portfolioLink: '/portfolio/25-issues-30-days-mindee',
    pdf: '/downloads/pdf/Error Management _ V1 _ Mindee.pdf',
    image: '/images/samples/mindee-error-management.png'
  },

  // ── Mindee / SDK & CLI ───────────────────────────────────────────
  {
    company: 'Mindee',
    category: 'SDK & CLI',
    title: 'Python OCR SDK Getting Started',
    description: "Getting started guide for Mindee's Python OCR SDK for document parsing.",
    context: 'Migrated from private GitHub repos into unified docs site',
    portfolioLink: '/portfolio/25-issues-30-days-mindee',
    pdf: '/downloads/pdf/Getting Started _ V1 _ Mindee.pdf',
    image: '/images/samples/mindee-python-sdk.png'
  },

  // ── Mindee / How-to guides ───────────────────────────────────────
  {
    company: 'Mindee',
    category: 'How-to guides',
    title: 'Cropper Guide',
    description: 'Guide for using the Cropper feature to extract cropped images from documents.',
    context: 'Feature documentation for the Mindee platform',
    portfolioLink: '/portfolio/25-issues-30-days-mindee',
    pdf: '/downloads/pdf/Cropper _ V1 _ Mindee.pdf',
    image: '/images/samples/mindee-ruby-blog.png'
  },
  {
    company: 'Mindee',
    category: 'How-to guides',
    title: 'Technical Limitations',
    description: 'Documentation covering technical limitations and constraints of the Mindee API platform.',
    context: 'Part of the honest, accurate documentation for the Mindee developer audience',
    portfolioLink: '/portfolio/25-issues-30-days-mindee',
    pdf: '/downloads/pdf/Technical Limitations _ V1 _ Mindee.pdf',
    image: '/images/samples/mindee-limitations.png'
  },

  // ── Mindee / Release notes ───────────────────────────────────────
  {
    company: 'Mindee',
    category: 'Release notes',
    title: 'Invoice OCR Release Notes',
    description: 'Release notes tracking changes and updates for the Invoice OCR API.',
    context: 'Created a consistent release notes format for product updates',
    portfolioLink: '/portfolio/25-issues-30-days-mindee',
    pdf: '/downloads/pdf/Invoice OCR _ V1 _ Mindee.pdf',
    image: '/images/samples/mindee-api-reference.png'
  },

  // ── TON / How-to guides ──────────────────────────────────────────
  {
    company: 'TON',
    category: 'How-to guides',
    title: 'The Open Network Overview',
    description: 'Overview documentation for the TON (Telegram Open Network) blockchain platform.',
    context: 'Technical documentation for the TON blockchain ecosystem',
    portfolioLink: null,
    pdf: '/downloads/pdf/The Open Network - TON Docs.pdf',
    image: '/images/samples/ton-overview_tmp-001.png'
  },
  {
    company: 'TON',
    category: 'How-to guides',
    title: 'TON Blockchain Specification',
    description: 'Detailed technical specification for the Telegram Open Network blockchain.',
    context: 'In-depth technical documentation for the TON platform',
    portfolioLink: null,
    pdf: '/downloads/pdf/Telegram Open Network (TON) Blockchain Specification - TON Docs.pdf',
    image: '/images/samples/ton-blockchain-spec_tmp-001.png'
  },
  {
    company: 'TON',
    category: 'How-to guides',
    title: 'TON Virtual Machine',
    description: 'Documentation covering the Telegram Open Network Virtual Machine architecture and operation.',
    context: 'Low-level technical documentation for TON developers',
    portfolioLink: null,
    pdf: '/downloads/pdf/Telegram Open Network Virtual Machine - TON Docs.pdf',
    image: '/images/samples/ton-vm_tmp-001.png'
  },
  {
    company: 'TON',
    category: 'How-to guides',
    title: 'Catchain Consensus',
    description: 'Documentation covering the Catchain consensus protocol used in the TON blockchain.',
    context: 'Protocol documentation for the TON blockchain consensus mechanism',
    portfolioLink: null,
    pdf: '/downloads/pdf/Catchain consensus_ an outline - TON Docs.pdf',
    image: '/images/samples/ton-catchain_tmp-01.png'
  },

  // ── Vertice / How-to guides ──────────────────────────────────────
  {
    company: 'Vertice',
    category: 'How-to guides',
    title: 'Setting Up SAML SSO',
    description: 'Guide for configuring SAML Single Sign-On authentication in Vertice.',
    context: 'Enterprise authentication documentation',
    portfolioLink: null,
    pdf: '/downloads/pdf/Setting up SAML SSO in Vertice.pdf',
    image: '/images/samples/vertice-saml-sso.png'
  },

  // ── Blog & writing ───────────────────────────────────────────────
  {
    company: 'ZenRows',
    category: 'Blog & writing',
    title: 'How to Scrape Amazon Reviews',
    description: 'Technical guide on scraping Amazon product reviews using web scraping tools.',
    context: 'Developer-focused web scraping content',
    portfolioLink: null,
    link: 'https://www.zenrows.com/blog/scrape-amazon-reviews',
    image: '/images/samples/zenrows-amazon-reviews.png'
  },
  {
    company: 'ZenRows',
    category: 'Blog & writing',
    title: 'How to Use Proxies With SeleniumBase in Python',
    description: 'Technical guide on proxy integration with SeleniumBase for web scraping.',
    context: 'Developer-focused web scraping content',
    portfolioLink: null,
    link: 'https://www.zenrows.com/blog/seleniumbase-proxy',
    image: '/images/samples/zenrows-seleniumbase-proxy.png'
  },
  {
    company: 'Giskard',
    category: 'Blog & writing',
    title: 'How to Evaluate and Load a PyTorch Model with Giskard',
    description: 'Technical guide on evaluating and loading PyTorch models using the Giskard testing framework.',
    context: 'Developer-focused AI/ML content',
    portfolioLink: null,
    link: 'https://www.giskard.ai/knowledge/how-to-evaluate-and-load-a-pytorch-model-with-giskard',
    image: '/images/samples/giskard-pytorch.png'
  },
  {
    company: 'Coupler.io',
    category: 'Blog & writing',
    title: 'BigQuery SUBSTRING Function',
    description: 'Technical article on using the SUBSTRING function in Google BigQuery.',
    context: 'Freelance technical content',
    portfolioLink: null,
    link: 'https://web.archive.org/web/20230314162733/https://blog.coupler.io/bigquery-substring/',
    image: '/images/samples/coupler-bigquery.png'
  },
  {
    company: 'Coupler.io',
    category: 'Blog & writing',
    title: 'Looker Studio Best Practices to Follow',
    description: 'Guide on best practices for building dashboards with Looker Studio (Google Data Studio).',
    context: 'Freelance technical content',
    portfolioLink: null,
    link: 'https://web.archive.org/web/20230606231955/https://blog.coupler.io/looker-studio-best-practices/',
    image: '/images/samples/coupler-looker-studio.png'
  },
  {
    company: 'Calimero',
    category: 'Blog & writing',
    title: 'How to Connect Your Sender Wallet with Calimero Portal',
    description: 'Step-by-step guide for connecting a sender wallet to the Calimero Portal.',
    context: 'Technical blog for the NEAR developer community',
    portfolioLink: '/portfolio/documenting-product-pivot-calimero',
    link: 'https://web.archive.org/web/20240714201537/https://www.calimero.network/blog/how-to-connect-your-sender-wallet-with-calimero-portal',
    image: '/images/samples/calimero-wallet-blog.png'
  },
  {
    company: 'Calimero',
    category: 'Blog & writing',
    title: 'Decentralized Chat App with Calimero and BOS',
    description: 'Technical walkthrough for building a decentralized chat application.',
    context: 'Ecosystem guide for NEAR developers',
    portfolioLink: '/portfolio/documenting-product-pivot-calimero',
    link: 'https://web.archive.org/web/20240804122742/https://www.calimero.network/blog/decentralized-chatapp-calimero-and-bos',
    image: '/images/samples/calimero-chatapp-blog.png'
  },
  {
    company: 'Mindee',
    category: 'Blog & writing',
    title: 'How to Extract Data from Invoices or Receipts Using Python',
    description: 'Technical blog on using Python and Mindee APIs for document data extraction.',
    context: 'Product blog showing real-world use cases',
    portfolioLink: '/portfolio/25-issues-30-days-mindee',
    link: 'https://www.mindee.com/blog/how-to-extract-data-from-invoices-or-receipts-using-python',
    image: '/images/samples/mindee-invoice-blog.png'
  }
]

const categories = [
  'All work',
  'API references',
  'SDK & CLI',
  'How-to guides',
  'Knowledge base',
  'Release notes',
  'Blog & writing'
]

export function WritingSamples() {
  const [activeFilter, setActiveFilter] = useState('All work')

  const filtered = activeFilter === 'All work'
    ? samples
    : samples.filter(s => s.category === activeFilter)

  return (
    <div className="samples-layout">
      <div className="filter-sidebar">
        <h4>Filter by type</h4>
        {categories.map((cat) => {
          const count = cat === 'All work'
            ? samples.length
            : samples.filter(s => s.category === cat).length
          return (
            <button
              key={cat}
              className={activeFilter === cat ? 'active' : ''}
              onClick={() => setActiveFilter(cat)}
            >
              {cat} ({count})
            </button>
          )
        })}
      </div>
      <div>
        <p className="samples-count">{filtered.length} writing samples</p>
        <div className="samples-grid">
          {filtered.map((sample, i) => (
            <div key={i} className="sample-card">
              <div className="sample-card-thumbnail">
                <img
                  src={sample.image}
                  alt={sample.title}
                  width={600}
                  height={340}
                  loading="lazy"
                />
              </div>
              <div className="sample-card-body">
                <span className="sample-card-company">{sample.company}</span>
                <h4>{sample.title}</h4>
                <p className="sample-card-desc">{sample.description}</p>
                <div className="context-note">{sample.context}</div>
                <div className="sample-card-links">
                  {sample.link && (
                    <a href={sample.link} target="_blank" rel="noopener">Read Article</a>
                  )}
                  {sample.pdf && (
                    <a href={sample.pdf}>View Sample</a>
                  )}
                  {sample.portfolioLink && (
                    <a href={sample.portfolioLink}>Case Study →</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
