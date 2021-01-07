<template>
    <div class="code-alert">
        <img src="/img/other/virus-icon.svg" />
        <i18n path="web.default.code_alert.text" tag="div">
            <a
                :href="'mailto:info@erouska.cz' + getMailtoSuffix($t('web.default.code_alert.mailto.subject'), $t('web.default.code_alert.mailto.body'))"
                @click="$ga.event('Email', 'Missing code', 'top alert box')"
            >info@erouska.cz</a>
        </i18n>
    </div>
</template>

<script>
    export default {
        methods: {
            getMailtoSuffix: getMailtoSuffix
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
