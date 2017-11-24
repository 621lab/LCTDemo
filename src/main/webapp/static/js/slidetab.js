/**
 * Created by Administrator on 2017/5/2.
 */
$(function () {
    var theme_config = $("<div></div>", {
        "class":"theme-config"
    });
    var theme_config_box = $("<div></div>",{
        "class":"theme-config-box"
    });
    var skin_setting = $("<div></div>",{
        "class":"skin-settings"
    });
    //Layout options
    skin_setting.append(
          "<div class='title'>"
        + "图像选择"
        + "</div>"
        + "<div class='setings-item'>"
        + "<table style='height: 60%'><tr>"
        + "<td style='height: 50%; width: 50%'><div class='self_right_icon' draggable='true' id='colorLineChart'  style=' opacity:0.3;'><img id='right-icon' src='../../img/line.svg'><label style='font-weight: 300;margin-left: 6%'>折线图</label></div></td>"
        + "<td><div class='self_right_icon' id='lineChart' draggable='true'  style=' opacity:0.3;'><img id='right-icon' src='../../img/markPoint.svg'><label style='font-weight: 300;margin-left: 6%'>折线图</label></div></td>"
        + "<tr><td><div class='self_right_icon' draggable='true' id='pieChart' style=' opacity:0.3;'><div  id='beforePieChart'><img id='right-icon' src='../../img/pie.svg'><label style='font-weight: 300;margin-left: 6%'>饼状图</label></div></td>"
        + "<td><div class='self_right_icon' id='barChart'  style=' opacity:0.3;'><img id='right-icon' src='../../img/bar.svg'><label style='font-weight: 300;margin-left: 6%'>柱状图</label></div></div></td>"
        + "<tr><td><div class='self_right_icon' draggable='true' id='scatterChart' style='opacity:0.3;'><img id='right-icon' src='../../img/scatter.svg'><label style='font-weight: 300;margin-left: 6%'>散点图</label></div></td>"
        + "<td><div class='self_right_icon' draggable='true' id='singleAxisScatterChart' style=' opacity:0.3;'><img id='right-icon' src='../../img/singleAxis.svg'><label style='font-weight: 300;margin-left: 6%'>单轴图</label></div></td></tr>"
        + "<tr><td><div class='self_right_icon' draggable='true' id='graph_circle' style=' opacity:0.3;'><img id='right-icon' src='../../img/graph2.png'><label style='font-weight: 300;margin-left: 6%'>关系图</label></div></td></td>"
        + "<td><div class='self_right_icon' draggable='true' id='graph_random' style=' opacity:0.3;'><img id='right-icon' src='../../img/graph.svg'><label style='font-weight: 300;margin-left: 6%'>关系图</label></div></td></tr>"
        + "<tr><td><div class='self_right_icon' draggable='true' id='funnel' style=' opacity:0.3;'><img id='right-icon' src='../../img/funnel.svg'><label style='font-weight: 300;margin-left: 6%'>漏斗图</label></div></td>"
        + "<td><div class='self_right_icon' draggable='true' id='candlestick' style=' opacity:0.3;'><img id='right-icon' src='../../img/candlestick.svg'><label style='font-weight: 300;margin-left: 6%'>K线图</label></div></td></tr>"
        + "<tr><td><div class='self_right_icon' draggable='true' id='gaugeChart' style=' opacity:0.3;'><img id='right-icon' src='../../img/gauge.svg'><label style='font-weight: 300;margin-left: 6%'>仪表盘</label></div></td></td>"
        + "<td><div class='self_right_icon' draggable='true' id='radar' style=' opacity:0.3;'><img id='right-icon' src='../../img/radar.svg'><label style='font-weight: 300;margin-left: 6%'>雷达图</label></td></tr>"
        + "<tr><td><div class='self_right_icon' draggable='true' id='mapChartA' style=' opacity:0.3;'><img id='right-icon' src='../../img/map.svg'><label style='font-weight: 300;margin-left: 6%'>点地图</label></div></td>"
        + "<td><div class='self_right_icon' draggable='true' id='mapChart' style=' opacity:0.3;'><img id='right-icon' src='../../img/lines.svg'><label style='font-weight: 300;margin-left: 6%'>迁移图</label></div></td></tr> "
        + "</table>"
        + "</div>"
    );
    theme_config_box.append(
          "<div class='spin-icon'>"
        + "<i class='fa fa-cogs fa-spin'></i>"
        + "</div>"
    );
    theme_config_box.append(skin_setting);
    theme_config.append(theme_config_box);
    $("#tab-control-sidebar").after(theme_config);
    $('.spin-icon').click(function (){
        $(".theme-config-box").toggleClass("show");
    });

})