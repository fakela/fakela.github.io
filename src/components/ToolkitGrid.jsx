const toolkit = [
  {
    category: 'Documentation Platforms',
    tools: ['ReadMe', 'Docusaurus', 'Mintlify', 'Nextra', 'Hugo']
  },
  {
    category: 'AI & Automation',
    tools: ['Claude Code', 'ChatGPT', 'Gemini', 'MCP Servers']
  },
  {
    category: 'Developer Tools',
    tools: ['Git', 'GitHub', 'CI/CD', 'OpenAPI', 'Postman']
  },
  {
    category: 'Project Management',
    tools: ['Jira', 'Notion', 'Confluence']
  },
  {
    category: 'Diagramming',
    tools: ['Draw.io']
  }
]

export function ToolkitGrid() {
  return (
    <div className="toolkit-grid">
      {toolkit.map((group) => (
        <div key={group.category} className="toolkit-category">
          <h4>{group.category}</h4>
          <ul>
            {group.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
