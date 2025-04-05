function calcular(operacion){
    const input1 = parseFloat(document.getElementById("number1").value);
    const input2 = parseFloat(document.getElementById("number2").value);
    const resul = document.getElementById("result");

    if(isNaN(input1) || isNaN(input2)){
        resul.textContent = "Ingresa ambos números en las cajas de texto";
        resul.style.color = "red";
        return;
    }


}