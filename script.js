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

	// $("video").hide();
	$(".go-back").hide();
	$(".vid hr").hide();
	$(".vid br").hide();
  $(".notes").hide();

	$(".vid").click(function(){
		if(!$(this).attr("toggled")){
			toggle($(this),"toggled");

      if($(this).children("video").length == 0){
        var placeholder = $(this).children(".vid-placeholder")
        var src = placeholder.attr("url");
        var video = $('<video controls><source src="' + src + '" type=\'video/webm;codecs="vp8, vorbis"\'/></video>')
        placeholder.before(video);
      }else{
        var video = $(this).children("video");
  			video.toggle();
      }

      $("#name").toggle();
			$(this).children(".go-back").toggle();
			$(this).children("hr").toggle();
			$(this).children("br").toggle();
			$(this).children(".notes").toggle();
			$(".vid").not($(this)).toggle();
			// $(this).children("h1").css("font-size","40px");
			$(this).css("text-align","center")
			$(this).css("background-color","inherit")
			$("video").not(video).off("keypress")
			video.focus();
			video.keypress(function(event){
				// alert(event.which)
				if(event.which == "120"){
					video.get(0).load();
					video.get(0).play();
				}
			});
			video.get(0).load();
			video.get(0).play();
		}
	});

	$(".go-back").click(function(event){
		location.reload();
		// event.stopPropagation();
		// var parent = $(this).parent();
		// toggle(parent,"toggled");
		// var video = parent.children("video");
		// video.toggle();
    $("#name").toggle();
		parent.children(".go-back").toggle();
		parent.children("hr").toggle();
		parent.children("br").toggle();
		parent.children(".notes").toggle();
		$(".vid").not(parent).toggle();
		parent.css("text-align","")
		parent.css("background-color","")
		video.get(0).pause();
	});

	$("video .notes").click(function(event){
		event.stopPropagation();
	})

	 $('video').on('ended',function(){
		alert("done");
   	 });
})
