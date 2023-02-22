import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get() {
  const posts = getCollection("posts");
  return rss({
    title: "Bryson Best - Blog",
    description: "My personal learning journey",
    site: "https://bryson.best/blog",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-ca</language>`,
  });
}
