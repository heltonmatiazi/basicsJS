
console.log("script conectado");
//selecionando todos os elementos <li> da página
var lis = document.querySelectorAll("li");
// esse loop vai passar por todas as lis e aplicar os eventos 
for (var i = 0; i < lis.length; i++) {
	// 1 - mouseover e mouseout são usados para criar um efeito de 'hover'.

	lis[i].addEventListener("mouseover",function(){
		// quando o mouse passa sobre a <li> selecionada, ele adiciona a classe 'selected'
		this.classList.add("selected");
	});
	lis[i].addEventListener("mouseout",function(){
		// quando o mouse sai da <li> selecionada, a classe selected é removida
		this.classList.remove("selected");
	});
	lis[i].addEventListener("click",function(){
		// para lidar com o clique, estou usando um toggle com a classe 'done', que adiciona
		// um efeito de 'line-through' e opacity para indicar que o <li> foi realizado
		this.classList.toggle("done");
	});
}