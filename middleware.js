import { NextResponse } from 'next/server'
import { PostHog } from 'posthog-node'

const LLM_BOTS = [
  'GPTBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'Bytespider',
  'CCBot',
  'Google-Extended',
  'FacebookBot',
  'Amazonbot',
  'Applebot-Extended',
  'PerplexityBot',
  'YouBot',
  'Diffbot',
]

export function middleware(request) {
  const userAgent = request.headers.get('user-agent') || ''
  const matchedBot = LLM_BOTS.find(bot => userAgent.includes(bot))

  if (matchedBot) {
    const client = new PostHog('phc_kWriRNondsWTB6UpHHSJPJot8eMaJa9SeDiTYjfT2gEZ', {
      host: 'https://us.i.posthog.com',
      flushAt: 1,
      flushInterval: 0,
    })

    client.capture({
      distinctId: `bot_${matchedBot}`,
      event: 'llm_scraper_visit',
      properties: {
        bot_name: matchedBot,
        user_agent: userAgent,
        path: request.nextUrl.pathname,
        timestamp: new Date().toISOString(),
      },
    })

    client.shutdown()
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
}
