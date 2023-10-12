const weigth = document.querySelector("#weigth");
weigth.addEventListener("click", openWeigth);
const length = document.querySelector("#length");
length.addEventListener("click", openLength);
const coin = document.querySelector("#coin");
coin.addEventListener("click", openCoin);
const temperature = document.querySelector("#temperature");
temperature.addEventListener("click", openTemperature);


function openWeigth (){
    window.location.href = "./weight_converter.html";
}

function openLength (){
    window.location.href = "http://localhost:8000/converter-generic.html";
}

function openCoin (){
    window.location.href = "http://localhost:8000/converter-generic.html";
}

function openTemperature (){
    window.location.href = "http://localhost:8000/converter-generic.html";
}