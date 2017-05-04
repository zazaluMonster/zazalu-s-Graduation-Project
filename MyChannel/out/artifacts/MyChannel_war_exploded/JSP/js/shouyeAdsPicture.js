
$(document).ready(function(){
    var shouyeAdsPictures = [];
    var shouyeAdsGoodId = [];
    //ajax请求获取广告图片和对应的商品链接
    $.ajax({
        url: '/MyChannel/advertisementAction_getAdsList.action',
        type: 'GET',
        timeout: 1000,
        cache: false,
        crossDomain: true,
        beforeSend: LoadFunction, //加载执行方法
        error: erryFunction,  //错误执行方法
        success: succFunction //成功执行方法
    });

    function LoadFunction() {
        //在请求数据的时候 要显示请求中字样告知用户等待片刻
        console.log("loading...");
    }
    function erryFunction() {
        console.log("error!");
    }

    function succFunction(tt) {
        var json = eval("("+tt+")"); //数组
        var tt = "";
        $.each(json.ads , function (index,item) {
            shouyeAdsPictures.push(item.AdsImgUrl);
            shouyeAdsGoodId.push(item.GoodId);
        });
        //由于我下面轮播图片实现方法的缘故 所以需要在加入第一张图片才行
        var adsNum = shouyeAdsPictures.length;
        shouyeAdsPictures.push(shouyeAdsPictures[0]);
        shouyeAdsGoodId.push(shouyeAdsGoodId[0]);
        var index = 0;
        $("#shouyeAds").css("background-image","url('"+shouyeAdsPictures[index]+"')");
        $("#shouyeAds").click(function () {
            window.location.href="/MyChannel/goodAction_toGoodPage.action?goodId="+shouyeAdsGoodId[index];
        })
        setInterval(function(){
            $("#shouyeAds").fadeOut(3000,"swing",function(){
                index = (index%adsNum+1);
                $("#shouyeAds").css("background-image","url('"+shouyeAdsPictures[index]+"')");
                //设置click
                $("#shouyeAds").unbind("click").click(function () {
                    window.location.href="/MyChannel/goodAction_toGoodPage.action?goodId="+shouyeAdsGoodId[index];
                })
            });
            $("#shouyeAds").fadeIn(3000,"swing",function(){

            });
        },4000);



    }
});