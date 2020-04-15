<template>
  <div>
    <section class="heading" id="uvod">
      <h1 class="heading__title">Tým tvůrců</h1>
      <div class="heading__perex">
        <p>Všichni lidé, kteří se tvorbě eRoušky podílejí, tak činí z vlastní iniciativy, bez nároku na honorář a dobrovolně.</p>
      </div>
    </section>  <!-- /heading -->

    <main class="main" role="main">

      <section class="section section--full">
        <div class="section__content">
          <!-- {{#each sections}}
            <div class="team">
              <h2 class="team__title">{{ this.name }}</h2>
              <ul class="team__list">
                {{#each this.people}}
                  <li><a title="Přejít na odkaz" href="{{ this.linkedin }}" target="_blank">
                    <img src="{{this.photoUrl}}" class="team__list__photo"  alt="{{this.name}} {{this.surname}}"/>{{this.name}} {{this.surname}}</a>
                  </li>
                {{/each}}
              </ul>
            </div>
          {{/each}} -->
        </div>
      </section>

      <section class="section">
        <h2 class="section__title section__title--blue">Poděkování</h2>
        <div class="section__content">
          <div class="section__item">
            <p>Aplikace eRouška vzniká v rámci iniciativy <a href="https://covid19cz.cz/" target="_blank">COVID19CZ</a>.</p>
            <p>Poděkování za darování domény patří Petru Adamovi z firmy S4U, s.r.o a&nbsp;Martovi Šimákovi z firmy CBDcz s.r.o.</p>
            <p>Děkujeme zaměstnancům Komerční banky z KC Zlín za pomoc v rámci předprodukčních testů aplikace.</p>
            <p>Děkujeme Alza.cz za zapůjčení testovacích telefonů.</p>
          </div>
        </div>
      </section>

      <section class="section section--full">
        <div class="section__content">
          <ul class="partners">
            <li><a href="https://www.avast.com/cs-cz/index#pc" target="_blank"><img src="/img/partners/logo-avast.png" /></a></li>
            <li><a href="https://www.ysoft.com/" target="_blank"><img src="/img/partners/logo-ysoft.png" /></a></li>
            <li><a href="https://antelli.io" target="_blank"><img src="/img/partners/logo-antelli.png" /></a></li>
            <li><a href="https://60seconds.cz/" target="_blank"><img src="/img/partners/logo-60seconds.png" /></a></li>
            <li><a href="https://www.teststack.cz/" target="_blank"><img src="/img/partners/logo-teststack.png" /></a></li>
            <li><a href="http://expertkom.cz/" target="_blank"><img src="/img/partners/logo-expertkom.png" /></a></li>
            <li><a href="https://www.clevermaps.io/" target="_blank"><img src="/img/partners/logo-clevermaps.png" /></a></li>
            <li><a href="https://settleup.io" target="_blank"><img src="/img/partners/logo-settleup.png" /></a></li>
            <li><a href="https://adastra.one" target="_blank"><img src="/img/partners/logo-adastra.png" /></a></li>
            <li><a href="https://www.novalia.cz/#home" target="_blank"><img src="/img/partners/logo-novalia.png" /></a></li>
            <li><a href="https://www.mobilnirozhlas.cz/" target="_blank"><img src="/img/partners/logo-mobilnirozhlas.png" /></a></li>
            <li><a href="https://svejda-goldmann.cz/" target="_blank"><img src="/img/partners/logo-svejda-goldmann.png" /></a></li>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  head () {
    return {
      // title: this.$t('t.web.audit.page_title'),
      bodyAttrs: {
        class: 'page-single page-tym'
      }
    }
  }
}
</script>