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
                <nav v-if="!isHome" class="header__nav-wrapper d-none d-md-block"
                     role="navigation">
                    <ul class="header__nav">
                        <li>
                            <nuxt-link :to="homeUrlNoTrailingSlash">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6.703" height="11.252" viewDownloadBox="0 0 6.703 11.252"><path d="M.148-7.049a.422.422,0,0,0,0,.6l5.161,5.2a.422.422,0,0,0,.6,0l.7-.7a.422.422,0,0,0,0-.6L2.436-6.75,6.6-10.958a.422.422,0,0,0,0-.6l-.7-.7a.422.422,0,0,0-.6,0Z" transform="translate(-0.024 12.376)" fill="#222"/></svg>
                                <span>{{ $t('web.default.back_to_main_page') }}</span>
                            </nuxt-link>
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
                    <li><a
                        href="https://play.google.com/store/apps/details?id=cz.covid19cz.erouska"
                        target="_blank" class="button button--blue">{{ $t('web.default.download_for_android') }}</a></li>
                    <li><span class="button button--disable">{{ $t('web.default.download_for_ios') }}</span></li>
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
                            <ul class="footer__menu__list footer__menu__list--1">
                                <li><a href="mailto:info@erouska.cz">info@erouska.cz</a></li>
                                <li><a href="mailto:pr@erouska.cz">pr@erouska.cz</a></li>
                            </ul>
                            <ul class="footer__menu__list footer__menu__list--2">
                                <li>
                                    <nuxt-link :to="homeUrl + 'caste-dotazy'">{{ $t('web.faq.link') }}</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link :to="homeUrl + 'tym'">{{ $t('web.team.link') }}</nuxt-link>
                                </li>
                            </ul>
                            <ul class="footer__menu__list footer__menu__list--3">
                                <li>
                                    <nuxt-link :to="homeUrl + 'gdpr'">{{ $t('web.gdpr.link') }}</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link :to="homeUrl + 'audit-kod'">{{ $t('web.audit.link') }}</nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer__col footer__col--2">
                        <ul class="footer__partners">
                            <li><a href="https://covid19cz.cz/" target="_blank"><img
                                src="/img/logo-covid.svg"/><br/><strong>{{ $t('web.default.smart_quarantine') }}</strong></a></li>
                            <li><a href="https://www.mzcr.cz/" target="_blank"><img
                                src="/img/logo-mzcr.svg"/></a></li>
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
                baseUrl: process.env.baseUrl
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
        }
    }
</script>
