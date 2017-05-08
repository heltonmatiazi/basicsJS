/* Bases de javascript */


/* Manipulando Tags
Selecionand um parágrafo com o id 'teste', como em :
<p id="teste"> Lorem ipsun</p>
*/
var tag = document.getElementById("teste");

/*
implementação de alteração de js puro, alterando a variável tag. 
Você pode perceber que existe muita repetição de código.
*/
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

//A maneira correta de implementar essas mudanças é usando uma classe de css. 
//Adicione uma classe ao elemento com esse código:
tag.classList.add("some-class");

/* exemplo de classe css - ela possui todas as regras mencionadas acima, 
e fica armazenada em um arquivo de css separado.
.some-class{
	color:blue;
	border:10px solid red;
	font-size:70px;
	background:yellow;
	margin-top:200px;
}
*/

//como remover uma classe com javascript.
tag.classList.remove("some-class");
// 'toogle' é uma maneira de 'ligar e desligar' uma classe. É útil para elementos interativos. 
tag.classList.toggle("some-class");

//como retornar o valor de uma string - retorna texto puro
tag.textContent;
// você pode usar textContent para alterar o valor de uma string também.
tag.textContent = "this is the new paragraph";
// innerHTML retorna o html e o texto, textContent retorna só o texto
tag.innerHTML = "<strong>this is a bolded paragraph</strong>" // retorna "<strong>this is a bolded paragraph</strong>"

/*
Manipulando atributos

imagine o seguinte HTML:
<a href="www.google.com">I'm a link</a>
<img src="logo.png">
*/
//selecionando o link
var link = document.querySelector("a");
link.getAttribute("href"); // retorna "www.google.com"
link.setAttribute("href","www.bing.com"); // <a href="www.bing.com">I'm a link</a>
// esse snippet acima seleciona o elemento de âncora (a) e o armazena em uma variável chamada link.
// em seguida, ele pega o atributo de ancoragem (href) e na ultima linha o substitui por bing.com
// getAttribute e setAttribute são particularmente úteis com html-5, eles podem manipular atributos customizados
// como data-index ou data-width;
var img = document.querySelector("img"); //selecionando a imagem
img.setAttribute("src","newSrc.png"); //alterando o atributo src da imagem de 'logo.png' para 'newSrc.png'

//selecionando todos os links de uma página
// isso retorna um array com todos os elementos na tag '<a>'
var links = document.getElementsByTagName("a");

// selecionando links que possuem uma classe chamada 'menu', aninhados dentro de uma tag nav
var navLinks = document.querySelector("nav li.menu");

// iterando por todos os links da variável anterior
for (var i = 0; i < links.length;i++){
	// printando o texto de todos os links
	console.log(links[i].textContent);
	// faz todos os links da página terem um background rosa
	links[i].style.background = "pink"
	// adiciona uma classe a todos os links da página
	links[i].classList.add("other-class");
	// altera o atributo 'href' de todos os liks da página
	links[i].setAttribute("href","https://www.bing.com");
}

/* tratando eventos
 a sintaxe básica é a seguinte:
 element.addEventListener(type, functionToCall());
*/
// isolando o botão em uma variável para controle
var button = document.querySelector("button");

/* estou adicionando um event listener ao botão - o primeiro parametro determina que tipo de evento o botão 
está esperando (no caso, click), e o segundo determina qual é a função que vai ser executada quando o botão receber
um clique */
button.addEventListener("click",function(){
	// toda vez que alguém clicar no botão selecionado, o console vai printar a mensagem determinada.
	console.log("alguém clicou no botão");
});


// exemplo de aplicação

/*
imagine o seguinte html:
	<button>clique aqui</button>
	<p>exemplo de texto</p>
*/

var btn = document.querySelector("button");
var paragraph = document.querySelector("p");
btn.addEventListener("click",function(){
	paragraph.textContent = "o botão foi pressionado"
});

/* você pode iterar por vários elementos da página usando
esses seletores simples. Não só alterar o texto, mas também alterar estilos e atributos*/

// selecionando multiplos elementos
var lis = document.querySelector("li");
// esse array adiciona um event listener a todos os elementos '<li>' de uma página.
for (var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("click",function(){
		// o seletor 'this' refere-se ao item que foi clicado. 
		// é uma maneira mais determinística do que usar lis[i] para controlar os eventos.
		this.classList.toggle("uma-classe");
		// se a classe ".uma-classe" possuir uma cor de fonte, por exemplo, 
		// cada vez que o usuário clicar no elemento a cor será alterada, por que a classe será adicionada e removida
		// pelo método 'toggle'.
	});
}

// funções não-anônimas
var btn = document.querySelector("button");
var paragraph = document.querySelector("p");
// em javascript, você chama a função sem os parenteses quando estiver instanciando ela
// a função com os parenteses, como em mudarText() executará a função imediatamente e resultará em um erro 

btn.addEventListener("click", mudarTexto); // definir evento e parametro, sem parenteses ao lado do nome da função
function mudarTexto(){ // definir função
	paragraph.textContent = "alguém clicou no botão";
};

/* o uso de funções anônimas é recomendado para casos em que a função só vai ser executada uma vez - como
um botão com um comportamento muito específico, ou um elemento que só será alterado quando a página for carregada
e depois se manterá estático.
Funções com nome apresentam maior reusabilidade e deixam seus arquivos mais legíveis. */