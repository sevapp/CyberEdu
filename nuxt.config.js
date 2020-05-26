require('dotenv').config();

export default {
    mode: 'universal',

    env: {
        BOT_URL: process.env.BOT_URL,
    },
    /*
     ** Headers of the page
     */
    head: {
        htmlAttrs: {
            lang: 'ru',
        },

        title: 'CyberEdu',
        
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'CyberEdu' },
            { name: 'msapplication-TileColor', content: '#ffffff' },
            { name: 'theme-color', content: '#ffffff' },
        ],

        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
        ],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/dotenv',
        '@nuxtjs/recaptcha',
    ],

    recaptcha: {
        hideBadge: false,                   // Hide badge element (v3 & v2 via size=invisible)
        language: 'en',                     // Recaptcha language (v2)
        siteKey: process.env.CAPCHA_PUB,    // Site key for requests
        version: 3,                         // Version
        size: 'compact'                     // Size: 'compact', 'normal', 'invisible' (v2)
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {

        },
    },
};
