function cusineResponse(response) {
  new Typewriter("#poem", {
    strings: response.data.answer;
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateCusine(event) {
  event.preventDefault();
  let inputResult = document.querySelector("#inputText");
  let key = "aa101dfb7t3469957354ac7531fb152o";
  let prompt = `Generate a cusine from ${inputResult.value}`;
  let context = "";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  axios.get(apiURL).then(generateCusine);
}
generateCusine();
let form = document.querySelector("#formElement");
form.addEventListener("event", cusineResponse);
