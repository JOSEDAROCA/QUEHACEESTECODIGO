import "./styles.css";

//… funcionalidad de ingreso de datos …
rotulo1.innerHTML = "Ingrese el primer número: ";
rotulo2.innerHTML = "Ingrese el segundo número: ";
rotulo3.innerHTML = "Ingrese el tercer número: ";

let dato1: number = document.getElementById("dato1");
let dato2: number = document.getElementById("dato2");
let dato3: number = document.getElementById("dato3");

btn.addEventListener("click", () => {
  let no1: number = Number(dato1.value);
  let no2: number = Number(dato2.value);
  let no3: number = Number(dato3.value);
  let result: number = 0;

  console.log(no1);
  console.log(no2);
  console.log(no3);

  if (no1 < 0) {
    result = no1 * no2 * no3;
  } else {
    result = no1 + no2 + no3;
  }
  console.log(result);
});
