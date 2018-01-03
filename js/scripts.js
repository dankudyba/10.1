var span = $("span");

span.each(function(index, element){
	if(index % 2 == 0) {
		$(element).css('color', 'red');
	};
});


var paragraphs = $('p');

paragraphs.each(function(index, element){
	var btn = '<button class="btn" data-tmp=""' + index + '"">Click me</button>'
	$(element).append(btn);
});

$("btn").click(function(){
	alert($(this).attr("data-tmp"));
	console.log('aaa');
});