var entrada = document.getElementById("entrada")
var facil = 10, medio = 100, dificil = 1000
var x = ""
var numero 
let orderButton = document.getElementById("selecionar");
let itemList = document.getElementById("dificuldade");
let outputBox = document.getElementById("saida");


function chute(){
	if (!x == ""){
		entrada = document.getElementById("entrada").valueAsNumber
		if(entrada < numero){
			saida.innerHTML = "Número é maior"
		}
		if(entrada > numero){
			saida.innerHTML = "Número é menor"
		}
		if(entrada == numero){
			saida.innerHTML = "Acertou"
		}
	}
	entrada = document.getElementById("entrada")
}
function reset(){
	entrada.value = ""
	numero = parseInt(Math.random() * x) + 1
	saida.innerHTML = "resetado"
}

orderButton.addEventListener("click", () => {
	entrada.value = ""
	let collection = itemList.selectedOptions;
	let output = "";

	for (let i = 0; i < collection.length; i++) {
		x = collection[i].label;
		if(x == "Fácil"){
			x = facil
			entrada.setAttribute("placeholder", "Digite um número entre 1 e 10")
			entrada.setAttribute("max", "10")
			output = 'Dificuldade "fácil" selecionada'
		}
		else if(x == "Médio"){
			x = medio
			entrada.setAttribute("placeholder", "Digite um número entre 1 e 100")
			entrada.setAttribute("max", "100")
			output = 'Dificuldade "médio" selecionada'
		}
		else if(x == "Difícil"){
			x = dificil
			entrada.setAttribute("placeholder", "Digite um número entre 1 e 1000")
			entrada.setAttribute("max", "1000")
			output = 'Dificuldade "difícil" selecionada'
		}
	}

	outputBox.innerHTML = output;
	numero = parseInt(Math.random() * x) + 1
}, false);