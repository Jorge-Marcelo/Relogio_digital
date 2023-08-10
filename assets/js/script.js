/*
Autor: Jorge Marcelo
Data de Criação: 10/08/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/ 


/*Selecionando elemntos do HTML pelo DOM*/ 
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

/*Criando a função e relogio e usando objeto Date
para pegar as hormas minutos e segundos atuais*/
const relogio = setInterval(function tempo() {
const dataAtual = new Date();
let hora = dataAtual.getHours();
let minuto = dataAtual.getMinutes();
let segundo = dataAtual.getSeconds();

/*Adicionando um 0 a mais em valores menores que 10*/ 
hora = hora.toString().padStart(2, "0");
minuto = minuto.toString().padStart(2, "0");
segundo = segundo.toString().padStart(2, "0");

/*Passando o conteudo do objeto Date para o HTML*/
horas.textContent = hora;
minutos.textContent = minuto;
segundos.textContent = segundo;

}, 1000);

/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink){
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function(){
linkedin(linkedinLink);    
})


/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink){
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function(){
github(githubLink);
})

