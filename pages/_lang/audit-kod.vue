<template>
    <div>
        <section class="heading" id="uvod">
            <h1 class="heading__title">{{ $t('web.audit.title') }}</h1>
        </section>
        <main class="main" role="main">
            <section class="section section--full">
                <div class="section__content">
                    <div class="section__item">
                        <i18n path="web.audit.section1.perex" tag="p">
                            <nuxt-link :to="homeUrl + 'gdpr'">{{ $t('web.audit.section1.perex_gdpr') }}</nuxt-link>
                        </i18n>
                        <i18n path="web.audit.section1.open_source.text" tag="p">
                            <a href="https://github.com/covid19cz/erouska-android" target="_blank">{{ $t('web.audit.section1.open_source.android') }}</a>
                            <a href="https://github.com/covid19cz/erouska-ios" target="_blank">{{ $t('web.audit.section1.open_source.ios') }}</a>
                            <a href="https://www.apple.com/covid19/contacttracing" target="_blank">{{ $t('web.audit.section1.open_source.apple_info') }}</a>
                            <a href="https://www.google.com/covid19/exposurenotifications/" target="_blank">{{ $t('web.audit.section1.open_source.google_info') }}</a>
                        </i18n>
                    </div>
                    <div class="section__item">
                        <h3>{{ $t('web.audit.section1.audits_v1') }}</h3>
                        <ul>
                            <li><a href="/downloads/cvut.pdf" target="_blank">{{ $t('web.audit.section1.review_cvut_1') }}</a></li>
                            <li><a href="/downloads/cvut2.pdf" target="_blank">{{ $t('web.audit.section1.review_cvut_2') }}</a></li>
                            <li><a href="https://www.linkedin.com/pulse/aplikace-erou%C5%A1ka-m%C3%A1-moji-d%C5%AFv%C4%9Bru-ond%C5%99ej-vesel%C3%BD"
                                   target="_blank">{{ $t('web.audit.section1.review_vesely') }}</a></li>
                            <li><a href="https://idea.cerge-ei.cz/vystupy/vyuziti-technologie-bluetooth-pro-trasovani-sireni-covid-19"
                                   target="_blank">{{ $t('web.audit.section1.review_cerge') }}</a></li>
                            <li><a href="/downloads/cvut3.pdf" target="_blank">{{ $t('web.audit.section1.review_cvut_3') }}</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                titleTemplate: process.env.titleTemplate,
                pageCode: 'audit'
            }
        },
        head() {
            return {
                title: this.$t('web.' + this.pageCode + '.page_title') + this.titleTemplate,
                meta: [
                    {name: 'description', content: this.$t('web.' + this.pageCode + '.description')},
                    {property: 'og:title', content: this.$t('web.' + this.pageCode + '.page_title') + this.titleTemplate},
                    {property: 'og:description', content: this.$t('web.' + this.pageCode + '.description')},
                    {property: 'twitter:title', content: this.$t('web.' + this.pageCode + '.page_title') + this.titleTemplate},
                    {property: 'twitter:description', content: this.$t('web.' + this.pageCode + '.description')}
                ]
            }
        },
        computed: {
            homeUrl() {
                return this.$i18n.locale != this.$i18n.fallbackLocale ? "/" + this.$i18n.locale + "/" : "/";
            }
        }
    }
</script>
