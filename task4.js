compute.addEventListener('click',
function()
{
  var n = numberX.value;
  var summa = 0;
  var k = numberY.value;
  var b = 1;
  while(b <=n)
  {
    summa = summa + Math.pow(b,k);
    b++;
  }
  numberResult.innerHTML = summa;
}
)
