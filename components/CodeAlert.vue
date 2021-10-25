<template>
    <div class="code-alert" style="padding:20px 0">
        <!-- <img src="/img/other/virus-icon.svg" />
        <i18n path="web.default.code_alert.text" tag="div">
            <a
                :href="'mailto:info@erouska.cz' + getMailtoSuffix($t('web.default.code_alert.mailto.subject'), $t('web.default.code_alert.mailto.body'))"
                @click="$ga.event('Email', 'Missing code', 'top alert box')"
            >info@erouska.cz</a>
        </i18n> -->
        <div class="container">
            <div style="margin-bottom:10px"><strong>{{ $t('web.default.code_alert.heading') }}</strong></div>
            <div>
                {{ $t('web.default.code_alert.text') }}
                <span class="d-none d-md-inline">{{ $t('web.default.code_alert.text_extended') }}</span>
                <nuxt-link :to="homeUrl + 'caste-dotazy#obecne'" @click.native="scrollIV"
                >{{ $t('web.default.code_alert.link') }}</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            getMailtoSuffix: getMailtoSuffix,
            scrollIV() {
                if (document.getElementById('obecne')) {
                    document.getElementById('obecne').scrollIntoView();
                }
            }
        },
        computed: {
            homeUrl() {
                return this.$i18n.locale != this.$i18n.fallbackLocale ? "/" + this.$i18n.locale + "/" : "/";
            }
        }
    }

    export function getMailtoSuffix(subject, body) {
        return (
            '?subject='
            + encodeURIComponent(subject)
            + '&body='
            + encodeURIComponent(body.replace(/<br>/g, '\n'))
        );
    }
</script>
