//错误提示框 B
$(".fault input").on("click",function(){
    $(".fault").css({display:"none"});
})
//错误提示框 E


//申请延期 B
$("#btn").on("click",function(){
    var faultInfo = $(".fault-txt-info");   //错误提示弹窗
    if($(".popup-delay-check i.curr").parent().hasClass("why")) {
        var txt = $(".popup-delay-check i.curr").parent().find("span").html();
        console.log(txt);
        $(".popup-delay").css({display:"none"});
        $(".popup-delay2").css({display:"block"});
        $.ajax({
            type: "post",
            datatype : "json",
            url: "json/mobile.json",
            data: {
                txt : txt
            },
            success : function(data){
                console.log("信息提交给后台了");
            }
        });
    }else if($(".popup-delay-check i.curr").parent().hasClass("other")){
        var txt = $(".popup-delay-check i.curr").parent().find("input").val();
        console.log(txt);
        if(txt == ""){
            $(".fault").css({display:"block"});
            faultInfo.html("请填写其他信息");
        }else{
            $(".popup-delay").css({display:"none"});
            $(".popup-delay2").css({display:"block"});
            $.ajax({
                type: "post",
                datatype : "json",
                url: "json/mobile.json",
                data: {
                    txt : txt
                },
                success : function(data){
                    console.log("信息提交给后台了");
                }
            });
        }
    }
})
//申请延期 E