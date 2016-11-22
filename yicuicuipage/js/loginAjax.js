//错误提示框 B
$(".fault input").on("click",function(){
    $(".fault").css({display:"none"});
})
//错误提示框 E


//登录验证 B
$("#login").on("click",function(){
    var mobile = $("#mobile").val();        //手机号
    var passWord = $("#password").val();    //密码
    var faultInfo = $(".fault-txt-info");   //错误提示弹窗
    var myreg = /^1[34578]\d{9}$/;          //手机验证正则
    if (mobile == "" || passWord == "") {
        $(".fault").css({display:"block"});
        faultInfo.html("手机号和密码不可以为空!");
        return false;
    } else if(!myreg.test(mobile)) {
        $(".fault").css({display:"block"});
        faultInfo.html("手机号码格式有误");
    } else if(passWord.length < 6){
        $(".fault").css({display:"block"});
        faultInfo.html("密码不符合规范");
    } else {
        $.ajax({
            type: "post",
            datatype : "json",
            url: "../json/login.json",
            data: $("#form").serialize(),
            success : function(data){
                if(data.mobile == mobile && data.password == passWord){
                    document.location.href = "_index.html"
                }else {
                    $(".fault").css({display:"block"});
                    faultInfo.html("账号或密码有错误");
                }
            }
        });
    }
});
//登录验证 E
