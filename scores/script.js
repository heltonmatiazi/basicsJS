console.log("script conectado");
/* esse é um exemplo de tratamento de eventos.
Esses exemplos não são muito otimizados - eles possuem repetiçao pesada na sessão que cuida dos botões, 
mas servem como caso de estudo.
A idéia do script é manter o controle da pontuação de um jogo entre dois jogadores. */

// isolando as variáveis
	// estrutura
	var p1display = document.getElementById("display1");
	var p2display = document.getElementById("display2");
	var input = document.querySelector("input");
	var p = document.getElementById("inputController");
	// comportamento
	// essa é a variável de controle.
	var gameOver = false;
	// esse é o valor padrão da variável.
	var pontuacaoMaxima = 5;
	// botões
	var btn1 = document.getElementById("p1");
	var btn2 = document.getElementById("p2");
	var reset = document.getElementById("reset");
	// pontuação
	var p1Score = 0;
	var p2Score = 0;

	btn1.addEventListener("click",function(){
		// quando for registrado um clique no botão do jogador 1, 
		//caso o jogo ainda não tenha acabado, 
		//adicionar um ponto ao jogador 1
		if(!gameOver){
			p1Score++;
			//se a pontuação do jogador 1 for igual a pontuação máxima, 
			// o jogo termina e a classe "vencedor" é adicionada a pontuação do jogador 1;
			if(p1Score === pontuacaoMaxima){
				p1display.classList.add("vencedor");
				gameOver = true;
			}
			// é sempre bom testar se os inputs estão sendo atualizados corretamente. 
			console.log("pontuação do jogador 1: " + p1Score);
			// atualizando o display da pontuação do jogador 1
			p1display.textContent = p1Score;
		}

	});
	btn2.addEventListener("click",function(){
		if(!gameOver){
			p2Score++;
			if(p2Score === pontuacaoMaxima){
				p2display.classList.add("vencedor");
				gameOver = true;
			}
		}
		console.log("pontuação do jogador 2: " + p2Score);
		p2display.textContent = p2Score;
	});


	// estou chamando a função externamente com essa sintaxe
	reset.addEventListener("click",clearAll);
	// função que reseta o jogo, retornando todas as variáveis para o estado original.
	function clearAll(){
		p1Score = 0;
		p2Score = 0;
		gameOver = false;
		p1display.textContent = 0;
		p1display.classList.remove("vencedor");
		p2display.textContent = 0;
		p2display.classList.remove("vencedor");
	}


		// o 'change' é usado no lugar do 'click', no caso do input é mais seguro rastrear as mudanças
	// no input com ele.
	input.addEventListener("change",function(){
		//regra de consistência simples. O valor mínimo para a pontuação será sempre zero.
		if (Number(this.value) < 0){
			this.value = 0;
		}
		// setando o valor limite no display
		p.textContent = this.value;
		// setando a pontuação máxima
		pontuacaoMaxima = Number(this.value);
		// estou chamando a função de clearAll aqui por que caso o valor limite seja alterado
		// durante o jogo, é necessário limpar os inputs para garantir que
		// as regras de consistência não sejam alteradas.
		clearAll();
	});


	