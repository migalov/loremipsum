document.querySelector(`.form [type="file"]`).addEventListener("change", (e) => {
    var files = document.getElementById('files').files;
    var fileName = files[0].name;
    e.target.previousElementSibling.querySelector('.form-file__placeholder').innerHTML = 'Выбранный файл: ' + fileName;
})