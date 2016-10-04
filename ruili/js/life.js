$(function() {
	
	var lifeBox=$('#lifeBox');
	var lifeList=$('#lifeList');
	var myLifeListAddLi=$('#lifeList li:first()').clone(true);
	lifeList.append(myLifeListAddLi);

	var lifeLeft=$('#lifeBox .left');
	var lifeRight=$('#lifeBox .right');
	var lifeChangeNum=$('.lifeChangeNum');
	var lifeImgKey=0;
	var lifeNumKey=1;
	var timerLife;


	// --------------------------------封装函数-----------------------------
	
	function lifeAutoScroll(event) {
		lifeImgKey++;
		if(lifeImgKey>3){
			lifeImgKey=1;
			lifeList.css('left', 0);
		}

		var lifeImgMoves=lifeImgKey*-480;

		lifeList.stop().animate({'left':lifeImgMoves}, 500);

		lifeNumKey++;
		if (lifeNumKey>3) {
			lifeNumKey=1;
		};

		lifeChangeNum.html(lifeNumKey);

	
	}

	// --------------------------------自动切换------------------------------
	
	timerLife=setInterval(lifeAutoScroll, 2000);

	// --------------------------------鼠标悬停------------------------------
	
	lifeBox.hover(function() {
		clearInterval(timerLife);
	}, function() {
		clearInterval(timerLife);
		timerLife=setInterval(lifeAutoScroll, 2000);
	});

	// --------------------------------右方向切换----------------------------
	
	lifeRight.click(lifeAutoScroll);

	// -----------------------------------左方向切换-----------------------------
	
	lifeLeft.click(function(event) {
		lifeImgKey--;
		if(lifeImgKey<0){
			lifeImgKey=2;
			lifeList.css('left', -1440);
		}

		var lifeImgMoves=lifeImgKey*-480;

		lifeList.stop().animate({'left':lifeImgMoves}, 500);

		lifeNumKey--;
		if (lifeNumKey<1) {
			lifeNumKey=3;
		};

		lifeChangeNum.html(lifeNumKey);

	
	});


});