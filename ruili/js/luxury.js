
$(function() {
	
	var luxuryBox=$('#luxuryBox');
	var luxuryList=$('#luxuryList');
	var myLuxuryListAddLi=$('#luxuryList li:first()').clone(true);
	luxuryList.append(myLuxuryListAddLi);

	var luxuryChangeNum=$('.luxuryChangeNum');
	var luxuryLeft=$('#luxuryBox .left');
	var luxuryRight=$('#luxuryBox .right');
	var luxuryImgKey=0;
	var luxuryNumKey=1;
	var timerLuxury;


	// --------------------------------封装函数-----------------------------
	
	function luxuryAutoScroll(event) {
		luxuryImgKey++;
		if(luxuryImgKey>3){
			luxuryImgKey=1;
			luxuryList.css('left', 0);
		}

		var luxuryImgMoves=luxuryImgKey*-480;

		luxuryList.stop().animate({'left':luxuryImgMoves}, 500);

		luxuryNumKey++;
		if (luxuryNumKey>3) {
			luxuryNumKey=1;
		};

		luxuryChangeNum.html(luxuryNumKey);

	
	}

	// --------------------------------自动切换------------------------------
	
	timerLuxury=setInterval(luxuryAutoScroll, 2000);

	// --------------------------------鼠标悬停------------------------------
	
	luxuryBox.hover(function() {
		clearInterval(timerLuxury);
	}, function() {
		clearInterval(timerLuxury);
		timerLuxury=setInterval(luxuryAutoScroll, 2000);
	});

	// --------------------------------右方向切换----------------------------
	
	luxuryRight.click(luxuryAutoScroll);

	// -----------------------------------左方向切换-----------------------------
	
	luxuryLeft.click(function(event) {
		luxuryImgKey--;
		if(luxuryImgKey<0){
			luxuryImgKey=2;
			luxuryList.css('left', -1440);
		}

		var luxuryImgMoves=luxuryImgKey*-480;

		luxuryList.stop().animate({'left':luxuryImgMoves}, 500);

		luxuryNumKey--;
		if (luxuryNumKey<1) {
			luxuryNumKey=3;
		};

		luxuryChangeNum.html(luxuryNumKey);

	
	});


});