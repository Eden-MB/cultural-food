function cusineResponse(response) {
  new Typewriter(".cultural-food", {
    strings: response.data.answer,
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
  let context = "You have extensive knowledge about international cusines. Your mission is to generate a 4 line cusine about a country cusines";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  axios.get(apiURL).then(cusineResponse);
}

let form = document.querySelector("#formElement");
form.addEventListener("click", generateCusine);
