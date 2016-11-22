//提交银行流水 B
$("#btn").on("click", function () {
    $.ajax({
        type: "post",
        datatype: "json",
        url: "json/register.json",
        data: $("#form").serialize(),
        success: function (data) {
            console.log("已经提交了")
        }
    });

});
//提交银行流水 E