const weigth = document.querySelector("#weigth");
weigth.addEventListener("click", openWeigth);

function openWeigth (){
    console.log("abriendo weigth");
    window.location.href = "http://localhost:8000/converter-generic.html";
}