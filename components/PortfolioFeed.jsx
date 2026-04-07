'use client'

const tagColors = {
  'ReadMe': 'tag-blue',
  'API Reference': 'tag-purple',
  'Knowledge Base': 'tag-green',
  'Fintech': 'tag-orange',
  'Docs-as-Code': 'tag-teal',
  'Claude Code': 'tag-purple',
  'Gemini': 'tag-blue',
  'MCP Servers': 'tag-pink',
  'CI/CD': 'tag-teal',
  'AI': 'tag-pink',
  'Automation': 'tag-orange',
  'Nextra': 'tag-green',
  'CLI': 'tag-yellow',
  'Web3': 'tag-purple',
  'Whitepaper Conversion': 'tag-orange',
  'Docusaurus': 'tag-green',
  'Diátaxis': 'tag-teal',
  'Distributed Systems': 'tag-red',
  'Analytics': 'tag-yellow',
  'SDK Documentation': 'tag-blue',
  'AI/ML': 'tag-pink',
  'Python': 'tag-yellow',
  'Zendesk': 'tag-orange',
  'Confluence': 'tag-blue',
  'NEAR': 'tag-teal',
  'Cloud Infrastructure': 'tag-red',
  'AWS': 'tag-orange',
  'GCP': 'tag-blue',
  'Docker': 'tag-teal',
  'Terraform': 'tag-purple',
  'Information Architecture': 'tag-teal',
}

const portfolioItems = [
  {
    title: "Rebuilding Orbital's Documentation",
    slug: '/portfolio/rebuilding-orbital-docs',
    tags: ['ReadMe', 'API Reference', 'Knowledge Base', 'Fintech', 'Docs-as-Code'],
    excerpt: 'Joined as the sole technical writer to rebuild a broken documentation system from the ground up. Redesigned the entire ReadMe site, unified 3 products into one documentation experience, and migrated 40+ API endpoints from Postman.'
  },
  {
    title: 'AI-Integrated Documentation Workflow',
    slug: '/portfolio/ai-documentation-workflow',
    tags: ['Claude Code', 'Gemini', 'MCP Servers', 'CI/CD', 'AI', 'Automation'],
    excerpt: 'Integrated AI tooling directly into the documentation lifecycle, reducing time to review-readiness by an average of 3 days. Built CI/CD pipelines with automated checks and connected MCP servers for accurate content generation.'
  },
  {
    title: "Building GenLayer's Docs from a Whitepaper",
    slug: '/portfolio/building-genlayer-docs',
    tags: ['Nextra', 'API Reference', 'CLI', 'Web3', 'AI', 'Whitepaper Conversion'],
    excerpt: 'Converted a dense whitepaper into developer-friendly documentation, authoring 50+ pages for the first version of the docs. Wrote the JSON-RPC API reference, CLI reference, and getting started guides.'
  },
  {
    title: 'Documentation That Helped an Acquisition',
    slug: '/portfolio/documentation-acquisition-bacalhau',
    tags: ['Docusaurus', 'Diátaxis', 'API Reference', 'Distributed Systems', 'Analytics'],
    excerpt: 'Built the documentation for Bacalhau, a distributed compute platform. Grew documentation traffic from 10K to 47K views and unique users from 200 to 6K. Delivered docs for the v1 release that helped the acquisition by Expanso.'
  },
  {
    title: '25 Issues in 30 Days at Mindee',
    slug: '/portfolio/25-issues-30-days-mindee',
    tags: ['ReadMe', 'SDK Documentation', 'API Reference', 'AI/ML', 'Python'],
    excerpt: 'Hit the ground running, resolving 25+ documentation issues via GitHub Issues in the first month. Migrated SDK documentation from scattered private GitHub repos into the main documentation site.'
  },
  {
    title: 'Documenting Through a Product Pivot',
    slug: '/portfolio/documenting-product-pivot-calimero',
    tags: ['Docusaurus', 'Zendesk', 'Confluence', 'Web3', 'NEAR', 'SDK Documentation'],
    excerpt: 'Maintained and updated product documentation through a major product direction change, filling content gaps and documenting new features across blockchain infrastructure and private network protocols.'
  },
  {
    title: 'Cloud-Native Docs for GlueOps',
    slug: '/portfolio/cloud-native-docs-glueops',
    tags: ['Docusaurus', 'Cloud Infrastructure', 'AWS', 'GCP', 'Docker', 'Terraform'],
    excerpt: 'Centralised scattered documentation across multiple GitHub repos into a unified Docusaurus site, documenting deployment processes across Docker Hub, GCP, GitHub, AWS, Azure, Terraform, and Quay.'
  }
]

export function PortfolioFeed() {
  return (
    <div className="portfolio-feed">
      {portfolioItems.map((item) => (
        <div key={item.slug} className="portfolio-card">
          <div className="portfolio-card-body">
            <div className="portfolio-card-tags">
              {item.tags.map((tag) => (
                <span key={tag} className={`tag ${tagColors[tag] || 'tag-blue'}`}>{tag}</span>
              ))}
            </div>
            <h3><a href={item.slug}>{item.title}</a></h3>
            <p className="portfolio-card-excerpt">{item.excerpt}</p>
            <a href={item.slug} className="portfolio-card-link">Read more →</a>
          </div>
        </div>
      ))}
    </div>
  )
}
