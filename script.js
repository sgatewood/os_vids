function toggle(el,attr){
	if(el.attr(attr)){
		el.attr(attr,"");
		return false;
	}else{
		el.attr(attr,"true");
		return true;
	}
}

$(function(){
	$("video").hide();


	$(".vid").click(function(){
		if(toggle($(this),"toggled")){
			$(this).children("video").toggle();
			$(".vid").not($(this)).toggle();
			$(this).children("h1").css("font-size","40px");
			$(this).css("text-align","center")
			$(this).css("background-color","inherit")
		}
	});

	$("video").click(function(event){
		event.stopPropagation();
	})

	 $('video').on('ended',function(){
		alert("done");
   	 });
})