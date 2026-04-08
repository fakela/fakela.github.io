'use client'

import { useEffect, useState } from 'react'
import posthog from 'posthog-js'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  function accept() {
    posthog.opt_in_capturing()
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    posthog.opt_out_capturing()
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-overlay">
      <div className="cookie-banner">
        <h3 className="cookie-banner-heading">Cookie Consent Request</h3>
        <p>
          I have set up PostHog event tracking to see how often LLMs scrape or access my content. I am not using your browsing data for anything else. Want a cookie?
        </p>
        <div className="cookie-banner-buttons">
          <button onClick={decline} className="cookie-btn cookie-btn-decline">
            Decline
          </button>
          <button onClick={accept} className="cookie-btn cookie-btn-accept">
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
