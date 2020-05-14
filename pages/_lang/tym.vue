<template>
    <div>
        <section class="heading" id="uvod">
            <h1 class="heading__title">{{ $t('web.team.title') }}</h1>
            <div class="heading__perex">
                <p>{{ $t('web.team.perex') }}</p>
            </div>
        </section>
        <main class="main" role="main">
            <section class="section section--full">
                <div class="section__content">
                    <div class="team" v-for="section in people">
                        <h2 class="team__title">{{ $t(section.name) }}</h2>
                        <ul class="team__list">
                            <li v-for="person in section.people">
                                <a :title="$t('web.team.member_link_title')" :href="person.linkedin" target="_blank"><img
                                :src="person.photoUrl || 'https://erouska.cz/img/photo-avatar.png'"
                                class="team__list__photo" />{{person.name}} {{person.surname}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section class="section">
                <h2 class="section__title section__title--blue">{{ $t('web.team.thanks.header') }}</h2>
                <div class="section__content">
                    <div class="section__item">
                        <p><span v-html="$t('web.team.thanks.covid19cz')"></span> <a href="https://covid19cz.cz/" target="_blank">COVID19CZ</a>.</p>
                        <p v-html="$t('web.team.thanks.s4u')"></p>
                        <p v-html="$t('web.team.thanks.kc')"></p>
                        <p v-html="$t('web.team.thanks.alza')"></p>
                    </div>
                </div>
            </section>
            <section class="section section--full">
                <div class="section__content">
                    <ul class="partners">
                        <li><a href="https://www.avast.com/cs-cz/index#pc" target="_blank"><img src="/img/partners/logo-avast.png"/></a></li>
                        <li><a href="https://www.ysoft.com/" target="_blank"><img src="/img/partners/logo-ysoft.png"/></a></li>
                        <li><a href="https://antelli.io" target="_blank"><img src="/img/partners/logo-antelli.png"/></a></li>
                        <li><a href="https://60seconds.cz/" target="_blank"><img src="/img/partners/logo-60seconds.png"/></a></li>
                        <li><a href="https://www.teststack.cz/" target="_blank"><img src="/img/partners/logo-teststack.png"/></a></li>
                        <li><a href="http://expertkom.cz/" target="_blank"><img src="/img/partners/logo-expertkom.png"/></a></li>
                        <li><a href="https://www.clevermaps.io/" target="_blank"><img src="/img/partners/logo-clevermaps.png"/></a></li>
                        <li><a href="https://settleup.io" target="_blank"><img src="/img/partners/logo-settleup.png"/></a></li>
                        <li><a href="https://adastra.one" target="_blank"><img src="/img/partners/logo-adastra.png"/></a></li>
                        <li><a href="https://www.novalia.cz/#home" target="_blank"><img src="/img/partners/logo-novalia.png"/></a></li>
                        <li><a href="https://www.mobilnirozhlas.cz/" target="_blank"><img src="/img/partners/logo-mobilnirozhlas.png"/></a></li>
                        <li><a href="https://svejda-goldmann.cz/" target="_blank"><img src="/img/partners/logo-svejda-goldmann.png"/></a></li>
                        <li><a href="https://www.zachrankaapp.cz/" target="_blank"><img src="/img/partners/logo-zachranka.png"/></a></li>
                        <li><a href="https://citadelo.com/cz/" target="_blank"><img src="/img/partners/logo-citadelo.png"/></a></li>
                    </ul>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
    import peopleJson from '~/assets/people.json'

    export default {
        data() {
            return {
                people: peopleJson,
                titleTemplate: process.env.titleTemplate,
                pageCode: 'team'
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
        }
    }
</script>
