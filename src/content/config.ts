import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lang: z.enum(['en', 'es', 'pt', 'id', 'ru', 'de', 'ar']).default('en'),
  }),
});

export const collections = { blog };
