$(function(){


		
	$("header").css({ marginTop:-50 });
	$("header").stop().animate({ marginTop:0 });

	$(".top").click(function(){     $("html,body").stop().animate({ scrollTop: 0 });    });
	

	$("nav button").click(function(){  $("html,body").stop().animate({  scrollTop: 1000 * $(this).index()  },"slow");  });
	$(".slide_btn button").click(function(){  $(".slide").stop().animate({  marginLeft: -1200 * $(this).index()  },"slow");  });



	$("footer").hide();

	//$("section:not(:first) img").css({ opacity:0, paddingTop:400 });

	var a = 0;
	var b = $(".works_wrap>div:eq(0) img:last").index()-1;
	$(".works_list_btn button:gt("+b+")~button").hide();


	$(".works_btn button").click(function(){
			a = $(this).index();
			
			$(".works_wrap div img").css({ opacity:1 });
			$(".works_btn button").css({ background: "#fff", color:"#000" });
			$(this).css({ background:"#000", color:"#fff" });
				
			$(".works_list_btn button").css({ background: "#fff", color:"#000" });
			$(".works_list_btn button:first").css({ background:"#000", color:"#fff" });


			$(".works_wrap div").hide();
			$(".works_wrap div:eq("+a+")").fadeIn("fast");

			b = $(".works_wrap>div:eq("+a+") img:last").index()-1;
			$(".works_list_btn button").show();
			$(".works_list_btn button:gt("+b+")~button").hide();
			$(".works_wrap div").css({ marginLeft: 0 });
			

	});


	$(".works_list_btn button").click(function(){   

			var c = $(this).index();

			$(".works_list_btn button").css({ background: "#fff", color:"#000" });
			$(this).css({ background:"#000", color:"#fff" });

			$(".works_wrap div:eq("+a+")").stop().animate({ marginLeft: -100* c +"%" });

			$(".works_wrap div:eq("+a+") img").stop().animate({ opacity: 0.1 });
			$(".works_wrap div:eq("+a+") img:eq("+c+")").stop().animate({ opacity: 1 },500);

	});





});
































