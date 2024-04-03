console.log("Javascript ready");

const base_api = "https://api.genderize.io";

function showResult(name, gender, probability) {
  const predictionElement = document.getElementById("prediction");
  const probabilityPercentage = probability * 100;
  let genderTranslation;

  if (gender == "male") {
    genderTranslation = "Laki-laki";
  } else {
    genderTranslation = "Perempuan";
  }

  const predictionText = `Halo ${name}, jenis kelamin anda adalah ${genderTranslation} dengan kemungkinan sebesar ${probabilityPercentage}%`;

  predictionElement.textContent = predictionText;
}

async function predict(event) {
  if (event.key == "Enter") {
    const firstName = event.target.value;
    const queryUrl = `${base_api}/?name=${firstName}&country_id=ID`;

    const response = await fetch(queryUrl);
    const result = await response.json();
    showResult(result.name, result.gender, result.probability);
  }
}
