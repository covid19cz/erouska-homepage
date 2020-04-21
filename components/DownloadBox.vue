<template>
    <div class="aside d-none d-xl-block">
        <img src="/img/icon.svg"/>
        <h3 class="aside__title">eRouška</h3>
        <ul class="aside__actions">
            <li><a href="https://play.google.com/store/apps/details?id=cz.covid19cz.erouska"
            target="_blank" class="aside__button button button--blue">{{ $t('web.index.downoad.android') }}</a></li>
            <li><span class="aside__button button button--disable">{{ $t('web.index.downoad.ios') }}</span>
            </li>
        </ul>
    </div>
</template>
