import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    class: z.string(),
    classCode: z.string(),
    year: z.string().optional(),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    disciplines: z.array(z.string()).default([]),
    collaborators: z.array(z.string()).default([]),
    hero: z
      .object({
        label: z.string(),
        aspectRatio: z.string().default('16/9'),
        src: z.string().optional(),
      })
      .optional(),
    gallery: z
      .array(
        z.object({
          label: z.string(),
          aspectRatio: z.string().default('4/5'),
          src: z.string().optional(),
        })
      )
      .default([]),
    inlineImages: z
      .array(
        z.object({
          label: z.string(),
          aspectRatio: z.string().default('16/9'),
          src: z.string().optional(),
          after: z.string().optional(),
        })
      )
      .default([]),
  }),
});

export const collections = { projects };
