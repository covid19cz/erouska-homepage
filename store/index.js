export const state = () => ({
  locales: ['cs', 'en'],
  locale: 'cs'
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}