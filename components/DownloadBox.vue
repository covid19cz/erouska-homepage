<template>
    <div class="aside d-none d-xl-block">
        <img src="/img/icon.svg"/>
        <h3 class="aside__title">eRouška</h3>
        <ul class="aside__actions">
            <li><a href="https://play.google.com/store/apps/details?id=cz.covid19cz.erouska"
                   target="_blank" class="aside__button button button--blue">{{ $t('web.index.download.android') }}</a></li>
            <li><a href="https://apps.apple.com/cz/app/erouška/id1509210215"
                   target="_blank" class="aside__button button button--blue">{{ $t('web.index.download.ios') }}</a></li>
        </ul>
    </div>
</template>
