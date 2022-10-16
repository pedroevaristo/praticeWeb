var inNumber1 = document.getElementById('numNote1');
var inNumber2 = document.getElementById('numNote2');
var inNumber3 = document.getElementById('numNote3');

var result = document.getElementById('result');




buttonSend.addEventListener("click", function () {
   
   var array = [];
   var list = document.createElement("ol");

   var resultStudent = Number(inNumber1.value) + Number(inNumber2.value) + Number(inNumber3.value);

   array.push(resultStudent);

   resultStudent = "";

   for (var i = 0; i < array.length; i++) {
      var listNumb = document.createElement("li");

      listNumb.innerHTML = "Nota do aluno " + Math.round(array[i]/3);
      list.appendChild(listNumb);
      
      result.appendChild(list);

     
   }

   inNumber1.value = "";
   inNumber2.value = "";
   inNumber3.value = "";
   
//document.getElementById('result').innerHTML = Math.round(result / 3);
})