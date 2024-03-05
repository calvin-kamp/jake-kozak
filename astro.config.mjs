import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
    integrations: [
        storyblok({
            accessToken: env.STORYBLOK_TOKEN,
            components: {
                page: 'storyblok/Page',
                meta: 'storyblok/Meta',
                image_text: 'components/modules/ImageText'
            },
        }),
    ],
    vite: {
        plugins: [basicSsl()],
        server: {
            https: true,
        },
    },
});
