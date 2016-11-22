//错误提示框 B
$(".fault input").on("click",function(){
    $(".fault").css({display:"none"});
})
//错误提示框 E


//提交反馈 B
$(".head-alter").on("click",function(){
    var visit = $("#visit").val();              //拜访信息
    var faultInfo = $(".fault-txt-info");       //错误提示弹窗
    if(visit == ""){
        $(".fault").css({display:"block"});
        faultInfo.html("请输入您的拜访记录");
    } else if(visit.length > 300){
        $(".fault").css({display:"block"});
        faultInfo.html("请输入300字以内的文字");
    } else {
        $.ajax({
            type: "post",
            datatype : "json",
            url: "json/mobile.json",
            data: $("#form").serialize(),
            success : function(data){
                console.log("已经提交了");
            }
        });
    }
});
//提交反馈 E
