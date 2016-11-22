//错误提示框 B
$(".fault input").on("click",function(){
    $(".fault").css({display:"none"});
})
//错误提示框 E


//员工佣金比例提交 B
$("#btn").on("click",function(){
    var employee = $("#employee").val();        //员工佣金比例
    var faultInfo = $(".fault-txt-info");       //错误提示弹窗
    if(employee == ""){
        $(".fault").css({display:"block"});
        faultInfo.html("请输入员工佣金比例");
    } else {
        $.ajax({
            type: "post",
            datatype : "json",
            url: "../json/mobile.json",
            data: $("#form").serialize(),
            success : function(data){
                console.log("已经提交了");
            }
        });
    }
});
//员工佣金比例提交 E