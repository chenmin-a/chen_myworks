//退出公司提示框 B
$(".fault input").on("click",function(){
    $.ajax({
        type: "post",
        datatype : "json",
        url: "json/register.json",
        data: {
            code: "123456"
        },
        success : function(data){
            if(data.code == "123456"){
                $(".fault").css({display:"none"});
                $(".popup").css({display:"block"});
                $(".popup-complete").css({display:"block"});
            }
        }
    });
})
//退出公司提示框 E


//退出公司成功弹窗 B
$(".popup-complete-btn").on("click",function(){
    $(".head-bottom-info-add").css({display:"block"});
    $(".head-bottom-info-had").css({display:"none"});
});
//退出公司成功弹窗 E


//退出公司 B
$(".head-bottom-info-had span").on("click",function(){
    var faultInfo = $(".fault-txt-info");                   //错误提示弹窗
    var companyName = $(".head-bottom-info-had p").html()      //公司名称
    $(".fault").css({display:"block"});
    faultInfo.html('确认退出“' +  companyName + '”');
});
//退出公司 E