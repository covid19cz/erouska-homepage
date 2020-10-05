<template>
    <div>
        <section class="heading" id="uvod">
            <h1 class="heading__title">{{ $t('web.sms.title') }}</h1>
            <div class="heading__perex">
                <p>{{ $t('web.sms.perex') }}</p>
            </div>
        </section>
        <main class="main d-flex" role="main">
            <div>
                <section class="section">
                    <div class="section__content">
                        <div class="section__item">
                            <h2 class="h3">{{ $t('web.sms.questions.where.question') }}</h2>
                            <p>{{ $t('web.sms.questions.where.answer.text_1') }}</p>
                            <ol v-html="$t('web.sms.questions.where.answer.steps')"></ol>
                            <p>{{ $t('web.sms.questions.where.answer.text_2') }}</p>
                        </div>
                        <div class="section__item">
                            <h2 class="h3">{{ $t('web.sms.questions.expiration.question') }}</h2>
                            <p v-html="$t('web.sms.questions.expiration.answer')"></p>
                        </div>
                        <div class="section__item">
                            <h2 class="h3">{{ $t('web.sms.questions.why.question') }}</h2>
                            <p>{{ $t('web.sms.questions.why.answer') }}</p>
                        </div>
                        <div class="section__item">
                            <h2 class="h3">{{ $t('web.sms.questions.error.question') }}</h2>
                            <p v-html="$t('web.sms.questions.error.answer')"></p>
                        </div>
                        <div class="section__item">
                            <h2 class="h3">{{ $t('web.sms.questions.identity.question') }}</h2>
                            <p v-html="$t('web.sms.questions.identity.answer.text_1')"></p>
                            <p>{{ $t('web.sms.questions.identity.answer.text_2') }}</p>
                        </div>
                        <div class="section__item">
                            <h2 class="h3">{{ $t('web.sms.questions.install.question') }}</h2>
                            <p v-html="$t('web.sms.questions.install.answer')"></p>
                        </div>
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
                pageCode: 'sms'
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
                ],
                bodyAttrs: {
                    class: 'page--background-shifted'
                }
            }
        },
        computed: {
            homeUrl() {
                return this.$i18n.locale != this.$i18n.fallbackLocale ? "/" + this.$i18n.locale + "/" : "/";
            }
        }
    }
</script>
