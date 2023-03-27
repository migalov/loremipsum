import { form } from "../modules/const";

form.querySelectorAll(".lorem-base-form__input-range").forEach((e) => {
  e.addEventListener("input", (_e) => {
    _e.target.closest(`.lorem-base-form__group`).querySelector(`.lorem-base-form__range-value`).innerHTML = `${e.value}%`
  })
})