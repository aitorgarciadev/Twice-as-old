import { calculateYearsToDoubleAge } from "./calculateAge.js";

document.getElementById("ageForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const fatherAge = parseInt(document.getElementById("fatherAge").value);
  const sonAge = parseInt(document.getElementById("sonAge").value);
  const result = calculateYearsToDoubleAge(fatherAge, sonAge);

  document.getElementById("result").textContent = `Resultado: ${result} años`;
});
