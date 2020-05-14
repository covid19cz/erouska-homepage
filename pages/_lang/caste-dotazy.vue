<template>
    <div>
        <section class="heading" id="uvod">
            <h1 class="heading__title">{{ $t('web.faq.title') }}</h1>
        </section>
        <div class="mobile-menu d-block d-xl-none">
            <h3 class="aside__title">{{ $t('web.faq.sections.table_of_contents') }}</h3>
            <ul class="aside__actions">
                <li v-for="(section, s_index) in sections">
                    <a :href="'#' + section.section_anchor" class="aside__anchor">
                        <div class="aside__anchor__title">{{ $t('web.faq.sections.' + section.section_id + '.title') }}</div>
                        <span class="aside__anchor__description">{{ $t('web.faq.sections.' + section.section_id + '.description') }}</span>
                    </a>
                </li>
            </ul>
        </div>
        <main class="main d-flex" role="main">
            <div>
                <section class="section" v-for="(section, s_index) in sections" :id="section.section_anchor">
                    <h2 :class="'section__title section__title--' + (s_index % 2 ? 'red' : 'blue')" v-if="s_index != 0">{{ $t('web.faq.sections.' + section.section_id + '.title') }}</h2>
                    <div class="section__content">
                        <div class="faq">
                            <div v-for="(question, q_index) in section.questions" :id="question.anchor" class="section__item faq__item">
                                <h3 class="faq__q" @click="toggleQuestion(question.anchor); copyTextToClipboard(baseUrl + $nuxt.$route.path + '#' + question.anchor, $event);">{{ $t('web.faq.questions.' + question.id + '.question') }}</h3>
                                <div class="faq__a" :data-collapsed="[((s_index + q_index == 0)) ? 'false' : 'true']" :data-question-anchor="question.anchor">
                                    <template v-for="(item, index) in Object.keys($i18n.messages[$i18n.fallbackLocale].web.faq.questions[question.id].answer).length">
                                    <div v-if="['<ul>', '<ol>', '<h4>'].some(v => $t('web.faq.questions.' + question.id + '.answer[' + index + ']').substring(0, 4).includes(v))"
                                    v-html="$t('web.faq.questions.' + question.id + '.answer[' + index + ']')"></div>
                                    <p v-else v-html="$t('web.faq.questions.' + question.id + '.answer[' + index + ']')"></p>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <div class="aside d-none d-xl-block">
                    <h3 class="aside__title">{{ $t('web.faq.sections.table_of_contents') }}</h3>
                    <ul class="aside__actions">
                        <li v-for="(section, s_index) in sections">
                            <a :href="'#' + section.section_anchor" class="aside__anchor">
                                <div class="aside__anchor__title">{{ $t('web.faq.sections.' + section.section_id + '.title') }}</div>
                                <span class="aside__anchor__description">{{ $t('web.faq.sections.' + section.section_id + '.description') }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import _ from 'lodash'
    import sectionsJson from '~/assets/faq.json'

    export default {
        data() {
            return {
                sections: sectionsJson,
                titleTemplate: process.env.titleTemplate,
                pageCode: 'faq',
                baseUrl: process.env.baseUrl
            }
        },
        head() {
            return {
                title: this.$t('web.' + this.pageCode + '.page_title') + this.titleTemplate,
                meta: [
                    {name: 'description', content: this.$t('web.' + this.pageCode + '.description')},
                    {property: 'og:title', content: this.$t('web.' + this.pageCode + '.page_title') + this.titleTemplate},
                    {property: 'og:description', content: this.$t('web.' + this.pageCode + '.description')},
                    {property: 'twitter:title', content: this.$t('web.' + this.pageCode + '.page_title') + this.titleTemplate},
                    {property: 'twitter:description', content: this.$t('web.' + this.pageCode + '.description')}
                ],
                bodyAttrs: {
                    class: 'page--faq'
                }
            }
        },
        methods: {
            // active navigation from https://css-tricks.com/sticky-smooth-active-nav/
            handleScroll: _.throttle(() => {
                let mainNavLinks = document.querySelectorAll(".aside li a");
                let mainSections = document.querySelectorAll("main section");

                let lastId;

                let fromTop = window.scrollY;

                mainNavLinks.forEach(link => {
                    let section = document.querySelector(link.hash);

                    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                        link.classList.add("aside__anchor--active");
                    } else {
                        link.classList.remove("aside__anchor--active");
                    }
                });
            }, 100),

            // slide toggle from https://css-tricks.com/using-css-transitions-auto-dimensions/
            collapseQuestion(element) {
                var questionHeight = element.scrollHeight;
                var elementTransition = element.style.transition;
                element.style.transition = "";
                requestAnimationFrame(function() {
                    element.style.height = questionHeight + "px";
                    element.style.transition = elementTransition;
                    requestAnimationFrame(function() {
                        element.style.height = 0;
                    });
                });
                element.setAttribute("data-collapsed", "true");
            },
            expandQuestion(element) {
                var questionHeight = element.scrollHeight;
                element.style.height = questionHeight + "px";
                element.addEventListener("transitionend", function(e) {
                    element.removeEventListener("transitionend", arguments.callee);
                    element.style.height = null;
                });
                element.setAttribute("data-collapsed", "false");
            },
            toggleQuestion(questionId) {
                var question = document.querySelector("#" + questionId + " .faq__a");
                var isCollapsed = question.getAttribute("data-collapsed") === "true";
                if(isCollapsed) {
                    this.expandQuestion(question);
                    question.setAttribute("data-collapsed", "false");
                } else {
                    this.collapseQuestion(question);
                }
            },
            expandQuestionFromUrl() {
                if (this.$route.hash) {
                    let question = document.querySelector(".faq__a[data-question-anchor='" + this.$route.hash.substr(1) + "']");
                    if (question) {
                        question.setAttribute("data-collapsed", "false");
                    }
                    return this.$route.hash.substr(1);
                }
                return false;
            },

            // https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
            fallbackCopyTextToClipboard(text) {
                var textArea = document.createElement("textarea");
                textArea.value = text;

                // Avoid scrolling to bottom
                textArea.style.top = "0";
                textArea.style.left = "0";
                textArea.style.position = "fixed";

                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();

                try {
                    var successful = document.execCommand('copy');
                    var msg = successful ? 'successful' : 'unsuccessful';
                    console.log('Fallback: Copying text command was ' + msg);
                } catch (err) {
                    console.error('Fallback: Oops, unable to copy', err);
                }

                document.body.removeChild(textArea);
            },
            copyTextToClipboard(text, e) {
                if (e.metaKey || e.ctrlKey) {
                    if (!navigator.clipboard) {
                        fallbackCopyTextToClipboard(text);
                        return;
                    }
                    navigator.clipboard.writeText(text).then(function() {
                        console.log('Async: Copying to clipboard was successful!');
                    }, function(err) {
                        console.error('Async: Could not copy text: ', err);
                    });
                }
            }
        },

        // changes height of each collapsed element to zero, it allows users to disable js
        mounted () {
            if (process.client) {
                this.$nextTick(() => {
                    let hashPresent = this.expandQuestionFromUrl();
                    document.querySelectorAll(".faq__a").forEach(question => {
                        var isCollapsed = question.getAttribute("data-collapsed") === "true";
                        if (isCollapsed) {
                            question.style.height = 0;
                        }
                    });
                    if (hashPresent) {
                        location.hash = hashPresent;
                    } else {
                        window.scrollTo(0, 0);
                    }
                });
            }
        },

        // part of active navigation snippet
        beforeMount () {
            if (process.client) {
                window.addEventListener("scroll", this.handleScroll);
                this.handleScroll();
            }
        },
        beforeDestroy () {
            if (process.client) {
                window.removeEventListener("scroll", this.handleScroll);
            }
        }
    }
</script>
