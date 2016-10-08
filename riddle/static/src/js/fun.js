/**
 * Created by Miao on 2016/2/18.
 * 
 * data.json
 * @param question 问题
   @param option 待选字
   @param answer 答案
 */



var First = true,
    stepObj,
    Step = function (data) {
    var step = false;

    function show(step) {
        stepMask(step);
        $('#game .stepDiv:lt(' + step + ')').addClass('on');
        var qust = data[step].option;
        $('#question').text(data[step].question);
        $('#answer .option').each(function (index) {
            $(this).text(qust.substr(index, 1)).removeClass('on');
            empty();
        })
    }

    //游戏结束
    function over(val) {
        if (val) {
            $('#game .stepDiv').addClass('on');
            $('#over').add('#maskOver').show();
        } else {
            $('#maskOver').add('#over2').show();
        }
    };
    //
    this.initialize = function () {
        if (!step) {
            step = 0;
            show(step)
        } else {
            console.log('can not initialize');
        }
    };
    this.check = function (val) {
        if (val === data[step].answer) {
            step++
            step < data.length ? show(step) : over(true);
        } else {
            //回答错误 游戏结束
            over(false);
        }
    }
}

$(function () {

    //开始游戏
    $('#home_start').click(function () {
        $('#home').hide();
        $('#game').show();
        getData();
    })

    //选择答案
    $('#answer .option').click(function () {
        if ($(this).hasClass('on')) {
            var val = $(this).text();
            var text = $('#conf').text();
            $('#conf').text(text.replace(val, ""));
            $(this).removeClass('on');
            if (!$('#conf').text()) {
                empty()
            }
        } else if ($(this).text()) {
            var val;
            val = First ? $(this).text() : $('#conf').text() + $(this).text();
            $('#conf').text(val);
            $(this).addClass('on');
            First = false;
        }
    })

    //提交答案
    $('#conf').click(function () {
        var val = $(this).text();
        if (!First) {
            if (stepObj && val) {
                stepObj.check(val);
            }
        } else {
            console.log(First);
        }
    })

    //提交号码
    $('#submit').click(function () {
        var val = $('#form').val();
       $.ajax({
            url:"提交电话号码",
            success: function () {
                $('#over #submit').hide();
                $('#over .close').show();
            },
            error: function () {
                $('#over #submit').hide();
                $('#over .close').show();
            }
        })
    })

    //关闭
    $('.close').click(function () {
       // window.close()
    })

})

//规则
$('#ruleBtn').on('click',function () {
    $('.home').hide();
    $('#rule').add('#maskOver').show();
})

//规则返回
$('#rule_to_start').on('click',function () {
    $('#rule').hide();
    $('#maskOver').hide();
})

/*
获取问题集，
由于开发环境所以暂不考虑游戏安全问题，问题和答案json都暂存于本地，线上环境每一关需从后台请求
*/
function getData() {
    $.ajax({
        url: 'data.json',
        async: false,
        success: function (data) {
            stepObj = new Step(data);
            stepObj.initialize();
        },
        error: function () {
            console.log('Network Error!');
        }
    })
}

function stepMask(val) {
    var pos = '0 '+(val*-142)+'px';
    $('#stepMask').show();
    $('#stepMask div').css('background-position',pos);
    setTimeout(function () {
        $('#stepMask').fadeOut();
    },1200)
}
//新关卡开启：重置答题状态
function empty() {
    First = true;
    $('#conf').text('请选择答案');
}
