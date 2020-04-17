export function getHomeUrl(lang) {
    if (lang && process.env.locales.includes(lang)) {
        return "/" + lang;
    } else {
        return "/";
    }
}
