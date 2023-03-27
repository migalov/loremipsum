import { form } from "../modules/const";

form.querySelectorAll("[name=file]").forEach(e => {
    e.addEventListener("change", (_e) => {
        var files = _e.target.files,
            fileName = files[0].name,
            message = _e.target.closest(".lorem-base-form__group").querySelector(".validation-message");
        var allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

        message.classList.add("validation-message--has-file");
        message.classList.remove("validation-message--error");
        message.innerHTML = 'Файл: ' + fileName;

        if (!allowedTypes.includes(files[0].type)) {
            message.classList.add("validation-message--error");
            message.innerHTML = "Please upload a PDF, DOC, or DOCX file";
            _e.target.value = "";
        }
    })

});