class Footer {
    constructor() {
    }

    init() {


        //mobile header

        const yearElement = document.getElementById("year");
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }
}

export default new Footer();
