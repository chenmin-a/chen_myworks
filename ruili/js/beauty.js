// -------------------------------明星美丽事动画-----------------------------

$(function() {
	
	// JQ初始化css
	$('.starImg li').not('li:first').css('opacity', '0.5');
	

	var aLiImg=$('.starImg li');
	var aLip=$('.starInfo li');

	aLip.mouseenter(function(event) {

		$(this).addClass('on').siblings('li').removeClass('on');

		var i=$(this).index();

		aLiImg.eq(i).stop().animate({'opacity':1}, 'normal').addClass('current');
		aLiImg.eq(i).siblings('li').stop().animate({'opacity':0.5}, 'normal').removeClass('current');

	});

});

// --------------------------------轮播图动画--------------------------------

$(function() {
	
	var beautyFashTopImg=$('#beautyFashTopImg');
	var beautyFashList=$('#beautyFashList');
	var beautyChangNum=$('.beautyChangNum');
	var beautyFashListAddLi=$('#beautyFashList li:first()').clone(true);
	beautyFashList.append(beautyFashListAddLi);

	var beautyFashTopImgRight=$('#beautyFashTopImg .right');
	var beautyFashTopImgLeft=$('#beautyFashTopImg .left');
	var beautyImgKey=0;
	var beautyNumKey=1;
	var timerBeauty;

	// -----------------------------封装函数---------------------------------------
	
	function topBeautyAutoScroll(event) {
		
		beautyImgKey++;
		if(beautyImgKey>3){
			beautyImgKey=1;
			beautyFashList.css('left', 0);
		}

		var beautyTopImgMoves=beautyImgKey*-480;

		beautyFashList.stop().animate({'left':beautyTopImgMoves}, 500);

		beautyNumKey++;
		if (beautyNumKey>3) {
			beautyNumKey=1;
		};

		beautyChangNum.html(beautyNumKey);

	}

	// -----------------------------自动切换---------------------------------------
	
	timer=setInterval(topBeautyAutoScroll, 2000);

	// -----------------------------鼠标悬停---------------------------------------
	
	beautyFashTopImg.hover(function() {
		clearInterval(timerBeauty);
	}, function() {
		clearInterval(timerBeauty);
		timerBeauty=setInterval(topBeautyAutoScroll, 2000);
	});

	// -----------------------------点击右方向切换----------------------------------

	beautyFashTopImgRight.click(topBeautyAutoScroll);


	// --------------------------------------点击左方向切换-------------------------------
	
	beautyFashTopImgLeft.click(function(event) {
		
		beautyImgKey--;
		if(beautyImgKey<0){
			beautyImgKey=2;
			beautyFashList.css('left', -1440);
		}

		var beautyTopImgMoves=beautyImgKey*-480;

		beautyFashList.stop().animate({'left':beautyTopImgMoves}, 500);

		beautyNumKey--;
		if (beautyNumKey<1) {
			beautyNumKey=3;
		};

		beautyChangNum.html(beautyNumKey);

	});

});

// --------------------------------优品驾到轮播动画--------------------------

$(function() {
	
	var beautyLun=$('#beautyLun');
	var beautyLunList=$('#beautyLunList');
	var beautyLunListAddLi=$('#beautyLunList li:lt(4)').clone(true);

	beautyLunList.append(beautyLunListAddLi);

	var beautyLunBtmNum=0;
	var beautyLunRight=$('#beautyLunRight');
	var beautyLunLeft=$('#beautyLunLeft');
	var timerBeautyTwo;

	// ---------------------------------封装函数-------------------------------
	
	function myLunBeautyBtm(event) {
		beautyLunBtmNum++;
		if(beautyLunBtmNum>6){
			beautyLunBtmNum=1;
			beautyLunList.css('left', 0);
		}

		var beautyLunListMoves=beautyLunBtmNum*-215;
		beautyLunList.stop().animate({'left':beautyLunListMoves}, 500);
	}

	// ---------------------------------自动切换------------------------------
	
	timerBeautyTwo=setInterval(myLunBeautyBtm, 2000);

	// ---------------------------------鼠标悬停------------------------------
	
	beautyLun.hover(function() {
		clearInterval(timerBeautyTwo);
	}, function() {
		clearInterval(timerBeautyTwo);
		timerBeautyTwo=setInterval(myLunBeautyBtm, 2000);
	});

	// ---------------------------------右按钮切换-----------------------------
	
	beautyLunRight.click(myLunBeautyBtm);

	// ---------------------------------左按钮切换-----------------------------
	
	beautyLunLeft.click(function(event) {
		beautyLunBtmNum--;
		if(beautyLunBtmNum<0){
			beautyLunBtmNum=5;
			beautyLunList.css('left', -1290);
		}

		var beautyLunListMoves=beautyLunBtmNum*-215;
		beautyLunList.stop().animate({'left':beautyLunListMoves}, 500);
	});















});