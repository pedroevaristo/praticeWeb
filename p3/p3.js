var inNumber1 = document.getElementById('numNote1');
var inNumber2 = document.getElementById('numNote2');
var inNumber3 = document.getElementById('numNote3');



buttonSend.addEventListener("click", function () {
   var quantStudent = parseInt(document.getElementById('numStudent').value);
   var list = document.createElement("ol");
   const rep = 0;

   do {
      result = Number(inNumber1.value) + Number(inNumber2.value) + Number(inNumber3.value);
      console.log(result / 3);
      rep += 1;
   } while (rep <quantStudent);
/*
   for (var i = 0; i < quantStudent; i++) {

      var numbList = document.createElement("li");

      list.appendChild(numbList);

      console.log(result / 3);

      document.getElementById('result').innerHTML = Math.round(result / 3);

      inNumber1.value = '';
      inNumber2.value = '';
      inNumber3.value = '';

   }*/

})

/*


Da pra usar dentro da function, no caso 'buttonSend.addEventListener'

var quantStudent = document.getElementById('numStudent');
   var inNumber1 =parseInt(document.getElementById('numNote1').value);
   var inNumber2 = parseInt(document.getElementById('numNote2').value);
   var inNumber3 = parseInt(document.getElementById('numNote3').value);*/


/*tentar colocar em vetores as informações 
sendo colocado. Colocar a quantida de alunos que quer colocar */
/*p3.js:10 Uncaught ReferenceError: input2 is not defined
at HTMLButtonElement.<anonymous> (p3.js:10:45)*/