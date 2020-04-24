
/** overide VUE implementation for back */
if (process.client) {
    if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    /** original value 'auto' - that will navigate to the menu at bottom of the page */
    window.addEventListener('beforeunload', () => {
        window.history.scrollRestoration = 'manual'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
        window.history.scrollRestoration = 'manual'
    })
    }
}


export default function (to, from, savedPosition) {
    console.log("in" + (new Date()).getMilliseconds());
    //scroll after the call backback to avoid mixing transition and smooth scrooling
    return new Promise((resolve) => {
        setTimeout(() => {
            if (to.hash) {
                resolve({selector: to.hash}); //when #
            } else {
                resolve({ x: 0, y: 0 }); //otherwise go top
            }
        }, 100);
    })
}

