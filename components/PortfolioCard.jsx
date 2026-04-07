export function PortfolioCard({ title, href, company, dates, type, tags, excerpt }) {
  return (
    <div className="portfolio-card">
      <div className="portfolio-card-image">{company}</div>
      <div className="portfolio-card-body">
        <div className="portfolio-card-tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <h3><a href={href}>{title}</a></h3>
        <div className="portfolio-card-meta">
          {company} · {dates} · {type}
        </div>
        <p className="portfolio-card-excerpt">{excerpt}</p>
        <a href={href} className="portfolio-card-link">Read more →</a>
      </div>
    </div>
  )
}
