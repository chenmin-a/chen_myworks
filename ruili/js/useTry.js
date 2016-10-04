// 试用轮播
$(function() {
	
	var sLeft=$('.tryUse .left');
	var sRight=$('.tryUse .right');
	var aLi=$('.tryUseScroll li');
	var tryUseScroll=$('.tryUseScroll');
	var bLi=$('#RedsBdot li');
	var bLiKey=aLiKey=0;
	var timer;
	var tryUse=$('.tryUse');

	// JQ初始化
	var lastLi=aLi.first().clone(true);
	tryUseScroll.append(lastLi);

	// 右按钮切换
	sRight.click(nextFn);


	// 封装函数
	
	function nextFn(event) {
		aLiKey++;
		if(aLiKey>4){
			aLiKey=1;

			tryUseScroll.css('left', 0);
		}
		var D=aLiKey*-178;

		tryUseScroll.stop().animate({'left':D}, 500);

		bLiKey++;
		if(bLiKey>3){
			bLiKey=0;
		}

		bLi.eq(bLiKey).addClass('current').siblings('li').removeClass('current');

	}

	// 自动切换
	
	timer=setInterval(nextFn, 2500);

	// 鼠标悬停
	
	tryUse.hover(function() {
		clearInterval(timer);
	}, function() {
		clearInterval(timer);
		timer=setInterval(nextFn, 2500);
	});

	// 左按钮切换
	
	sLeft.click(function(event) {

		aLiKey--;
		if(aLiKey<0){
			aLiKey=3;

			tryUseScroll.css('left', -712);
		}
		var D=aLiKey*-178;

		tryUseScroll.stop().animate({'left':D}, 500);

		bLiKey--;
		if(bLiKey<0){
			bLiKey=3;
		}

		bLi.eq(bLiKey).addClass('current').siblings('li').removeClass('current');

	});

	// 小点切换
	
	bLi.mouseenter(function(event) {
		
		$(this).addClass('current').siblings('li').removeClass('current');

		var i=$(this).index();
		var moves=i*-178;
		tryUseScroll.stop().animate({'left':moves}, 500);

		bLiKey=aLiKey=i;

	});

});


// 左侧底部轮播
$(function() {
	
	var redsBimg=$('.redsBimg');
	var BLiKey=ALiKey=0;
	var aLiImg=$('.redsBimg li');
	var timer;
	var redsB=$('.reds_b');
	var LaitLi=aLiImg.first().clone(true);
	redsBimg.append(LaitLi);

	var bLi=$('#redsBtmdot li');

	// 封装函数
	function NextFn(){

		ALiKey++;
		if(ALiKey>4){
			ALiKey=1;
			redsBimg.css('left', 0);
		};

		BLiKey++;
		if(BLiKey>3){
			BLiKey=0;
		};

		var moves=ALiKey*-280;

		redsBimg.stop().animate({'left':moves}, 500);
		bLi.eq(BLiKey).addClass('current').siblings('li').removeClass('current');

	}

	// 点击切换
	bLi.click(function(event) {

		$(this).addClass('current').siblings('li').removeClass('current');
		var i=$(this).index();
		var moves=i*-280;
		redsBimg.stop().animate({'left':moves}, 500);
		bLiKey=aLiKey=i;

	});

	// 自动切换
	timer=setInterval(NextFn, 2500);

	// 鼠标悬停
	redsB.hover(function() {

		clearInterval(timer);

	}, function() {

		clearInterval(timer);
		timer=setInterval(NextFn, 2500);

	});

});