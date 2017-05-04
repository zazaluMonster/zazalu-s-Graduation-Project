
$(document).ready(function(){
    var shouyeAdsPictures = ["img/gallery/shouyeAds1.jpg","img/gallery/shouyeAds2.jpg","img/gallery/shouyeAds3.png","img/gallery/shouyeAds4.png","img/gallery/shouyeAds1.jpg"];
    var index = 0;
    setInterval(function(){
        $("#shouyeAds").fadeOut(2000,"swing",function(){
                index = (index%4+1);
                $("#shouyeAds").css("background-image","url('"+shouyeAdsPictures[index]+"')");
            });
            $("#shouyeAds").fadeIn(2000,"swing",function(){
        });
    },4000);
});