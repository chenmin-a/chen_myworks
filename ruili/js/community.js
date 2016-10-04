$(function() {
	
	var commSc=$('.commSc');
	var commPoint=$('.commPoint');
	var commPointAddLi=$('.commPoint li:first()').clone(true);
	commPoint.append(commPointAddLi);

	var commDotLi=$('.commDot li');
	var commScLeft=$('.commSc .left');
	var commScRight=$('.commSc .right');
	var commImgKey=commDotKey=0;
	var timerSummSc;

	// ---------------------------------封装函数----------------------------------
	
	function summScNextFn(event) {
		commImgKey++;
		if(commImgKey>4){
			commImgKey=1;
			commPoint.css('left', 0);
		}

		var commScMoves=commImgKey*-380;
		commPoint.stop().animate({'left':commScMoves}, 500);

		commDotKey++;
		if(commDotKey>3){
			commDotKey=0;
		}
		commDotLi.eq(commDotKey).addClass('current').siblings('li').removeClass('current');

	}

	// ---------------------------------自动切换---------------------------------
	
	timerSummSc=setInterval(summScNextFn, 2000);

	// ---------------------------------鼠标悬停----------------------------------
	
	commSc.hover(function() {
		clearInterval(timerSummSc);
	}, function() {
		clearInterval(timerSummSc);
		timerSummSc=setInterval(summScNextFn, 2000);
	});

	// ----------------------------------右方向切换-------------------------------
	
	commScRight.click(summScNextFn);

	// -----------------------------------左方向切换-----------------------------------
	
	commScLeft.click(function(event) {
		commImgKey--;
		if(commImgKey<0){
			commImgKey=3;
			commPoint.css('left', -1520);
		}

		var commScMoves=commImgKey*-380;
		commPoint.stop().animate({'left':commScMoves}, 500);

		commDotKey--;
		if(commDotKey<0){
			commDotKey=3;
		}
		commDotLi.eq(commDotKey).addClass('current').siblings('li').removeClass('current');

	});

	// ----------------------------------小点切换-------------------------------------
	
	commDotLi.mouseenter(function(event) {
		
		$(this).addClass('current').siblings('li').removeClass('current');

		var i=$(this).index();
		var moves=i*-380;
		commPoint.stop().animate({'left':moves}, 500);

		commImgKey=commDotKey=i;

	});
















});