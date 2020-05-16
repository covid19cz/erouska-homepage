<template>
    <div>
        <section class="heading" id="uvod">
            <h1 class="heading__title">{{ $t('web.cookies.title') }}</h1>
        </section>
        <main class="main d-flex" role="main">
            <div>
                <section class="section">
                    <div class="section__content section__item">
                        <h2>{{ $t('web.cookies.heading') }}</h2>
                        <p>{{ $t('web.cookies.intro') }}</p>
                        <h3>{{ $t('web.cookies.control_heading') }}</h3>
                        <p>{{ $t('web.cookies.control') }} <a href="https://tools.google.com/dlpage/gaoptout" target="_blank">tools.google.com/dlpage/gaoptout</a>.</p>
                        <p><b>{{ $t('web.cookies.consent') }}</b></p>
                        <p>{{ $t('web.cookies.more_information') }} <a href="https://www.google.com/analytics" target="_blank">www.google.com/analytics</a> {{
                        $t('web.cookies.more_information_or') }} <a href="https://www.google.com" target="_blank">www.google.com</a>. {{ $t('web.cookies.anonymize') }}</p>
                    </div>
                </section>
            </div>
            <div>
                <download-box/>
            </div>
        </main>
    </div>
</template>

<script>
    import DownloadBox from '~/components/DownloadBox.vue'

    export default {
        components: {
            DownloadBox
        },
        data() {
            return {
                titleTemplate: process.env.titleTemplate,
                pageCode: 'cookies'
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
