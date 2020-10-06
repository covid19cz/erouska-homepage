<template>
    <div>
        <section class="hero-wrapper" id="uvod">
            <div class="hero">
                <h2 class="hero__title"><span>{{ $t('web.index.title.part_1') }}</span> <br>{{ $t('web.index.title.part_2') }}</h2>
                <div class="hero__intro">
                    <p v-html="$t('web.index.intro.part_1')"></p>
                    <p v-html="$t('web.index.intro.part_1_extended')"></p>
                    <p v-html="$t('web.index.intro.part_2')"></p>
                </div>
                <ul class="hero__actions">
                    <li><a href="https://play.google.com/store/apps/details?id=cz.covid19cz.erouska" @click="$ga.event('Download', 'Android', 'hero')"
                           target="_blank" class="button button--blue">{{ $t('web.index.download.android') }}</a></li>
                    <li><a href="https://apps.apple.com/cz/app/erouška/id1509210215" @click="$ga.event('Download', 'iOS', 'hero')"
                           target="_blank" class="button button--blue">{{ $t('web.index.download.ios') }}</a></li>
                </ul>
            </div>
            <div class="hero__example d-none d-md-block">
                <div class="hero__example__phone">
                    <div class="hero__example__phone__screen"></div>
                    <div class="hero__example__phone__frame"></div>
                </div>
                <div class="hero__example__mask"></div>
            </div>
        </section>
        <main class="main d-flex" role="main">
            <div>
                <section class="section section--first">
                    <h2 class="section__title section__title--blue" id="jak-erouska-chrani">{{ $t('web.index.key_message') }}</h2>
                    <h3 class="section__subtitle">{{ $t('web.index.smart_quarantine') }}</h3>
                    <div class="section__content">
                        <div class="section__item">
                            <h3>{{ $t('web.index.you_have_meet_infected.question') }}</h3>
                            <p>{{ $t('web.index.you_have_meet_infected.answer') }}</p>
                        </div>
                        <div class="section__item">
                            <h3>{{ $t('web.index.when_you_become_infected.question') }}</h3>
                            <p>{{ $t('web.index.when_you_become_infected.answer_1') }}</p>
                            <p>
                                <em>{{ $t('web.index.when_you_become_infected.answer_2') }}</em>
                                <strong>{{ $t('web.index.when_you_become_infected.answer_3') }} <a
                                    href="/img/infografika.png"
                                    target="_blank"
                                    @click.prevent="openPicture($event, '/img/infografika.png')"
                                >{{ $t('web.index.when_you_become_infected.answer_4') }}</a>.</strong>
                            </p>
                        </div>
                    </div>
                </section>
                <section class="section video">
                    <div class="section__content">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube-nocookie.com/embed/MIxb-DWwJ4A?rel=0"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </section>
                <section class="section section--last">
                    <h2 class="section__title section__title--red" id="erouska-chrani-vase-soukromi">{{ $t('web.index.your_privacy.part_1') }} <br>{{ $t('web.index.your_privacy.part_2') }}</h2>
                    <div class="section__content">
                        <div class="section__item">
                            <h3>{{ $t('web.index.how_does_erouska_differ.question') }}</h3>
                            <p>{{ $t('web.index.how_does_erouska_differ.answer') }}</p>
                        </div>
                        <div class="section__item">
                            <h3>{{ $t('web.index.me_identity.question') }}</h3>
                            <i18n path="web.index.me_identity.answer" tag="p">
                                <nuxt-link :to="homeUrl + 'podminky-pouzivani'">{{ $t('web.index.me_identity.link') }}</nuxt-link>
                            </i18n>
                        </div>
                        <div class="section__item">
                            <h3>{{ $t('web.index.will_one_installation_matter.question') }}</h3>
                            <p>{{ $t('web.index.will_one_installation_matter.answer') }}</p>
                        </div>
                        <div class="section__item">
                            <h3>{{ $t('web.index.who_is_running_it.question') }}</h3>
                            <i18n path="web.index.who_is_running_it.answer.text" tag="p">
                                <nuxt-link :to="homeUrl + 'audit-kod'">{{ $t('web.index.who_is_running_it.answer.independent_audits') }}</nuxt-link>
                                <a href="https://www.mzcr.cz/" target="_blank">{{ $t('web.index.who_is_running_it.answer.ministry') }}</a>
                                <a href="https://nakit.cz/" target="_blank">{{ $t('web.index.who_is_running_it.answer.nakit') }}</a>
                            </i18n>
                        </div>
                        <div class="section__item">
                            <h3>{{ $t('web.index.who_made_it.question') }}</h3>
                            <i18n path="web.index.who_made_it.answer.text" tag="p">
                                <nuxt-link :to="homeUrl + 'tym'">{{ $t('web.index.who_made_it.answer.dev_team') }}</nuxt-link>
                            </i18n>
                        </div>
                        <div class="section__item">
                            <h3>{{ $t('web.index.further_questions.question') }}</h3>
                            <p>{{ $t('web.index.further_questions.more') }}</p>
                        </div>
                        <ul class="section__actions">
                            <li>
                                <nuxt-link :to="homeUrl + 'caste-dotazy'" class="button button--red">{{ $t('web.index.further_questions.goto') }}</nuxt-link>
                            </li>
                        </ul>
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
    import BigPicture from 'bigpicture'

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
                title: 'eRouška – ' + this.$t('web.motto'),
                meta: [
                    {name: 'description', content: this.$t('web.index.description')},
                    {property: 'og:title', content: 'eRouška – ' + this.$t('web.motto')},
                    {property: 'og:description', content: this.$t('web.index.description')},
                    {property: 'twitter:title', content: 'eRouška – ' + this.$t('web.motto')},
                    {property: 'twitter:description', content: this.$t('web.index.description')}
                ],
                bodyAttrs: {
                    class: 'page--homepage'
                }
            }
        },
        computed: {
            homeUrl() {
                return this.$i18n.locale != this.$i18n.fallbackLocale ? "/" + this.$i18n.locale + "/" : "/";
            }
        },
        methods: {
            openPicture(e, url) {
                BigPicture({
                    el: e.target,
                    imgSrc: url
                })
            }
        }
    }
</script>
