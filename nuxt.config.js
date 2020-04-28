const locales = ['cs', 'en'];
const pages = ['', 'audit-kod', 'caste-dotazy', 'gdpr', 'tym', 'navody'];
const routes = [];
for (const locale of locales) {
    for (const page of pages) {
        const url = page === '' ? '' : `/${page}`;
        routes.push(`/${locale}${url}`);
    }
}

export default {
    mode: 'universal',
    env: {
        titleTemplate: ' – eRouška',
        baseUrl: 'https://erouska.cz',
        // description: 'Mobilní aplikace eRouška usnadní vyhledávání lidí s rizikem nákazy koronavirem v Česku v rámci systému Chytré karantény.',
        defaultLanguage: 'cs',
        locales
    },
    generate: {
        routes,
        fallback: true
    },
    /*
    ** Headers of the page
    */
    head() {
        return {
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                // {hid: 'description', name: 'description', content: process.env.description},

                {property: 'og:type', content: 'website'},
                // {property: 'og:url', content: 'https://erouska.cz'},
                // {property: 'og:title', content: 'eRouška – chráním sebe, chráním tebe'},
                // {property: 'og:description', content: process.env.description},
                {property: 'og:image', content: 'https://erouska.cz/img/share-banner.png'},

                {property: 'twitter:card', content: 'summary_large_image'},
                // {property: 'twitter:url', content: 'https://erouska.cz'},
                // {property: 'twitter:title', content: 'eRouška – chráním sebe, chráním tebe'},
                // {property: 'twitter:description', content: process.env.description},
                {property: 'twitter:image', content: 'https://erouska.cz/img/share-banner.png'},

                {name: 'msapplication-TileColor', content: '#b91d47'},
                {name: 'theme-color', content: '#ffffff'}
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
                {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
                {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
                {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
                {rel: 'manifest', href: '/site.webmanifest'},
                {rel: 'mask-icon', href: '/safari-pinned-tab.svg" color="#ff0d58'},
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather:400,700|Open+Sans:400,400i,700,700i&display=swap&subset=latin-ext'}
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
