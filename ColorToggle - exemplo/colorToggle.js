/*o primeiro passo ao instanciar um script em um arquivo separado
é sempre conferir se ele está sendo carregado corretamente.
O comando 'console.log' vai printar no console de desenvolvedor a mensagem entre parenteses
caso consiga localizar o arquivo.
Caso ele não encontre, você visualizará um erro chamado "FILE_NOT_FOUND"*/
console.log("script carregado");

/*existem várias maneiras de resolver o exercício - a mais eficiente envolve usar uma classe de classe
(chamada 'purple') e usar a função classlist.toogle para adicionar
e remover sempre que o botão receber um clique.
*/
// capturando o botão
var button = document.querySelector("button");
// adicionando o listener
button.addEventListener("click", function(){
	// adicionando ou removendo a classe 'purple'
	document.body.classList.toggle("purple");
});