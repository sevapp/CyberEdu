require('dotenv').config();

export default {
  mode: 'universal',

  env: {
    BOT_URL: process.env.BOT_URL,
  },

  target: 'static',

  components: true,
  telemetry: false,

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
      { name: 'msapplication-TileColor', content: '#ffdd57' },
      { name: 'theme-color', content: '#ffdd57' },
    ],

    // <script src="//cdn.callibri.ru/callibri.js" type="text/javascript" charset="utf-8"></script>

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/icon16x16.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/icon32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/icon16x16.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/icon180x180.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap' }
    ],

    script: [
      {src: '//code.jivosite.com/widget/ePVXakYxO8'},
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/main.scss',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/recaptcha',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '66342778',
        webvisor: true,
        // clickmap: true,
        // useCDN: false,
        // trackLinks: true,
        // accurateTrackBounce: true,
      }
    ],
    '@nuxtjs/device',
    'nuxt-buefy'
  ],

  buefy: {
    materialDesignIcons: false,
    defaultIconPack: 'mdi'
  },

  recaptcha: {
    hideBadge: false,                   // Hide badge element (v3 & v2 via size=invisible)
    language: 'ru',                     // Recaptcha language (v2)
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
