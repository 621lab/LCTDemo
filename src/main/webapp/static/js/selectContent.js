$(function () {
    $.ajax({
       url:"/selector/firstLevel",
       type:"post",
       dataType:"json",
       async:true,
       timeout:5000,
       success:function (data) {
           for(var d in data){
               var li = $("<li></li>");
               var aram = data[d]["name"];
               var a = $("<a></a>",{
                   "name":aram
               });
               a.append(data[d]["name"]);
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
                       var request_url = "/selector/secondLevel";
                       if(tag){
                           tag = false;
                           $.ajax({
                               url: request_url,
                               type: 'post',
                               data: {"train_type": name},
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
                                       var aram = "mesListServlet?service_id=" + data[d][0] + "&startTime=" + start + "&endTime=" + end + "&chosen_item=" + data[d][1];
                                       var a = $("<a></a>", {
                                           "href": aram
                                       });
                                       a.append(data[d]["name"]);
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