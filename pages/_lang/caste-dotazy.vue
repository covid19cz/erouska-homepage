<template>
    <div>
        <section class="heading" id="uvod">
            <h1 class="heading__title">Časté dotazy</h1>
        </section>  <!-- /heading -->

        <main class="main" role="main">
            <section class="section" v-for="section in sections" :id="section.section_id.replace(/\_/g, '-')">
                <h2 :class="'section__title section__title--' + section.color">{{ $t('t.web.faq.sections.' + section.section_id) }}</h2>
                <div class="section__content">
                    <div class="faq">
                        <div class="section__item faq__item faq__item--open" v-for="question in section.questions" :id="question.replace(/\_/g, '-')">
                            <h3 class="faq__q">{{ $t('t.web.faq.questions.' + question + '.question') }}</h3>
                            <div class="faq__a">
                                <p v-for="(item, index) in Object.keys($i18n.messages[$i18n.fallbackLocale].t.web.faq.questions[question].answer).length">
                                    {{ $t('t.web.faq.questions.' + question + '.answer[' + index + ']') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <box/>
        </main>
    </div>
</template>

<script>
    import Box from '~/components/Box.vue'
    import sectionsJson from '~/assets/faq.json'

    export default {
        data() {
            return {
                sections: sectionsJson
            }
        },
        components: {
            Box
        },
        head() {
            return {
                title: this.$t('t.web.faq.page_title'),
                bodyAttrs: {
                    class: 'page-single page-caste-dotazy'
                }
            }
        }
    }
</script>
