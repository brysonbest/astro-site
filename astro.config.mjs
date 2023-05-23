import { defineConfig } from "astro/config";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), image()],
  // build: {
  //   // Example: Generate `page.html` instead of `page/index.html` during build.
  //   format: "file",
  // },
});
