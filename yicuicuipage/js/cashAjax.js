//错误提示框 B
$(".fault input").on("click",function(){
    $(".fault").css({display:"none"});
})
//错误提示框 E


//申请提现 B
$("#btn").on("click",function(){
    var amount = $("#amount").val();                //提现金额
    var faultInfo = $(".fault-txt-info");           //错误提示弹窗
    var cashReg = /^[0-9]+(\.[0-9]{2})?$/;          //提现金额正则
    if(amount == ""){
        $(".fault").css({display:"block"});
        faultInfo.html("提现金额不能为空");
    } else if(parseInt(amount) < 1){
        $(".fault").css({display:"block"});
        faultInfo.html("提现金额必须大于1");
    } else if(!cashReg.test(amount)){
        $(".fault").css({display:"block"});
        faultInfo.html("提现金额，最多小数点后两位");
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
//申请提现 E