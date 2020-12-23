<template>
    <div>
        <section class="heading" id="uvod">
            <h1 class="heading__title">{{ $t('web.faq.title') }}</h1>
        </section>
        <div class="mobile-menu d-block d-xl-none">
            <h3 class="aside__title">{{ $t('web.faq.sections.table_of_contents') }}</h3>
            <ul class="aside__actions">
                <li v-for="(section, s_index) in sections">
                    <a :href="'#' + section.section_anchor" class="aside__anchor" @click="$ga.event('FAQ', 'Section click', section.section_anchor, 0)">
                        <div class="aside__anchor__title">{{ $t('web.faq.sections.' + section.section_id + '.title') }}</div>
                        <span class="aside__anchor__description">{{ $t('web.faq.sections.' + section.section_id + '.description') }}</span>
                    </a>
                </li>
            </ul>
        </div>
        <main class="main d-flex" role="main">
            <div :class="{searching: searchString}">
                <input type="text" class="search__input" @input="debounceInput" :placeholder="$t('web.faq.search.placeholder')" ref="searchInput" autofocus>
                <p v-if="searchString" class="search__paragraph">
                    <span>{{ $t('web.faq.search.results_info') }} </span>
                    <button class="search__button button" @click="$refs.searchInput.value = ''; searchString = '';">{{ $t('web.faq.search.show_all') }}</button>
                </p>
                <section class="section" v-for="(section, s_index) in sections" :id="section.section_anchor">
                    <h2 :class="'section__title section__title--' + (s_index % 2 ? 'red' : 'blue')" v-if="s_index != 0">{{ $t('web.faq.sections.' + section.section_id + '.title') }}</h2>
                    <div class="section__content">
                        <div class="faq">
                            <div
                                v-for="(question, q_index) in section.questions"
                                :id="question.anchor"
                                class="section__item faq__item"
                                v-show="isSearchResult(question.id)"
                            >
                                <h3 class="faq__q" @click="toggleQuestion(question.anchor); copyTextToClipboard(baseUrl + $nuxt.$route.path + '#' + question.anchor, $event);" v-html="highlightMatch($t('web.faq.questions.' + question.id + '.question'))"></h3>
                                <div class="faq__a" :data-collapsed="[((s_index + q_index == 0)) ? 'false' : 'true']" :data-question-anchor="question.anchor">
                                    <template v-for="(item, index) in Object.keys($i18n.messages[$i18n.fallbackLocale].web.faq.questions[question.id].answer).length">
                                    <div v-if="['<ul>', '<ol>', '<h4>', '<pre'].some(v => $t('web.faq.questions.' + question.id + '.answer[' + index + ']').substring(0, 4).includes(v))"
                                    v-html="highlightMatch($t('web.faq.questions.' + question.id + '.answer[' + index + ']').replace(/\\n/g, '\n'))"></div>
                                    <p v-else v-html="highlightMatch($t('web.faq.questions.' + question.id + '.answer[' + index + ']'))"></p>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <p v-if="searchString" class="search__paragraph">
                    <span>{{ $t('web.faq.search.not_successful') }} </span>
                    <button class="search__button button" @click="$refs.searchInput.value = ''; searchString = ''; $refs.searchInput.focus();">{{ $t('web.faq.search.again') }}</button>
                </p>
            </div>
            <div>
                <div class="aside d-none d-xl-block">
                    <h3 class="aside__title">{{ $t('web.faq.sections.table_of_contents') }}</h3>
                    <ul class="aside__actions">
                        <li v-for="(section, s_index) in sections">
                            <a :href="'#' + section.section_anchor" class="aside__anchor" @click="$ga.event('FAQ', 'Section click', section.section_anchor, 1)">
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
    import versionsJson from '~/assets/versions.json'

    export default {
        data() {
            return {
                sections: sectionsJson,
                versions: versionsJson,
                titleTemplate: process.env.titleTemplate,
                pageCode: 'faq',
                baseUrl: process.env.baseUrl,
                searchString: ''
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
        computed: {
            searchTerms() {
                // remove interpunction
                let searchString = this.searchString.replace(/[.,!?]/g, ' ');
                // remove double spaces, split by space, and filter out empty strings
                let searchTerms = searchString.replace(/ +(?= )/g,'').split(" ").filter(x => x.length > 0);
                return searchTerms;
            }
        },
        methods: {
            debounceInput: _.debounce(function(e) {
                this.searchString = e.target.value;
            }, 250),

            highlightMatch(html) {
                if (this.searchTerms) {
                    this.searchTerms.forEach(term => {
                        html = html.split(term).join(`<mark>${term}</mark>`);
                        html = html.replace(/(<[^>]*)<\/?mark>([^<>]*)(<\/?mark>)?([^>]*>)/g, '$1$2$4');
                        // try https://markjs.io/
                    });
                }

                return html;
            },

            isSearchResult(questionId) {
                if (this.searchString.length === 0) {
                    return true;
                }

                let text = this.$t('web.faq.questions.' + questionId + '.question') + ' '
                    + this.$t('web.faq.questions.' + questionId + '.answer').join(' ').replace(/<[^>]*>?/gm, ' ');
                text = this.normalize(text);
                let allHits = 0;

                if (this.searchTerms) {
                    // perform the search for each term
                    allHits = this.searchTerms.every(term => text.includes(this.normalize(term)));
                }

                return allHits;
            },

            normalize(string) {
                if (string.normalize('NFD')) {
                    return string.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                }

                return string.toLowerCase();
            },

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
            collapseQuestion(element, questionId) {
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
                this.$ga.event("FAQ", "Collapse", questionId);
            },
            expandQuestion(element, questionId) {
                var questionHeight = element.scrollHeight;
                element.style.height = questionHeight + "px";
                element.addEventListener("transitionend", function(e) {
                    element.removeEventListener("transitionend", arguments.callee);
                    element.style.height = null;
                });
                element.setAttribute("data-collapsed", "false");
                this.$ga.event("FAQ", "Expand", questionId);
            },
            toggleQuestion(questionId) {
                var question = document.querySelector("#" + questionId + " .faq__a");
                var isCollapsed = question.getAttribute("data-collapsed") === "true";
                if(isCollapsed) {
                    this.expandQuestion(question, questionId);
                    question.setAttribute("data-collapsed", "false");
                } else {
                    this.collapseQuestion(question, questionId);
                }
            },
            expandQuestionFromUrl() {
                if (this.$route.hash) {
                    let questionId = this.$route.hash.substr(1);
                    let question = document.querySelector(".faq__a[data-question-anchor='" + questionId + "']");
                    if (question) {
                        question.setAttribute("data-collapsed", "false");
                    }
                    this.$ga.event("FAQ", "Expand from URL", questionId);
                    return questionId;
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

        watch: {
            searchString(val) {
                let path = location.pathname;

                if (this.searchString) {
                    path += '?hledat=' + val.replace(/\s/g, '_');
                }

                window.history.replaceState({}, '', path);
                this.$ga.page(path);
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

                    const urlParams = new URLSearchParams(window.location.search);
                    let search = urlParams.get('hledat');

                    if (search) {
                        search = search.replace(/_/g, ' ');
                        this.$refs.searchInput.value = search;
                        this.searchString = search;
                    }
                });
            }
        },

        // another part of active navigation snippet
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
