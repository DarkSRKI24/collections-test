// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    i18n: {
        locales: ["sr", "en"],
        defaultLocale: "sr",
        routing: {
            prefixDefaultLocale: true
        }
    }
});
