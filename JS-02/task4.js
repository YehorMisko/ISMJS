function getRandom(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
compute.addEventListener('click',
function()
{
  var rCount = rowCount.value;
  var cCount = colCount.value;
  var miRand = minRand.value;
  var maRand = maxRand.value;
  let tableDemoDiv = document.querySelector('#numberResult');
  let resultElem = document.createElement('table');
  resultElem.setAttribute("id","matrix");
  for(var i = 0;i < cCount;i++)
  {
    let trElem = document.createElement('tr');
    for(let j = 0; j < rCount;j++)
    {
      let tdElem = document.createElement('td');

      tdElem.innerHTML = getRandom(miRand,maRand);

      trElem.appendChild(tdElem);
    }
   resultElem.appendChild(trElem);
  }
  tableDemoDiv.appendChild(resultElem);
}
)
transpose.addEventListener('click',
function()
{
/*   var oTable = document.getElementById('matrix');
   var rowLength = oTable.rows.length;
   let tableDemoDiv = document.querySelector('#transposeResult');
   let resultElem = document.createElement('table');
   var arr = [[],[]];
   for(var i = 0; i < rowLength; i++)
   {
     var oCells = oTable.rows.item(i).cells;
     var cellLength = oCells.length;
     //console.log(cells.item(i).cells);
     let trElem = document.createElement('tr');
     for(var j = 0;j < cellLength; j++)
     {
       let tdElem = document.createElement('td');
       //console.log(cells.item(j).innerHTML);

       tdElem.innerHTML = oCells.item(j).innerHTML;
       trElem.appendChild(tdElem);
       arr[i][j] = oCells.item(j).innerHTML;
     }
     resultElem.appendChild(trElem);
     console.log(arr);
   }
   console.log(arr);
   tableDemoDiv.appendChild(resultElem);
   */
   function tableToArray(table) {
     var result = []
     var rows = table.rows;
     var cells, t;

     // Iterate over rows
     for (var i=0, iLen=rows.length; i<iLen; i++) {
       cells = rows[i].cells;
       t = [];

       // Iterate over cells
       for (var j=0, jLen=cells.length; j<jLen; j++) {
         t.push(cells[j].textContent);
       }
       result.push(t);
     }
     return result;
   }
   var myTable = document.getElementById('matrix');
   var jeff = tableToArray(myTable);
   console.log(jeff);
   var resJeff = [[],[]];
   for(let i = 0; i < jeff.length;i++)
   {
     for(let j = 0; j < jeff[0].length;j++)
     {
       resJeff[j][i] = jeff[i][j];
     }
   }
   console.log(resJeff);
}
)
