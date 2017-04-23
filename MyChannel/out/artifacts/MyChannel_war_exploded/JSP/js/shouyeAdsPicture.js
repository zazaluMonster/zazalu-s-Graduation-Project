
$(document).ready(function(){
    //ajax请求获取广告图片和对应的商品链接


    var shouyeAdsPictures = ["img/gallery/shouyeAds1.jpg","img/gallery/shouyeAds2.jpg","img/gallery/shouyeAds3.png","img/gallery/shouyeAds4.png","img/gallery/shouyeAds1.jpg"];
    var index = 0;
    setInterval(function(){
        $("#shouyeAdsPicture").fadeOut(2000,"swing",function(){
                index = (index%4+1);
                $("#shouyeAdsPicture").attr("src",shouyeAdsPictures[index]);
            });
            $("#shouyeAdsPicture").fadeIn(2000,"swing",function(){
            
        });
    },4000);
});