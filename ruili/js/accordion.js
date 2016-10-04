$(function() {
	
	var aLi=$('.pickList>li');
	var num=0;
	var timer;

	aLi.hover(function() {

		num=$(this).index();
		$(this).stop().animate({'width':538}, 500).addClass('current');
		$(this).siblings('li').stop().animate({'width':106}, 500).removeClass('current');

		clearInterval(timer);
	}, function() {
		
		$(this).siblings('li').removeClass('current');
		clearInterval(timer);
		timer=setInterval(accordArea, 2500);

	});

	// 自动切换

	function accordArea(){
		num++;
		if(num>6){
			num=0;
		}

		// var i=$(this).index();
		aLi.eq(num).animate({'width':538}, 500);
		aLi.eq(num).siblings('li').animate({'width':106}, 500);
		aLi.eq(num).addClass('current');
		aLi.eq(num).siblings('li').removeClass('current');
	}

	timer=setInterval(accordArea, 2500);


});