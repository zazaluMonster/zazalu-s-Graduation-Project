
$(document).ready(function () {

    //待发货模块
    $("#getDaiFaHuo").click(function () {
        //使用Ajax查询 得到该用户待发货的数据

        //模拟下获取到的JSON数据
        var JSONObject = [
            {
                "month": "1",
                "money": "894123¥",
            },
            {
                "month": "2",
                "money": "2234123¥",
            },
            {
                "month": "3",
                "money": "984123¥",
            },
            {
                "month": "4",
                "money": "1434123¥",
            },
            {
                "month": "5",
                "money": "1734123¥",
            },
            {
                "month": "6",
                "money": "1834123¥",
            },
            {
                "month": "7",
                "money": "2034123¥",
            },
            {
                "month": "8",
                "money": "1934123¥",
            },
            {
                "month": "9",
                "money": "1134123¥",
            },
            {
                "month": "10",
                "money": "1334123¥",
            },
            {
                "month": "11",
                "money": "1234123¥",
            },
            {
                "month": "12",
                "money": "1034123¥",
            }
            ];

        //将拿到的数据，写一个for循环，循环的把数据放入
        //先删除所有的li
        if ($(".recent-posts-goodsLi").length != 0) {
            $(".recent-posts-goodsLi").remove();
        }
        var maxMoney = 0;
        JSONObject.forEach(function(element){
            if(element.money > maxMoney){
                maxMoney = element.money;
            }
        },this);

        //先判断是否有li了 有li说明已经进行过数据的查询了，不需要再添加
        if ($(".recent-posts-goodsLi").length == 0) {
            JSONObject.forEach(function (element) {
                var bili = Math.round(element.money / maxMoney);
                $("#recent-posts").append(
                    "<li class='recent-posts-goodsLi' style='box-shadow:inset " + 1000*bili +" 0px 0px 0px rgba(255, 0, 0, 0.35)'><div class='article-post'><p>"+element.month+"月 / 交易额 : "+element.money+"¥</p></div></li>"
                    );
            }, this);
        }
        //
    });
});