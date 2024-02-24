function formClick(event) {
  event.preventDefault();

  new Typewriter(".cultural-food", {
    strings:
      "Ethiopian food is best described as a culinary adventure bursting with flavour, culture and religious history. It is certainly not for the faint of palates. ",
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}
let form = document.querySelector(".form");
form.addEventListener("click", formClick);
