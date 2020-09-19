<template>
    <div>
        <section class="heading" id="uvod">
            <h1 class="heading__title">{{ $t('web.conditions.title') }}</h1>
            <div class="heading__perex">
                <p>{{ $t('web.conditions.perex.part_1') }}</p>
            </div>
        </section>
        <div class="mobile-menu d-block d-xl-none">
            <h3 class="aside__title">{{ $t('web.conditions.sections.table_of_contents') }}</h3>
            <ul class="aside__actions">
                <li>
                    <a :href="'#osobni'" class="aside__anchor">
                        <div class="aside__anchor__title">{{ $t('web.conditions.sections.personal') }}</div>
                    </a>
                </li>
                <li>
                    <a :href="'#technicke'" class="aside__anchor">
                        <div class="aside__anchor__title">{{ $t('web.conditions.sections.technical') }}</div>
                    </a>
                </li>
            </ul>
        </div>
        <main class="main d-flex" role="main">
            <div>
                <section class="section" id="osobni">
                    <h2
                        class="section__title section__title--red section__title--long"
                    >{{ insertNbsp(localizedConditionsTitle) }}</h2>
                    <div class="section__content">
                        <div class="section__item">
                            <component
                                v-for="(block, key) in localizedConditions"
                                :key="key"
                                :is="block.substring(0, 2).replace('0', '')"
                                v-html="insertNbsp(block.substring(3))"
                            ></component>
                        </div>
                    </div>
                </section>
                <section class="section" id="technicke">
                    <h2 class="section__title section__title--blue nowrap">{{ $t('web.conditions.technical.title') }}</h2>
                    <div class="section__content">
                        <div class="section__item">
                            <h3>{{ $t('web.conditions.technical.devices.title') }}</h3>
                            <p>{{ $t('web.conditions.technical.devices.text.part_1') }}</p>
                            <p>{{ $t('web.conditions.technical.devices.text.part_2') }}</p>
                        </div>
                        <div class="section__item">
                            <h3>{{ $t('web.conditions.technical.internet.title') }}</h3>
                            <p>{{ $t('web.conditions.technical.internet.text.part_1') }}</p>
                        </div>
                        <div class="section__item">
                            <h3>{{ $t('web.conditions.technical.battery.title') }}</h3>
                            <p>{{ $t('web.conditions.technical.battery.text.part_1') }}</p>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <div class="aside d-none d-xl-block">
                    <h3 class="aside__title">{{ $t('web.faq.sections.table_of_contents') }}</h3>
                    <ul class="aside__actions">
                        <li>
                            <a :href="'#osobni'" class="aside__anchor">
                                <div class="aside__anchor__title">{{ $t('web.conditions.sections.personal') }}</div>
                            </a>
                        </li>
                        <li>
                            <a :href="'#technicke'" class="aside__anchor">
                                <div class="aside__anchor__title">{{ $t('web.conditions.sections.technical') }}</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import _ from 'lodash'
    import conditionsJson from '~/assets/conditions.json'

    export default {
        data() {
            return {
                conditions: conditionsJson,
                titleTemplate: process.env.titleTemplate,
                pageCode: 'conditions'
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
                    class: 'page--background-shifted page--faq page--conditions'
                }
            }
        },
        computed: {
            homeUrl() {
                return this.$i18n.locale != this.$i18n.fallbackLocale ? "/" + this.$i18n.locale + "/" : "/";
            },

            localizedConditions() {
                return this.conditions[this.$i18n.locale] || this.conditions['en'] || this.conditions[this.$i18n.fallbackLocale];
            },

            localizedConditionsTitle() {
                return this.conditions[this.$i18n.locale + '_title'] || this.conditions['en_title'] || this.conditions[this.$i18n.fallbackLocale + '_title'];
            }
        },

        methods: {
            insertNbsp(text) {
                return this.$i18n.locale != this.$i18n.fallbackLocale ? text : text.replace(/(?<=\s)([kvszaiou])\s/gi, '$1\u00A0');
            },

            // active navigation from https://css-tricks.com/sticky-smooth-active-nav/
            handleScroll: _.throttle(() => {
                let mainNavLinks = document.querySelectorAll(".aside li a");
                let mainSections = document.querySelectorAll("main section");

                let lastId;

                let fromTop = window.scrollY;

                mainNavLinks.forEach(link => {
                    let section = document.querySelector(link.hash);

                    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                        link.classList.add("aside__anchor--active");
                    } else {
                        link.classList.remove("aside__anchor--active");
                    }
                });
            }, 100)
        },
        // another part of active navigation snippet
        beforeMount () {
            if (process.client) {
                window.addEventListener("scroll", this.handleScroll);
                this.handleScroll();
            }
        },
        beforeDestroy () {
            if (process.client) {
                window.removeEventListener("scroll", this.handleScroll);
            }
        }
    }
</script>
