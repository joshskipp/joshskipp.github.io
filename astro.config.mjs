import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: 'https://joshskipp.dev',
    build: {
        inlineStylesheets: `never`,
    },
    compressHTML: false,
});