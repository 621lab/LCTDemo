/**
 * Created by sun on 2017/7/10.
 */
$(function () {
    //时间选择框
    $('.form_date').datetimepicker({
        language:  'zh-CN',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });

    $.ajax({
        url:"selectContentServlet",
        type:"post",
        dataType:"json",
        async:true,
        timeout:5000,
        success:function (data) {
            for(var d in data){
                var li = $("<li></li>");
                var aram = data[d][1];
                var a = $("<a></a>",{
                    "name":aram
                });
                a.append(data[d][0]);
                li.append(a);
                $("#ul_menu1").append(li);
            }
            //二级菜单
            $("ul#ul_menu1>li").each(
                function () {
                    var tag = true;
                    //每个li下的a标签
                    var child = $(this).children();
                    child.hover(function () {
                        //li元素
                        var a_parent = $(this).parent();
                        var name = $(this).attr("name");
                        var request_url = "subListServlet";
                        if(tag){
                            tag = false;
                            $.ajax({
                                url: request_url,
                                type: 'post',
                                data: {"name": name},
                                dataType: 'json',
                                async: 'true',
                                timeout: 5000,
                                success: function (data) {
                                    //获取时间
                                    var start = $("#startTime").val();
                                    var end = $("#endTime").val();

                                    var sub_url = $("<ul></ul>");
                                    for (d in data) {
                                        var li = $("<li></li>");
                                        var aram = "testServlet?host=agvcar_1" + "&startTime=" + start + "&endTime=" + end + "&srv=" + data[d][1];
                                        var a = $("<a></a>", {
                                            "href": aram
                                        });
                                        a.append(data[d][1]);
                                        li.append(a);
                                        sub_url.append(li);
                                    }
                                    //将构建的ul添加到li下
                                    a_parent.append(sub_url);
                                }
                            });
                        }

                    });
                }
            );

        }

    })
});