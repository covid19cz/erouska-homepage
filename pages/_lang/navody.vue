<template>
    <div>
        <section class="heading" id="uvod">
            <h1 class="heading__title">{{ $t('web.instructions.title') }}</h1>
        </section>
        <main class="main d-flex" role="main">
            <div>
                <section class="section" id="instalace">
                    <h2 class="section__subtitle">{{ $t('web.instructions.installation.android.title') }}</h2>
                    <div class="section__content section__item">
                        <p>{{ $t('web.instructions.installation.android.text') }}</p>
                        <a class="link" href="/navody/instalace_aplikace_eRouska.pdf" target="_blank">
                            <div class="link__icon-container">
                                <div>
                                    <img class="link__icon" src="/img/fa/file-pdf.svg" />
                                </div>
                            </div>
                            <div class="link__text">
                                <span class="link__title">{{ $t('web.instructions.installation.android.links.pdf') }}</span>
                                <span class="link__description">{{ $t('web.instructions.descriptions.pdf_comma') + ' 700 ' + $t('web.instructions.descriptions.kilobytes') }}</span>
                            </div>
                        </a>
                        <a class="link" href="https://youtu.be/hVu71yWAIcA" target="_blank" @click.prevent="openVideo($event, 'hVu71yWAIcA')">
                            <div class="link__icon-container">
                                <div>
                                    <img class="link__icon" src="/img/fa/play-circle.svg" />
                                </div>
                            </div>
                            <div class="link__text">
                                <span class="link__title">{{ $t('web.instructions.installation.android.links.youtube') }}</span>
                                <span class="link__description">{{ $t('web.instructions.descriptions.video_comma') + ' 2 ' + $t('web.instructions.descriptions.minutes') }}</span>
                            </div>
                        </a>
                    </div>
                </section>
                <section class="section" id="nastaveni">
                    <h2 class="section__subtitle">{{ $t('web.instructions.settings.title') }}</h2>
                    <div class="section__content">
                        <div class="section__item">
                            <p>{{ $t('web.instructions.settings.text') }}</p>
                        </div>
                        <div class="section__item" v-for="brand in instructions" :id="brand.brand_id">
                            <h3>{{ $t('web.instructions.settings.brands.' + brand.brand_id + '.name') }}</h3>
                            <template v-for="link in brand.links">
                                <a v-if="link.type === 'pdf'" class="link" :href="'/navody/' + brand.brand_folder + '/' + link.src + '.pdf'" target="_blank">
                                    <div class="link__icon-container">
                                        <div>
                                            <img class="link__icon" src="/img/fa/file-pdf.svg" />
                                        </div>
                                    </div>
                                    <div class="link__text">
                                        <span class="link__title">{{ $t('web.instructions.settings.brands.' + brand.brand_id + '.links.' + link.id) }}</span>
                                        <span class="link__description">{{ $t('web.instructions.descriptions.pdf_comma') + ' ' + link.size + ' ' + $t('web.instructions.descriptions.kilobytes') }}</span>
                                    </div>
                                </a>
                                <a v-else-if="link.type === 'youtube'" class="link" :href="'https://youtu.be/' + link.src" target="_blank" @click.prevent="openVideo($event, link.src)">
                                    <div class="link__icon-container">
                                        <div>
                                            <img class="link__icon" src="/img/fa/play-circle.svg" />
                                        </div>
                                    </div>
                                    <div class="link__text">
                                        <span class="link__title">{{ $t('web.instructions.settings.brands.' + brand.brand_id + '.links.' + link.id) }}</span>
                                        <span class="link__description">{{ $t('web.instructions.descriptions.video_comma') + ' ' + link.size + ' ' + $t('web.instructions.descriptions.minutes') }}</span>
                                    </div>
                                </a>
                            </template>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <div class="aside d-none d-xl-block">
                    <h3 class="aside__title">Značky</h3>
                    <ul class="aside__actions">
                        <li v-for="brand in instructions">
                            <a :href="'#' + brand.brand_id" class="aside__anchor"><div class="aside__anchor__title">{{ $t('web.instructions.settings.brands.' + brand.brand_id + '.name') }}</div></a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import instructionsJson from '~/assets/instructions.json'
    import BigPicture from 'bigpicture'

    export default {
        data() {
            return {
                instructions: instructionsJson,
                titleTemplate: process.env.titleTemplate
            }
        },
        head() {
            return {
                title: this.$t('web.instructions.page_title') + this.titleTemplate,
                meta: [
                    {name: 'description', content: this.$t('web.instructions.description')},
                    {property: 'og:title', content: this.$t('web.instructions.page_title') + this.titleTemplate},
                    {property: 'og:description', content: this.$t('web.instructions.description')},
                    {property: 'twitter:title', content: this.$t('web.instructions.page_title') + this.titleTemplate},
                    {property: 'twitter:description', content: this.$t('web.instructions.description')}
                ],
                bodyAttrs: {
                    class: 'page-single page-caste-dotazy page-navody'
                }
            }
        },
        methods: {
            openVideo(e, id) {
                BigPicture({
                    el: e.target,
                    ytSrc: id
                })
            }
        }
    }
</script>
