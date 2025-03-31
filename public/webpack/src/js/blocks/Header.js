class Header {
    constructor() {
    }

    init() {


        //mobile header

        const menuHamburger = document.querySelector('.hamburger-menu');
        const menuHeaderWrapper = document.querySelector('.header__nav');

        if (menuHamburger) {
            menuHamburger.addEventListener('click', function () {
                this.classList.toggle('open-hamburger');
                menuHeaderWrapper.classList.toggle('open-mob');

            })
        }


        //scroll header

        const header = document.querySelector('.header');

        window.addEventListener('scroll', function() {
            const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
            if (currentScrollPosition === 0) {
                header.classList.remove('header-scroll');
            } else {
                header.classList.add('header-scroll');
            }
        });


    }
}

export default new Header();
