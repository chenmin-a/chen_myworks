//错误提示框 B
$(".fault input").on("click",function(){
    $(".fault").css({display:"none"});
    document.location.href = "userinfo.html";
})
//错误提示框 E


//上传头像 B
$("#btn").on("click", function () {
    var faultInfo = $(".fault-txt-info");   //错误提示弹窗
    $.ajax({
        type: "post",
        datatype: "json",
        url: "json/register.json",
        data: $("#form").serialize(),
        success: function (data) {
            $(".fault").css({display:"block"});
            faultInfo.html("头像已经上传，请稍后");
        }
    });
});
//上传头像 E