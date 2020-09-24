# erouska-homepage

> Official website of eRouška mobile app

Read our **FAQ**: [Czech](https://erouska.cz/caste-dotazy), [English](https://erouska.cz/en/caste-dotazy)

eRouška (_rouška_ = _face mask_ in Czech) helps to fight against COVID-19.

eRouška uses Bluetooth to scan the area around the device for other eRouška users and saves the data of these encounters.

It's the only app in Czechia authorized to use Exposure Notifications API from Apple/Google.

## Who is developing eRouška

Starting with version 2.0, the eRouška application is developed by the Ministry of Health in collaboration with the National Agency for Communication and Information Technologies ([NAKIT](https://nakit.cz/)). Earlier versions of eRouška application were developed by a team of volunteers from the [COVID19CZ](https://covid19cz.cz) community. Most of original eRouška developers continue to work on newer versions in the NAKIT team.

## Contributing

We are happy to accept pull requests!

If you want to become a more permanent part of the team, join [our Slack](https://covid19cz.slack.com), channel _#erouska_.

## Translations

Help us translate to your language or if you see a problem with translation, fix it. Our translation is open to volunteers [at OneSky](https://covid19cz.oneskyapp.com/).

## Build Setup

### Install dependencies

```bash
$ npm install
```

### Download translations from SkyApp

You will need `SKYAPP_SECRET_KEY` env variable with the SkyApp secret key.

```bash
$ gulp

# local build without secret key
$ gulp buildI18nLocal
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
