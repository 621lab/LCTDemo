$(function () {
    $('.form_date').datetimepicker({
        language:  'zh-CN',
        //language:  'en',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0,
        format: 'yyyy-mm-dd'
    });
    $.ajax({
        url: "selector/workShop",
        type: "post",
        dataType: "json",
        async: true,
        timeout: 6000,
        success:function (data) {
            for(var i in data){
                var name = data[i]["name"];
                var option = $("<option></option>",{
                    "value":name
                });
                option.append(name);
                $("select#selector1").append(option);
            }
            $("select#selector1").dropkick({
                change: function (value, label) {
                    var start  =$("div#start").children()[0].value;
                    var end  =$("div#end").children()[0].value;
                    var workshop = label;
                    var trainType = $("#dk_container_selector2").children("a.dk_toggle").children("span.dk_label")[0].innerText;
                    if(trainType == "选择车型"){
                        trainType = "";
                    }
                    if(workshop == "选择车间"){
                        workshop = "";
                    }
                    if((start.length != 0 && end.length != 0 ) || workshop.length != 0 || trainType.length != 0){
                        getProcessCycle(start,end,workshop,trainType);
                    }
                }
            });
        }
    });
    $.ajax({
        url: "selector/trainType",
        type: "post",
        dataType: "json",
        async: true,
        timeout: 6000,
        success:function (data) {
            for(var i in data){
                var name = data[i]["name"];
                var option = $("<option></option>",{
                    "value":name
                });
                option.append(name);
                $("select#selector2").append(option);
            }
            $("select#selector2").dropkick({
                change: function (value, label) {
                    var start  = $("div#start").children()[0].value;
                    var end  = $("div#end").children()[0].value;
                    var trainType = label;
                    var workshop = $("#dk_container_selector1").children("a.dk_toggle").children("span.dk_label")[0].innerText;
                    if((start.length != 0 && end.length != 0 ) || workshop.length != 0 || trainType.length != 0){
                        getProcessCycle(start,end,workshop,trainType);
                    }
                }
            });
        }
    });
    $("button#change").click(function () {
        getProcessCycle(null,null,null,null,1);
    })
     $("#search #search_icon").click(function () {
         $("#select-form").toggleClass("invisable"); //form none display
         $("#search_input").toggleClass("invisable");//form display
         // $(".search_view").toggle("display");
     });
     $("#search_input #close").click(function () {
         $("#select-form").toggleClass("invisable");//form display
         $("#search_input").toggleClass("invisable");//form none display
    //     // $(".search_view").toggle("display");
     });



});