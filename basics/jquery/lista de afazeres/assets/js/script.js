// checando afazeres pelo clique
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// clicar no X para deletar o afazer
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
	// keycode 13 corresponde a tecla Enter
	if(event.which === 13){
		//pegando um novo afazer do input com o .val()
		var todoText = $(this).val();
		// resetando o input de texto
		$(this).val("");
		//criando uma nova <li> na <ul>
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle()
});