export default function (to, from, savedPosition) {
    //scroll after the call backback to avoid mixing transition and smooth scrooling
    return new Promise((resolve) => {
        setTimeout(() => {
            if (to.hash) {
                resolve({selector: to.hash}); //when #
            } else if (savedPosition) {
                resolve(savedPosition);
            } else {
                resolve({ x: 0, y: 0 }); //otherwise go top
            }
        }, 100);
    })
}
