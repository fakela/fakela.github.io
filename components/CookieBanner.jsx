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
    <div style={{
      position: 'fixed',
      bottom: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      maxWidth: '32rem',
      width: 'calc(100% - 2rem)',
      padding: '0.875rem 1.25rem',
      background: 'var(--bg-card, #fff)',
      border: '1px solid var(--border, #e5e7eb)',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      zIndex: 9999,
      fontSize: '0.8rem',
      lineHeight: 1.5,
      color: 'inherit',
    }}>
      <p style={{ margin: '0 0 0.75rem' }}>
        I use PostHog to track site analytics and monitor LLM activity on my work. Nothing is being done with your data. Accept the cookie?
      </p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
        <button onClick={decline} style={{
          padding: '0.35rem 0.75rem',
          border: '1px solid var(--border, #e5e7eb)',
          borderRadius: '6px',
          background: 'transparent',
          cursor: 'pointer',
          fontSize: '0.8rem',
          color: 'inherit',
          fontFamily: 'inherit',
        }}>
          Decline
        </button>
        <button onClick={accept} style={{
          padding: '0.35rem 0.75rem',
          border: 'none',
          borderRadius: '6px',
          background: '#2563eb',
          color: '#fff',
          cursor: 'pointer',
          fontSize: '0.8rem',
          fontFamily: 'inherit',
        }}>
          Accept
        </button>
      </div>
    </div>
  )
}
