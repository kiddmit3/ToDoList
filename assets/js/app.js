// check off specific to dos
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on x to remove to dos
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and append to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>")
	}
});

$(".fa-pencil-square").click(function(){
	$("input[type='text'").fadeToggle();
})