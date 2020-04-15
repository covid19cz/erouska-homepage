export const state = () => ({
  locales: process.env.locales,
  locale: process.env.defaultLanguage
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}