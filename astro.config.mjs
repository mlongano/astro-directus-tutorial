// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

import tailwindConfigViewer from "astro-tailwind-config-viewer";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    nesting: true,
  }), tailwindConfigViewer()],

  adapter: node({
    mode: "standalone",
  }),
});