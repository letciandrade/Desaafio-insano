
const media_aluno = document.getElementById('media-aluno')
const media_turma = document.getElementById('media-turma')



media_aluno.addEventListener('click',()=>{
let nome_aluno = document.getElementById('nome').value 
let nota1 = document.getElementById('nota1').value
let nota2 = document.getElementById('nota2').value


    if(nota1 > 10 || nota2 > 10 ){
 alert('Somente é válido números abaixo de 10!')
    }
 else if((nota1 + nota2)/2 >= 7){
 document.write(`Média das notas ${(nota1 + nota2)/2}\n Parabéns ${nome_aluno} Você foi aprovado!`)
 }
 else if((nota1 + nota2)/2 < 7 & (nota1 + nota2)/2 >= 3){
document.write(`Média das notas ${(nota1 + nota2)/2}\n Atenção ${nome_aluno} você está em recuperação!`)
 }
 





});