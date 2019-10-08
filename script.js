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
	$(".go-back").hide();
	$(".vid hr").hide();
	$(".vid br").hide();


	$(".vid").click(function(){
		if(!$(this).attr("toggled")){
			toggle($(this),"toggled");
			var video = $(this).children("video");
			video.toggle();
			$(this).children(".go-back").toggle();
			$(this).children("hr").toggle();
			$(this).children("br").toggle();
			$(".vid").not($(this)).toggle();
			// $(this).children("h1").css("font-size","40px");
			$(this).css("text-align","center")
			$(this).css("background-color","inherit")
			// $("video").not(video).remove()
			video.get(0).load();
			video.get(0).play();
		}
	});

	$(".go-back").click(function(event){
		event.stopPropagation();
		var parent = $(this).parent();
		toggle(parent,"toggled");
		var video = parent.children("video");
		video.toggle();
		parent.children(".go-back").toggle();
		parent.children("hr").toggle();
		parent.children("br").toggle();
		$(".vid").not(parent).toggle();
		parent.css("text-align","")
		parent.css("background-color","")
		video.get(0).pause();
	});

	$("video").click(function(event){
		event.stopPropagation();
	})

	 $('video').on('ended',function(){
		alert("done");
   	 });
})