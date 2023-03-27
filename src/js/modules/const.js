const   form = document.querySelector(`.lorem-base-form`),
        fieldSelect = form.querySelector(`select[name="system_type"]`),
        fieldName = form.querySelector(`[name=name]`),
        fieldEmail = form.querySelector(`[name=email]`),
        fieldRange = form.querySelector(`[name=percent]`),
        fieldFile = form.querySelector(`[name=file]`),
        fieldSubmit = form.querySelector(`[type=submit]`);

export { form, fieldSelect, fieldName, fieldEmail, fieldRange, fieldFile, fieldSubmit };