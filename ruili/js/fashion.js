
$(function() {
	
	var aLi=$('#fashTopHd li');
	var aDiv=$('#fashHot .hotContent');

	aLi.mouseenter(function(event) {

		$(this).addClass('current').siblings('li').removeClass('current');
		var i=$(this).index();
		aDiv.eq(i).stop().fadeIn('normal');
		aDiv.eq(i).siblings('div.hotContent').hide();
	});

});


$(function() {
		
	var fashTopImgLi=$('.fashTopImgList li:first()').clone(true);

	$('.fashTopImgList').append(fashTopImgLi);
	var fashTopImgOne=$('#fashTopImgOne');
	var fashTopImgList=$('.fashTopImgList');
	var leftDirection=$('#fashLDirection');
	var rightDirection=$('#fashRDirection');
	var changeNum=$('.changeNum');
	var fashImgKey=0;
	var fashNumKey=1;
	var timer;

	// -----------------------------封装函数---------------------------------------
	
	function rightFashAutoScroll(event) {
		
		fashImgKey++;
		if(fashImgKey>3){
			fashImgKey=1;
			fashTopImgList.css('left', 0);
		}

		var fashTopImgMoves=fashImgKey*-480;

		fashTopImgList.stop().animate({'left':fashTopImgMoves}, 500);

		fashNumKey++;
		if (fashNumKey>3) {
			fashNumKey=1;
		};

		changeNum.html(fashNumKey);

	}

	// -----------------------------自动切换---------------------------------------
	timer=setInterval(rightFashAutoScroll, 2000);

	// -----------------------------鼠标悬停---------------------------------------
	
	fashTopImgOne.hover(function() {
		clearInterval(timer);
	}, function() {
		clearInterval(timer);
		timer=setInterval(rightFashAutoScroll, 2000);
	});

	// -----------------------------点击右方向切换----------------------------------

	rightDirection.click(rightFashAutoScroll);


	// --------------------------------------点击左方向切换-------------------------------
	
	leftDirection.click(function(event) {
		
		fashImgKey--;
		if(fashImgKey<0){
			fashImgKey=2;
			fashTopImgList.css('left', -1440);
		}

		var fashTopImgMoves=fashImgKey*-480;

		fashTopImgList.stop().animate({'left':fashTopImgMoves}, 500);

		fashNumKey--;
		if (fashNumKey<1) {
			fashNumKey=3;
		};

		changeNum.html(fashNumKey);

	});

});

$(function() {

	var lunFashBtm=$('.lunFashBtm');
	var lunFashBtmApdLi=$('.lunFashBtm li:lt(5)').clone(true);
	lunFashBtm.append(lunFashBtmApdLi);

	var lunFashBtmRitDirection=$('#subFashBtmRight');
	var lunFashBtmLetDirection=$('#subFashBtmLeft');
	var subFashBtmFir=$('#subFashBtmFir');
	var lunFashBtmNum=0;
	var timer;

	// -----------------------------封装函数-------------------------------
	
	function myLunFashBtm(event) {
		lunFashBtmNum++;
		if(lunFashBtmNum>6){
			lunFashBtmNum=1;
			lunFashBtm.css('left', 0);
		}

		var lunFashBtmMoves=lunFashBtmNum*-170;
		lunFashBtm.stop().animate({'left':lunFashBtmMoves}, 500);
	}

	// ------------------------------自动切换-------------------------------
	
	timer=setInterval(myLunFashBtm, 2000);

	// ------------------------------鼠标悬停-------------------------------
	
	subFashBtmFir.hover(function() {
		clearInterval(timer);
	}, function() {
		clearInterval(timer);
		timer=setInterval(myLunFashBtm, 2000);
	});
	
	// ------------------------------右方向切换------------------------------

	lunFashBtmRitDirection.click(myLunFashBtm);

	// ------------------------------左方向切换------------------------------
	
	lunFashBtmLetDirection.click(function(event) {
		lunFashBtmNum--;
		if(lunFashBtmNum<0){
			lunFashBtmNum=5;
			lunFashBtm.css('left', -1020);
		}

		var lunFashBtmMoves=lunFashBtmNum*-170;
		lunFashBtm.stop().animate({'left':lunFashBtmMoves}, 500);
	});

});