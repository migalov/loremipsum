import { form } from "../modules/const";

form.querySelectorAll("[name=file]").forEach(e => {
    e.addEventListener("change", (_e) => {
        var files = _e.target.files,
            fileName = files[0].name,
            message = _e.target.closest(".lorem-base-form__group").querySelector(".validation-message");

        message.classList.add("validation-message--has-file");
        message.classList.remove("validation-message--error");
        message.innerHTML = 'File: ' + fileName;
    })

});