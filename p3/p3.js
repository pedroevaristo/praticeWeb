var quantStudent = document.getElementById('numStudent');
var inNumber1 =(document.getElementById('numNote1').value);
var inNumber2 = (document.getElementById('numNote2').value);
var inNumber3 = (document.getElementById('numNote3').value);
/*tentar colocar em vetores as informações 
sendo colocado. Colocar a quantida de alunos que quer colocar */
/*p3.js:10 Uncaught ReferenceError: input2 is not defined
at HTMLButtonElement.<anonymous> (p3.js:10:45)*/
buttonSend.addEventListener("click", function(){

document.getElementById('result').value  = (input2 + input3 + input4)/3;

result.value = "";

} )
/*function calculate(){
   const result = document.getElementById('result') (input2 + input3 + input4)/3;
}*/
