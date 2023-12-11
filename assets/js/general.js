const home = document.querySelector("#logo");
home.addEventListener("click", openHome);
const weight = document.querySelector("#weight");
weight.addEventListener("click", openWeigth);
const length = document.querySelector("#length");
length.addEventListener("click", openLength);
const coin = document.querySelector("#coin");
coin.addEventListener("click", openCoin);
const temperature = document.querySelector("#temperature");
temperature.addEventListener("click", openTemperature);

function openHome (){
    window.location.href = "./index.html";
}

function openWeigth (){
    window.location.href = "./weight_converter.html";
}

function openLength (){
    window.location.href = "./length_converter.html";
}

function openCoin (){
    window.location.href = "./coin_converter.html";
}

function openTemperature (){
    window.location.href = "./temperature_converter.html";
}