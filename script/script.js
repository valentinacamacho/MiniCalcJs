function calcular(operacion) {
  const input1 = parseFloat(document.getElementById("number1").value);
  const input2 = parseFloat(document.getElementById("number2").value);
  const resul = document.getElementById("result");

  if (isNaN(input1) || isNaN(input2)) {
    resul.textContent = "Ingresa ambos números en las cajas de texto";
    resul.className = "resultado error";
    resul.style.display = "block";
    return;
  }

  let total;

  switch (operacion) {
    case "sumar":
      total = input1 + input2;
      break;
    case "restar":
      total = input1 - input2;
      break;
    case "multiplicar":
      total = input1 * input2;
      break;
    case "dividir":
      if (input2 === 0) {
        resul.textContent = "No se puede dividir por 0";
        resul.className = "resultado error";
        resul.style.display = "block";
        return;
      }
      total = input1 / input2;
      break;
    default:
      resul.textContent = "Operación no válida";
      resul.className = "resultado error";
      resul.style.display = "block";
      return;
  }

  resul.textContent = `El resultado es: ${total}`;
  resul.className = "resultado exito";
  resul.style.display = "block";
}
