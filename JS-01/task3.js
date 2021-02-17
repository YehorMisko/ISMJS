compute.addEventListener('click',
function()
{
  var n = numberX.value;
  var summa = 0;
  var k = 1;
  while(n > 0)
  {
    summa = summa + Math.pow(k,n);
    k++;
    n--;
  }
numberResult.innerHTML = summa;
}
)
