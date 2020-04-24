<template>
    <div>
        <section class="heading" id="uvod">
            <h1 class="heading__title">Návody</h1>
        </section>  <!-- /heading -->
        <main class="main main--flex" role="main">
            <div>
                <section class="section" id="instalace">
                    <h2 class="section__subtitle">Instalace aplikace eRouška</h2>
                    <div class="section__content section__item">
                        <p>Pro stažení eRoušky postupujte podle jednoho z následujících návodů:</p>
                        <a class="link" href="/navody/instalace_aplikace_eRouska.pdf" target="_blank">
                            <img class="link__icon" src="/img/fa/file-pdf.svg" />
                            <div class="link__text">
                                <span class="link__title">Návod na instalaci aplikace eRouška</span>
                                <span class="link__description">PDF, 700 kB</span>
                            </div>
                        </a>
                        <a class="link" href="https://youtu.be/hVu71yWAIcA" target="_blank" @click.prevent="openVideo($event, 'hVu71yWAIcA')">
                            <img class="link__icon" src="/img/fa/play-circle.svg" />
                            <div class="link__text">
                                <span class="link__title">Instalace aplikace na Android</span>
                                <span class="link__description">Video, 2 minuty</span>
                            </div>
                        </a>
                    </div>
                </section>
                <section class="section" id="nastaveni">
                    <h2 class="section__subtitle">Nastavení pro jednotlivé značky telefonů</h2>
                    <div class="section__content">
                        <div class="section__item">
                            <p>Na odkazech níže najdete stručné návody pro nejpoužívanější telefony, v jejichž nastavení je potřeba zakázat automatické vypínání aplikace eRouška:</p>
                        </div>
                        <div class="section__item" v-for="brand in instructions" :id="brand.brand_id">
                            <h3>{{ 'web.instructions.brands.' + brand.brand_id + '.name' }}</h3>
                            <template v-for="link in brand.links">
                                <a v-if="link.type === 0" class="link" :href="'/navody/' + brand.brand_folder + '/' + link.src + '.pdf'" target="_blank">
                                    <img class="link__icon" src="/img/fa/file-pdf.svg" />
                                    <div class="link__text">
                                        <span class="link__title">{{ 'web.instructions.brands.' + brand.brand_id + '.links.' + link.id + '.title' }}</span>
                                        <span class="link__description">{{ 'web.instructions.brands.' + brand.brand_id + '.links.' + link.id + '.description' }}</span>
                                    </div>
                                </a>
                                <a v-else class="link" :href="'https://youtu.be/' + link.src" target="_blank" @click.prevent="openVideo($event, link.src)">
                                    <img class="link__icon" src="/img/fa/play-circle.svg" />
                                    <div class="link__text">
                                        <span class="link__title">{{ 'web.instructions.brands.' + brand.brand_id + '.links.' + link.id + '.title' }}</span>
                                        <span class="link__description">{{ 'web.instructions.brands.' + brand.brand_id + '.links.' + link.id + '.description' }}</span>
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
                            <a :href="'#' + brand.brand_id" class="aside__anchor"><div class="aside__anchor__title">{{ 'web.instructions.brands.' + brand.brand_id + '.name' }}</div></a>
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
                instructions: instructionsJson
            }
        },
        head() {
            return {
                title: "Návody", //this.$t('web.faq.page_title'),
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
