
//DOM
console.dir(document.body);


function cambiarDescripcion() {
    let descripcion = document.getElementsByClassName("card-text")
    descripcion[0].style.background = "yellow";
    descripcion[0].style.font = "italic bold 20px Georgia"
    descripcion[0].innerText = prompt("Ingresa un texto descriptivo para la Ensalada Fattoush");
}

cambiarDescripcion();

function activarPrecios() {
  
    let precio = document.getElementsByClassName("card-footer");
    precio[0].innerText = "$1000";
    precio[0].style.font = "italic bold 30px Georgia";
    precio[1].innerText = "$900";
    precio[1].style.font = "italic bold 30px Georgia";
    precio[1].style.background = "red";
    precio[2].innerText = "$1500";
    precio[2].style.font = "italic bold 30px Georgia";
    precio[3].innerText = "$1200";
    precio[3].style.font = "italic bold 30px Georgia";
    precio[4].innerText = "$950";
    precio[4].style.font = "italic bold 30px Georgia";
    precio[4].style.background = "red";
    precio[5].innerText = "$920";
    precio[5].style.font = "italic bold 30px Georgia";
    
   
}

activarPrecios();




let saludo= document.createElement("h2");
saludo.innerHTML = "<h2>Bienvenido/a, gracias por comer sano </h2>";
document.getElementById("H").appendChild(saludo)

