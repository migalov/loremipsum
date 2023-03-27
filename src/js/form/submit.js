import { form } from "../modules/const"

let classNameBlockField = "lorem-base-form__group",
    classNameMessage = "validation-message";

form.addEventListener("submit", (e) => {

    e.preventDefault();

    let formData = new FormData(form);
    var fieldsEmptyLength = 0;

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

        if(pair[0] === "file" && document.getElementById(`file`).files[0]?.name === undefined) {
            inputBlock.querySelector(`.${classNameMessage}`).classList.add(`${classNameMessage}--error`);
            inputBlock.querySelector(`.${classNameMessage}`).innerHTML = `Выберите файл`;
            console.log(document.getElementById(`${pair[0]}`).files[0]);
            fieldsEmptyLength++;
        }
    }

    if (!fieldsEmptyLength > 0) {
        fetch(e.target.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
          }).then(response => {
            if (response.ok) {
              console.log("Thanks for your submission!");
              form.reset()
            }
          }).catch(error => {
          //   status.innerHTML = "Oops! There was a problem submitting your form"
          console.log("Oops! There was a problem submitting your form");
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

