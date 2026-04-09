import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
})

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
})

export const collections = { portfolio, posts }
