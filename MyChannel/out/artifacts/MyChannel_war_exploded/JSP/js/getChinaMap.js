
$(document).ready(function () {

    //当用户修改地址的省份的时候 这个监听器会检测到
    $(".province").on("select2:select", function () {
        console.log($("#select2-zazaluProvince-container").text());
        //刷新的列表
        if($("#zazaluCity").find($('option').length) !== 0){
            $("#zazaluCity option").remove();
        }
        //获取到修改了的地址 生成其二级地址
        $.ajax({
            url: '/MyChannel/JSP/json/chinaMapList.json',
            type: 'GET',
            dataType: 'json',
            timeout: 1000,
            cache: false,
            crossDomain: true,
            beforeSend: LoadFunction, //加载执行方法
            error: erryFunction,  //错误执行方法
            success: succcityFunction //成功执行方法
        })
    });
    //当用户修改地址的市区的时候 这个监听器会检测到
    $(".city").on("select2:select", function () {
        console.log($("#select2-zazaluCity-container").text());
        if($("#zazaluArea").find($('option').length) !== 0){
            $("#zazaluArea option").remove();
        }
        //获取到修改了的地址 生成其二级地址
        $.ajax({
            url: '/MyChannel/JSP/json/chinaMapList.json',
            type: 'GET',
            dataType: 'json',
            timeout: 1000,
            cache: false,
            crossDomain: true,
            beforeSend: LoadFunction, //加载执行方法
            error: erryFunction,  //错误执行方法
            success: succareaFunction //成功执行方法
        })
    });


    //中国省份获取 用户点击联系地址的省份栏下拉框的时候 进行加载最新的省份
    //http://apis.map.qq.com/ws/district/v1/list?key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77
    function LoadFunction() {
        console.log("loading...");
    }
    function erryFunction() {
        console.log("loading...");
    }

    //解析json数据
    function succcityFunction(tt) {
        var json = eval(tt); //数组
        var tt = "";
        var selectProvince = $("#select2-zazaluProvince-container").text();
        var selectProvinceId;
        $.each(json.result[0] , function (index,item) {
            if(item.name === selectProvince){
                selectProvinceId = item.id;
                console.log(item.name + "'s id is " + selectProvinceId);
            }
        });
        $.each(json.result[1] , function (index,item) {
            //循环获取数据，在控制台输出
            //添加为省份select的options
            if(item.id.substr(0,2) === selectProvinceId.substr(0,2)){
                $("#zazaluCity")
                    .append("<option value='"+item.name+"'>"
                        +item.name
                        +"</option>");
            }
        });
        //删除加载中
        if ($("#zazaluCityJiaZai") !== undefined){
            $("#zazaluCityJiaZai").remove();
            console.log("删除加载中")
        }
        //重新列表化省份
        $(".city").select2();
    }

    function succareaFunction(tt) {
        var json = eval(tt); //数组
        var tt = "";
        var selectCity = $("#select2-zazaluCity-container").text();
        var selectCityId;
        $.each(json.result[1] , function (index,item) {
            if(item.name === selectCity){
                selectCityId = item.id;
                console.log(item.name + "'s id is " + selectCityId);
            }
        });
        // $.each(json.result[1] , function (index,item) {
        //     //循环获取数据，在控制台输出
        //     //添加为省份select的options
        //     if(item.id.substr(0,4) === selectCityId.substr(0,4)){
        //         $("#zazaluCity")
        //             .append("<option value='"+item.name+"'>"
        //                 +item.name
        //                 +"</option>");
        //     }
        // });
        $.each(json.result[2] , function (index,item) {
            //循环获取数据，在控制台输出
            //添加为省份select的options
            if(item.name === undefined){
                if(item.id.substr(0,4) === selectCityId.substr(0,4)){
                    $("#zazaluArea")
                        .append("<option value='"+item.fullname+"'>"
                            +item.fullname
                            +"</option>");
                }
            }else {
                if(item.id.substr(0,4) === selectCityId.substr(0,4)){
                    $("#zazaluArea")
                        .append("<option value='"+item.name+"'>"
                            +item.name
                            +"</option>");
                }
            }
        });
        //删除加载中
        if ($("#zazaluAreaJiaZai") !== undefined){
            $("#zazaluAreaJiaZai").remove();
            console.log("删除加载中")
        }
        //重新列表化省份
        $(".area").select2();
    }
});