//错误提示框 B
$(".fault input").on("click",function(){
    $(".fault").css({display:"none"});
})
//错误提示框 E

//更换手机号码 B
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

$("#btn").click(function() {
    var newMobile = $("#newMobile").val();        //手机号
    var msgCode = $("#msgCode").val();      //验证码
    var passWord = $("#passWord").val();    //密码
    var faultInfo = $(".fault-txt-info");   //错误提示弹窗
    var myreg = /^1[34578]\d{9}$/;          //手机验证正则
    if (newMobile == "" || msgCode == "" || passWord == "") {
        $(".fault").css({display:"block"});
        faultInfo.html("手机号，验证码，密码不可以为空!");
        return false;
    } else if(!myreg.test(newMobile)) {
        $(".fault").css({display:"block"});
        faultInfo.html("手机号码格式有误");
    } else if(passWord.length < 6 || passWord.length > 18){
        $(".fault").css({display:"block"});
        faultInfo.html("请输入6-18位之间的密码");
    } else {
        $.ajax({
            type: "post",
            datatype : "json",
            url: "../json/register.json",
            data: $("#form").serialize(),
            success : function(data){
                if(data.code == passWord){
                    $(".fault").css({display:"block"});
                    faultInfo.html("修改成功");
                    $(".fault input").on("click",function(){
                        $(".fault").css({display:"none"});
                        document.location.href = "setting.html"
                    });
                }else {
                    $(".fault").css({display:"block"});
                    faultInfo.html("修改失败，密码不正确");
                }
            }
        });
    }
});
//获取验证码
$("#getCode").on("click",function(){
    var newMobile = $("#newMobile").val();        //手机号
    var myreg = /^1[34578]\d{9}$/;          //手机验证正则
    var faultInfo = $(".fault-txt-info");   //错误提示弹窗
    if (!myreg.test(newMobile)) {
        $(".fault").css({display:"block"});
        faultInfo.html("请输入正确的手机号");
        return false;
    } else {
        $.ajax({
            type: "post",
            datatype : "json",
            url: "../json/mobile.json",
            data: $("#form").serialize(),
            success : function(data){
                if(data.mobile == newMobile){
                    $(".fault").css({display:"block"});
                    faultInfo.html("该号码已被使用");
                } else {
                    $("#getCode").attr("disabled","disabled");
                    $("#getCode").css({color:"#d0d5df"});
                    var num = 60;
                    $("#getCode").val("剩余" + num + "S");
                    var timeId = setInterval(function(){
                        num--;
                        $("#getCode").val("剩余" + num + "S");
                        if(num == 0){
                            clearInterval(timeId);
                            $("#getCode").val("重新发送");
                            $("#getCode").attr("disabled",false);
                            $("#getCode").css({color:"#339df5"});
                        }
                    },1000);
                }
            }
        });
    }
})
//更换手机号码 E