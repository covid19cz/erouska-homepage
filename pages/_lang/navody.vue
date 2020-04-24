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
                        <div class="section__item" id="asus">
                            <h3>Asus</h3>
                            <a class="link" href="/navody/Asus/1_zajisteni_behu_eRousky_na_pozadi.pdf" target="_blank">
                                <img class="link__icon" src="/img/fa/file-pdf.svg" />
                                <div class="link__text">
                                    <span class="link__title">Zajištění běhu eRoušky na pozadí</span>
                                    <span class="link__description">PDF, 80 kB</span>
                                </div>
                            </a>
                        </div>
                        <div class="section__item" id="honor">
                            <h3>Honor</h3>
                            <a class="link" href="/navody/Honor/1_vyjimka_z_optimalizace_baterie_pro_eRousku.pdf" target="_blank">
                                <img class="link__icon" src="/img/fa/file-pdf.svg" />
                                <div class="link__text">
                                    <span class="link__title">Výjimka z optimalizace baterie pro eRoušku</span>
                                    <span class="link__description">PDF, 500 kB</span>
                                </div>
                            </a>
                            <a class="link" href="/navody/Honor/2_rucni_zapnuti_behu_eRousky_na_pozadi.pdf" target="_blank">
                                <img class="link__icon" src="/img/fa/file-pdf.svg" />
                                <div class="link__text">
                                    <span class="link__title">Ruční zapnutí běhu eRoušky na pozadí</span>
                                    <span class="link__description">PDF, 500 kB</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <div class="aside d-none d-xl-block">
                    <h3 class="aside__title">Značky</h3>
                    <ul class="aside__actions">
                        <li><a href="#asus" class="aside__anchor">   <div class="aside__anchor__title">Asus</div></a></li>
                        <li><a href="#honor" class="aside__anchor">  <div class="aside__anchor__title">Honor</div></a></li>
                        <li><a href="#huawei" class="aside__anchor"> <div class="aside__anchor__title">Huawei</div></a></li>
                        <li><a href="#lenovo" class="aside__anchor"> <div class="aside__anchor__title">Lenovo</div></a></li>
                        <li><a href="#samsung" class="aside__anchor"><div class="aside__anchor__title">Samsung</div></a></li>
                        <li><a href="#sony" class="aside__anchor">   <div class="aside__anchor__title">Sony</div></a></li>
                        <li><a href="#xiaomi" class="aside__anchor"> <div class="aside__anchor__title">Xiaomi</div></a></li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import BigPicture from 'bigpicture'
    export default {
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
