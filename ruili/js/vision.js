
$(function() {
	
	var visList=$('.visList');
	var visListAddLi=$('.visList li:lt(3)').clone(true);
	visList.append(visListAddLi);

	var mainVision=$('.mainVision');
	var visListLi=$('.visList li');

	// console.log(visList.children().size())

	var visionRight=$('.mainVision .R');
	var visionLeft=$('.mainVision .L');
	var visionNum=0;
	var timerVision;


	// ----------------------------------封装函数-------------------------------
	
	function visAutoScroll(event) {
		visionNum++;
		if(visionNum>5){
			visionNum=0;

			visList.css('left', 1020);
		}

		var visListMoves=visionNum*-1020;
		var myVisionNum=visionNum+1;
		visList.stop().animate({'left':visListMoves}, 500);
		visListLi.eq(myVisionNum).addClass('current').siblings('li').removeClass('current');


	}

	// ---------------------------------自动切换--------------------------------
	
	timerVision=setInterval(visAutoScroll, 2000);

	// ---------------------------------鼠标悬停-------------------------------
	
	visList.hover(function() {
		clearInterval(timerVision);
	}, function() {
		clearInterval(timerVision);
		timerVision=setInterval(visAutoScroll, 2000);
	});

	// -----------------------------------右方向切换-----------------------------
	
	visionRight.click(visAutoScroll);

	// -----------------------------左方向切换------------------------------
	
	visionLeft.click(function(event) {
		visionNum--;
		if(visionNum<0){
			visionNum=5;

			visList.css('left', -6120);
		}

		var visListMoves=visionNum*-1020;
		var myVisionNum=visionNum+1;
		visList.stop().animate({'left':visListMoves}, 500);
		visListLi.eq(myVisionNum).addClass('current').siblings('li').removeClass('current');


	});



















});