<template>
    <div class="container-global">
        <div class="container">
            <header class="header" role="banner">
                <div class="header__logo-wrapper">
                    <h1 class="header__logo">
                        <nuxt-link :to="homeUrlNoTrailingSlash">
                            <img src="/img/logo.svg" alt="eRouška"/>
                        </nuxt-link>
                    </h1>
                </div>
                <nav class="header__nav-wrapper" role="navigation">
                    <ul class="header__nav">
                        <li v-if="!isHome" class="d-none d-md-flex">
                            <nuxt-link :to="homeUrlNoTrailingSlash">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6.703" height="11.252" viewDownloadBox="0 0 6.703 11.252"><path d="M.148-7.049a.422.422,0,0,0,0,.6l5.161,5.2a.422.422,0,0,0,.6,0l.7-.7a.422.422,0,0,0,0-.6L2.436-6.75,6.6-10.958a.422.422,0,0,0,0-.6l-.7-.7a.422.422,0,0,0-.6,0Z" transform="translate(-0.024 12.376)" fill="#222"/></svg>
                                <span>{{ $t('web.default.back_to_main_page') }}</span>
                            </nuxt-link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="22" viewBox="0 0 11.90625 5.8208335" style="opacity:0.2"><g transform="translate(0,-291.17914)"><circle style="fill:#228ed5" cx="5.953125" cy="294.08957" r="0.66145831"/></g></svg>
                        </li>
                        <li class="header__nav__lang-switch">
                            <div class="lang-switch--inner d-inline-flex">
                                <div class="d-sm-none d-block">
                                    <span class="d-none d-sm-inline">{{ localeCaptions[$i18n.locale] }}</span>
                                    <span v-for="(lang, key) in locales" v-if="lang != $i18n.locale">
                                        <nuxt-link :to="link(lang)">{{ localeCaptions[lang] || lang }}</nuxt-link>
                                    </span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z"/></svg>
                                <div class="d-none d-sm-block">
                                    <span class="d-none d-sm-inline">{{ localeCaptions[$i18n.locale] }}</span>
                                    <span v-for="(lang, key) in locales" v-if="lang != $i18n.locale">
                                        <nuxt-link :to="link(lang)">{{ localeCaptions[lang] || lang }}</nuxt-link>
                                    </span>
                                </div>
                                <svg class="d-none d-sm-inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
            <nuxt/>
        </div>
        <div class="claim">
            <div class="container">
                <h2 class="claim__title">{{ $t('web.default.before_you_go_out') }}<br>{{ $t('web.default.use_erouska_too') }}</h2>
                <ul class="claim__actions">
                    <li><a href="https://play.google.com/store/apps/details?id=cz.covid19cz.erouska" @click="$ga.event('Download', 'Android', 'claim')"
                           target="_blank" class="button button--blue">{{ $t('web.index.download.android') }}</a></li>
                    <li><a href="https://apps.apple.com/cz/app/erouška/id1509210215" @click="$ga.event('Download', 'iOS', 'claim')"
                           target="_blank" class="button button--blue">{{ $t('web.index.download.ios') }}</a></li>
                </ul>
            </div>
        </div>
        <footer class="footer">
            <div class="container">
                <div class="footer__content">
                    <div class="footer__col footer__col--1">
                        <div class="footer__logo">
                            <nuxt-link :to="homeUrlNoTrailingSlash">
                                <img src="/img/logo.svg" alt="eRouška"/>
                            </nuxt-link>
                        </div>
                        <div class="footer__menu">
                            <ul class="footer__menu__list">
                                <li><a href="mailto:info@erouska.cz">info@erouska.cz</a></li>
                                <li>
                                    <nuxt-link :to="homeUrl + 'napsali-o-nas'">{{ $t('web.press.link') }}</nuxt-link>
                                </li>
                            </ul>
                            <ul class="footer__menu__list">
                                <li>
                                    <nuxt-link :to="homeUrl + 'navody'">{{ $t('web.instructions.link') }}</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link :to="homeUrl + 'tym'">{{ $t('web.team.link') }}</nuxt-link>
                                </li>
                            </ul>
                            <ul class="footer__menu__list">
                                <li>
                                    <nuxt-link :to="homeUrl + 'gdpr'">{{ $t('web.gdpr.link') }}</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link :to="homeUrl + 'audit-kod'">{{ $t('web.audit.link') }}</nuxt-link>
                                </li>
                            </ul>
                            <ul class="footer__menu__list">

                            </ul>
                        </div>
                    </div>
                    <div class="footer__col footer__col--2">
                        <ul class="footer__partners">
                            <li><a href="https://www.mzcr.cz/" target="_blank"><img src="/img/logo-mzcr.svg" /></a></li>
                            <li><a href="https://nakit.cz/" target="_blank"><img src="/img/logo-nakit.svg" /></a></li>
                        </ul>
                        <ul class="footer__social">
                            <li><a href="https://www.youtube.com/channel/UCODB2mRD77lT739s_R9E4dQ" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="red"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg></a></li>
                            <li><a href="https://www.facebook.com/eRouska/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#3b5998"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg></a></li>
                            <li><a href="https://twitter.com/RouskaE" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#1da1f2"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                baseUrl: process.env.baseUrl,
                locales: process.env.locales,
                localeCaptions: process.env.localeCaptions,
                defaultLanguage: process.env.defaultLanguage
            }
        },
        head() {
            return {
                meta: [
                    {property: 'og:url', content: this.baseUrl + this.$nuxt.$route.path},
                    {property: 'twitter:url', content: this.baseUrl + this.$nuxt.$route.path}
                ]
            }
        },
        computed: {
            homeUrl() {
                return this.$i18n.locale != this.$i18n.fallbackLocale ? "/" + this.$i18n.locale + "/" : "/";
            },
            homeUrlNoTrailingSlash() {
                return this.$i18n.locale != this.$i18n.fallbackLocale ? "/" + this.$i18n.locale : "/";
            },
            isHome() {
                return this.$nuxt.$route.path.replace(/\//g, "") === this.homeUrl.replace(/\//g, "");
            }
        },
        methods: {
            link(lang) {
                let route = this.isHome ? '' : this.$nuxt.$route.path.replace('/' + this.$i18n.locale, '');
                let langPart = '/' + lang;
                if (lang == this.defaultLanguage) {
                    return (route ? route : '/');
                }
                return langPart + route;
            }
        }
    }
</script>
