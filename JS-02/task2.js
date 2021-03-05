compute.addEventListener('click',
function()
{
  let tableDemoDiv = document.querySelector('#numberResult');
  let resultElem = document.createElement('table');
  let headerElem = document.createElement('tr');
  let headerthElem1 = document.createElement('th');
  headerthElem1.innerHTML = "Name Surname";
  headerElem.appendChild(headerthElem1);
let headerthElem2 = document.createElement('th');
  headerthElem2.innerHTML = "Sex";
  headerElem.appendChild(headerthElem2);
  let headerthElem3 = document.createElement('th');
  headerthElem3.innerHTML = "Address";
  headerElem.appendChild(headerthElem3);
let headerthElem4 = document.createElement('th');
  headerthElem4.innerHTML = "Postal code";
  headerElem.appendChild(headerthElem4);
let headerthElem5 = document.createElement('th');
  headerthElem5.innerHTML = "Birth date";
  headerElem.appendChild(headerthElem5);
let headerthElem6 = document.createElement('th');
  headerthElem6.innerHTML = "Login";
  headerElem.appendChild(headerthElem6);
let headerthElem7 = document.createElement('th');
  headerthElem7.innerHTML = "Password";
  headerElem.appendChild(headerthElem7);
let headerthElem8 = document.createElement('th');
  headerthElem8.innerHTML = "Mail address";
  headerElem.appendChild(headerthElem8);
  resultElem.appendChild(headerElem);
//  let x = document.getElementById("#myTextArea").value;
  let y = numberX.value;
  //console.log(y);
  let people = y.split(/^[ \t]*$/gm);
  console.log(people);
  for(let i = 0; i < people.length;i++)
  {

    let trElem = document.createElement('tr');
    let lines = people[i].split('\n');
    console.log(lines);
    for(let j = 0; j < lines.length; j++)
    {
      let tdElem = document.createElement('td');
      if(lines[j] == "")continue;
      let spanElem = document.createElement('span');
      spanElem.innerHTML =  lines[j];
      tdElem.appendChild(spanElem);
      trElem.appendChild(tdElem);
    }
    resultElem.appendChild(trElem);
  }
  tableDemoDiv.appendChild(resultElem);
}
)
