# erouska-homepage

> Official website of eRouška mobile app

## Build Setup

### Install dependencies
```bash
$ npm install
```

### Download translations from SkyApp
You will need `SKYAPP_SECRET_KEY` env variable with the SkyApp secret key.
```bash
$ gulp dist
``` 

### Build the web
```bash
# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project and launch firebase server at localhost:5000
$ npm run generate
$ firebase serve --only hosting
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org) and [Vue I18n docs](https://kazupon.github.io/vue-i18n/).

### Deploy remote config and site to Firebase
You will need `GOOGLE_APPLICATION_CREDENTIALS` env variable with path to a service account JSON.
```bash
$ export GOOGLE_APPLICATION_CREDENTIALS=...
$ gulp deploy
```

### Upload strings for translation
You will again need the SKYAPP secret key in `SKYAPP_SECRET_KEY`.
```bash
$ gulp uploadStrings
```

### Verification of strings for translation
```bash
$ gulp verifyI18nDefiniton
```
