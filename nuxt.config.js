
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'eRouška – chráním sebe, chráním tebe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mobilní aplikace eRouška usnadní vyhledávání lidí s rizikem nákazy koronavirem v Česku v rámci systému Chytré karantény' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', 'href': 'https://fonts.googleapis.com/css?family=Merriweather:400,700|Open+Sans:400,400i,700,700i&display=swap&subset=latin-ext' },
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.4.1.min.js' },
      { src: '/main.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~~assets/styles.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  router: {
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js'],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
