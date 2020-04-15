<template>
  <div>
    <section class="heading" id="uvod">
      <h1 class="heading__title">Časté dotazy</h1>
    </section>  <!-- /heading -->

    <main class="main" role="main">

      <!-- {{{ faq }}} -->

      <box />
    </main>
  </div>
</template>

<script>
import Box from '~/components/Box.vue'

export default {
  components: {
    Box
  },
  head () {
    return {
      // title: this.$t('t.web.audit.page_title'),
      bodyAttrs: {
        class: 'page-single page-caste-dotazy'
      }
    }
  }
}
</script>