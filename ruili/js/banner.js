$(function() {

	var bannerSummary=$('.bannerSummary');
	var bannerLi=$('.bannerSummary li');
	var myScrollLeft=$('.scrollLeft');
	var myScrollRight=$('.scrollright');
	var bannerDot=$('.bannerDot');
	var bannerDotLi=$('.bannerDot li');
	var bannerNum=banScrDot=0;
	var timer;
	var leftShadow=$('.leftShadow');
	var rightShadow=$('.rightShadow');

	// JQ初始化CSS
	var bannerLastLi=$('.bannerSummary li:lt(3)').clone(true);
	bannerSummary.append(bannerLastLi);

	// 封装函数
	
	function bannerAutoScroll(event) {
		
		bannerNum++;
		if(bannerNum>8){
			bannerNum=0;

			bannerSummary.css('left', 750);

		}
		var movespa=bannerNum*-750;
		var myBannerNum=bannerNum+1;
		bannerSummary.stop().animate({'left':movespa}, 500);
		bannerLi.eq(myBannerNum).addClass('current').siblings('li').removeClass('current');

		banScrDot++;
		if(banScrDot>8){
			banScrDot=0;
		}
		bannerDotLi.eq(banScrDot).addClass('current').siblings('li').removeClass('current');

	}

	// 自动切换开始
	
	timer=setInterval(bannerAutoScroll, 2500);

	// 鼠标悬停

	bannerSummary.hover(function() {
		
		// if(!(leftShadow&&rightShadow).is(event.target)){
			clearInterval(timer);
		// }

	}, function() {

		clearInterval(timer);
		timer=setInterval(bannerAutoScroll, 2500);

	});


	// ----------------右方向点击切换--------------------------
	
	myScrollRight.click(bannerAutoScroll);

	// ----------------左方向点击切换-------------------------
	
	myScrollLeft.click(function(event) {
		
		bannerNum--;
		if(bannerNum<0){
			bannerNum=8;

			bannerSummary.css('left', -6750);

		}

		var movespa=bannerNum*-750;
		var myBannerNum=bannerNum+1;
		bannerSummary.stop().animate({'left':movespa}, 500);
		bannerLi.eq(myBannerNum).addClass('current').siblings('li').removeClass('current');

		banScrDot--;
		if(banScrDot<0){
			banScrDot=8;
		}

		bannerDotLi.eq(banScrDot).addClass('current').siblings('li').removeClass('current');

	});

	// ----------------------点击原点切换--------------------------
	
	bannerDotLi.mouseenter(function(event) {
		
		$(this).addClass('current').siblings('li').removeClass('current');
		var i=$(this).index();
		var myI=i*-750;
		var xi=i+1;
		bannerSummary.stop().animate({'left':myI}, 500);
		bannerLi.eq(xi).addClass('current').siblings('li').removeClass('current');
		bannerNum=banScrDot=i;
	});

});