$(function () {

    var chArea = $('#choose-area'),
        AreaMask = $('#area-mask'),
        ProvinceMask = $("#province-mask"),
        Country = $('#country');

    chArea.click(function(event) {
        AreaMask.css('display', 'block');
    });

    Country.on("click", function(event) {
        $(".province").find("input").css({
            'visibility': 'hidden'
        });
        $(".province").find(".area-arrow").css({
            'visibility': 'hidden'
        });

        $(".sf").css('opacity', '0.6');


        if(Country.hasClass('cur')){

            $(".province").find("input").css({
                'visibility': 'visible'
            });
            $(".province").find(".area-arrow").css({
                'visibility': 'visible'
            });

            $(".province").find("input").removeClass("cur");

            $(".sf").css('opacity', '1');

        }

    });

    // 选择城市
    $("#area-mask .area-arrow").on("click", function () {
        $(this).parent().siblings('input').addClass("cur");

        AreaMask.css({
            'display': 'none'
        });
        ProvinceMask.css({
            'display': 'block'
        });
    });
    // 选择城市确认
    $('#province-mask .btns').on("click", function () {
        AreaMask.css('display', 'block');
        ProvinceMask.css({
            'display': 'none'
        });
    });
    // 选择城市取消
    $('#province-mask .rlt-btn').on("click", function () {
        $(".mask").find("input").removeClass("cur");
        AreaMask.css('display', 'block');
        ProvinceMask.css({
            'display': 'none'
        });
    });

    // 选择省份取消
    $('#area-mask .rlt-btn').on("click", function() {
        $(".mask").find("input").removeClass("cur");
        AreaMask.css('display', 'none');

    });

    $('#area-mask .btns').on("click", function () {
        $('#area-mask').css('display', 'none');
        if ($("#country").hasClass("cur") || $(".province").hasClass("cur")) {
            $('#choose-area').html("已选择" + "<i class='icon-next'></i>");
        } else {
            $('#choose-area').html("可选做区域" + "<i class='icon-next'></i>");
        }
    });


    // 同意协议按钮

    var RadioBtn = $('.radio-btn>input');

    RadioBtn.on("click", function(event) {

        $(this).toggleClass('cur');

    });

    var RadioBtn2 = $('.check-btn>input');

    RadioBtn2.on("click", function(event) {

        $(this).addClass('cur').parent().siblings().find('input').removeClass('cur');

    });

    // 拒绝接单弹框
    var refuseBtn = $('.refuse'),
        refuseMask = $('#refuse-mask');

    refuseBtn.on("click", function(event) {

        refuseMask.css('display', 'block');

    });


    // 确认接单弹框
    var receiveBtn = $('.receive'),
        ConfirmMask = $('#confirm-mask');

    receiveBtn.on("click", function(event) {

        ConfirmMask.css('display', 'block');
    });


    // 分配任务弹框
    var taskBtn = $('.task-btn'),
        taskMask = $('#task-mask');

    taskBtn.on("click", function(event) {

        taskMask.css('display', 'block');
    });


    // 删除员工
    var Delete = $('#delstaff'),
        DelMask = $('#del-mask');

    Delete.on("click", function(event) {

        DelMask.css('display', 'block');
    });

    // 弹框取消按钮
    var popupBtn = $('.rlt-btn');

    popupBtn.on("click", function(event) {

        $(this).parents('.mask').css('display', 'none');
        $(".mask").find("input").removeClass("cur");
    });


    // 确定拒单按钮

    var refuseBtn = $('.popup-btn .refuse-btn');

    refuseBtn.on("click", function() {
        $(this).parents('.mask').css('display', 'none');
        mySwiper.slideTo(3, 30, false);
        $('#nav-tab li:nth-child(4)').addClass("on").siblings().removeClass("on");

    });

    // 协议弹窗
    $(".user-agree").on("click",function(){
        $(".agreement").css({display:"block"});
    });
    $(".agreement input").on("click",function(){
        $(".agreement").css({display:"none"});
    });


    //确定接单 B
    $('.popup-btn .confirm-btn').on("click",function(){
        $('.mask').css({display:"none"});
        mySwiper.slideTo(1, 30, false);
        $('#nav-tab li:nth-child(2)').addClass("on").siblings().removeClass("on");
    });
    //确定接单 E

});