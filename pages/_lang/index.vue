<template>
    <div>
        <section class="hero-wrapper" id="uvod">
            <div class="hero">
                <h2 class="hero__title"><span>{{ $t('web.index.title.part_1') }}</span> <br>{{ $t('web.index.title.part_2') }}</h2>
                <div class="hero__intro">
                    <p v-html="$t('web.index.intro.part_1')"></p>
                    <p>{{ $t('web.index.intro.part_2') }}</p>
                </div>
                <ul class="hero__actions">
                    <li><a href="https://play.google.com/store/apps/details?id=cz.covid19cz.erouska"
                    target="_blank" class="button button--blue">{{ $t('web.index.downoad.android') }}</a></li>
                    <li><span class="button button--disable">{{ $t('web.index.downoad.ios') }}</span></li>
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
                            <p><em>{{ $t('web.index.when_you_become_infected.answer_2') }}</em></p>
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
                    <h2 class="section__title section__title--red" id="erouska-chrani-vase-soukromi">{{ $t('web.index.your_privacy.part_1') }} <br>{{ $t('web.index.your_privacy.part_2') }}</h2>
                    <div class="section__content">

                        <div class="section__item">
                            <h3>{{ $t('web.index.how_does_erouska_differ.question') }}</h3>
                            <p>{{ $t('web.index.how_does_erouska_differ.answer') }}</p>
                        </div>

                        <div class="section__item">
                            <h3>{{ $t('web.index.why_require_phone_number.question') }}</h3>
                            <p>{{ $t('web.index.why_require_phone_number.answer') }}</p>
                        </div>

                        <div class="section__item">
                            <h3>{{ $t('web.index.me_identity.question') }}</h3>
                            <p>{{ $t('web.index.me_identity.answer') }}</p>
                        </div>

                        <div class="section__item">
                            <h3>{{ $t('web.index.will_one_installation_matter.question') }}</h3>
                            <p>{{ $t('web.index.will_one_installation_matter.answer') }}</p>
                        </div>

                        <div class="section__item">
                            <h3>{{ $t('web.index.who_is_running_it.question') }}</h3>
                            <i18n path="web.index.who_is_running_it.answer.text" tag="p">
                                <a href="https://covid19cz.cz/" target="_blank">Covid19CZ</a>
                                <a href="https://www.mzcr.cz/" target="_blank">{{ $t('web.index.who_is_running_it.answer.ministry') }}</a>
                                <nuxt-link :to="homeUrl + 'audit-kod'">{{ $t('web.index.who_is_running_it.answer.audit') }}</nuxt-link>
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
    import {getHomeUrl} from "../../lib/url";

    export default {
        components: {
            DownloadBox
        },
        head() {
            return {
                titleTemplate: 'eRouška – ' + this.$t('web.motto'),
                bodyAttrs: {
                    class: 'page-homepage'
                }
            }
        },
        computed: {
            homeUrl() {
                const home = getHomeUrl(this.$route.params.lang || false);
                if (home.length > 0 && home[home.length - 1] !== "/") {
                    return `${home}/`;
                }
                return home;
            }
        }
    }
</script>
