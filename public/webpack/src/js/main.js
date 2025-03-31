// JS
import Header from '../js/blocks/Header';
import Form from '../js/blocks/Form';
import Footer from '../js/blocks/Footer';

class App {
    init() {
        document.addEventListener("DOMContentLoaded", function () {
            Header.init();
            Form.init();
            Footer.init();
        });
    }
}

const app = new App();
app.init();


// Styles
import '../styles/main.scss'