let slider = document.getElementById("myRange"),
    percent = document.getElementById("percent");

percent.innerHTML = slider.value;

slider.oninput = function() {
  percent.innerHTML = this.value;
}