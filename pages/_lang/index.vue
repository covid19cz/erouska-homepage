<template>
    <div>
        <section class="hero-wrapper" id="uvod">
            <div class="hero">
                <h2 class="hero__title"><span>Chráním sebe,</span> <br/>chráním tebe!</h2>
                <div class="hero__intro">
                    <p>Aplikace <em>eRouška</em> si díky Bluetooth pamatuje ostatní
                        <em>eRoušky</em>, které jste potkali. Usnadní tak hygienické stanici
                        dohledávání rizikových kontaktů.</p>
                    <p>Přispějte i vy k tomu, aby nakažených koronavirem přibývalo méně.</p>
                </div>
                <ul class="hero__actions">
                    <li><a
                        href="https://play.google.com/store/apps/details?id=cz.covid19cz.erouska"
                        target="_blank" class="button button--blue">Stáhnout pro Android</a></li>
                    <li><span class="button button--disable">Brzy ke stažení pro iOS</span></li>
                </ul>
            </div>

            <div class="hero__example d-none d-md-block">
                <div class="hero__example__phone">
                    <div class="hero__example__phone__screen"></div>
                    <div class="hero__example__phone__frame"></div>
                </div>
                <div class="hero__example__mask"></div>
            </div>

        </section>  <!-- /hero -->

        <main class="main" role="main">

            <section class="section section--first">
                <h2 class="section__title section__title--blue" id="jak-erouska-chrani">Jak eRouška
                    chrání?</h2>
                <h3 class="section__subtitle">eRouška je součástí systému Chytrá karanténa
                    Ministerstva zdravotnictví ČR</h3>
                <div class="section__content">

                    <div class="section__item">
                        <h3>Když jste nakaženého potkali</h3>
                        <p>Když potkáte někoho, u koho se později prokáže koronavirus, hygienická
                            stanice vás bude moci telefonicky kontaktovat. I když jste spolu třeba
                            jen stáli ve frontě v obchodě.</p>
                    </div>

                    <div class="section__item">
                        <h3>Když se nakazíte vy</h3>
                        <p>Pokud se u vás koronavirus prokáže, pracovník hygienické stanice vás
                            požádá o přehled lidí, které jste v posledních dnech potkali. Vy mu
                            jednoduše na jeden klik odešlete anonymní seznam uživatelů eRoušky, se
                            kterými jste byli v rizikovém kontaktu. Včetně těch, které osobně
                            neznáte, jen jste s nimi třeba jeli autobusem.</p>
                        <p><em>Nikdo se z aplikace nedozví, že jste nakaženi koronavirem.</em></p>
                    </div>

                </div>
            </section>

            <section class="section video">
                <div class="section__content">
                    <iframe width="100%" height="400"
                            src="https://www.youtube.com/embed/q_3LmwoM7V8" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                </div>
            </section>

            <section class="section section--last">
                <h2 class="section__title section__title--red" id="erouska-chrani-vase-soukromi">
                    eRouška chrání <br/>vaše soukromí</h2>
                <div class="section__content">

                    <div class="section__item">
                        <h3>Jak se eRouška liší od jiných podobných aplikací?</h3>
                        <p>Na rozdíl od jiných aplikací eRouška nesleduje a nesbírá informace o
                            vaší poloze, ale pouze anonymně zjišťuje, se kterými dalšími uživateli
                            aplikace jste přišli do bližšího kontaktu. Aplikace ke správnému
                            fungování nepotřebuje připojení k internetu, takže funguje například i
                            v metru.</p>
                    </div>

                    <div class="section__item">
                        <h3>Proč je k registraci vyžadováno telefonní číslo?</h3>
                        <p>Telefonní číslo využije hygienická stanice, aby vás mohla co nejdříve
                            kontaktovat, pokud bude mít na základě informací z eRoušky nakaženého
                            člověka podezření, že jste s ním byli v rizikovém kontaktu. Proto
                            telefonní číslo registrujete hned při prvním spuštění eRoušky.</p>
                    </div>

                    <div class="section__item">
                        <h3>Dozví se ostatní moji identitu, pokud onemocním?</h3>
                        <p>Pokud onemocníte, vaše totožnost je známá jen a pouze pracovníkům
                            hygienické stanice. Tak jako doposud. Kritické kontakty se nedozví, kdo
                            je mohl nakazit, ani kde a kdy. Vaše identita je ochráněna. </p>
                    </div>

                    <div class="section__item">
                        <h3>Jakou roli hraje moje jedna instalace? Změní se něco?</h3>
                        <p>Čím více nás bude eRoušku používat, tím lepší vytvoříme síť, která nás
                            bude vzájemně chránit a varovat před rizikem. Spolupracujeme s vládou
                            ČR a dalšími organizacemi na tom, aby se o eRoušce dozvědělo co nejvíce
                            lidí. Pomozte nám i vy. Instalací aplikace se můžete aktivně zapojit do
                            boje proti koronaviru.</p>
                    </div>

                    <div class="section__item">
                        <h3>Kdo eRoušku provozuje? Jsou u vás má data v bezpečí?</h3>
                        <p>Aplikaci vytvořili dobrovolníci spolupracující na platformě <a
                            href="https://covid19cz.cz/" target="_blank">Covid19CZ</a> pod záštitou
                            <a href="https://www.mzcr.cz/" target="_blank">Ministerstva
                                zdravotnictví České republiky</a>. Bezpečnost dat zaštiťuje řada
                            nezávislých odborníků,
                            <nuxt-link to="/audit-kod">včetně zástupců akademické sféry</nuxt-link>
                            .
                        </p>
                    </div>

                    <div class="section__item">
                        <h3>Máte další otázky?</h3>
                        <p>Zajímá vás, na jakých telefonech eRouška funguje? Nebo třeba jaká data
                            eRoušce sdílíte a jaká data sbírá? </p>
                    </div>

                    <ul class="section__actions">
                        <li>
                            <nuxt-link to="/caste-dotazy" class="button button--red">Přejděte do
                                sekce s často kladenými dotazy
                            </nuxt-link>
                        </li>
                    </ul>

                </div>
            </section>
            <box/>
        </main>
    </div>
</template>

<script>
    import Box from '~/components/Box.vue'

    export default {
        components: {
            Box
        },
        head() {
            return {
                bodyAttrs: {
                    class: 'page-homepage'
                }
            }
        }
    }
</script>
