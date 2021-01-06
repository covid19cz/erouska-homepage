<template>
    <div>
        <section class="heading" id="uvod">
            <h1 class="heading__title">{{ $t('web.downloads.title') }}</h1>
        </section>
        <main class="main d-flex" role="main">
            <div>
                <section class="section">
                    <div class="section__content">
                        <div class="section__item">
                            <p>{{ $t('web.downloads.summary') }}</p>
                        </div>
                        <div class="section__item">
                            <template v-for="link in downloads.ready">
                                <h2 class="h3 h3--margin-top" v-if="link.type == 'heading'" :id="link.id">{{ link.text }}</h2>
                                <a class="link" v-else :href="[link.type == 'youtube' ? link.src : '/downloads/' + link.src + '.' + link.type]" target="_blank">
                                    <div class="link__icon-container">
                                        <div>
                                            <img v-if="link.type === 'pdf'" class="link__icon" src="/img/fa/file-pdf.svg" />
                                            <img v-else-if="link.type === 'svg'" class="link__icon" :src="'/downloads/' + link.src + '.' + link.type" />
                                            <img v-else-if="link.type === 'youtube'" class="link__icon" src="/img/fa/youtube.svg" />
                                            <img v-else-if="link.type === 'zip'" class="link__icon" src="/img/fa/file-archive.svg" />
                                        </div>
                                    </div>
                                    <div class="link__text">
                                        <span class="link__title">{{ link.text }}</span>
                                        <span v-if="link.type === 'youtube'" class="link__description">{{ 'YouTube, ' + link.size }}</span>
                                        <span v-else class="link__description">{{ link.type.toUpperCase() + ', ' + $n(link.size) + ' kB' }}</span>
                                    </div>
                                </a>
                            </template>
                        </div>
                        <div class="section__item">
                            <p>Pokud v materiálech naleznete nepřesnost, tiskovou chybu nebo potřebujete jejich úpravu, napište nám prosím na <a href="mailto:info@erouska.cz">info@erouska.cz</a>.</p>
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
    import downloadsJson from '~/assets/downloads.json'

    export default {
        components: {
            DownloadBox
        },
        data() {
            return {
                titleTemplate: process.env.titleTemplate,
                pageCode: 'downloads',
                downloads: downloadsJson
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
        }
    }
</script>
