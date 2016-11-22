//错误提示框 B
$(".fault input").on("click",function(){
    $(".fault").css({display:"none"});
})
//错误提示框 E

//公司认证 B
$("#submit").click(function() {
    var companyName = $("#companyName").val();
    var companyAddress = $("#companyAddress").val();
    var contactName = $("#contactName").val();
    var contactMobile = $("#contactMobile").val();
    var companyCode = $("#companyCode").val();
    var agree = $("#agree");
    var faultInfo = $(".fault-txt-info");
    var myreg = /^1[34578]\d{9}$/;                  //手机验证正则
    var chinaReg = /^[\u4e00-\u9fa5]+$/;            //中文正则
    if (companyName.length < 6) {
        $(".fault").css({display:"block"});
        faultInfo.html("请输入正确的公司名");
        return false;
    } else if(companyAddress == "") {
        $(".fault").css({display:"block"});
        faultInfo.html("请输入公司地址");
    } else if(contactName.length < 2 || !chinaReg.test(contactName)) {
        $(".fault").css({display:"block"});
        faultInfo.html("请输入正确联系人姓名");
    } else if(!myreg.test(contactMobile)) {
        $(".fault").css({display:"block"});
        faultInfo.html("请输入正确的手机号");
    } else if(companyCode == "") {
        $(".fault").css({display:"block"});
        faultInfo.html("请输入公司识别码");
    } else if(!agree.hasClass("cur")) {
        $(".fault").css({display:"block"});
        faultInfo.html("请同意协议");
    } else {
        $.ajax({
            type: "post",
            datatype : "json",
            url: "../json/register.json",
            data: $("#form").serialize(),
            success : function(){
                document.location.href = "sbmSuccessc.html"
            },
            error: function () {
                document.location.href = "sbmFail.html"
            }
        });
    }
});
//公司认证 E