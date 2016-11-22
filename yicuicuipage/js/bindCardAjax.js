//错误提示框 B
$(".fault input").on("click",function(){
    $(".fault").css({display:"none"});
})
//错误提示框 E


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


//绑定银行卡 B
$("#bindcard-btn").click(function() {
    var cardAccountName = $("#cardAccountName").val();        //持卡人
    var bankcardNo = $("#bankcardNo").val();                  //银行卡号
    var mobile = $("#mobile").val();                          //手机号
    var msgCode = $("#msgCode").val();                        //验证码
    var agree = $("#agree");                                  //同意协议
    var faultInfo = $(".fault-txt-info");                     //错误提示弹窗
    var myreg = /^1[34578]\d{9}$/;                            //手机验证正则
    var chinaReg = /^[\u4e00-\u9fa5]+$/;                      //中文正则
    if (cardAccountName == "" || bankcardNo == "" || mobile == "" || msgCode == "") {
        $(".fault").css({display:"block"});
        faultInfo.html("您有未填写的信息");
        return false;
    } else if(cardAccountName.length < 2 || !chinaReg.test(cardAccountName)) {
        $(".fault").css({display:"block"});
        faultInfo.html("请输入有效的姓名");
    } else if(!luhmCheck(bankcardNo)) {
        $(".fault").css({display:"block"});
        faultInfo.html("请输入有效的银行卡号");
    } else if(!myreg.test(mobile)) {
        $(".fault").css({display:"block"});
        faultInfo.html("手机号码格式有误");
    } else if(!agree.hasClass("cur")) {
        $(".fault").css({display:"block"});
        faultInfo.html("请同意协议");
    } else {
        $.ajax({
            type: "post",
            datatype : "json",
            url: "../json/register.json",
            data: $("#form").serialize(),
            success : function(data){
                if(data.code == msgCode){
                    $(".fault").css({display:"block"});
                    faultInfo.html("绑定成功");
                    $(".fault input").on("click",function(){
                        $(".fault").css({display:"none"});
                        document.location.href = "myCard.html"
                    });
                }else {
                    $(".fault").css({display:"block"});
                    faultInfo.html("绑定失败");
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
            data: $("#form").serialize(),
            success : function(data){
                $("#getCode").attr("disabled", "disabled");
                $("#getCode").css({color: "#d0d5df"});
                var num = 60;
                $("#getCode").val("剩余" + num + "S");
                var timeId = setInterval(function () {
                    num--;
                    $("#getCode").val("剩余" + num + "S");
                    if (num == 0) {
                        clearInterval(timeId);
                        $("#getCode").val("重新发送");
                        $("#getCode").attr("disabled", false);
                        $("#getCode").css({color: "#339df5"});
                    }
                }, 1000);
            }
        });
    }
})
//绑定银行卡 E













//外部引入的银行卡验证规则 B
//Description:  银行卡号Luhm校验
//Luhm校验规则：16位银行卡号（19位通用）:
// 1.将未带校验位的 15（或18）位卡号从右依次编号 1 到 15（18），位于奇数位号上的数字乘以 2。
// 2.将奇位乘积的个十位全部相加，再加上所有偶数位上的数字。
// 3.将加法和加上校验位能被 10 整除。
function luhmCheck(bankno){
    if (bankno.length < 16 || bankno.length > 19) {
//$("#banknoInfo").html("银行卡号长度必须在16到19之间");
        return false;
    }
    var num = /^\d*$/;  //全数字
    if (!num.exec(bankno)) {
//$("#banknoInfo").html("银行卡号必须全为数字");
        return false;
    }
//开头6位
    var strBin="10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";
    if (strBin.indexOf(bankno.substring(0, 2))== -1) {
//$("#banknoInfo").html("银行卡号开头6位不符合规范");
        return false;
    }
    var lastNum=bankno.substr(bankno.length-1,1);//取出最后一位（与luhm进行比较）

    var first15Num=bankno.substr(0,bankno.length-1);//前15或18位
    var newArr=new Array();
    for(var i=first15Num.length-1;i>-1;i--){    //前15或18位倒序存进数组
        newArr.push(first15Num.substr(i,1));
    }
    var arrJiShu=new Array();  //奇数位*2的积 <9
    var arrJiShu2=new Array(); //奇数位*2的积 >9

    var arrOuShu=new Array();  //偶数位数组
    for(var j=0;j<newArr.length;j++){
        if((j+1)%2==1){//奇数位
            if(parseInt(newArr[j])*2<9)
                arrJiShu.push(parseInt(newArr[j])*2);
            else
                arrJiShu2.push(parseInt(newArr[j])*2);
        }
        else //偶数位
            arrOuShu.push(newArr[j]);
    }

    var jishu_child1=new Array();//奇数位*2 >9 的分割之后的数组个位数
    var jishu_child2=new Array();//奇数位*2 >9 的分割之后的数组十位数
    for(var h=0;h<arrJiShu2.length;h++){
        jishu_child1.push(parseInt(arrJiShu2[h])%10);
        jishu_child2.push(parseInt(arrJiShu2[h])/10);
    }

    var sumJiShu=0; //奇数位*2 < 9 的数组之和
    var sumOuShu=0; //偶数位数组之和
    var sumJiShuChild1=0; //奇数位*2 >9 的分割之后的数组个位数之和
    var sumJiShuChild2=0; //奇数位*2 >9 的分割之后的数组十位数之和
    var sumTotal=0;
    for(var m=0;m<arrJiShu.length;m++){
        sumJiShu=sumJiShu+parseInt(arrJiShu[m]);
    }

    for(var n=0;n<arrOuShu.length;n++){
        sumOuShu=sumOuShu+parseInt(arrOuShu[n]);
    }

    for(var p=0;p<jishu_child1.length;p++){
        sumJiShuChild1=sumJiShuChild1+parseInt(jishu_child1[p]);
        sumJiShuChild2=sumJiShuChild2+parseInt(jishu_child2[p]);
    }
    //计算总和
    sumTotal=parseInt(sumJiShu)+parseInt(sumOuShu)+parseInt(sumJiShuChild1)+parseInt(sumJiShuChild2);

    //计算Luhm值
    var k= parseInt(sumTotal)%10==0?10:parseInt(sumTotal)%10;
    var luhm= 10-k;

    if(lastNum==luhm){
        $("#banknoInfo").html("Luhm验证通过");
        return true;
    }
    else{
        $("#banknoInfo").html("银行卡号必须符合Luhm校验");
        return false;
    }
}
//外部引入的银行卡验证规则 E