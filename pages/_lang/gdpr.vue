<template>
    <div>
        <section class="heading" id="uvod">
            <h1 class="heading__title">{{ $t('web.gdpr.title') }}</h1>
            <div class="heading__perex">
                <p>{{ $t('web.gdpr.perex.part_1') }}</p>
                <p>{{ $t('web.gdpr.perex.part_3') }}</p>
            </div>
        </section>  <!-- /heading -->

        <main class="main" role="main">
            <section class="section section--full">
            <div class="section__content">
                <div class="section__item">
                    <h2>{{ $t('web.gdpr.who_we_are.heading') }}</h2>
                    <p>{{ $t('web.gdpr.who_we_are.part_1') }}</p>
                    <p>{{ $t('web.gdpr.who_we_are.part_2') }}</p>
                    <p>{{ $t('web.gdpr.who_we_are.part_3') }}</p>

                    <h2>{{ $t('web.gdpr.what_data_we_hold') }}</h2>
                    <h3>{{ $t('web.gdpr.data_with_consent.heading') }}</h3>
                    <p v-html="$t('web.gdpr.data_with_consent.part_1')"></p>
                    <p v-html="$t('web.gdpr.data_with_consent.part_2')"></p>
                    <p>{{ $t('web.gdpr.data_with_consent.part_3') }}</p>
                    <p>{{ $t('web.gdpr.data_with_consent.part_4') }}</p>
                    <p>{{ $t('web.gdpr.data_with_consent.part_5') }}</p>
                    <p>{{ $t('web.gdpr.data_with_consent.part_6') }}</p>
                    <p>{{ $t('web.gdpr.data_with_consent.part_7') }}</p>
                    <p><strong>{{ $t('web.gdpr.data_with_consent.part_8') }}</strong></p>

                    <h3>{{ $t('web.gdpr.app_related_data.heading') }}</h3>
                    <p v-html="$t('web.gdpr.app_related_data.part_1')"></p>
                    <p v-html="$t('web.gdpr.app_related_data.part_2')"></p>

                    <h3>{{ $t('web.gdpr.where_we_use_your_data.heading') }}</h3>
                    <p>{{ $t('web.gdpr.where_we_use_your_data.part_1') }}</p>

                    <h2>{{ $t('web.gdpr.your_rights.heading') }}</h2>
                    <p>{{ $t('web.gdpr.your_rights.part_1') }}</p>
                    <p>{{ $t('web.gdpr.your_rights.part_2') }}</p>
                    <p>{{ $t('web.gdpr.your_rights.part_3') }}<a href="mailto:oia@mzcr.cz">oia@mzcr.cz</a>,
                        {{ $t('web.gdpr.your_rights.part_5') }} <a href="https://www.mzcr.cz" target="_blank">www.mzcr.cz</a>.</p>
                    <p>{{ $t('web.gdpr.your_rights.part_4') }}<a href="https://www.uoou.cz" target="_blank">www.uoou.cz</a>).</p>
                </div>
            </div>
            </section>
        </main>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: this.$t('web.gdpr.page_title'),
                bodyAttrs: {
                    class: 'page-single page-tym'
                }
            }
        }
    }
</script>
