<template>
  <div class="container-global">
    <div class="container">
      <header class="header" role="banner">
        <div class="header__logo-wrapper">
          <h2 class="header__logo">
            <nuxt-link :to="homeUrl" title="eRouška - Hlavní stránka" exact>
              <img src="/img/logo.svg" alt="eRouška" />
            </nuxt-link>
          </h2>
        </div>

        <nav v-if="isNotHome" class="header__nav-wrapper d-none d-md-block" role="navigation">
          <ul class="header__nav">
            <li><nuxt-link :to="homeUrl">
              <svg xmlns="http://www.w3.org/2000/svg" width="6.703" height="11.252" viewBox="0 0 6.703 11.252">
                <path d="M.148-7.049a.422.422,0,0,0,0,.6l5.161,5.2a.422.422,0,0,0,.6,0l.7-.7a.422.422,0,0,0,0-.6L2.436-6.75,6.6-10.958a.422.422,0,0,0,0-.6l-.7-.7a.422.422,0,0,0-.6,0Z" transform="translate(-0.024 12.376)" fill="#222"/>
              </svg>
              Zpět na Hlavní stránku
            </nuxt-link></li>
          </ul>
        </nav>
      </header> <!-- /header -->
      <nuxt />
    </div>
    <div class="claim">
      <div class="container">
        <h2 class="claim__title">Než vyjdete ven, <br />nasaďte si také eRoušku. </h2>
        <ul class="claim__actions">
          <li><a href="https://play.google.com/store/apps/details?id=cz.covid19cz.erouska" target="_blank" class="button button--blue">Stáhnout pro Android</a></li>
          <li><span class="button button--disable">Brzy ke stažení pro iOS</span></li>
        </ul>
      </div>
    </div>

    <footer class="footer">
      <div class="container">
        <div class="footer__content">
          <div class="footer__col footer__col--1">
            <div class="footer__logo">
              <nuxt-link :to="homeUrl">
                <img src="/img/logo.svg" alt="eRouška" />
              </nuxt-link>
            </div>
            <div class="footer__menu">
              <ul class="footer__menu__list footer__menu__list--1">
                <li><a href="mailto:info@erouska.cz">info@erouska.cz</a></li>
                <li><a href="mailto:pr@erouska.cz">pr@erouska.cz</a></li>
              </ul>
              <ul class="footer__menu__list footer__menu__list--2">
                <li><nuxt-link :to="localeUrl + 'caste-dotazy'">Časté dotazy</nuxt-link></li>
                <li><nuxt-link :to="localeUrl + 'tym'">Tým</nuxt-link></li>
              </ul>
              <ul class="footer__menu__list footer__menu__list--3">
                <li><nuxt-link :to="localeUrl + 'gdpr'">Ochrana osobních údajů</nuxt-link></li>
                <li><nuxt-link :to="localeUrl + 'audit-kod'">Audit a kód</nuxt-link></li>
              </ul>
            </div>
          </div>
          <div class="footer__col footer__col--2">
            <ul class="footer__partners">
              <li><a href="https://covid19cz.cz/" target="_blank"><img src="/img/logo-covid.svg" /><br /><strong>chytrá karanténa</strong></a></li>
              <li><a href="https://www.mzcr.cz/" target="_blank"><img src="/img/logo-mzcr.svg" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    isNotHome() {
      const path = this.$nuxt.$route.path;
      const lang = this.$route.params.lang || false;
      return path != "/" && (!lang || (path != "/" + lang && path != "/" + lang + "/") || !process.env.locales.includes(lang));
    },
    localeUrl() {
      const lang = this.$route.params.lang || false;
      if(lang) {
        return "/" + lang + "/";
      } else {
        return "/";
      }
    },
    homeUrl() {
      const lang = this.$route.params.lang || false;
      if(lang && process.env.locales.includes(lang)) {
        return "/" + lang;
      } else {
        return "/";
      }
    }
  }
}
</script>