
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Cyan ポートフォリオサイト',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Cyan(Hiroyasu:広康)のポートフォリオサイト' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'og:title', content: 'Cyanポートフォリオサイト' },
      { name: 'og:site_name', content: 'Cyan ポートフォリオサイト' },
      { name: 'og:description', content: '' },
      { name: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/portfolio-87c41.appspot.com/o/PublicMaterial%2FCyan%20Twitter%20Card%20v1.0.png?alt=media&token=5541cb6a-3ab4-422c-8208-40a627733a88'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css'}
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-1.12.4.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js' }
    ],
    bodyAttrs: {
      class: 'body-class',
      'data-spy': 'scroll',
      'data-target': '#Navbar'
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#0fbcf9',
    height: '10px'
  },
  /*
  ** Global CSS
  */
  css: [
    'swiper/dist/css/swiper.css',
    '~/assets/transition.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/fb_init.js",
    { src: '~plugins/vue-awesome-swiper', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['vue-scrollto/nuxt', {
      duration: 1000
    }],
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    vendor: [
      'vue-awesome-swiper'
    ]
  }
}
