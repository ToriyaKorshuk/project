class Form {
    constructor() {
    }

    init() {
        const selectWrapper = document.querySelector(".select-wrapper");
        const selectSelected = document.querySelector(".select-selected");
        const selectItems = document.querySelector(".select-items");

        selectSelected.addEventListener("click", () => {
            selectWrapper.classList.toggle("open-select");
        });

        selectItems.querySelectorAll("li").forEach(item => {
            item.addEventListener("click", function () {
                selectSelected.querySelector("span").textContent = this.textContent;
                selectSelected.dataset.value = this.dataset.value;
                selectWrapper.classList.remove("open-select");
            });
        });

        document.addEventListener("click", e => {
            if (!selectWrapper.contains(e.target)) {
                selectWrapper.classList.remove("open-select");
            }
        });

        //range

        const rangeSlider = document.getElementById('rangeSlider');
        const rangeValue = document.getElementById('rangeValue');
        const rangeText = document.getElementById('rangeText');
        const rangeTexts = {
            0: "Minima veniam",
            25: "Quis nostrum",
            50: "Ut enim ad",
            75: "Sed ut perspiciatis, unde",
            100: "Omnis iste natus"
        };

        const updateRangeText = value => {
            rangeValue.textContent = value + '%';
            rangeText.textContent = rangeTexts[value] || '';
        };

        updateRangeText(rangeSlider.value);
        rangeSlider.addEventListener('input', function () {
            updateRangeText(this.value);
        });

        //validation for form

        const form = document.getElementById("contactForm");
        const emailInput = document.getElementById("email");
        const nameInput = document.getElementById("name");
        const successMessage = document.getElementById("successMessage");

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            let isValid = true;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            isValid = validateField(emailInput, emailPattern, "emailError") && isValid;
            isValid = validateField(nameInput, /.{2,}/, "nameError") && isValid;
            isValid = selectSelected.dataset.value ? hideError("systemTypeError") || isValid : showError("systemTypeError") && false;

            if (isValid) {
                successMessage.style.display = "block";
                form.reset();
            }
        });

        function validateField(input, pattern, errorId) {
            if (!pattern.test(input.value.trim())) {
                showError(errorId);
                return false;
            }
            hideError(errorId);
            return true;
        }

        function showError(id) {
            document.getElementById(id).style.display = "block";
            return false;
        }

        function hideError(id) {
            document.getElementById(id).style.display = "none";
        }
    }
}

export default new Form();
