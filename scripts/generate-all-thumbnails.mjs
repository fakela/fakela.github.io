import { execSync } from 'child_process'
import { readdirSync, existsSync, mkdirSync } from 'fs'
import { resolve, basename } from 'path'

const PDF_DIR = resolve('public/downloads/pdf')
const OUT_DIR = resolve('public/images/samples')
mkdirSync(OUT_DIR, { recursive: true })

// Map PDF filenames to writing sample thumbnail names
const mapping = {
  // Orbital
  'Generate Hosted Payment Links with Orbital HPP.pdf': 'orbital-generate-deposit-link.png',
  'hpp-pdf.pdf': null, // duplicate
  'Verifying Webhook Signatures.pdf': 'orbital-verify-webhooks.png',
  'Getting-started.pdf': 'orbital-onboarding-checklist.png', // Orbital getting started / onboarding
  'Orbital Documentation.pdf': 'orbital-release-notes.png',
  'How to Create API Keys.pdf': 'orbital-api-keys.png',
  'How to Send a Single Manual Payout.pdf': 'orbital-manual-payout.png',
  'How to Whitelist IP Address (IP Allow List).pdf': 'orbital-ip-whitelist.png',
  'Generate EPP Signature.pdf': 'orbital-epp-signature.png',
  'How to Set up your Embedded Payment Page.pdf': 'orbital-embedded-payment.png',
  'How to Approve and Reject Transactions.pdf': 'orbital-approve-transactions.png',
  'How to Create and Manage Beneficiaries.pdf': 'orbital-beneficiaries.png',
  'Create Crypto Deposit Invoices via API.pdf': 'orbital-crypto-deposit.png',
  'Get Payments by Date.pdf': 'orbital-payments-by-date.png',
  'Send Payouts via Binance Pay.pdf': 'orbital-binance-pay.png',
  'Update Missing Travel Rule Information for Rapid Deposit Address.pdf': 'orbital-travel-rule.png',
  'WooCommerce Integration.pdf': 'orbital-woocommerce.png',

  // Bacalhau
  'SpecConfig.pdf': 'bacalhau-specconfig.png',
  'Getting Started with Bacalhau _ Bacalhau Docs.pdf': 'bacalhau-getting-started.png',
  'Architecture _ Bacalhau Docs.pdf': 'bacalhau-architecture.png',
  'Reading Data from Multiple S3 Buckets using Bacalhau _ Bacalhau Docs2.pdf': 'bacalhau-s3-buckets.png',
  'WASM.pdf': 'bacalhau-wasm.png',
  'Observability.pdf': 'bacalhau-observability.png',
  'Installation.pdf': 'bacalhau-installation.png',

  // GenLayer
  'JSON-RPC API _ Detailed GenLayer Documentation.pdf': 'genlayer-jsonrpc-api.png',
  'GenLayer CLI Reference _ Detailed GenLayer Documentation.pdf': 'genlayer-cli-reference.png',
  'Install GenLayer _ Detailed GenLayer Documentation.pdf': 'genlayer-install.png',
  'Introduction _ Detailed GenLayer Documentation.pdf': 'genlayer-introduction.png',
  'What Are Intelligent Contracts _ Detailed GenLayer Documentation.pdf': 'genlayer-intelligent-contracts.png',
  'ERC-20 Token Contract Documentation _ Detailed GenLayer Documentation.pdf': 'genlayer-erc20.png',
  'Crafting Prompts for LLM and Web Browsing Interactions _ Detailed GenLayer Documentation.pdf': 'genlayer-prompts.png',
  'Optimistic Democracy _ Detailed GenLayer Documentation.pdf': 'genlayer-optimistic-democracy.png',
  'Managing Intelligent Contract Operations with the Equivalence Principle _ Detailed GenLayer Documentation.pdf': 'genlayer-equivalence.png',
  'Limitations of the GenLayer Simulator _ Detailed GenLayer Documentation.pdf': 'genlayer-limitations.png',
  'Wizard of Coin Contract _ Detailed GenLayer Documentation.pdf': 'genlayer-wizard-coin.png',

  // Calimero
  'JavaScript SDK - Calimero Docs.pdf': 'calimero-js-sdk.png',
  'Rust SDK - Calimero Docs.pdf': 'calimero-rust-sdk.png',
  'Identity - Calimero Docs.pdf': 'calimero-identity.png',
  'Calimero Docs.pdf': 'calimero-docs.png',
  'Nodes - Calimero Docs.pdf': 'calimero-nodes.png',

  // Mindee
  'Getting Started _ V1 _ Mindee.pdf': 'mindee-python-sdk.png',
  'Invoice OCR _ V1 _ Mindee.pdf': 'mindee-api-reference.png',
  'Cropper _ V1 _ Mindee.pdf': 'mindee-ruby-blog.png',
  'Document Catalog _ V1 _ Mindee.pdf': 'mindee-document-catalog.png',
  'Error Management _ V1 _ Mindee.pdf': 'mindee-error-management.png',
  'Technical Limitations _ V1 _ Mindee.pdf': 'mindee-limitations.png',

  // GlueOps
  'Deploy Your First App _ GlueOps.pdf': 'glueops-getting-started.png',
  'Deployment Configurations _ GlueOps.pdf': 'glueops-deployment.png',
  'Amazon Web Services (AWS) _ GlueOps.pdf': 'glueops-aws.png',
  'Create GitHub App _ GlueOps.pdf': 'glueops-github-app.png',
  'Create GitHub OAuth App _ GlueOps.pdf': 'glueops-github-oauth.png',
  'Captain Domains _ GlueOps.pdf': 'glueops-captain-domains.png',
  'Manage Environment Secrets _ GlueOps.pdf': 'glueops-secrets.png',

  // Vertice
  'Setting up SAML SSO in Vertice.pdf': 'vertice-saml-sso.png',

  // TON
  'Catchain consensus_ an outline - TON Docs.pdf': 'ton-catchain.png',
  'Telegram Open Network (TON) Blockchain Specification - TON Docs.pdf': 'ton-blockchain-spec.png',
  'Telegram Open Network Virtual Machine - TON Docs.pdf': 'ton-vm.png',
  'The Open Network - TON Docs.pdf': 'ton-overview.png',
}

const pdfs = readdirSync(PDF_DIR).filter(f => f.endsWith('.pdf'))
let generated = 0

for (const pdf of pdfs) {
  const outName = mapping[pdf]
  if (!outName) continue

  const outPath = resolve(OUT_DIR, outName)
  if (existsSync(outPath)) {
    console.log(`Skip: ${outName} (exists)`)
    continue
  }

  const pdfPath = resolve(PDF_DIR, pdf)
  const tmpBase = resolve(OUT_DIR, outName.replace('.png', '_tmp'))

  console.log(`Generating: ${outName}`)
  try {
    execSync(`pdftoppm -png -f 1 -l 1 -r 150 "${pdfPath}" "${tmpBase}"`, { stdio: 'pipe' })
    const tmpFile = `${tmpBase}-1.png`
    if (existsSync(tmpFile)) {
      execSync(`sips --resampleWidth 600 "${tmpFile}" --out "${outPath}"`, { stdio: 'pipe' })
      execSync(`rm "${tmpFile}"`)
      generated++
      console.log(`  Done: ${outName}`)
    }
  } catch (e) {
    console.log(`  Error: ${e.message}`)
  }
}

console.log(`\nGenerated ${generated} thumbnails.`)
console.log(`Total images in ${OUT_DIR}:`, readdirSync(OUT_DIR).filter(f => f.endsWith('.png')).length)
