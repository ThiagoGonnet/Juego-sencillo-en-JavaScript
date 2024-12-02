let btn_ini = document.querySelector("#btn-ini");
let btn_menor = document.querySelector("#btn-menor");
let btn_mayor = document.querySelector("#btn-mayor");

let primernum = document.querySelector("#primer_numero");
let segunnum = document.querySelector("#segundo_numero");
let resultado = document.querySelector("#resultado");
let historial = document.querySelector("#historial");
let jugadas = [];

let num1;
historial.style.display = "none";

document.addEventListener('DOMContentLoaded', function() {
    btn_ini.addEventListener("click", function(){
        num1 = Math.floor(Math.random() * 10) + 1;
        primernum.innerHTML = num1;
        btn_ini.remove();
    });

    btn_menor.addEventListener("click", function(){
        realizarJugada("MENOR");
    });

    btn_mayor.addEventListener("click", function(){
        realizarJugada("MAYOR");
    });

    function realizarJugada(opcion) {
        historial.style.display = "block";
        let num2 = Math.floor(Math.random() * 10) + 1;
        while (num2 == num1) {
            num2 = Math.floor(Math.random() * 10) + 1;
        }
        segunnum.innerHTML = num2;

        let gano = false;
        if (opcion === "MENOR") {
            if (num2 < num1) {
                resultado.innerHTML = "El segundo número fue menor que el primero!";
                resultado.style.color = "green";
                gano = true;
            } else {
                resultado.innerHTML = "Perdió";
                resultado.style.color = "red";
            }
        } else if (opcion === "MAYOR") {
            if (num2 > num1) {
                resultado.innerHTML = "El segundo número fue mayor que el primero!";
                resultado.style.color = "green";
                gano = true;
            } else {
                resultado.innerHTML = "Perdió";
                resultado.style.color = "red";
            }
        }

        // Crear objeto de jugada
        let jugada = {
            primerNumero: num1,
            segundoNumero: num2,
            opcion: opcion,
            resultado: gano ? "GANÓ" : "PERDIÓ"
        };

        // Agregar jugada al arreglo
        jugadas.push(jugada);

        // Actualizar historial
        actualizarHistorial();

        primernum.innerHTML = "";
        num1 = num2;
    }

    function actualizarHistorial() {
        historial.innerHTML = "";
        jugadas.forEach(jugada => {
            let li = document.createElement("li");
            li.textContent = `Opción: ${jugada.opcion} - Resultado: ${jugada.resultado}`;
            historial.appendChild(li);
        });
    }
});
