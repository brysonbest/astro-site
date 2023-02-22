import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "Bryson Best - Blog",
    description: "My personal learning journey",
    site: "https://bryson.best/blog",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-ca</language>`,
  });
}
