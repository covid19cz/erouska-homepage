<template>
  <div>
    <section class="heading" id="uvod">
      <h1 class="heading__title">{{ $t('t.web.audit.title') }}</h1>
    </section>  <!-- /heading -->

    <main class="main" role="main">

      <section class="section section--full">
        <div class="section__content">
          <div class="section__item">

            <p>{{ $t('t.web.audit.section1.perex') }} <a href="/gdpr">{{ $t('t.web.audit.section1.perex_gdpr') }}</a>.</p>
            <ul>
              <li><a href="/downloads/cvut.pdf" target="_blank">{{ $t('t.web.audit.section1.review_cvut_1') }}</a></li>
              <li><a href="/downloads/CVUT_2.pdf" target="_blank">{{ $t('t.web.audit.section1.review_cvut_2') }}</a></li>
              <li><a href="https://www.linkedin.com/pulse/aplikace-erou%C5%A1ka-m%C3%A1-moji-d%C5%AFv%C4%9Bru-ond%C5%99ej-vesel%C3%BD" target="_blank">{{ $t('t.web.audit.section1.review_vesely') }}</a></li>
            </ul>
            <p>{{ $t('t.web.audit.section1.code_text') }} (<a href="https://github.com/covid19cz/erouska-android" target="_blank">Android</a>, <a href="https://github.com/covid19cz/erouska-ios" target="_blank">iOS</a>).</p>
            <p v-html="$t('t.web.audit.section1.covid19')"></p>

          </div>
        </div>
      </section>

    </main>

  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'page-single'
    }
  }
}
</script>