//错误提示框 B
$(".fault input").on("click",function(){
    $(".fault").css({display:"none"});
})
//错误提示框 E


//提交反馈 B
$("#btn").on("click",function(){
    var advice = $("#advice").val();        //员工佣金比例
    var faultInfo = $(".fault-txt-info");       //错误提示弹窗
    if(advice == ""){
        $(".fault").css({display:"block"});
        faultInfo.html("请输入您的意见");
    } else if(advice.length > 300){
        $(".fault").css({display:"block"});
        faultInfo.html("请输入300字以内的文字");
    } else {
        $.ajax({
            type: "post",
            datatype : "json",
            url: "../json/mobile.json",
            data: $("#form").serialize(),
            success : function(data){
                console.log("已经提交了");
            }
        });
    }
});
//提交反馈 E