//错误提示框 B
$(".fault input").on("click",function(){
    $(".fault").css({display:"none"});
})
//错误提示框 E


//分派员工任务 B
$("#btn").on("click",function(){
    var faultInfo = $(".fault-txt-info");   //错误提示弹窗
    if (!$(".check-btn input").hasClass("cur")) {
        $(".fault").css({display:"block"});
        faultInfo.html("请选择要分配的员工");
        return false;
    } else {
        $('.mask').css({display:"none"});
        mySwiper.slideTo(2, 30, false);
        $('#nav-tab li:nth-child(3)').addClass("on").siblings().removeClass("on");
        $.ajax({
            type: "post",
            datatype : "json",
            url: "../json/mobile.json",
            data: $("#form").serialize(),
            success : function(data){
                console.log("信息提交给后台了")
            }
        });
    }
})
//分派员工任务 E