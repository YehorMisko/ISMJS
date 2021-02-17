compute.addEventListener('click',
function()
{
  let x = numberX.value;
  let y = numberY.value;
  let z = numberZ.value;
  let summa = Math.sin(Math.pow(y,-Math.sqrt(Math.abs(x)))) * (z - (x / y)) +
  Math.sin(Math.cos(z));
  numberResult.innerHTML = summa;
}
)
