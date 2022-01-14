let ville = "Paris";
const temp = document.querySelector("#temperature_label");
const city = document.querySelector("#ville");
const changer = document.querySelector("#changer");
recevoirTemperature(ville);

changer.addEventListener("click", () => {
    ville = prompt("Quel ville choisissez-vous ?");
    recevoirTemperature(ville);
});

function recevoirTemperature(ville) {
    const url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        ville +
        "&appid=2c81554238698a2ea04d5e7067874d2f&units=metric";

    let requete = new XMLHttpRequest(); //Créer un objet

    requete.open("GET", url); // Premier paramètre GET / POST, deuxième paramètr : url
    requete.responseType = "json"; // Nous attendons du JSON
    requete.send(); // Nous envoyons notre requête

    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                let temperature = reponse.main.temp;
                let ville = reponse.name;
                temp.textContent = temperature;
                city.textContent = ville;
            } else {
                alert("Un problème est survenu, merci de revenir plus tard");
            }
        }
    };
}
