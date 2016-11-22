//错误提示框 B
$(".fault input").on("click",function(){
    $(".fault").css({display:"none"});
})
//错误提示框 E


//个人认证 B
$("#submit").click(function() {
    var userName = $("#userName").val();                                                            //手机号
    var userId = $("#userId").val();                                                                //密码
    var agree = $("#agree");                                                                        //同意协议
    var faultInfo = $(".fault-txt-info");                                                           //错误提示弹窗
    var chinaReg = /^[\u4e00-\u9fa5]+$/;                                                            //中文正则
    var IDCard15 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;                         //15位身份证
    var IDCard18 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;      //18身份证
    if (!chinaReg.test(userName)) {
        $(".fault").css({display:"block"});
        faultInfo.html("请输入中文名");
        return false;
    } else if(userName.length < 2) {
        $(".fault").css({display:"block"});
        faultInfo.html("姓名长度不能少于两位");
    } else if(!IDCard15.test(userId) && !IDCard18.test(userId)) {
        $(".fault").css({display:"block"});
        faultInfo.html("请输入正确的身份证号码");
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
                document.location.href = "sbmSuccessp.html"
            },
            error: function () {
                document.location.href = "sbmFail.html"
            }
        });
    }
});
//个人认证 E
