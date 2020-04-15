export default {
    mode: 'universal',
    env: {
        description: 'Mobilní aplikace eRouška usnadní vyhledávání lidí s rizikem nákazy koronavirem v Česku v rámci systému Chytré karantény',
        defaultLanguage: 'cs',
        locales: ['cs', 'en'],
    },
    generate: {
        routes: [
            '/cs', '/cs/audit-kod', '/cs/caste-dotazy', '/cs/gdpr', '/cs/tym',
            '/en', '/en/audit-kod', '/en/caste-dotazy', '/en/gdpr', '/en/tym'
        ],
        fallback: true
    },
    /*
    ** Headers of the page
    */
    head() {
        return {
            title: 'eRouška – chráním sebe, chráním tebe',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {hid: 'description', name: 'description', content: process.env.description},

                {property: 'og:type', content: 'website'},
                {property: 'og:url', content: 'https://erouska.cz'},
                {property: 'og:title', content: 'eRouška - Chráním sebe, chráním tebe'},
                {property: 'og:description', content: process.env.description},
                {property: 'og:image', content: 'https://erouska.cz/img/share-banner.png'},

                {property: 'twitter:card', content: 'summary_large_image'},
                {property: 'twitter:url', content: 'https://erouska.cz'},
                {property: 'twitter:title', content: 'eRouška - Chráním sebe, chráním tebe'},
                {property: 'twitter:description', content: process.env.description},
                {property: 'twitter:image', content: 'https://erouska.cz/img/share-banner.png'}
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
                {
                    rel: 'stylesheet',
                    'href': 'https://fonts.googleapis.com/css?family=Merriweather:400,700|Open+Sans:400,400i,700,700i&display=swap&subset=latin-ext'
                },
            ],
            script: [
                {src: 'https://code.jquery.com/jquery-3.4.1.min.js'},
                {src: '/main.js'}
            ]
        }
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
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
    buildModules: [],
    /*
    ** Nuxt.js modules
    */
    modules: [],
    /*
    ** Build configuration
    */
    build: {
        extractCSS: true,
        extend(config, ctx) {
        }
    }
}
