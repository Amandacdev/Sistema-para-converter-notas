function Converter () {
  var nota = document.getElementById ("numero")
  var nota = Number(nota.value)
  console.log(nota)
  var notaConvertida
  
  if (nota>100 || nota<0) {alert ("Por favor, insira um número entre 0 e 100.");
                           return false}
  else if (nota >= 90 && nota<=100) {notaConvertida= "A"}
  else if (nota >= 80 && nota <=89) {notaConvertida= "B"}
  else if (nota >= 70 && nota <=79) {notaConvertida= "C"}
  else if (nota >= 60 && nota <=69) {notaConvertida= "D"}
  else if (nota < 60 && nota<=0) {notaConvertida= "F"}
  
  console.log (notaConvertida)
  var notaCon = document.getElementById ("notaConvertida")
  notaCon.innerHTML = "A nota informada equivale a " + notaConvertida + " no sistema ABC."
  
}