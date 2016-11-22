//侧边栏 B
$(".head-top-left").on("click",function(){
    $(".sidebar-layer").css({
        transition: "all 1s",
        transform:"translate(3.75rem)"
    });
});
$(".exit-sidebar").on("click",function(){
    $(".sidebar-layer").css({
        transition: "all 1s",
        transform:"translate(-3.75rem)"
    });
});
//进入个人详情页
$(".user").on("click",function(){
    window.location.href = "userinfo.html";
});
//侧边栏 E


//点击隐藏显示详细信息 B
$(".basic-top-right").on("click",function(){
    $(this).toggleClass("basic-rotate");
    $(this).parent().next().slideToggle(500);
});
//点击隐藏显示详细信息 E


//弹窗 B
//拒绝接单
$(".basic-btn-left1").on("click",function(){
    $(".popup").css({display:"block"});
    $(".popup-no").css({display:"block"});
});
$(".case-begin-bottom .left-btn").on("click",function(){
    $(".popup").css({display:"block"});
    $(".popup-no").css({display:"block"});
});

//确定接单
$(".basic-btn-right1").on("click",function(){
    $(".popup").css({display:"block"});
    $(".popup-yes").css({display:"block"});
});
$(".case-begin-bottom .right-btn").on("click",function(){
    $(".popup").css({display:"block"});
    $(".popup-yes").css({display:"block"});
});

//放弃任务
$(".case-in-bottom .left-btn").on("click",function(){
    $(".popup").css({display:"block"});
    $(".popup-abandon").css({display:"block"});
});
$(".basic-btn-left-n").on("click",function(){
    $(".popup").css({display:"block"});
    $(".popup-abandon").css({display:"block"});
});

//完成任务
$(".info-btn").on("click",function(){
    $(".popup").css({display:"block"});
    $(".popup-complete").css({display:"block"});
});

//申请延期
$(".commission-date-two-right").on("click",function(){
    $(".popup").css({display:"block"});
    $(".popup-delay").css({display:"block"});
});
$(".popup-delay-check ul li i").on("click",function(){
    $(".popup-delay-check ul li i").removeClass("curr");
    $(this).addClass("curr");
});

//弹出框中点击事件
//考虑一下或者取消操作
$(".popup-btn-left").on("click",function(){
    $(".popup").css({display:"none"});
    $(".popup-no").css({display:"none"});
    $(".popup-yes").css({display:"none"});
    $(".popup-delay").css({display:"none"});
    $(".popup-abandon").css({display:"none"});
    $(".popup-complete").css({display:"none"});
});

//确定拒单 B
//个人案子详情页进入
$(".popup-no .popup-btn-right4").on("click",function(){
    $(".popup").css({display:"none"});
    $(".popup-no").css({display:"none"});
    window.location.href = "home.html?2";
});
//公司案子详情页进入
$(".popup-no .popup-btn-right5").on("click",function(){
    $(".popup").css({display:"none"});
    $(".popup-no").css({display:"none"});
    window.location.href = "pages/_index.html?2";
});

//确定接单
//个人案子详情页进入
$(".popup-yes > .popup-btn > .popup-btn-right2").on("click",function(){
    window.location.href = "home.html?1";
});
//公司案子详情页进入
$(".popup-yes > .popup-btn > .popup-btn-right3").on("click",function(){
    window.location.href = "pages/_index.html?1";
});


//放弃任务
$(".popup-abandon .popup-btn-right").on("click",function(){
    $(".case-end").addClass("case-curr").siblings().removeClass("case-curr");
    $(".popup").css({display:"none"});
    $(".popup-abandon").css({display:"none"});
});

//完成任务
$(".popup-complete-btn").on("click",function(){
    $(".popup").css({display:"none"});
    $(".popup-complete").css({display:"none"});
    $(".popup-delay2").css({display:"none"});
});
//弹窗 E

//完成任务页面取消返回 B
$(".head-cancel").on("click",function(){
    window.location.href = "home.html";
});
//完成任务页面取消返回E

//添加拜访记录的返回发布 B
$(".head-alter").on("click",function(){
    window.history.back();
});
//添加拜访记录的返回发布 E


//返回 B
$(".head-back").on("click",function(){
    window.history.back();
});
//返回 E

//设置头像 B
$('.photo-btn-left').change(function() {
    var file = this.files[0];
    var r = new FileReader();
    r.readAsDataURL(file);
    $(r).load(function() {
        $('.photo-preview').html('<img src="' + this.result + '"/>');
    })
});
//设置头像 E


//首页进入案子详情页 B
//待结单进入案子详情页
$(".case-begin-details").on("click",function(){
    window.location.href = "details.html";
});

//进行中进入案子详情页
$(".case-begin-details2").on("click",function(){
    window.location.href = "details2.html";
});

//已结束进入案子详情页
$(".case-end-one").on("click",function(){
    window.location.href = "details4.html";
});
$(".case-end-two").on("click",function(){
    window.location.href = "details5.html";
});
//首页进入案子详情页 E


//完成页面的返回 B
$(".info ul .op i").on("click",function(){
    $(".info ul li i").removeClass("curr");
    $(this).addClass("curr");
});

$(".info ul li .first").on("click",function(){
    $(".info ul .op i").removeClass("curr");
    $(".info ul .op b").removeClass("last");
    $(this).toggleClass("curr");
    $(".info ul").toggleClass("info-ul");
});
$(".info ul li b").on("click",function(){
    $(this).toggleClass("last");
});

//添加银行流水图片 B
//点击添加图片
$(".info-pic-add input").change(function() {
    var file = this.files[0];
    var r = new FileReader();
    var that = $(this).parent();
    r.readAsDataURL(file);
    $(r).load(function() {
        that.append('<img src="' + this.result + '"/><p>删除</p>');
        //点击删除图片
        $(".info-pic-add p").on("click",function(){
            $(this).prev().remove();
            $(this).remove();
        });
    })
});
//添加银行流水图片 E
//完成页面的返回 E


//拜访页面 B
$(".visit-add input").change(function() {
    var file = this.files[0];
    var r = new FileReader();
    var that = $(this).parent();
    r.readAsDataURL(file);
    $(r).load(function() {
        that.append('<img src="' + this.result + '"/><p>删除</p>');
        //点击删除图片
        $(".visit-add p").on("click",function(){
            $(this).prev().remove();
            $(this).remove();
        });
    });
});
//拜访页面 E


//分配任务进入详情页 B
$(".task-btn").on("click",function(){
    $("#task-mask").css({display:"block"});
})
//分配任务进入详情页 E

