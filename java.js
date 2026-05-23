// Función factorial con BigInt (obligatorio)
function factorial(n) {
  if (n < 0) return 0n;
  let result = 1n;
  for (let i = 2n; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Función para calcular combinación C(n, r)
function combinacion(n, r) {
  if (r > n || r < 0) return 0n;
  const num = factorial(BigInt(n));
  const den = factorial(BigInt(r)) * factorial(BigInt(n - r));
  return num / den;
}

// Elementos
const btn = document.getElementById('calculateBtn');
const finalResult = document.getElementById('finalResult');
const totalNumber = document.getElementById('totalNumber');
const explanation = document.getElementById('explanation');

btn.addEventListener('click', () => {
  const n1 = parseInt(document.getElementById('n1').value);
  const r1 = parseInt(document.getElementById('r1').value);
  const n2 = parseInt(document.getElementById('n2').value);
  const r2 = parseInt(document.getElementById('r2').value);

  // Validación
  if (!n1 || !r1 || !n2 || !r2) {
    alert("Por favor completa todos los campos ✨");
    return;
  }

  // Cálculos
  const comb1 = combinacion(n1, r1);
  const comb2 = combinacion(n2, r2);
  const total = comb1 * comb2;

  // Mostrar resultados intermedios
  document.getElementById('result1').innerHTML = `C(${n1},${r1}) = <span>${comb1.toLocaleString('es-ES')}</span>`;
  document.getElementById('result2').innerHTML = `C(${n2},${r2}) = <span>${comb2.toLocaleString('es-ES')}</span>`;

  // Mostrar resultado final
  totalNumber.textContent = total.toLocaleString('es-ES');
  explanation.innerHTML = `
    ¡Hay <strong>${total.toLocaleString('es-ES')}</strong> formas mágicas diferentes de ganar!<br>
    <small>Grupo 1: C(${n1},${r1}) × Grupo 2: C(${n2},${r2})</small>
  `;

  finalResult.style.display = 'block';
  finalResult.scrollIntoView({ behavior: 'smooth' });
});