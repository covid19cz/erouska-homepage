<template>
    <section class="hero-wrapper" id="uvod">
        <div class="hero">
            <h2 class="hero__title"><span>{{ $t('web.error.page_title') }}</span> 404</h2>
            <div class="hero__intro">
                <p>{{ $t('web.error.page_not_found.part_1') }}<br>{{ $t('web.error.page_not_found.part_2') }}</p>
            </div>
            <ul class="hero__actions">
                <li>
                    <nuxt-link to="/" class="button button--blue">{{ $t('web.default.back_to_main_page') }}</nuxt-link>
                </li>
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
</template>

<style>
    .hero-wrapper {
        min-height: 600px;
    }
</style>
