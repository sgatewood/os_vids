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

  var colors = ["#9ccdea","#f5a3a3","#f9f995","#9cff9c","#fbc4fb","#FFCD81"];

  $(".vid").each(function(){
    var tabs = parseInt($(this).attr("tab"));
    $(this).css("background-color",colors[tabs % colors.length])
    tabs *= 40;
    $(this).css("margin-left",tabs + "px")
    // console.log(tabs + "px");
    // $(this).css("")
    $(this).prop("bg",$(this).css("background-color"));
  });

  var no = false;

  $(".vid").mouseenter(function(){
    if(no){
      return false;
    }
    $(this).prop("backup")
    $(this).css("background-color","white")
  });

  $(".vid").mouseleave(function(){
    if(no){
      return false;
    }
    $(this).css("background-color",$(this).prop("bg"))
  });

  var start = 0;

	$(".vid").click(function(){
    no = true;
    $(this).mouseenter(function(){});
    $(this).mouseleave(function(){});
		if(!$(this).attr("toggled")){
      $(this).css("margin-left","")
			toggle($(this),"toggled");

      var duration = 0;
      var start = 0;

      if($(this).children("video").length == 0){
        var placeholder = $(this).children(".vid-placeholder")
        var src = placeholder.attr("url");
        duration = parseInt(placeholder.attr("duration"));
        var video = $('<video controls><source src="' + src + '" type=\'video/webm;codecs="vp8, vorbis"\'/></video>')
        placeholder.before(video);
        placeholder.before($("<div id='bar'></div>"));
        $("#bar").progressbar({value: 30, max: duration})
        $("#bar").show();
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

      video.on("timeupdate",function(){
        var time = Math.round(this.currentTime);
        if(start == 0){
          start = time;
        }
        var d = time - start
        $("#bar").progressbar({value: d})
      })



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
