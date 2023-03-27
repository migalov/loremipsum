import { form } from "../modules/const"

let classNameBlockField = "lorem-base-form__group",
    classNameMessage = "validation-message",
    messageSubmit = form.querySelector(`.lorem-base-form__input-submit + .${classNameMessage}`);

form.addEventListener("submit", (e) => {

    e.preventDefault();

    let formData = new FormData(form);
    var fieldsEmptyLength = 0;

    const   showColorSuccessMessage = () => {
                messageSubmit.classList.remove(`${classNameMessage}--error`);
                messageSubmit.classList.add(`${classNameMessage}--success`);
            },
            showColorErrorMessage = () => {
                messageSubmit.classList.remove(`${classNameMessage}--success`);
                messageSubmit.classList.add(`${classNameMessage}--error`);
            };

    for (let pair of formData.entries()) {

        var inputBlock = document.getElementById(`${pair[0]}`).closest(`.${classNameBlockField}`);

        if(!pair[1]) {
            inputBlock.classList.add(`${classNameBlockField}--error`);
            inputBlock.querySelector(`.${classNameMessage}`).classList.add(`${classNameMessage}--error`);
            inputBlock.querySelector(`.${classNameMessage}`).innerHTML = `Обязательно к заполнению`;
            fieldsEmptyLength++;
        }
        else {
            inputBlock.classList.remove(`${classNameBlockField}--error`);
            inputBlock.querySelector(`.${classNameMessage}`).classList.remove(`${classNameMessage}--error`);
            inputBlock.querySelector(`.${classNameMessage}`).innerHTML = ``;
        }

    }

    if (!fieldsEmptyLength > 0) {

        fetch(e.target.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                messageSubmit.innerHTML = `Data sent successfully!`;
                showColorSuccessMessage();
                form.reset();
            } else {
                response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    messageSubmit.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                    showColorErrorMessage();
                } else {
                    messageSubmit.innerHTML = "Oops! There was a problem submitting your form";
                    showColorErrorMessage();
                }
                })
            }
        })
        .catch(error => {
            messageSubmit.innerHTML = "Oops! There was a problem submitting your form";
            showColorErrorMessage();
        });
    }
});

document.querySelectorAll(`.${classNameBlockField}`).forEach((el) => {
    if (el.querySelector(`[type=file]`)?.getAttribute(`id`) !== "file") {
        el.addEventListener("click", _e => {
            _e.target.closest(`.${classNameBlockField}`).classList.remove(`${classNameBlockField}--error`);
            _e.target.closest(`.${classNameBlockField}`).querySelector(`.${classNameMessage}`).classList.remove(`${classNameMessage}--error`);
            _e.target.closest(`.${classNameBlockField}`).querySelector(`.${classNameMessage}`).innerHTML = ``;
        })
    }
})

