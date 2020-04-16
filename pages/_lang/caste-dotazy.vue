<template>
    <div>
        <section class="heading" id="uvod">
            <h1 class="heading__title">{{ $t('t.web.faq.title') }}</h1>
        </section>  <!-- /heading -->

        <main class="main" role="main">

            <!-- {{{ faq }}} -->
            <section class="section">
                    <div class="section__content">
                      <div class="faq">
                  
                        <div class="section__item faq__item faq__item--open">
                          <h3 class="faq__q">{{ $t('t.web.faq.frequent.proc_je_erouska_potreba.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.frequent.proc_je_erouska_potreba.answer.part_1') }}</p>
                  <p>{{ $t('t.web.faq.frequent.proc_je_erouska_potreba.answer.part_2') }}</p>
                  <p>{{ $t('t.web.faq.frequent.proc_je_erouska_potreba.answer.part_3') }}</p>
                          </div>
                        </div>
                  
                      <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.frequent.jak_postupuje_hygiena.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.frequent.jak_postupuje_hygiena.answer.part_1') }}</p>
                  <p>{{ $t('t.web.faq.frequent.jak_postupuje_hygiena.answer.part_2') }}</p>
                          </div>
                        </div>
                  
                         <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.frequent.blizko_je_jen_jeden_telefon.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.frequent.blizko_je_jen_jeden_telefon.answer.part_1') }}</p>
                          </div>
                        </div>
                        
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.frequent.jeden_telefon_vidi_druhy_ale_druhy_ne.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.frequent.jeden_telefon_vidi_druhy_ale_druhy_ne.answer.part_1') }}</p>
                          </div>
                        </div>
                        
                         <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.frequent.moje_data_nemaji_zaznamy.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.frequent.moje_data_nemaji_zaznamy.answer.part_1') }}</p>
                  <p>{{ $t('t.web.faq.frequent.moje_data_nemaji_zaznamy.answer.part_2') }}</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.frequent.je_mozne_oznacit_znameho.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.frequent.je_mozne_oznacit_znameho.answer.part_1') }}</p>
                          </div>
                        </div>
                  
                         <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.frequent.potrebuje_aplikace_internet.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.frequent.potrebuje_aplikace_internet.answer.part_1') }}</p>
                  <p>{{ $t('t.web.faq.frequent.potrebuje_aplikace_internet.answer.part_2') }}</p>
                          </div>
                        </div>
                        
                          <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.frequent.zpomaluje_erouska_data.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.frequent.zpomaluje_erouska_data.answer.part_1') }}</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.frequent.ma_smysl_instalovat_erousku.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.frequent.ma_smysl_instalovat_erousku.answer.part_1') }}</p>
                  <p>{{ $t('t.web.faq.frequent.ma_smysl_instalovat_erousku.answer.part_2') }}</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.frequent.jak_se_erouska_lisi.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.frequent.jak_se_erouska_lisi.answer.part_1') }}</p>
                  <p><em>{{ $t('t.web.faq.frequent.jak_se_erouska_lisi.answer.part_2') }}</em></p>
                  <p>{{ $t('t.web.faq.frequent.jak_se_erouska_lisi.answer.part_3') }}</p>
                  <p>{{ $t('t.web.faq.frequent.jak_se_erouska_lisi.answer.part_4') }}</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.frequent.proc_aplikace_potrebuje_telefonni_cislo.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.frequent.proc_aplikace_potrebuje_telefonni_cislo.answer.part_1') }}</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.frequent.jak_mam_postupovat_pri_pozitivnim_test.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.frequent.jak_mam_postupovat_pri_pozitivnim_test.answer.part_1') }}</p>
                  <p><strong>{{ $t('t.web.faq.frequent.jak_mam_postupovat_pri_pozitivnim_test.answer.part_2') }}</strong></p>
                  <p>{{ $t('t.web.faq.frequent.jak_mam_postupovat_pri_pozitivnim_test.answer.part_3') }}<strong>1212</strong>{{ $t('t.web.faq.frequent.jak_mam_postupovat_pri_pozitivnim_test.answer.part_4') }}<a href="https://koronavirus.mzcr.cz/" target="_blank">{{ $t('t.web.faq.frequent.jak_mam_postupovat_pri_pozitivnim_test.answer.part_5') }}</a>.</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.frequent.budou_ostatni_vedet_ze_mam_kovid.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.frequent.budou_ostatni_vedet_ze_mam_kovid.answer.part_1') }}</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.frequent.kdyz_se_nekdo_neprizna.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.frequent.kdyz_se_nekdo_neprizna.answer.part_1') }}</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.frequent.jakou_roli_ma_erouska_v_chytre_karantene.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.frequent.jakou_roli_ma_erouska_v_chytre_karantene.answer.part_1') }}</p>
                  <p>{{ $t('t.web.faq.frequent.jakou_roli_ma_erouska_v_chytre_karantene.answer.part_2') }}<a href="https://www.covid19cz.cz/covid19-cz/manifest/chytra-karantena" target="_blank">{{ $t('t.web.faq.frequent.jakou_roli_ma_erouska_v_chytre_karantene.answer.part_3') }}</a>.</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.frequent.pozna_erouska_zda_porusuji_karantenu.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.frequent.pozna_erouska_zda_porusuji_karantenu.answer.part_1') }}</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.frequent.jak_dlouho_se_data_uchovavaji.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.frequent.jak_dlouho_se_data_uchovavaji.answer.part_1') }}</p>
                  <p>{{ $t('t.web.faq.frequent.jak_dlouho_se_data_uchovavaji.answer.part_2') }}</p>
                  <p>{{ $t('t.web.faq.frequent.jak_dlouho_se_data_uchovavaji.answer.part_3') }}<a href="https://erouska.cz/gdpr" target="_blank">{{ $t('t.web.faq.frequent.jak_dlouho_se_data_uchovavaji.answer.part_4') }}</a>.</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.frequent.co_kdyz_ztratim_telefon.question') }}</h3>
                          <div class="faq__a">
                            <p>{{ $t('t.web.faq.frequent.co_kdyz_ztratim_telefon.answer.part_1') }}</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.frequent.soulad_s_gdpr.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.frequent.soulad_s_gdpr.answer.part_1') }}</p>
                  <p>{{ $t('t.web.faq.frequent.soulad_s_gdpr.answer.part_2') }}</p>
                  <ul>
                    <li><a href="https://erouska.cz/gdpr" target="_blank">{{ $t('t.web.faq.frequent.soulad_s_gdpr.answer.part_3') }}</a></li>
                    <li><a href="https://erouska.cz/audit-kod" target="_blank">{{ $t('t.web.faq.frequent.soulad_s_gdpr.answer.part_4') }}</a></li>
                    <li><a href="https://www.covid19cz.cz/covid19-cz/zavazek-datove-duvery" target="_blank">{{ $t('t.web.faq.frequent.soulad_s_gdpr.answer.part_5') }}</a></li>
                  </ul>
                          </div>
                        </div>
                  
                      </div>
                  
                    </div>
                  </section>
                  
                  <section class="section">
                    <h2 class="section__title section__title--red">{{ $t('t.web.faq.technical.technical_section.title') }}</h2>
                    <div class="section__content">
                      <div class="faq">
                  
                        <div class="section__item faq__item faq__item--open">
                          <h3 class="faq__q">{{ $t('t.web.faq.technical.na_jakych_telefonech_erouka_funguje.question') }}</h3>
                          <div class="faq__a">
                            <p>{{ $t('t.web.faq.technical.na_jakych_telefonech_erouka_funguje.answer.part_1') }}</p>
                            <p>{{ $t('t.web.faq.technical.na_jakych_telefonech_erouka_funguje.answer.part_2') }}</p>
                            <ul>
                              <li>{{ $t('t.web.faq.technical.na_jakych_telefonech_erouka_funguje.answer.part_3') }}</li>
                              <li>{{ $t('t.web.faq.technical.na_jakych_telefonech_erouka_funguje.answer.part_4') }}</li>
                              <li>{{ $t('t.web.faq.technical.na_jakych_telefonech_erouka_funguje.answer.part_5') }}<sup>*</sup></li>
                            </ul>
                            <p><sup>*</sup>{{ $t('t.web.faq.technical.na_jakych_telefonech_erouka_funguje.answer.part_6') }}</p>
                          </div>
                        </div>
                  
                         <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.technical.proc_je_treba_povolit_polohove_udaje.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.technical.proc_je_treba_povolit_polohove_udaje.answer.part_1') }}</p>
                  <p>{{ $t('t.web.faq.technical.proc_je_treba_povolit_polohove_udaje.answer.part_2') }}<a href="https://developer.android.com/guide/topics/connectivity/bluetooth#Permissions" target="_blank">{{ $t('t.web.faq.technical.proc_je_treba_povolit_polohove_udaje.answer.part_3') }}</a>.</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.technical.jak_se_data_zpracovavaji.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.technical.jak_se_data_zpracovavaji.answer.part_1') }}</p>
                  <p><em>{{ $t('t.web.faq.technical.jak_se_data_zpracovavaji.answer.part_2') }}</em></p>
                  <p>{{ $t('t.web.faq.technical.jak_se_data_zpracovavaji.answer.part_3') }}</p>
                  <p><em>{{ $t('t.web.faq.technical.jak_se_data_zpracovavaji.answer.part_4') }}</em></p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.technical.v_zalozce_moje_data_vidim_spoustu_id.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.technical.v_zalozce_moje_data_vidim_spoustu_id.answer.part_1') }}</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.technical.musim_mit_neustale_zapnuty_bluetooth.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.technical.musim_mit_neustale_zapnuty_bluetooth.answer.part_1') }}</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.technical.kolik_baterie_aplikace_spotrebuje.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.technical.kolik_baterie_aplikace_spotrebuje.answer.part_1') }}</p>
                  <p>{{ $t('t.web.faq.technical.kolik_baterie_aplikace_spotrebuje.answer.part_2') }}</p>
                  <p>{{ $t('t.web.faq.technical.kolik_baterie_aplikace_spotrebuje.answer.part_3') }}</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.technical.proc_zrovna_bluetooth.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.technical.proc_zrovna_bluetooth.answer.part_1') }}</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.technical.mylne_vyhodnoceni_kontaktu.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.technical.mylne_vyhodnoceni_kontaktu.answer.part_1') }}</p>
                  <p>{{ $t('t.web.faq.technical.mylne_vyhodnoceni_kontaktu.answer.part_2') }}</p>
                          </div>
                        </div>
                  
                              <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.technical.co_znamena_id_a_rssi.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.technical.co_znamena_id_a_rssi.answer.part_1') }}</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.technical.muze_me_nekdo_sledovat.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.technical.muze_me_nekdo_sledovat.answer.part_1') }}</p>
                  <p><em>{{ $t('t.web.faq.technical.muze_me_nekdo_sledovat.answer.part_2') }}</em></p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.technical.lze_overit_ze_aplikace_nezaznamenava_polohu.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.technical.lze_overit_ze_aplikace_nezaznamenava_polohu.answer.part_1') }}<a href="https://github.com/covid19cz/erouska-android" target="_blank">Android</a>, <a href="https://github.com/covid19cz/erouska-ios" target="_blank">iOS</a>{{ $t('t.web.faq.technical.lze_overit_ze_aplikace_nezaznamenava_polohu.answer.part_2') }}</p>
                  <p>{{ $t('t.web.faq.technical.lze_overit_ze_aplikace_nezaznamenava_polohu.answer.part_3') }}<a href="https://erouska.cz/audit-kod" target="_blank">{{ $t('t.web.faq.technical.lze_overit_ze_aplikace_nezaznamenava_polohu.answer.part_4') }}</a>{{ $t('t.web.faq.technical.lze_overit_ze_aplikace_nezaznamenava_polohu.answer.part_5') }}</p>
                  <ul>
                    <li>{{ $t('t.web.faq.technical.lze_overit_ze_aplikace_nezaznamenava_polohu.answer.part_6') }}</li>
                    <li>{{ $t('t.web.faq.technical.lze_overit_ze_aplikace_nezaznamenava_polohu.answer.part_7') }}</li>
                  </ul>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.technical.lze_sparovat_konkretni_osobu.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.technical.lze_sparovat_konkretni_osobu.answer.part_1') }}</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.technical.kdo_ma_pristup_k_datum.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.technical.kdo_ma_pristup_k_datum.answer.part_1') }}</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.technical.jak_zjistim_vsechna_ulozena_a_odeslana_data.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.technical.jak_zjistim_vsechna_ulozena_a_odeslana_data.answer.part_1') }}</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.technical.jak_chranite_uzivatele_pred_zneuzitim_dat.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.technical.jak_chranite_uzivatele_pred_zneuzitim_dat.answer.part_1') }}</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.technical.dohlizi_na_zabezpeceni_dat_nezavisla_organizace.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.technical.dohlizi_na_zabezpeceni_dat_nezavisla_organizace.answer.part_1') }}<a href="https://github.com/covid19cz/erouska-android" target="_blank">Android</a>, <a href="https://github.com/covid19cz/erouska-ios" target="_blank">iOS</a>{{ $t('t.web.faq.technical.dohlizi_na_zabezpeceni_dat_nezavisla_organizace.answer.part_2') }}<a href="https://erouska.cz/audit-kod" target="_blank">{{ $t('t.web.faq.technical.dohlizi_na_zabezpeceni_dat_nezavisla_organizace.answer.part_3') }}</a>.</p>
                  <p>{{ $t('t.web.faq.technical.dohlizi_na_zabezpeceni_dat_nezavisla_organizace.answer.part_4') }}<a href="https://erouska.cz/gdpr" target="_blank">{{ $t('t.web.faq.technical.dohlizi_na_zabezpeceni_dat_nezavisla_organizace.answer.part_5') }}</a>{{ $t('t.web.faq.technical.dohlizi_na_zabezpeceni_dat_nezavisla_organizace.answer.part_6') }}<a href="https://www.covid19cz.cz/covid19-cz/zavazek-datove-duvery" target="_blank">{{ $t('t.web.faq.technical.dohlizi_na_zabezpeceni_dat_nezavisla_organizace.answer.part_7') }}</a>.</p>
                        </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.technical.muzu_si_pouizivani_rozmyslet.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.technical.muzu_si_pouizivani_rozmyslet.answer.part_1') }}</p>
                  <p>{{ $t('t.web.faq.technical.muzu_si_pouizivani_rozmyslet.answer.part_2') }}</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.technical.data_po_smazani_apliklace.question') }}</h3>
                          <div class="faq__a">
                  <p>{{ $t('t.web.faq.technical.data_po_smazani_apliklace.answer.part_1') }}</p>
                  <p>{{ $t('t.web.faq.technical.data_po_smazani_apliklace.answer.part_2') }}</p>
                          </div>
                        </div>
                  
                        <div class="section__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.technical.kde_je_zdrojovy_kod.question') }}</h3>
                          <div class="faq__a">
                            <p>{{ $t('t.web.faq.technical.kde_je_zdrojovy_kod.answer.part_1') }}<a href="https://github.com/covid19cz/erouska-android" target="_blank">Android</a>, <a href="https://github.com/covid19cz/erouska-ios" target="_blank">iOS</a>).</p>
                          </div>
                        </div>
                  
                      </div>
                    </div>
                  </section>
                  
                  <section class="section">
                    <h2 class="section__title section__title--blue">{{ $t('t.web.faq.mobile.mobile_section.title') }}</h2>
                    <div class="section__content">
                      <div class="faq">
                  
                          <div class="section__item faq__item--open">
                          <h3 class="faq__q">{{ $t('t.web.faq.mobile.jak_si_muzu_stahnout_erouku.question') }}</h3>
                          <div class="faq__a">
                              <p>{{ $t('t.web.faq.mobile.jak_si_muzu_stahnout_erouku.answer.part_1') }}</p>
                  
                          <h4>{{ $t('t.web.faq.mobile.jak_si_muzu_stahnout_erouku_pdf.subchapter') }}</h4>
                              <ul>
                              <li><a href="https://www.erouska.cz/navody/instalace_aplikace_eRouska.pdf" target="_blank">{{ $t('t.web.faq.mobile.jak_si_muzu_stahnout_erouku_pdf.answer.part_1') }}</a></li>
                             </ul>
                  
                          <h4>{{ $t('t.web.faq.mobile.jak_si_muzu_stahnout_erouku_video.subchapter') }}</h4>
                            <section class="section video" style="padding-top: 0;">
                              <div class="section__content">
                                <iframe width="100%" height="400" src="https://www.youtube.com/embed/hVu71yWAIcA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>https://www.youtube.com/embed/hVu71yWAIcA</iframe>
                             </div>
                            </section>
                  
                            </div>
                          </div>
                  
                        <div class="section__item faq__item faq__item">
                          <h3 class="faq__q">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku.question') }}</h3>
                          <div class="faq__a">
                            <p>{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku.answer.part_1') }}</p>
                  
                            <h4>{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_asus.subchapter') }}</h4>
                            <ul>
                              <li><a href="https://www.erouska.cz/navody/Asus/1_zajisteni_behu_eRousky_na_pozadi.pdf" target="_blank">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_asus.answer.part_1') }}</a></li>
                            </ul>
                  
                            <h4>{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_honor.subchapter') }}</h4>
                            <ul>
                              <li><a href="https://www.erouska.cz/navody/Honor/1_vyjimka_z_optimalizace_baterie_pro_eRousku.pdf" target="_blank">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_honor.answer.part_1') }}</a></li>
                              <li><a href="https://www.erouska.cz/navody/Honor/2_rucni_zapnuti_behu_eRousky_na_pozadi.pdf" target="_blank">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_honor.answer.part_2') }}</a></li>
                            </ul>
                  
                            <h4>{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_huawei.subchapter') }}</h4>
                            <ul>
                              <li><a href="https://www.erouska.cz/navody/Huawei/1_vyjimka_z_optimalizace_baterie_pro_eRousku.pdf" target="_blank">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_huawei.answer.part_1') }}</a></li>
                              <li><a href="https://www.erouska.cz/navody/Huawei/2_rucni_zajistei_behu_eRousky_na_pozadi.pdf" target="_blank">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_huawei.answer.part_2') }}</a></li>
                              <li><a href="https://www.erouska.cz/navody/Huawei/3_zajisteni_spusteni_eRousky_po_vypnuti_obrazovky.pdf" target="_blank">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_huawei.answer.part_3') }}</a></li>
                              <li><a href="https://www.erouska.cz/navody/Huawei/4_chraneny_status_pro_eRousku.pdf" target="_blank">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_huawei.answer.part_4') }}</a></li>
                              <li><a href="https://www.erouska.cz/navody/Huawei/5_overeni_zpusobu_napajeni.pdf" target="_blank">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_huawei.answer.part_5') }}</a></li>
                              <li><a href="https://www.erouska.cz/navody/Huawei/6_deaktivace_aplikace_powerGenie.pdf" target="_blank">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_huawei.answer.part_6') }}</a></li>
                            </ul>
                  
                            <h4>{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_lenovo.subchapter') }}</h4>
                            <ul>
                              <li><a href="https://www.erouska.cz/navody/Lenovo/1_uzamceni_behu_eRousky.pdf" target="_blank">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_lenovo.answer.part_1') }}</a></li>
                            </ul>
                  
                            <h4>{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_samsung.subchapter') }}</h4>
                            <ul>
                              <li><a href="https://www.erouska.cz/navody/Samsung/1_nastaveni_baterie_pro_beh_eRousky.pdf" target="_blank">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_samsung.answer.part_1') }}</a></li>
                              <li><a href="https://www.erouska.cz/navody/Samsung/2_omezeni_optimalizace_vyuziti_baterie_pro_eRousku.pdf" target="_blank">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_samsung.answer.part_2') }}</a></li>
                              <li><a href="https://www.erouska.cz/navody/Samsung/3_pridani_eRousky_do_seznamu_App_power_monitor.pdf" target="_blank">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_samsung.answer.part_3') }}</a></li>
                            </ul>
                  
                           <h4>{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_sony.subchapter') }}</h4>
                            <ul>
                              <li><a href="https://www.erouska.cz/navody/Sony/1_zajisteni_behu_eRousky_na_pozadi.pdf" target="_blank">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_sony.answer.part_1') }}</a></li>
                            </ul>
                  
                           <h4>{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_xiaomi.subchapter') }}</h4>
                            <ul>
                              <li><a href="https://www.erouska.cz/navody/Xiaomi/1_komplexni_navod_pro_Redmi_Note_5_a_vyssi.pdf" target="_blank">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_xiaomi.answer.part_1') }}</a></li>
                              <li><a href="https://www.erouska.cz/navody/Xiaomi/2_vypnuti_sporice_baterie.pdf" target="_blank">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_xiaomi.answer.part_2') }}</a></li>
                              <li><a href="https://www.erouska.cz/navody/Xiaomi/3_nastaveni_behu_na_pozadi_pro_eRousku.pdf" target="_blank">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_xiaomi.answer.part_3') }}</a></li>
                              <li><a href="https://www.erouska.cz/navody/Xiaomi/4_omezeni_adaptivni_baterie.pdf" target="_blank">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_xiaomi.answer.part_4') }}</a></li>
                              <li><a href="https://www.erouska.cz/navody/Xiaomi/5_vyjimka_z_optimaizace_baterie_pro_eRousku.pdf" target="_blank">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_xiaomi.answer.part_5') }}</a></li>
                              <li><a href="https://www.erouska.cz/navody/Xiaomi/6_vyjimka_z_omezeni_na_pozadi_pro_eRousku.pdf" target="_blank">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_xiaomi.answer.part_6') }}</a></li>
                              <li><a href="https://www.erouska.cz/navody/Xiaomi/7_chraneny_status_pro_eRousku.pdf" target="_blank">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_xiaomi.answer.part_7') }}</a></li>
                              <li><a href="https://www.erouska.cz/navody/Xiaomi/8_overeni_zpusobu_napajeni.pdf" target="_blank">{{ $t('t.web.faq.mobile.co_delat_kdyz_telefon_vypina_erousku_xiaomi.answer.part_8') }}</a></li>
                            </ul>
                  
                  
                          </div>
                        </div>
                  
                      </div>
                    </div>
                  </section>            

            <box/>
        </main>
    </div>
</template>

<script>
    import Box from '~/components/Box.vue'

    export default {
        components: {
            Box
        },
        head() {
            return {
                title: this.$t('t.web.faq.page_title'),
                bodyAttrs: {
                    class: 'page-single page-caste-dotazy'
                }
            }
        }
    }
</script>
