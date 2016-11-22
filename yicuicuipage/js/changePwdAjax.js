//错误提示框 B
$(".fault input").on("click",function(){
    $(".fault").css({display:"none"});
})
//错误提示框 E


$("#oldPassWord").on("blur",function(){
    var oldPassWord = $("#oldPassWord").val();        //手机号
    var faultInfo = $(".fault-txt-info");             //错误提示弹窗
    $.ajax({
        type: "post",
        datatype: "json",
        url: "../json/login.json",
        data: {
            password: oldPassWord
        },
        success: function (data) {
            if (data.password !== oldPassWord) {
                $(".fault").css({display: "block"});
                faultInfo.html("旧密码不正确");
                $("#btn").attr("disabled", "disabled").css({backgroundColor: "#ccc"});
            } else {
                console.log("旧密码正确");
                $("#btn").removeAttr("disabled").css({backgroundColor: "#339df5"});
            }
        }
    });
})


//修改密码 B
$("#btn").click(function() {
    var oldPassWord = $("#oldPassWord").val();
    var newPassWord1 = $("#newPassWord1").val();
    var newPassWord2 = $("#newPassWord2").val();
    var faultInfo = $(".fault-txt-info");
    if (oldPassWord == "" || newPassWord1 == "" || newPassWord1 == "") {
        $(".fault").css({display:"block"});
        faultInfo.html("密码不可以为空!");
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
            success : function(data){
                document.location.href = "login.html"
            }
        });
    }
});
//修改密码 E






















