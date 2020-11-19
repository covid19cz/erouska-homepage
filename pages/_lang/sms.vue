<template>
    <div>
        <section class="heading" id="uvod">
            <h1 class="heading__title">{{ $t('web.sms.title') }}</h1>
            <div class="heading__perex">
                <p>{{ $t('web.sms.perex') }}</p>
            </div>
        </section>
        <main class="main d-flex" role="main">
            <div>
                <section class="section">
                    <div class="section__content">
                        <div class="section__item">
                            <h2 class="h3">{{ $t('web.sms.questions.where.question') }}</h2>
                            <p v-html="$t('web.sms.questions.where.answer.text_0')"></p>
                            <p>{{ $t('web.sms.questions.where.answer.text_1') }}</p>
                            <ol>
                                <i18n path="web.sms.questions.where.answer.steps.step_1" tag="li">
                                    <span>{{ versions.android }}</span>
                                    <span>{{ versions.ios }}</span>
                                </i18n>
                                <li v-html="$t('web.sms.questions.where.answer.steps.step_2')"></li>
                                <li v-html="$t('web.sms.questions.where.answer.steps.step_3')"></li>
                            </ol>
                            <p>{{ $t('web.sms.questions.where.answer.text_2') }}</p>
                        </div>
                        <div class="section__item" v-for="(platform, key) in ['android', 'ios']" :key="key">
                            <h3>{{ $t('web.sms.questions.where.answer.photos.title.' + key) }} – {{ platform === 'android' ? 'ver. ≤ 2.1.613' : 'ver. ≤ 2.1.4' }}</h3>
                            <p class="d-flex">
                                <a
                                    v-for="(number, key2) in [1, 2, 3, 4, 5]"
                                    :key="key2"
                                    :href="'/img/sms/' + platform + '/' + number + '.png'"
                                    target="_blank"
                                    @click.prevent="openGallery($event, ((number - 1) + (9 * key)))"
                                    class="bpgallery"
                                    :data-bp="'/img/sms/' + platform + '/' + number + '.png'"
                                >
                                    <img :src="'/img/sms/' + platform + '/' + number + '.png'">
                                </a>
                            </p>
                            <h3>{{ $t('web.sms.questions.where.answer.photos.title.' + key) }} – {{ platform === 'android' ? 'ver. > 2.1.613' : 'ver. > 2.1.4' }}</h3>
                            <p class="d-flex">
                                <a
                                    v-for="(number, key2) in [1, 2, 3, 4]"
                                    :key="key2"
                                    :href="'/img/sms/' + platform + '2/' + number + '.png'"
                                    target="_blank"
                                    @click.prevent="openGallery($event, ((number + 4) + (9 * key)))"
                                    class="bpgallery"
                                    :data-bp="'/img/sms/' + platform + '2/' + number + '.png'"
                                >
                                    <img :src="'/img/sms/' + platform + '2/' + number + '.png'">
                                </a>
                            </p>
                        </div>
                        <div class="section__item">
                            <h2 class="h3">{{ $t('web.faq.questions.sms_delivery_time.question') }}</h2>
                            <p>{{ $t('web.faq.questions.sms_delivery_time.answer.0') }}</p>
                            <p>{{ $t('web.faq.questions.sms_delivery_time.answer.1') }}</p>
                            <div>{{ $t('web.faq.questions.sms_delivery_time.answer.2') }}</div>
                        </div>
                        <div class="section__item">
                            <h2 class="h3">{{ $t('web.sms.questions.expiration.question') }}</h2>
                            <p v-html="$t('web.sms.questions.expiration.answer')"></p>
                        </div>
                        <div class="section__item">
                            <h2 class="h3">{{ $t('web.sms.questions.error.question') }}</h2>
                            <p v-html="$t('web.sms.questions.error.answer')"></p>
                        </div>
                        <div class="section__item">
                            <h2 class="h3">{{ $t('web.sms.questions.multiple.question') }}</h2>
                            <p>{{ $t('web.sms.questions.multiple.answer') }}</p>
                        </div>
                        <div class="section__item">
                            <h2 class="h3">{{ $t('web.sms.questions.why.question') }}</h2>
                            <p>{{ $t('web.sms.questions.why.answer') }}</p>
                        </div>
                        <div class="section__item">
                            <h2 class="h3">{{ $t('web.sms.questions.who.question') }}</h2>
                            <p>{{ $t('web.sms.questions.who.answer') }}</p>
                        </div>
                        <div class="section__item">
                            <h2 class="h3">{{ $t('web.sms.questions.identity.question') }}</h2>
                            <p v-html="$t('web.sms.questions.identity.answer.text_1')"></p>
                            <p>{{ $t('web.sms.questions.identity.answer.text_2') }}</p>
                        </div>
                        <div class="section__item">
                            <h2 class="h3">{{ $t('web.sms.questions.anonymous.question') }}</h2>
                            <p>{{ $t('web.sms.questions.anonymous.answer') }}</p>
                        </div>
                        <div class="section__item">
                            <h2 class="h3">{{ $t('web.sms.questions.install.question') }}</h2>
                            <p v-html="$t('web.sms.questions.install.answer')"></p>
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
    import versionsJson from '~/assets/versions.json'
    import BigPicture from 'bigpicture'

    export default {
        components: {
            DownloadBox
        },
        data() {
            return {
                versions: versionsJson,
                titleTemplate: process.env.titleTemplate,
                pageCode: 'sms'
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
                    class: 'page--background-shifted page--sms'
                }
            }
        },
        computed: {
            homeUrl() {
                return this.$i18n.locale != this.$i18n.fallbackLocale ? "/" + this.$i18n.locale + "/" : "/";
            }
        },
        methods: {
            openGallery(e, position) {
                BigPicture({
                    el: e.target,
                    gallery: document.querySelectorAll('.bpgallery'),
                    position
                })
            }
        }
    }
</script>
