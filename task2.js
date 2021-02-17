compute.addEventListener('click',
function()
{
  let a = numberX.value;
  let b = numberY.value;
  let c = numberZ.value;
  let discriminant = Math.pow(b,2) - 4 * a * c;
  var ans2 = (-b + Math.sqrt(discriminant)) / 2 * a;
  var ans1 = (-b - Math.sqrt(discriminant)) / 2 * a;
  if(discriminant > 0)
  {
    numberResult.innerHTML = 'Root 1 = ' + ans1 + ' And Root 2 = ' + ans2;
  }
  else
  {
    if(discriminant == 0){
      numberResult.innerHTML = 'Root  = ' + ans1;
    }
    else {
      numberResult.innerHTML = 'There are no possible roots'
         }
  }
}
)
