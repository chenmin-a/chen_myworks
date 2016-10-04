$(function() {
	
	// JQ初始化CSS
	$('.magaMain li:last').css('margin-right', 0);
	$('.magaBtm dd:last').css('margin-right', 0);
	$('.wireListBtm li:last').css('margin-right', 0);

	var wirelessList=$('.wirelessList');
	var wirelessListAddLi=$('.wirelessList li:first').clone(true);
	wirelessList.append(wirelessListAddLi);

	var aWireListBtmLi=$('.wireListBtm li');
	var wirelessImg=$('.wirelessImg');
	var wirelessLeft=$('.wirelessLeft');
	var wirelessRight=$('.wirelessRight');
	var wirelessImgKey=wirelessBtnKey=0;
	var timerWireless;

	// ------------------------------封装函数-----------------------------
	
	function wirelessScroll(event) {
		wirelessImgKey++;
		if(wirelessImgKey>3){
			wirelessImgKey=1;
			wirelessList.css('left', 0);

		}
		var wirelessListMoves=wirelessImgKey*-290;
		wirelessList.stop().animate({'left':wirelessListMoves}, 500);

		wirelessBtnKey++;
		if(wirelessBtnKey>2){
			wirelessBtnKey=0;
		}

		aWireListBtmLi.eq(wirelessBtnKey).addClass('current').siblings('li').removeClass('current');

	}

	// ------------------------------自动切换--------------------------------
	
	timerWireless=setInterval(wirelessScroll, 2000);

	// ------------------------------鼠标悬停-------------------------------
	
	wirelessImg.hover(function() {

		clearInterval(timerWireless);

	}, function() {
		
		clearInterval(timerWireless);
		timerWireless=setInterval(wirelessScroll, 2000);

	});

	// ------------------------------右方向切换开始------------------------
	
	wirelessRight.click(wirelessScroll);

	// ---------------------------------左方向切换------------------------------
	
	wirelessLeft.click(function(event) {
		wirelessImgKey--;
		if(wirelessImgKey<0){
			wirelessImgKey=2;
			wirelessList.css('left', -870);

		}
		var wirelessListMoves=wirelessImgKey*-290;
		wirelessList.stop().animate({'left':wirelessListMoves}, 500);

		wirelessBtnKey--;
		if(wirelessBtnKey<0){
			wirelessBtnKey=2;
		}

		aWireListBtmLi.eq(wirelessBtnKey).addClass('current').siblings('li').removeClass('current');

	});

	// ---------------------------鼠标移入------------------------------
	
	aWireListBtmLi.mouseenter(function(event) {
		
		var i=$(this).index();
		var wirelessListMove=i*-290;
		$(this).addClass('current').siblings('li').removeClass('current');
		wirelessList.stop().animate({'left':wirelessListMove}, 500);
		wirelessImgKey=wirelessBtnKey=i;

	});










});