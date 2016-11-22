//错误提示框 B
$(".fault input").on("click",function(){
    $(".fault").css({display:"none"});
})
//错误提示框 E


//忘记密码 B
$("#next").on("click",function(){
    var mobile = $("#mobile").val();        //手机号
    var msgCode = $("#msgCode").val();      //验证码
    var myreg = /^1[34578]\d{9}$/;          //手机验证正则
    var numreg = /^\w{6}$/;                 //验证码正则
    var faultInfo = $(".fault-txt-info");   //错误提示弹窗
    if (!myreg.test(mobile)) {
        $(".fault").css({display:"block"});
        faultInfo.html("请输入正确的手机号");
        return false;
    } else if(!numreg.test(msgCode)){
        $(".fault").css({display:"block"});
        faultInfo.html("请输入6位验证码");
    } else {
        $.ajax({
            type: "post",
            datatype : "json",
            url: "../json/register.json",
            data: $("#form1").serialize() ,
            success : function(data){
                if(data.code !== msgCode){
                    $(".fault").css({display:"block"});
                    faultInfo.html("验证码不正确");
                }else {
                    document.location.href = "forgetPwdNext.html"
                }
            }
        });
    }
});
//获取验证码
$("#getCode").on("click",function(){
    var mobile = $("#mobile").val();        //手机号
    var myreg = /^1[34578]\d{9}$/;          //手机验证正则
    var faultInfo = $(".fault-txt-info");   //错误提示弹窗
    if (!myreg.test(mobile)) {
        $(".fault").css({display:"block"});
        faultInfo.html("请输入正确的手机号");
        return false;
    } else {
        $.ajax({
            type: "post",
            datatype : "json",
            url: "../json/mobile.json",
            data: $("#form1").serialize() ,
            success : function(data){
                if(data.mobile == mobile){
                    $("#getCode").attr("disabled","disabled");
                    $("#getCode").css({color:"#d0d5df"});
                    var num = 60;
                    $("#getCode").val("剩余" + num + "S");
                    var timeId = setInterval(function(){
                        num--;
                        $("#getCode").val("剩余" + num + "S");
                        if(num == 0){
                            clearInterval(timeId);
                            $("#getCode").val("重新获取");
                            $("#getCode").attr("disabled",false);
                            $("#getCode").css({color:"#339df5"});
                        }
                    },1000);
                }else {
                    $(".fault").css({display:"block"});
                    faultInfo.html("手机号不存在");
                }

            }
        });
    }
});
//忘记密码 E


//验证码验证是否正确
$("#msgCode").on("blur",function(){
    var msgCode = $("#msgCode").val();      //验证码
    var faultInfo = $(".fault-txt-info");   //错误提示弹窗
    var numreg = /^\w{6}$/;                 //验证码正则
    if (msgCode.length !== 6 || !numreg.test(msgCode)) {
        $(".fault").css({display:"block"});
        faultInfo.html("请输入6位数字验证码");
        return false;
    } else if (numreg.test(msgCode)){
        $.ajax({
            type: "post",
            datatype : "json",
            url: "../json/register.json",
            data: {
                msgCode : msgCode
            },
            success : function(data){
                if(data.code !== msgCode){
                    $(".fault").css({display:"block"});
                    faultInfo.html("验证码不正确");
                }else {
                    console.log("验证码正确")
                }
            }
        });
    }
});


//输入新密码 B
$("#btn").click(function() {
    var newPassWord1 = $("#newPassWord1").val();
    var newPassWord2 = $("#newPassWord2").val();
    var faultInfo = $(".fault-txt-info");
    if (newPassWord1 == "" || newPassWord1 == "") {
        $(".fault").css({display:"block"});
        faultInfo.html("新密码不可以为空!");
        return false;
    } else if(newPassWord1.length < 6 || newPassWord1.length > 18) {
        $(".fault").css({display:"block"});
        faultInfo.html("请输入6-18位之间的密码");
    } else if(newPassWord1 !== newPassWord2) {
        $(".fault").css({display:"block"});
        faultInfo.html("两次密码输入不一样");
    } else {
        $.ajax({
            type: "post",
            datatype : "json",
            url: "../json/register.json",
            data: $("#form2").serialize(),
            success : function(){
                $(".fault").css({display:"block"});
                faultInfo.html("修改成功，3S返回到登录页面");
                var num = 3;
                 var timer = setInterval(function(){
                     num--;
                     faultInfo.html("修改成功，" + num +"S返回到登录页面");
                     if(num == 0){
                         clearInterval(timer);
                         document.location.href = "login.html";
                     }
                },1000)
            }
        });
    }
});
//输入新密码 E






















