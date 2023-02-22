import { z, defineCollection } from "astro:content";
// Schema defined for each collection.
const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});
// Single `collections` object registers collections
export const collections = {
  posts: postsCollection,
};
