<template>
    <div>
        <section class="heading" id="uvod">
            <h1 class="heading__title">{{ $t('web.evaluation.title') }}</h1>
        </section>
        <main class="main d-flex" role="main">
            <div>
                <section class="section">
                    <div class="section__content">
                        <div class="section__item">
                            <p>{{ $t('web.evaluation.content.intro.0') }}</p>
                            <ul v-html="$t('web.evaluation.content.intro.1')"></ul>
                            <p v-html="$t('web.evaluation.content.intro.2')"></p>
                            <p>{{ $t('web.evaluation.content.intro.3') }}</p>
                            <p>{{ $t('web.evaluation.content.intro.4') }}</p>
                            <p>{{ $t('web.evaluation.content.intro.5') }}</p>
                            <p>{{ $t('web.evaluation.content.intro.6') }}</p>
                            <p><em>{{ $t('web.evaluation.content.intro.7') }}</em></p>
                            <h2>{{ $t('web.evaluation.content.evaluation.0') }}</h2>
                            <p>{{ $t('web.evaluation.content.evaluation.1') }}</p>
                            <p>{{ $t('web.evaluation.content.evaluation.2') }}</p>
                            <p v-html="$t('web.evaluation.content.evaluation.3')"></p>
                            <p>{{ $t('web.evaluation.content.evaluation.4') }}</p>
                            <p>{{ $t('web.evaluation.content.evaluation.5') }}</p>
                            <p>{{ $t('web.evaluation.content.evaluation.6') }}</p>
                            <h2>{{ $t('web.evaluation.content.way.0') }}</h2>
                            <p>{{ $t('web.evaluation.content.way.1') }}</p>
                            <h3>{{ $t('web.evaluation.content.contagiousness.0') }}</h3>
                            <p>{{ $t('web.evaluation.content.contagiousness.1') }}</p>
                            <p>{{ $t('web.evaluation.content.contagiousness.2') }}</p>
                            <p>{{ $t('web.evaluation.content.contagiousness.3') }}</p>
                            <h3>{{ $t('web.evaluation.content.basket.0') }}</h3>
                            <p>{{ $t('web.evaluation.content.basket.1') }}</p>
                            <p>{{ $t('web.evaluation.content.basket.2') }}</p>
                            <ul v-html="$t('web.evaluation.content.basket.3')"></ul>
                            <p><img src="/img/baskets2.png" :alt="$t('web.evaluation.content.basket.4')"></p>
                            <p>{{ $t('web.evaluation.content.basket.5') }}</p>
                            <p>{{ $t('web.evaluation.content.basket.6') }}</p>
                            <p>{{ $t('web.evaluation.content.basket.7') }}</p>
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
                pageCode: 'evaluation'
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
                    class: 'page--background-shifted page--conditions'
                }
            }
        }
    }
</script>
