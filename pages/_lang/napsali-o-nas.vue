<template>
    <div>
        <section class="heading" id="uvod">
            <h1 class="heading__title">{{ $t('web.press.title') }}</h1>
        </section>
        <main class="main d-flex" role="main">
            <div>
                <section class="section">
                    <div class="section__content">
                        <template v-for="(link, key) in press">
                            <h2 v-if="link.type == 'heading'" class="section__subtitle section__subtitle__press">{{ link.name }}</h2>
                            <div v-else class="section__item faq__item" :key="key">
                                <a class="link" :href="link.url" target="_blank">
                                    <div class="link__icon-container">
                                        <div :class="{ligray: link.lang != 'cs'}">
                                            <img v-if="link.type == 'text'" class="link__icon" src="/img/fa/newspaper.svg" />
                                            <img v-else-if="link.type == 'video'" class="link__icon" src="/img/fa/film.svg" />
                                        </div>
                                        <div></div>
                                    </div>
                                    <div class="link__text">
                                        <span class="link__title">{{ link.name.replace(/(?<=[\s(])([kvszaiou])\s/gi, "$1\u00A0") }}</span>
                                        <span class="link__description">{{ link.medium }}, {{ $d(new Date(link.date)) }}</span>
                                    </div>
                                </a>
                            </div>
                        </template>
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
    import pressJson from '~/assets/press.json'
    import DownloadBox from '~/components/DownloadBox.vue'

    export default {
        components: {
            DownloadBox
        },
        data() {
            return {
                press: pressJson,
                titleTemplate: process.env.titleTemplate,
                pageCode: 'press'
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
                    class: 'page--press'
                }
            }
        }
    }
</script>
