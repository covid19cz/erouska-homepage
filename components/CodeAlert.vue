<template>
    <div class="code-alert">
        <img src="/img/other/virus-icon.svg" />
        <i18n path="web.default.code_alert.text" tag="div">
            <a
                href="mailto:info@erouska.cz?subject=Nep%C5%99i%C5%A1la%20mi%20SMS%20s%20ov%C4%9B%C5%99ovac%C3%ADm%20k%C3%B3dem&body=Mil%C3%BD%20t%C3%BDme%20eRou%C5%A1ky%2C%0Am%C3%A1m%20pozitivn%C3%AD%20test%20na%20COVID-19%20a%20nep%C5%99i%C5%A1la%20mi%20SMS%20s%20ov%C4%9B%C5%99ovac%C3%ADm%20k%C3%B3dem%20pro%20eRou%C5%A1ku.%0A%0ACel%C3%A9%20jm%C3%A9no%20uveden%C3%A9%20na%20%C5%BE%C3%A1dance%20o%20test%3A%20%0ATelefonn%C3%AD%20%C4%8D%C3%ADslo%20uveden%C3%A9%20na%20%C5%BE%C3%A1dance%20o%20test%3A%20%0ALaborato%C5%99%2C%20ze%20kter%C3%A9%20mi%20p%C5%99i%C5%A1ly%20v%C3%BDsledky%20testu%3A%20"
                @click="$ga.event('Email', 'Missing code', 'top alert box')"
            >info@erouska.cz</a>
        </i18n>
    </div>
</template>
