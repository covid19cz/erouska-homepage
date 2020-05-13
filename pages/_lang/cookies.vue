<template>
    <div>
        <section class="heading" id="uvod">
            <h1 class="heading__title">Cookies</h1>
        </section>
        <main class="main d-flex" role="main">
            <div>
                <section class="section">
                    <h2 class="section__subtitle">Jak využíváme cookies?</h2>
                    <div class="section__content section__item">
                        <p>Zatím nijak.</p>
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
                titleTemplate: process.env.titleTemplate
            }
        },
        head() {
            return {
                // title: this.$t('web.gdpr.page_title') + this.titleTemplate,
                meta: [
                    // {name: 'description', content: this.$t('web.gdpr.description')},
                    // {property: 'og:title', content: this.$t('web.gdpr.page_title') + this.titleTemplate},
                    // {property: 'og:description', content: this.$t('web.gdpr.description')},
                    // {property: 'twitter:title', content: this.$t('web.gdpr.page_title') + this.titleTemplate},
                    // {property: 'twitter:description', content: this.$t('web.gdpr.description')}
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
