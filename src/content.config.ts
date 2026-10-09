import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each project lives in src/content/projects/<slug>/index.md, with its images
// in the same folder. Image paths in frontmatter are relative to that file.
const projects = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      year: z.number(),
      category: z.string(), // e.g. Food & Beverage, Beauty, Lifestyle
      summary: z.string(),
      role: z.array(z.string()).default([]), // e.g. Structural design, Illustration
      cover: image(),
      coverAlt: z.string(),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional(),
            wide: z.boolean().default(false), // span both columns
          }),
        )
        .default([]),
      order: z.number().default(0), // lower numbers appear first
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
