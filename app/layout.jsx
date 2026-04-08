import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { PostHogProvider } from '../components/PostHogProvider'
import { CookieBanner } from '../components/CookieBanner'
import { ThemeToggle } from '../components/ThemeToggle'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: {
    default: 'Favour Kelvin (Fakela)',
    template: '%s | Favour Kelvin'
  },
  description: 'Technical writer building documentation systems for startups across fintech, Web3, and developer tooling.',
}

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>
        Favour Kelvin
      </span>
    }
    projectLink="https://github.com/fakela"
  >
    <ThemeToggle />
  </Navbar>
)

const footer = (
  <Footer>
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '0.5rem' }}>
      <span>© {new Date().getFullYear()} Favour Kelvin</span>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="https://www.linkedin.com/in/favour-kelvin" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://github.com/fakela" target="_blank" rel="noopener">GitHub</a>
        <a href="https://medium.com/@favourkelvin17" target="_blank" rel="noopener">Medium</a>
        <a href="mailto:favourkelvin17@gmail.com">Email</a>
      </div>
    </div>
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head
        backgroundColor={{ dark: '#111', light: '#fafafa' }}
      >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <PostHogProvider>
          <Layout
            navbar={navbar}
            footer={footer}
            pageMap={await getPageMap()}
            search={null}
          >
            {children}
          </Layout>
          <CookieBanner />
        </PostHogProvider>
      </body>
    </html>
  )
}
