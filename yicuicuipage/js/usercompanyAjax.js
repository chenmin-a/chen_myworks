//错误提示框 B
$(".fault input").on("click",function(){
    $(".fault").css({display:"none"});
})
//错误提示框 E


//提交公司识别码 B
$("#btn").on("click",function(){
    var companyCode = $("#companyCode").val();      //公司识别码
    var numreg = /^\w{6}$/;                         //识别码正则
    var faultInfo = $(".fault-txt-info");           //错误提示框
    var orInfo = $(".or-txt-info");           //错误提示框
    if(!numreg.test(companyCode)){
        $(".fault").css({display:"block"});
        faultInfo.html("请输入6位识别码");
    } else {
        $(".or").css({display:"block"});
        orInfo.html("你确定要加入XXX公司吗？");
        $(".or .or-txt-info-yes").on("click",function(){
            $(".or").css({display:"none"});
            $.ajax({
                type: "post",
                datatype : "json",
                url: "json/register.json",
                data: {
                    companyCode : companyCode
                },
                success : function(data){
                    if(data.code !== companyCode){
                        $(".fault").css({display:"block"});
                        faultInfo.html("识别码不正确");
                    }else {
                        document.location.href = "userinfo.html?1";
                    }
                }
            });
        });
        $(".or .or-txt-info-no").on("click",function(){
            $(".or").css({display:"none"});
        });
    }
});
//提交公司识别码 E