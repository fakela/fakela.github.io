'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  posthog.init('phc_kWriRNondsWTB6UpHHSJPJot8eMaJa9SeDiTYjfT2gEZ', {
    api_host: 'https://us.i.posthog.com',
    persistence: 'memory',
    capture_pageview: false,
  })
}

function PageViewTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname && posthog.__loaded) {
      posthog.capture('$pageview', { $current_url: window.origin + pathname })
    }
  }, [pathname])

  return null
}

export function PostHogProvider({ children }) {
  return (
    <PHProvider client={posthog}>
      <PageViewTracker />
      {children}
    </PHProvider>
  )
}
