/**
 * Created by zhanglu on 2016/12/12.
 */
window.main;
window.main1;
window.main2;

function draw(data){
    // slideTab();
    $("#main_div").css({
        height:$(window).height() * 0.5
    });
    $(".row2").css({
        height:$(window).height() * 0.3
    });
    window.chartObject = data;
    if(chartObject.pieChart[0].full) {
        $('#pieChart').css({
            'opacity': '1'
        });
        $("#pieChart").click(function () {
            pieChart("main");
        });
        $('#pieChart').mousedown(function () {
            document.addEventListener("dragstart",function (event) {
                event.dataTransfer.setData("Text",event.target.id);
            });
            /* 拖动完成时触发*/
            document.addEventListener("dragover", function (event) {
                event.preventDefault();
                event.stopPropagation();
            });
            document.addEventListener("drop", function (event) {
                event.preventDefault();
                event.stopPropagation();
                if (event.target.id == "main1") {
                    resizeForDiv();
					 main.resize();
                    pieChart("main1");
                }
                if (event.target.id == "main2") {
                    resizeForDiv();
					 main.resize();
                    pieChart("main2");
                }
            });
        });
    }

    if(chartObject.raderCharts[0].full){
        $('#radar').css({
            'opacity':'1'
        });
        $("#radar").click(function() {
            radar("main");
        });
        $("#radar").mousedown(function() {
            document.addEventListener("dragstart",function (event) {
                event.dataTransfer.setData("Text",event.target.id);
            });
            /* 拖动完成时触发*/
            document.addEventListener("dragover", function(event) {
                event.preventDefault();
                event.stopPropagation();
            });
            document.addEventListener("drop", function(event) {
                event.preventDefault();
                event.stopPropagation();
                if ( event.target.id == "main1" ) {
                    resizeForDiv();
					 main.resize();
                    radar("main1");
                }
                if ( event.target.id == "main2" ) {
                    resizeForDiv();
					 main.resize();
                    radar("main2");
                }
            });
        });

    }

    if('kLineChart' in chartObject && chartObject.kLineChart.length != 0){
        $('#candlestick').css({
            'opacity':'1'
        });
        $("#candlestick").click(function() {
            candlestick("main");
        });
        $("#candlestick").mousedown(function() {
            document.addEventListener("dragstart",function (event) {
                event.dataTransfer.setData("Text",event.target.id);
            });
            /* 拖动完成时触发*/
            document.addEventListener("dragover", function(event) {
                event.preventDefault();
                event.stopPropagation();
            });
            document.addEventListener("drop", function(event) {
                event.preventDefault();
                event.stopPropagation();
                if ( event.target.id == "main1" ) {
                    resizeForDiv();
					 main.resize();
                    candlestick("main1");
                }
                if ( event.target.id == "main2" ) {
                    resizeForDiv();
					 main.resize();
                    candlestick("main2");
                }
            });
        });
    }

    if(chartObject.funnelChart[0].full){
        $('#funnel').css({
            'opacity':'1'
        });
        $("#funnel").click(function() {
            funnel("main");
        });
        $("#funnel").mousedown(function() {
            document.addEventListener("dragstart",function (event) {
                event.dataTransfer.setData("Text",event.target.id);
            });
            /* 拖动完成时触发*/
            document.addEventListener("dragover", function(event) {
                event.preventDefault();
                event.stopPropagation();
            });
            document.addEventListener("drop", function(event) {
                event.preventDefault();
                event.stopPropagation();
                if ( event.target.id == "main1" ) {
                    resizeForDiv();
					 main.resize();
                    funnel("main1");
                }
                if ( event.target.id == "main2" ) {
                    resizeForDiv();
					 main.resize();
                    funnel("main2");
                }
            });
        });

    }

    if(chartObject.dashboardChart.full){
        $('#gaugeChart').css({
            'opacity':'1'
        });
        $("#gaugeChart").click(function() {
            gaugeChart("main");
        });
        $("#gaugeChart").mousedown(function() {
            document.addEventListener("dragstart",function (event) {
                event.dataTransfer.setData("Text",event.target.id);
            });
            /* 拖动完成时触发*/
            document.addEventListener("dragover", function(event) {
                event.preventDefault();
                event.stopPropagation();
            });
            document.addEventListener("drop", function(event) {
                event.preventDefault();
                event.stopPropagation();
                if ( event.target.id == "main1" ) {
                    resizeForDiv();
					 main.resize();
                    gaugeChart("main1");
                }
                if ( event.target.id == "main2" ) {
                    resizeForDiv();
					 main.resize();
                    gaugeChart("main2");
                }
            });
        });
    }

    if(chartObject.scatterChart.full){
        $('#scatterChart').css({
            'opacity':'1'
        });
        $("#scatterChart").click(function() {
            scatterChart("main");
        });
        $("#scatterChart").mousedown(function() {
            document.addEventListener("dragstart",function (event) {
                event.dataTransfer.setData("Text",event.target.id);
            });
            /* 拖动完成时触发*/
            document.addEventListener("dragover", function(event) {
                event.preventDefault();
                event.stopPropagation();
            });
            document.addEventListener("drop", function(event) {
                event.preventDefault();
                event.stopPropagation();
                if ( event.target.id == "main1" ) {
                    resizeForDiv();
					 main.resize();
                    scatterChart("main1");
                }
                if ( event.target.id == "main2" ) {
                    resizeForDiv();
					 main.resize();
                    scatterChart("main2");
                }
            });
        });

    }

    if(chartObject.lineChartA[0].full) {
        var flag = true;
        $('#lineChart').css({
            'opacity': '1'
        });
        $('#colorLineChart').css({
            'opacity': '1'
        });
        $("#lineChart").click(function () {
            lineChart("main");
        });
        $("#colorLineChart").click(function () {
            lineChart_color("main");
        });
        $("#lineChart").mousedown(function () {
            document.addEventListener("dragstart",function (event) {
                event.dataTransfer.setData("Text",event.target.id);
            });
            /* 拖动完成时触发*/
            document.addEventListener("dragenter", function (event) {
                event.preventDefault();
                event.stopPropagation();
            },false);
            document.addEventListener("dragover", function (event) {
                event.preventDefault();
                event.stopPropagation();
            },false);
            document.addEventListener("drop", function (event) {
                // event.preventDefault();
                // event.stopPropagation();
                console.log(event.target);
                if (event.target.id == "main1") {
                    resizeForDiv();
					 main.resize();
                    lineChart("main1");
                }
                if (event.target.id == "main2") {
                    resizeForDiv();
					 main.resize();
                    lineChart("main2");
                }
            },false);
        });

        $("#colorLineChart").mousedown(function () {
            document.addEventListener("dragstart",function (event) {
                event.dataTransfer.setData("Text",event.target.id);
            });
            /* 拖动完成时触发*/
            document.addEventListener("dragover", function (event) {
                event.preventDefault();
                event.stopPropagation();
            });
            document.addEventListener("drop", function (event) {
                // event.preventDefault();
                // event.stopPropagation();
                if (event.target.id == "main1") {
                    resizeForDiv();
					 main.resize();
                    lineChart_color("main1");
                }
                if (event.target.id == "main2") {
                    resizeForDiv();
					 main.resize();
                    lineChart_color("main2");
                }
            },false);
        });
    }

    if(chartObject.singleAxisScatterChart.full){
        $('#singleAxisScatterChart').css({
            'opacity':'1'
        });
        $("#singleAxisScatterChart").click(function () {
            singleAxisScatterChart("main");
        });
        $("#singleAxisScatterChart").mousedown(function () {
            document.addEventListener("dragstart",function (event) {
                event.dataTransfer.setData("Text",event.target.id);
            });
            /* 拖动完成时触发*/
            document.addEventListener("dragover", function(event) {
                event.preventDefault();
                event.stopPropagation();
            });
            document.addEventListener("drop", function(event) {
                event.preventDefault();
                event.stopPropagation();
                if ( event.target.id == "main1" ) {
                    resizeForDiv();
					 main.resize();
                    singleAxisScatterChart("main1");
                }
                if ( event.target.id == "main2" ) {
                    resizeForDiv();
					 main.resize();
                    singleAxisScatterChart("main2");
                }
            });
        });

    }

    if(chartObject.barChart[0].full){
        $('#barChart').css({
            'opacity':'1'
        });
        $("#barChart").click(function() {
            barChart("main");
        });
        $("#barChart").mousedown(function() {
            document.addEventListener("dragstart",function (event) {
                event.dataTransfer.setData("Text",event.target.id);
            });
            /* 拖动完成时触发*/
            document.addEventListener("dragover", function(event) {
                event.preventDefault();
                event.stopPropagation();
            });
            document.addEventListener("drop", function(event) {
                event.preventDefault();
                event.stopPropagation();
                if ( event.target.id == "main1" ) {
                    resizeForDiv();
					 main.resize();
                    barChart("main1");
                }
                if ( event.target.id == "main2" ) {
                    resizeForDiv();
					 main.resize();
                    barChart("main2");
                }
            },false);
        });

    }

    if(chartObject.map_data.full && chartObject.geoCoordMap.full){

        $("#mapChartA").css({
            'opacity':'1'
        });
        $("#mapChartA").click(function () {
            scatterMap("main");
        });
        $("#mapChartA").mousedown(function () {
            document.addEventListener("dragstart",function (event) {
                event.dataTransfer.setData("Text",event.target.id);
            });
            /* 拖动完成时触发*/
            document.addEventListener("dragover", function(event) {
                event.preventDefault();
                event.stopPropagation();
            });
            document.addEventListener("drop", function(event) {
                event.preventDefault();
                event.stopPropagation();
                if ( event.target.id == "main1" ) {
                    resizeForDiv();
					 main.resize();
                    scatterMap("main1");
                }
                if ( event.target.id == "main2" ) {
                    resizeForDiv();
					 main.resize();
                    scatterMap("main2");
                }
            });
        });
    }

    if('initialCity' in chartObject && chartObject.map_data.full && chartObject.geoCoordMap.full){
        $("#mapChart").css({
            'opacity':'1'
        });
        $("#mapChart").click(function () {
            traceMap("main");
        });
        $("#mapChart").mousedown(function () {
            document.addEventListener("dragstart",function (event) {
                event.dataTransfer.setData("Text",event.target.id);
            });
            /* 拖动完成时触发*/
            document.addEventListener("dragover", function(event) {
                event.preventDefault();
                event.stopPropagation();
            });
            document.addEventListener("drop", function(event) {
                event.preventDefault();
                event.stopPropagation();
                if ( event.target.id == "main1" ) {
                    resizeForDiv();
					 main.resize();
                    traceMap("main1");
                }
                if ( event.target.id == "main2" ) {
                    resizeForDiv();
					 main.resize();
                    traceMap("main2");
                }
            });
        });

    }

    if(chartObject.relationNodes.full){
        $('#graph_circle').css({
            'opacity':'1'
        });
        $('#graph_random').css({
            'opacity':'1'
        });
        $('#graph_circle').click(function () {
            relationChartCircle2("main");
        });
        $('#graph_random').click(function () {
            ForceGraphEcharts("main");
        });
        $("#graph_circle").mousedown(function() {
            document.addEventListener("dragstart",function (event) {
                event.dataTransfer.setData("Text",event.target.id);
            });
            /* 拖动完成时触发*/
            document.addEventListener("dragover", function(event) {
                event.preventDefault();
                event.stopPropagation();
            });
            document.addEventListener("drop", function(event) {
                if ( event.target.id == "main1" ) {
                    resizeForDiv();
					 main.resize();
                    relationChartCircle2("main1");
                }
                if ( event.target.id == "main2" ) {
                    resizeForDiv();
					 main.resize();
                    relationChartCircle2("main2");
                }
            });
        });
        $("#graph_random").mousedown(function() {
            document.addEventListener("dragstart",function (event) {
                event.dataTransfer.setData("Text",event.target.id);
            });
            /* 拖动完成时触发*/
            document.addEventListener("dragover", function(event) {
                event.preventDefault();
                event.stopPropagation();
            });
            document.addEventListener("drop", function(event) {
                if ( event.target.id == "main1" ) {
                    resizeForDiv();
					 main.resize();
                    ForceGraphEcharts("main1")
                }
                if ( event.target.id == "main2" ) {
                    resizeForDiv();
					 main.resize();
                    ForceGraphEcharts("main2")
                }
            });
        });
    }

}

//普通折线图
function lineChart(divId) {
    if(divId=="main1"){
        if (main1 && main1.dispose) {
            main1.dispose();
        }
        main1 = echarts.init(document.getElementById(divId));
    }else if(divId=="main2"){
        if (main2 && main2.dispose) {
            main2.dispose();
        }
        main2 = echarts.init(document.getElementById(divId));
    }else if(divId =="main"){
        if (main && main.dispose) {
            main.dispose();
        }
        main = echarts.init(document.getElementById(divId));
    }
    var option = {
        title: {
            text:chartObject.title
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:function () {
                var series=[];
                for (var i = 0; i < chartObject.count; i++){
                    series.push(chartObject.lineChartA[i].name);
                }
                return series;
            }()
        },
        toolbox: {
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: chartObject.lineChartA[0].xValue
        },
        dataZoom:{show:true},
        yAxis: {
            type: 'value',
            axisLabel: {
            }
        },
        series:function () {
            var series=[];
            for (var i = 0; i < chartObject.count; i++){
                var item={
                    name:chartObject.lineChartA[i].name,
                    type:'line',
                    data:chartObject.lineChartA[i].yValue,
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    }
                };
                series.push(item);
            }
            series = series.concat(limitColor());

            return series;
        }()
    };
    if(divId=="main1"){
        main1.setOption(option);
    }else if(divId=="main2"){
        main2.setOption(option);
    }else if(divId =="main"){
        main.setOption(option);
    }
}
//带底色的折线图
function lineChart_color(divId) {
    if(divId=="main1"){
        if (main1 && main1.dispose) {
            main1.dispose();
        }
        main1 = echarts.init(document.getElementById(divId));
    }else if(divId=="main2"){
        if (main2 && main2.dispose) {
            main2.dispose();
        }
        main2 = echarts.init(document.getElementById(divId));
    }else if(divId =="main"){
        if (main && main.dispose) {
            main.dispose();
        }
        main = echarts.init(document.getElementById(divId));
    }
    var option = {
        title: {
            text:chartObject.title
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data:function () {
                var series=[];
                for (var i = 0; i < chartObject.count; i++){
                    series.push(chartObject.lineChartA[i].name);
                }
                return series;
            }()
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : chartObject.lineChartA[0].xValue
            }
        ],
        dataZoom:{show:true},
        yAxis : [
            {
                type : 'value'
            }
        ],
        series:function () {
            var series=[];
            for (var i = 0; i < chartObject.count; i++){
                var item={
                    name:chartObject.lineChartA[i].name,
                    type:'line',
                    areaStyle: {normal: {}},
                    data:chartObject.lineChartA[i].yValue
                };
                series.push(item);
            }
            series = series.concat(limitColor());
            return series;
        }()
    };
    if(divId=="main1"){
        main1.setOption(option);
    }else if(divId=="main2"){
        main2.setOption(option);
    }else if(divId =="main"){
        main.setOption(option);
    }
}
//饼状图
function pieChart(divId) {
    if(divId=="main1"){
        if (main1 && main1.dispose) {
            main1.dispose();
        }
        main1 = echarts.init(document.getElementById(divId));
    }else if(divId=="main2"){
        if (main2 && main2.dispose) {
            main2.dispose();
        }
        main2 = echarts.init(document.getElementById(divId));
    }else if(divId =="main"){
        if (main && main.dispose) {
            main.dispose();
        }
        main = echarts.init(document.getElementById(divId));
    }
    var option = {
        title : {
            text:chartObject.title,
            x:'center'
        },
        toolbox: {
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data:function () {
                var series=[];
                for (var i = 0; i < chartObject.count; i++){
                    series.push(chartObject.pieChart[i].xValue);
                }
                return series;
            }()
        },
        series : [
            {
                name: chartObject.title,
                type: 'pie',
                radius : '90%',
                center: ['40%','55%'],
                data:function () {
                    var series=[];
                    for (var i = 0; i < chartObject.count; i++){
                        var item={
                            value:chartObject.pieChart[i].yValue,
                            name:chartObject.pieChart[i].xValue
                        };
                        series.push(item);
                    }
                    return series;
                }(),
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    if(divId=="main1"){
        main1.setOption(option);
    }else if(divId=="main2"){
        main2.setOption(option);
    }else if(divId =="main"){
        main.setOption(option);
    }
}
//柱状图
function barChart(divId) {
    if(divId=="main1"){
        if (main1 && main1.dispose) {
            main1.dispose();
        }
        main1 = echarts.init(document.getElementById(divId));
    }else if(divId=="main2"){
        if (main2 && main2.dispose) {
            main2.dispose();
        }
        main2 = echarts.init(document.getElementById(divId));
    }else if(divId =="main"){
        if (main && main.dispose) {
            main.dispose();
        }
        main = echarts.init(document.getElementById(divId));
    }
    var option = {
        title: {
            left: "left",
            text: chartObject.title
        },
        legend: {
            data: function () {
                var series = [];
                for (var i = 0; i < chartObject.count; i++) {
                    series.push(chartObject.barChart[i].name);
                }
                return series;
            }()
        },
        //color: ['#3398DB'],
        barWidth: 40,
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: [
            {
                type: 'category',
                data: chartObject.barChart[0].xValue,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        dataZoom:{show:true},
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: function () {
            var series = [];
            for (var i = 0; i < chartObject.count; i++) {
                var item = {
                    name: chartObject.barChart[i].name,
                    type: 'bar',
                    barWidth: (50 - (chartObject.count * 7)) + '%',
                    data: chartObject.barChart[i].yValue
                };
                series.push(item);
            }
            return series;
        }()
    };
    if(divId=="main1"){
        main1.setOption(option);
    }else if(divId=="main2"){
        main2.setOption(option);
    }else if(divId =="main"){
        main.setOption(option);
    }
}
//散点图
function scatterChart(divId) {
    if(divId=="main1"){
        if (main1 && main1.dispose) {
            main1.dispose();
        }
        main1 = echarts.init(document.getElementById(divId));
    }else if(divId=="main2"){
        if (main2 && main2.dispose) {
            main2.dispose();
        }
        main2 = echarts.init(document.getElementById(divId));
    }else if(divId =="main"){
        if (main && main.dispose) {
            main.dispose();
        }
        main = echarts.init(document.getElementById(divId));
    }
    var data = chartObject.scatterChart.points;
    var option = {
        backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
            offset: 0,
            color: '#f7f8fa'
        }, {
            offset: 1,
            color: '#cdd0d5'
        }]),
        title: {
            text:chartObject.title
        },
        legend: {
            center: 10,
            data: chartObject.scatterChart.category
        },
        toolbox: {
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        dataZoom:{show:true},
        yAxis: {
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            scale: true
        },
        series:function () {
            var series=[];
            for (var i = 0; i < chartObject.count; i++){
                var item={
                    name:chartObject.scatterChart.category[i],
                    type:'scatter',
                    data:chartObject.scatterChart.points[i],
                    symbolSize: function (data) {
                                //return Math.sqrt(data[2]) / 5e2;
                                return data[2];
                    },
                    label: {
                        emphasis: {
                            show: true,
                            formatter: function (param) {
                                return param.data[3];
                            },
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(120, 36, 50, 0.5)',
                            shadowOffsetY: 5
                        }
                    }
                };
                series.push(item);
            }
            return series;
        }()
        // series: [{
        //     name: chartObject.category,
        //     data: data[0],
        //     type: 'scatter',
        //     symbolSize: function (data) {
        //         return Math.sqrt(data[2]) / 5e2;
        //         //return data[2];
        //     },
        //     label: {
        //         emphasis: {
        //             show: true,
        //             formatter: function (param) {
        //                 return param.data[3];
        //             },
        //             position: 'top'
        //         }
        //     },
        //     itemStyle: {
        //         normal: {
        //             shadowBlur: 10,
        //             shadowColor: 'rgba(120, 36, 50, 0.5)',
        //             shadowOffsetY: 5,
        //             color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
        //                 offset: 0,
        //                 color: 'rgb(251, 118, 123)'
        //             }, {
        //                 offset: 1,
        //                 color: 'rgb(204, 46, 72)'
        //             }])
        //         }
        //     }
        // }]
    };
    if(divId=="main1"){
        main1.setOption(option);
    }else if(divId=="main2"){
        main2.setOption(option);
    }else if(divId =="main"){
        main.setOption(option);
    }
}
//仪表盘
function gaugeChart(divId) {
    if(divId=="main1"){
        if (main1 && main1.dispose) {
            main1.dispose();
        }
        main1 = echarts.init(document.getElementById(divId));
    }else if(divId=="main2"){
        if (main2 && main2.dispose) {
            main2.dispose();
        }
        main2 = echarts.init(document.getElementById(divId));
    }else if(divId =="main"){
        if (main && main.dispose) {
            main.dispose();
        }
        main = echarts.init(document.getElementById(divId));
    }
    var option = {
        tooltip : {
            formatter: "{a} <br/>{c} {b}"
        },
        toolbox: {
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series : [
            {
                name: chartObject.title,
                type: 'gauge',
                detail: {formatter:'{value}%'},
                data: chartObject.dashboardChart.percent
            }
        ]
    };
    if(divId=="main1"){
        main1.setOption(option);
    }else if(divId=="main2"){
        main2.setOption(option);
    }else if(divId =="main"){
        main.setOption(option);
    }
}
//漏斗图
function funnel(divId) {
    if(divId=="main1"){
        if (main1 && main1.dispose) {
            main1.dispose();
        }
        main1 = echarts.init(document.getElementById(divId));
    }else if(divId=="main2"){
        if (main2 && main2.dispose) {
            main2.dispose();
        }
        main2 = echarts.init(document.getElementById(divId));
    }else if(divId =="main"){
        if (main && main.dispose) {
            main.dispose();
        }
        main = echarts.init(document.getElementById(divId));
    }
    var option = {
        title: {
            text:chartObject.title
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        legend: {
            data:function () {
                var series=[];
                for (var i = 0; i < chartObject.count; i++){
                    series.push(chartObject.funnelChart[i].name);
                }
                return series;
            }()
        },
        series: [
            {
                name: '预期',
                type: 'funnel',
                left: '10%',
                width: '80%',
                label: {
                    normal: {
                        formatter: '{b}预期'
                    },
                    emphasis: {
                        position:'inside',
                        formatter: '{b}预期: {c}%'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        opacity: 0.7
                    }
                },
                data: chartObject.funnelChart
            }
        ]
    };
    if(divId=="main1"){
        main1.setOption(option);
    }else if(divId=="main2"){
        main2.setOption(option);
    }else if(divId =="main"){
        main.setOption(option);
    }
}
//K线图
function candlestick(divId) {
    if(divId=="main1"){
        if (main1 && main1.dispose) {
            main1.dispose();
        }
        main1 = echarts.init(document.getElementById(divId));
    }else if(divId=="main2"){
        if (main2 && main2.dispose) {
            main2.dispose();
        }
        main2 = echarts.init(document.getElementById(divId));
    }else if(divId =="main"){
        if (main && main.dispose) {
            main.dispose();
        }
        main = echarts.init(document.getElementById(divId));
    }
    // 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
    var data0 = splitData(chartObject.kLineChart);
    function splitData(rawData) {
        var categoryData = [];
        var values = [];
        for (var i = 0; i < rawData.length; i++) {
            categoryData.push(rawData[i].splice(0, 1)[0]);
            var subValues = [];
            for(var j = 0; j < rawData[i].length; j++){
                subValues.push(parseFloat(rawData[i][j]))
            }
            values.push(subValues);

        }
        return {
            categoryData: categoryData,
            values: values
        };
    }

    function calculateMA(dayCount) {
        var result = [];
        for (var i = 0, len = data0.values.length; i < len; i++) {
            if (i < dayCount) {
                result.push('-');
                continue;
            }
            var sum = 0;
            for (var j = 0; j < dayCount; j++) {
                sum += data0.values[i - j][1];
            }
            result.push(sum / dayCount);
        }
        return result;
    }
    var option = {
        title: {
            text: chartObject.title,
            left: 0
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: ['日K']
        },
        grid: {
            left: '10%',
            right: '10%',
            bottom: '15%'
        },
        xAxis: {
            type: 'category',
            data: data0.categoryData,
            scale: true,
            boundaryGap : false,
            axisLine: {onZero: false},
            splitLine: {show: false},
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax'
        },
        yAxis: {
            scale: true,
            splitArea: {
                show: true
            }
        },
        dataZoom: [
            {
                type: 'inside',
                start: 50,
                end: 100
            },
            {
                show: true,
                type: 'slider',
                y: '90%',
                start: 50,
                end: 100
            }
        ],
        series: [
            {
                name: '日K',
                type: 'candlestick',
                data: data0.values,
                markPoint: {
                    label: {
                        normal: {
                            formatter: function (param) {
                                return param !== null ? Math.round(param.value) : '';
                            }
                        }
                    },
                    data: [
                        {
                            name: 'highest value',
                            type: 'max',
                            valueDim: 'highest'
                        },
                        {
                            name: 'lowest value',
                            type: 'min',
                            valueDim: 'lowest'
                        },
                        {
                            name: 'average value on close',
                            type: 'average',
                            valueDim: 'close'
                        }
                    ],
                    tooltip: {
                        formatter: function (param) {
                            return param.name + '<br>' + (param.data.coord || '');
                        }
                    }
                },
                markLine: {
                    symbol: ['none', 'none'],
                    data: [
                        [
                            {
                                name: 'from lowest to highest',
                                type: 'min',
                                valueDim: 'lowest',
                                symbol: 'circle',
                                symbolSize: 10,
                                label: {
                                    normal: {show: false},
                                    emphasis: {show: false}
                                }
                            },
                            {
                                type: 'max',
                                valueDim: 'highest',
                                symbol: 'circle',
                                symbolSize: 10,
                                label: {
                                    normal: {show: false},
                                    emphasis: {show: false}
                                }
                            }
                        ],
                        {
                            name: 'min line on close',
                            type: 'min',
                            valueDim: 'close'
                        },
                        {
                            name: 'max line on close',
                            type: 'max',
                            valueDim: 'close'
                        }
                    ]
                }
            }
        ]
    };
    if(divId=="main1"){
        main1.setOption(option);
    }else if(divId=="main2"){
        main2.setOption(option);
    }else if(divId =="main"){
        main.setOption(option);
    }
}
//雷达图
function radar(divId) {
    if(divId=="main1"){
        if (main1 && main1.dispose) {
            main1.dispose();
        }
        main1 = echarts.init(document.getElementById(divId));
    }else if(divId=="main2"){
        if (main2 && main2.dispose) {
            main2.dispose();
        }
        main2 = echarts.init(document.getElementById(divId));
    }else if(divId =="main"){
        if (main && main.dispose) {
            main.dispose();
        }
        main = echarts.init(document.getElementById(divId));
    }
    var option = {
        title: {
            text: chartObject.title
        },
        tooltip: {},
        legend: {
            right:10,
            data:function () {
                var series=[];
                for (var i = 0; i < chartObject.count; i++){
                    series.push(chartObject.raderCharts[i].name);
                }
                return series;
            }()
        },
        radar: {
            indicator:function () {
                var series=[];
                for (var i = 0; i < chartObject.raderCharts[0].axisName.length; i++){
                    var item={
                        name:chartObject.raderCharts[0].axisName[i],
                        max:chartObject.raderCharts[0].maxValue[i]
                    };
                    series.push(item);
                }
                return series;
            }()
        },

        series:[{
            type:'radar',
            data:function () {
                var series=[];
                for (var i = 0; i < chartObject.count; i++){
                    var item={
                        name:chartObject.raderCharts[i].name,
                        value:chartObject.raderCharts[i].value,
                    };
                    series.push(item);
                }
                return series;
            }()
        }]
    };
    if(divId=="main1"){
        main1.setOption(option);
    }else if(divId=="main2"){
        main2.setOption(option);
    }else if(divId =="main"){
        main.setOption(option);
    }
}
//单轴散点图
function singleAxisScatterChart(divId) {
    if(divId=="main1"){
        if (main1 && main1.dispose) {
            main1.dispose();
        }
        main1 = echarts.init(document.getElementById(divId));
    }else if(divId=="main2"){
        if (main2 && main2.dispose) {
            main2.dispose();
        }
        main2 = echarts.init(document.getElementById(divId));
    }else if(divId =="main"){
        if (main && main.dispose) {
            main.dispose();
        }
        main = echarts.init(document.getElementById(divId));
    }
    var hours = chartObject.singleAxisScatterChart.xAlias;
    var days = chartObject.singleAxisScatterChart.name;
    var data = chartObject.singleAxisScatterChart.points;
    var option = {
        tooltip: {
            position: 'top'
        },
        title: [],
        singleAxis: [],
        series: []
    };

    echarts.util.each(days, function (day, idx) {
        option.title.push({
            textBaseline: 'middle',
            top: (idx + 0.5) * 100 / 7 + '%',
            text: day
        });
        option.singleAxis.push({
            left: 150,
            type: 'category',
            boundaryGap: false,
            data: hours,
            top: (idx * 100 / 7 + 5) + '%',
            height: (100 / 7 - 10) + '%',
            axisLabel: {
                interval: 2
            }
        });
        option.series.push({
            singleAxisIndex: idx,
            coordinateSystem: 'singleAxis',
            type: 'scatter',
            data: [],
            symbolSize: function (dataItem) {
                return dataItem[1] * 4;
            }
        });
    });

    echarts.util.each(data, function (dataItem) {
        option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
    });
    if(divId=="main1"){
        main1.setOption(option);
    }else if(divId=="main2"){
        main2.setOption(option);
    }else if(divId =="main"){
        main.setOption(option);
    }
}
//盒状图-还未和后台连通
function boxChart(divId) {
    if(divId=="main1"){
        if (main1 && main1.dispose) {
            main1.dispose();
        }
        main1 = echarts.init(document.getElementById(divId));
    }else if(divId=="main2"){
        if (main2 && main2.dispose) {
            main2.dispose();
        }
        main2 = echarts.init(document.getElementById(divId));
    }else if(divId =="main"){
        if (main && main.dispose) {
            main.dispose();
        }
        main = echarts.init(document.getElementById(divId));
    }
    var data = [];
    //data.push(echarts.dataTool.prepareBoxplotData(chartObject.boxChart().));
    // for (var seriesIndex = 0; seriesIndex < 5; seriesIndex++) {
    //     var seriesData = [];
    //     for (var i = 0; i < 18; i++) {
    //         var cate = [];
    //         for (var j = 0; j < 100; j++) {
    //             cate.push(Math.random() * 200);
    //         }
    //         seriesData.push(cate);
    //     }
    var seriesData = [[1,2,3,4],[2,3,4,5]];
        data.push(echarts.dataTool.prepareBoxplotData(seriesData));
   // }


    var option = {
        title: {
            text: 'Multiple Categories',
            left: 'center',
        },
        legend: {
            y: '10%',
            data: ['category0', 'category1', 'category2', 'category3']
        },
        tooltip: {
            trigger: 'item',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '10%',
            top: '20%',
            right: '10%',
            bottom: '15%'
        },
        xAxis: {
            type: 'category',
            data: data[0].axisData,
            boundaryGap: true,
            nameGap: 30,
            splitArea: {
                show: true
            },
            axisLabel: {
                formatter: 'expr {value}'
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            name: 'Value',
            min: -400,
            max: 600,
            splitArea: {
                show: false
            }
        },
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 20
            },
            {
                show: true,
                height: 20,
                type: 'slider',
                top: '90%',
                xAxisIndex: [0],
                start: 0,
                end: 20
            }
        ],
        series: [
            {
                name: 'category0',
                type: 'boxplot',
                data: data[0].boxData,
                tooltip: {formatter: formatter}
            },
            {
                name: 'category1',
                type: 'boxplot',
                data: data[1].boxData,
                tooltip: {formatter: formatter}
            },
            {
                name: 'category2',
                type: 'boxplot',
                data: data[2].boxData,
                tooltip: {formatter: formatter}
            }
        ]
    };

    function formatter(param) {
        return [
            'Experiment ' + param.name + ': ',
            'upper: ' + param.data[0],
            'Q1: ' + param.data[1],
            'median: ' + param.data[2],
            'Q3: ' + param.data[3],
            'lower: ' + param.data[4]
        ].join('<br/>')
    }
    if(divId=="main1"){
        main1.setOption(option);
    }else if(divId=="main2"){
        main2.setOption(option);
    }else if(divId =="main"){
        main.setOption(option);
    }
}
//散点地图
function scatterMap(divId) {
    if(divId=="main1"){
        if (main1 && main1.dispose) {
            main1.dispose();
        }
        main1 = echarts.init(document.getElementById(divId));
    }else if(divId=="main2"){
        if (main2 && main2.dispose) {
            main2.dispose();
        }
        main2 = echarts.init(document.getElementById(divId));
    }else if(divId =="main"){
        if (main && main.dispose) {
            main.dispose();
        }
        main = echarts.init(document.getElementById(divId));
    }
    var data = function () {
        var series=[];
        for(var i = 0; i < chartObject.map_data.name.length; i++){
            var item = {
                name:chartObject.map_data.name[i],
                value:chartObject.map_data.value[i]
            };
            series.push(item);
        }
        return series;
    }();
    var geoCoordMap = chartObject.geoCoordMap.location;

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    var option = {
        backgroundColor: '#404a59',
        title: {
            text: chartObject.title,
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip : {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x:'right',
            //data:['pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series : [
            {
                name: 'pm2.5',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ddb926'
                    }
                }
            },
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 6)),
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1
            }
        ]
    };
    if(divId=="main1"){
        main1.setOption(option);
    }else if(divId=="main2"){
        main2.setOption(option);
    }else if(divId =="main"){
        main.setOption(option);
    }
}
//迁徙地图
function traceMap(divId) {
    if(divId=="main1"){
        if (main1 && main1.dispose) {
            main1.dispose();
        }
        main1 = echarts.init(document.getElementById(divId));
    }else if(divId=="main2"){
        if (main2 && main2.dispose) {
            main2.dispose();
        }
        main2 = echarts.init(document.getElementById(divId));
    }else if(divId =="main"){
        if (main && main.dispose) {
            main.dispose();
        }
        main = echarts.init(document.getElementById(divId));
    }
    var geoCoordMap = chartObject.geoCoordMap.location;

    var BJData = function () {
        var series=[];
        for(var i = 0; i < chartObject.map_data.name.length; i++){
            var subSeries = [];
            var subItem = {
                name:chartObject.initialCity
            };
            subSeries.push(subItem);
            var item = {
                name:chartObject.map_data.name[i],
                value:chartObject.map_data.value[i]
            };
            subSeries.push(item);
            series.push(subSeries);
        }
        return series;
    }();

    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord]
                });
            }
        }
        return res;
    };

    var color = ['#a6c84c', '#ffa022', '#46bee9'];
    var series = [];
    [['', BJData]].forEach(function (item, i) {
        series.push({
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: '#fff',
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + ' Top10',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
    });

    var option = {
        backgroundColor: '#404a59',
        title : {
            text: chartObject.title,
            left: 'center',
            textStyle : {
                color: '#fff'
            }
        },
        tooltip : {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data:['top10'],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'single'
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#404a59'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: series
    };
    if(divId=="main1"){
        main1.setOption(option);
    }else if(divId=="main2"){
        main2.setOption(option);
    }else if(divId =="main"){
        main.setOption(option);
    }
}
//关系图-随机撒点
function relationChart(divId) {
    if(divId=="main1"){
        if (main1 && main1.dispose) {
            main1.dispose();
        }
        main1 = echarts.init(document.getElementById(divId));
        main1.showLoading();
        $.getJSON('association.json', function (json) {
            main1.hideLoading();
            //需要从后台传来failure，

            // var option = {
            //     title: {
            //         text: '关联关系图',
            //         top: 'bottom',
            //         left: 'right'
            //     },
            //     tooltip:{},
            //     legend: {
            //         orient:'vertical',
            //         x:'left',
            //         y:'top',
            //         data: json.category.map(function (a) {
            //             return a.name;
            //         })
            //
            //     },
            //     //animationDurationUpdate: 1500,
            //     //animationEasingUpdate: 'quinticInOut',
            //     series : [
            //         {
            //             type: 'graph',
            //             layout: 'none',
            //             // progressiveThreshold: 700,
            //             data: json.nodes.map(function (node) {
            //                 return {
            //                     x: node.x,
            //                     y: node.y,
            //                     id: node.id,
            //                     name: node.name,
            //                     symbolSize: node.size,
            //                     symbol:node.shape,
            //                     value:node.size,
            //                     category:node.category,
            //                     label:{
            //                         normal: {
            //                             show: node.size > 10
            //                         }
            //                     }
            //                 };
            //             }),
            //             edges: json.edges.map(function (edge) {
            //                 return {
            //                     source: edge.source,
            //                     target: edge.target,
            //                     value: edge.size,
            //                     lineStyle:{
            //                         normal:{
            //                             width:edge.wid,
            //                             color:edge.line_color
            //                         }
            //                     }
            //                 };
            //             }),
            //             categories:json.category,
            //             label: {
            //                 normal: {
            //                     position: 'right',
            //                     formatter: '{b}',
            //                     show:'true'
            //                 }
            //
            //             },
            //             focusNodeAdjacency: true,
            //             lineStyle: {
            //                 normal: {
            //                     width: 1,
            //                     curveness: 0.5,
            //                     opacity: 0.3
            //                 }
            //             }
            //         }
            //     ]
            // };
            main1.setOption(relationChartOption(json),true);
        });
    }else if(divId=="main2"){
        if (main2 && main2.dispose) {
            main2.dispose();
        }
        main2 = echarts.init(document.getElementById(divId));
        main2.showLoading();
        $.getJSON('association.json', function (json) {
            main2.hideLoading();
            //需要从后台传来failure，
            // var option = {
            //     title: {
            //         text: '关联关系图',
            //         top: 'bottom',
            //         left: 'right'
            //     },
            //     tooltip:{},
            //     legend: {
            //         orient:'vertical',
            //         x:'left',
            //         y:'top',
            //         data: json.category.map(function (a) {
            //             return a.name;
            //         })
            //
            //     },
            //     //animationDurationUpdate: 1500,
            //     //animationEasingUpdate: 'quinticInOut',
            //     series : [
            //         {
            //             type: 'graph',
            //             layout: 'none',
            //             // progressiveThreshold: 700,
            //             data: json.nodes.map(function (node) {
            //                 return {
            //                     x: node.x,
            //                     y: node.y,
            //                     id: node.id,
            //                     name: node.name,
            //                     symbolSize: node.size,
            //                     symbol:node.shape,
            //                     value:node.size,
            //                     category:node.category,
            //                     label:{
            //                         normal: {
            //                             show: node.size > 10
            //                         }
            //                     }
            //                 };
            //             }),
            //             edges: json.edges.map(function (edge) {
            //                 return {
            //                     source: edge.source,
            //                     target: edge.target,
            //                     value: edge.size,
            //                     lineStyle:{
            //                         normal:{
            //                             width:edge.wid,
            //                             color:edge.line_color
            //                         }
            //                     }
            //                 };
            //             }),
            //             categories:json.category,
            //             label: {
            //                 normal: {
            //                     position: 'right',
            //                     formatter: '{b}',
            //                     show:'true'
            //                 }
            //
            //             },
            //             focusNodeAdjacency: true,
            //             lineStyle: {
            //                 normal: {
            //                     width: 1,
            //                     curveness: 0.5,
            //                     opacity: 0.3
            //                 }
            //             }
            //         }
            //     ]
            // };
            main2.setOption(relationChartOption(json),true);

        });
    }else if(divId =="main"){
        if (main && main.dispose) {
            main.dispose();
        }
        main = echarts.init(document.getElementById(divId));
        main.showLoading();
        $.getJSON('association.json', function (json) {
            main.hideLoading();
            //需要从后台传来failure，
            // var option = {
            //     title: {
            //         text: '关联关系图',
            //         top: 'bottom',
            //         left: 'right'
            //     },
            //     tooltip:{},
            //     legend: {
            //         orient:'vertical',
            //         x:'left',
            //         y:'top',
            //         data: json.category.map(function (a) {
            //             return a.name;
            //         })
            //
            //     },
            //     //animationDurationUpdate: 1500,
            //     //animationEasingUpdate: 'quinticInOut',
            //     series : [
            //         {
            //             type: 'graph',
            //             layout: 'none',
            //             // progressiveThreshold: 700,
            //             data: json.nodes.map(function (node) {
            //                 return {
            //                     x: node.x,
            //                     y: node.y,
            //                     id: node.id,
            //                     name: node.name,
            //                     symbolSize: node.size,
            //                     symbol:node.shape,
            //                     value:node.size,
            //                     category:node.category,
            //                     label:{
            //                         normal: {
            //                             show: node.size > 10
            //                         }
            //                     }
            //                 };
            //             }),
            //             edges: json.edges.map(function (edge) {
            //                 return {
            //                     source: edge.source,
            //                     target: edge.target,
            //                     value: edge.size,
            //                     lineStyle:{
            //                         normal:{
            //                             width:edge.wid,
            //                             color:edge.line_color
            //                         }
            //                     }
            //                 };
            //             }),
            //             categories:json.category,
            //             label: {
            //                 normal: {
            //                     position: 'right',
            //                     formatter: '{b}',
            //                     show:'true'
            //                 }
            //
            //             },
            //             focusNodeAdjacency: true,
            //             lineStyle: {
            //                 normal: {
            //                     width: 1,
            //                     curveness: 0.5,
            //                     opacity: 0.3
            //                 }
            //             }
            //         }
            //     ]
            // };
            main.setOption(relationChartOption(json),true);

        });
    }

}
//关系图-圆圈1
function relationChartCircle(divId){
    if(divId=="main1"){
        if (main1 && main1.dispose) {
            main1.dispose();
        }
        main1 = echarts.init(document.getElementById(divId));
        main1.showLoading();
        $.getJSON('association.json', function (json) {
            main1.hideLoading();
            //需要从后台传来failure，
            main1.setOption(relationChartCircleOption(json), true);
        });
    }else if(divId=="main2"){
        if (main2 && main2.dispose) {
            main2.dispose();
        }
        main2 = echarts.init(document.getElementById(divId));
        main2.showLoading();
        $.getJSON('association.json', function (json) {
            main2.hideLoading();
            //需要从后台传来failure，
            main2.setOption(relationChartCircleOption(json), true);
        });


    }else if(divId =="main"){
        if (main && main.dispose) {
            main.dispose();
        }
        main = echarts.init(document.getElementById(divId));
        main.showLoading();
        $.getJSON('association.json', function (json) {
            main.hideLoading();
            //需要从后台传来failure，
            main.setOption(relationChartCircleOption(json), true);
        });

    }


}
//关系图-圆圈 -- by liujun
var relationChartCircle2 = function(divId){
    if(divId=="main1"){
        if (main1 && main1.dispose) {
            main1.dispose();
        }
        main1 = echarts.init(document.getElementById(divId),'dark');
        main1.showLoading();
        $.getJSON('association.json', function (json) {
            main1.hideLoading();
            //需要从后台传来failure，
            main1.setOption(relationChartCircleOption2(json)
                // option = {
                //     title: {
                //         text: '关联关系图'
                //     },
                //     animationDurationUpdate: 1500,
                //     animationEasing: 'cubicOut',
                //     animationEasingUpdate: 'quinticInOut',
                //     legend: {
                //         orient:'vertical',
                //         x:'left',
                //         y:'40',
                //         formatter: function(name) {
                //             return echarts.format.truncateText(name, 200, '14px Microsoft Yahei', '…');
                //         },
                //         tooltip: {
                //             show: true
                //         },
                //         data: json.category.map(function (a) {
                //             return a.name;
                //         })
                //     },
                //     series : [
                //         {
                //             type: 'graph',
                //             layout: 'circular',
                //             // layout:'none',
                //             focusNodeAdjacency: true,
                //             legendHoverLink: true,
                //             hoverAnimation:true,
                //             symbolSize: 50,
                //             //edgeSymbolSize: 50,
                //             roam: true,
                //             symbol: "roundRect",
                //             label: {
                //                 normal: {
                //                     show: true
                //                 }
                //             },
                //             edgeSymbol: ['circle', 'arrow'],
                //             edgeSymbolSize: [4, 15],
                //             edgeLabel: {
                //                 normal: {
                //                     textStyle: {
                //                         fontSize: 20
                //                     }
                //                 }
                //             },
                //
                //             data: json.nodes.map(function (node) {
                //                 return {
                //                     // x: node.x,
                //                     // y: node.y,
                //                     // id: node.id,
                //                     name: node.name,
                //                     // symbolSize: node.size,
                //                     // symbol:node.shape,
                //                     // value:node.size,
                //                     category:node.category,
                //                     // label:{
                //                     //     normal: {
                //                     //         show: node.size > 10
                //                     //     }
                //                     // }
                //                 };
                //             }),
                //             links:function () {
                //                 var links =[];
                //                 json.edges.map(function (edge) {
                //                     var link = {
                //                         source: Number(edge.source),
                //                         target: Number(edge.target),
                //                         //value: edge.size,
                //                         label: {
                //                             'normal': {
                //                                 'show': true,
                //                                 'textStyle':{
                //                                     'fontSize':5
                //                                 },
                //                                 'formatter': function (param) {
                //                                     return param.data.value
                //                                 }
                //                             }
                //                         },
                //                         lineStyle:{
                //                             normal:{
                //                                 width:edge.wid,
                //                                 //color:edge.line_color,
                //                                 curveness: 0.1
                //                             }
                //                         }
                //                     };
                //                     links.push(link);
                //                 });
                //                 for (var i = 0, len1 = links.length; i < len1; i++) {
                //                     for(var j = i+1, len2 = len1; j < len2; j++) {
                //                         if (links[i].source==links[j].target && links[i].target==links[j].source) {
                //                             links[j].lineStyle.normal.curveness = -0.1;
                //                         }
                //                     }
                //                 }
                //                 return links
                //             }(),
                //             categories: json.category,
                //             lineStyle: {
                //                 normal: {
                //                     opacity: 0.9,
                //                     width: 2,
                //                     curveness: 0,
                //                     type :'dashed'
                //                 }
                //             }
                //         },
                //     ]
                // }
                , true);
        });
    }else if(divId == "main2"){
        if (main2 && main2.dispose) {
            main2.dispose();
        }
        main2 = echarts.init(document.getElementById(divId),'dark');
        main2.showLoading();
        $.getJSON('association.json', function (json) {
            main2.hideLoading();
            //需要从后台传来failure，
            main2.setOption(relationChartCircleOption2(json)
                // option = {
                //     title: {
                //         text: '关联关系图'
                //     },
                //     animationDurationUpdate: 1500,
                //     animationEasing: 'cubicOut',
                //     animationEasingUpdate: 'quinticInOut',
                //     legend: {
                //         orient:'vertical',
                //         x:'left',
                //         y:'40',
                //         formatter: function(name) {
                //             return echarts.format.truncateText(name, 200, '14px Microsoft Yahei', '…');
                //         },
                //         tooltip: {
                //             show: true
                //         },
                //         data: json.category.map(function (a) {
                //             return a.name;
                //         })
                //     },
                //     series : [
                //         {
                //             type: 'graph',
                //             layout: 'circular',
                //             // layout:'none',
                //             focusNodeAdjacency: true,
                //             legendHoverLink: true,
                //             hoverAnimation:true,
                //             symbolSize: 50,
                //             //edgeSymbolSize: 50,
                //             roam: true,
                //             symbol: "roundRect",
                //             label: {
                //                 normal: {
                //                     show: true
                //                 }
                //             },
                //             edgeSymbol: ['circle', 'arrow'],
                //             edgeSymbolSize: [4, 15],
                //             edgeLabel: {
                //                 normal: {
                //                     textStyle: {
                //                         fontSize: 20
                //                     }
                //                 }
                //             },
                //
                //             data: json.nodes.map(function (node) {
                //                 return {
                //                     // x: node.x,
                //                     // y: node.y,
                //                     // id: node.id,
                //                     name: node.name,
                //                     // symbolSize: node.size,
                //                     // symbol:node.shape,
                //                     // value:node.size,
                //                     category:node.category,
                //                     // label:{
                //                     //     normal: {
                //                     //         show: node.size > 10
                //                     //     }
                //                     // }
                //                 };
                //             }),
                //             links:function () {
                //                 var links =[];
                //                 json.edges.map(function (edge) {
                //                     var link = {
                //                         source: Number(edge.source),
                //                         target: Number(edge.target),
                //                         //value: edge.size,
                //                         label: {
                //                             'normal': {
                //                                 'show': true,
                //                                 'textStyle':{
                //                                     'fontSize':5
                //                                 },
                //                                 'formatter': function (param) {
                //                                     return param.data.value
                //                                 }
                //                             }
                //                         },
                //                         lineStyle:{
                //                             normal:{
                //                                 width:edge.wid,
                //                                 //color:edge.line_color,
                //                                 curveness: 0.1
                //                             }
                //                         }
                //                     };
                //                     links.push(link);
                //                 });
                //                 for (var i = 0, len1 = links.length; i < len1; i++) {
                //                     for(var j = i+1, len2 = len1; j < len2; j++) {
                //                         if (links[i].source==links[j].target && links[i].target==links[j].source) {
                //                             links[j].lineStyle.normal.curveness = -0.1;
                //                         }
                //                     }
                //                 }
                //                 return links
                //             }(),
                //             categories: json.category,
                //             lineStyle: {
                //                 normal: {
                //                     opacity: 0.9,
                //                     width: 2,
                //                     curveness: 0,
                //                     type :'dashed'
                //                 }
                //             }
                //         },
                //     ]
                // }
                , true);
        });
    }else if(divId == "main"){
        if (main && main.dispose) {
            main.dispose();
        }
        main = echarts.init(document.getElementById(divId),'dark');
        main.showLoading();
        $.getJSON('association.json', function (json) {
            main.hideLoading();
            //需要从后台传来failure，
            main.setOption(
                relationChartCircleOption2(json)                // option = {
                //     title: {
                //         text: '关联关系图'
                //     },
                //     animationDurationUpdate: 1500,
                //     animationEasing: 'cubicOut',
                //     animationEasingUpdate: 'quinticInOut',
                //     legend: {
                //         orient:'vertical',
                //         x:'left',
                //         y:'40',
                //         formatter: function(name) {
                //             return echarts.format.truncateText(name, 200, '14px Microsoft Yahei', '…');
                //         },
                //         tooltip: {
                //             show: true
                //         },
                //         data: json.category.map(function (a) {
                //             return a.name;
                //         })
                //     },
                //     series : [
                //         {
                //             type: 'graph',
                //             layout: 'circular',
                //             // layout:'none',
                //             focusNodeAdjacency: true,
                //             legendHoverLink: true,
                //             hoverAnimation:true,
                //             symbolSize: 50,
                //             //edgeSymbolSize: 50,
                //             roam: true,
                //             symbol: "roundRect",
                //             label: {
                //                 normal: {
                //                     show: true
                //                 }
                //             },
                //             edgeSymbol: ['circle', 'arrow'],
                //             edgeSymbolSize: [4, 15],
                //             edgeLabel: {
                //                 normal: {
                //                     textStyle: {
                //                         fontSize: 20
                //                     }
                //                 }
                //             },
                //
                //             data: json.nodes.map(function (node) {
                //                 return {
                //                     // x: node.x,
                //                     // y: node.y,
                //                     // id: node.id,
                //                     name: node.name,
                //                     // symbolSize: node.size,
                //                     // symbol:node.shape,
                //                     // value:node.size,
                //                     category:node.category,
                //                     // label:{
                //                     //     normal: {
                //                     //         show: node.size > 10
                //                     //     }
                //                     // }
                //                 };
                //             }),
                //             links:function () {
                //                 var links =[];
                //                 json.edges.map(function (edge) {
                //                     var link = {
                //                         source: Number(edge.source),
                //                         target: Number(edge.target),
                //                         //value: edge.size,
                //                         label: {
                //                             'normal': {
                //                                 'show': true,
                //                                 'textStyle':{
                //                                     'fontSize':5
                //                                 },
                //                                 'formatter': function (param) {
                //                                     return param.data.value
                //                                 }
                //                             }
                //                         },
                //                         lineStyle:{
                //                             normal:{
                //                                 width:edge.wid,
                //                                 //color:edge.line_color,
                //                                 curveness: 0.1
                //                             }
                //                         }
                //                     };
                //                     links.push(link);
                //                 });
                //                 for (var i = 0, len1 = links.length; i < len1; i++) {
                //                     for(var j = i+1, len2 = len1; j < len2; j++) {
                //                         if (links[i].source==links[j].target && links[i].target==links[j].source) {
                //                             links[j].lineStyle.normal.curveness = -0.1;
                //                         }
                //                     }
                //                 }
                //                 return links
                //             }(),
                //             categories: json.category,
                //             lineStyle: {
                //                 normal: {
                //                     opacity: 0.9,
                //                     width: 2,
                //                     curveness: 0,
                //                     type :'dashed'
                //                 }
                //             }
                //         },
                //     ]
                // }
                , true);
        });
}
}
//关系图-力导向图 --echarts
var  ForceGraphEcharts = function(divId){
    if(divId=="main1"){
        if (main1 && main1.dispose) {
            main1.dispose();
        }
        main1 = echarts.init(document.getElementById(divId),'dark');
        main1.showLoading();
        $.getJSON('association.json', function (json){
            main1.hideLoading();
            main1.setOption(
                ForceChartOption1(json),true);
        })
    }else if(divId == "main2"){
        if (main2 && main2.dispose) {
            main2.dispose();
        }
        main2 = echarts.init(document.getElementById(divId),'dark');
        main2.showLoading();
        $.getJSON('association.json', function (json){
            main2.hideLoading();
            main2.setOption(
                ForceChartOption1(json),true);

        })
    }else if(divId == "main"){
        if (main && main.dispose) {
            main.dispose();
        }
        main = echarts.init(document.getElementById(divId),'dark');
        main.showLoading();
        $.getJSON('association.json', function (json){
            main.hideLoading();
            main.setOption(
                ForceChartOption1(json),true)

        })
    }

    };
//D3.js 力导向图
var ForceDirectedGraph = function (divID) {
    var nodes=[];
    var edges=[];
    $.ajaxSetup({async: false});
    $.getJSON('association.json', function (json) {

        json.nodes.map(function (node) {
            nodes.push({name:node.name});
        });
        json.edges.map(function (edge) {
            edges.push({source:Number(edge.source),target:Number(edge.target)})
        });
    });


    var id = "#"+divID;
    var width = 400;
    var height = 400;


    var svg = d3.select(id)
        .append("svg")
        .attr("width",width)
        .attr("height",height);
    var force = d3.layout.force()
        .nodes(nodes)		//指定节点数组
        .links(edges)		//指定连线数组
        .size([width,height])	//指定范围
        .linkDistance(150)	//指定连线长度
        .charge(-400);	//相互之间的作用力
    force.start();	//开始作用

    //添加连线
    var svg_edges = svg.selectAll("line")
        .data(edges)
        .enter()
        .append("line")
        .style("stroke","#ccc")
        .style("stroke-width",1);

    var color = d3.scale.category20();

    //添加节点
    var svg_nodes = svg.selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("r",20)
        .style("fill",function(d,i){
            return color(i);
        })
        .call(force.drag);	//使得节点能够拖动

    //添加描述节点的文字
    var svg_texts = svg.selectAll("text")
        .data(nodes)
        .enter()
        .append("text")
        .style("fill", "black")
        .attr("dx", 20)
        .attr("dy", 8)
        .text(function(d){
            return d.name;
        });


    force.on("tick", function(){	//对于每一个时间间隔

        //更新连线坐标
        svg_edges.attr("x1",function(d){ return d.source.x; })
            .attr("y1",function(d){ return d.source.y; })
            .attr("x2",function(d){ return d.target.x; })
            .attr("y2",function(d){ return d.target.y; });

        //更新节点坐标
        svg_nodes.attr("cx",function(d){ return d.x; })
            .attr("cy",function(d){ return d.y; });

        //更新文字坐标
        svg_texts.attr("x", function(d){ return d.x; })
            .attr("y", function(d){ return d.y; });
    });

};
//重新更改三个div的大小
function resizeForDiv() {
    $(".row2").css({
        height:$(window).height() * 0.35
    });
    $("#main_div").css({
        height:$(window).height() * 0.45
    });
}
//生成slidetab
function slideTab() {
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
        + "<td style='height: 50%; width: 50%'><div class='self_right_icon' draggable='true' id='colorLineChart'  style=' opacity:0.3;'><img class='right-icon' id='colorLine_image' src='img/line.svg'><label style='font-weight: 300;margin-left: 6%'>折线图</label></div></td>"
        + "<td><div class='self_right_icon' id='lineChart' draggable='true'  style=' opacity:0.3;'><img class='right-icon'id='line_image' src='img/markPoint.svg'><label style='font-weight: 300;margin-left: 6%'>折线图</label></div></td>"
        + "<tr><td><div class='self_right_icon' draggable='true' id='pieChart' style=' opacity:0.3;'><div  id='beforePieChart'><img class='right-icon' id='pie_image' src='img/pie.svg'><label style='font-weight: 300;margin-left: 6%'>饼状图</label></div></td>"
        + "<td><div class='self_right_icon' id='barChart'  style=' opacity:0.3;'><img class='right-icon' id='bar_image' src='img/bar.svg'><label style='font-weight: 300;margin-left: 6%'>柱状图</label></div></div></td>"
        + "<tr><td><div class='self_right_icon' draggable='true' id='scatterChart' style='opacity:0.3;'><img class='right-icon' id='scatter_image' src='img/scatter.svg'><label style='font-weight: 300;margin-left: 6%'>散点图</label></div></td>"
        + "<td><div class='self_right_icon' draggable='true' id='singleAxisScatterChart' style=' opacity:0.3;'><img class='right-icon' id='singleAxisScatter_image' src='img/singleAxis.svg'><label style='font-weight: 300;margin-left: 6%'>单轴图</label></div></td></tr>"
        + "<tr><td><div class='self_right_icon' draggable='true' id='graph_circle' style=' opacity:0.3;'><img class='right-icon' id='graphCircle_image' src='img/graph2.png'><label style='font-weight: 300;margin-left: 6%'>关系图</label></div></td></td>"
        + "<td><div class='self_right_icon' draggable='true' id='graph_random' style=' opacity:0.3;'><img class='right-icon' id='graphRandom_image' src='img/graph.svg'><label style='font-weight: 300;margin-left: 6%'>关系图</label></div></td></tr>"
        + "<tr><td><div class='self_right_icon' draggable='true' id='funnel' style=' opacity:0.3;'><img class='right-icon' id='funnel_image' src='img/funnel.svg'><label style='font-weight: 300;margin-left: 6%'>漏斗图</label></div></td>"
        + "<td><div class='self_right_icon' draggable='true' id='candlestick' style=' opacity:0.3;'><img class='right-icon' id='candlestick_image' src='img/candlestick.svg'><label style='font-weight: 300;margin-left: 6%'>K线图</label></div></td></tr>"
        + "<tr><td><div class='self_right_icon' draggable='true' id='gaugeChart' style=' opacity:0.3;'><img class='right-icon' id='gauge_image' src='img/gauge.svg'><label style='font-weight: 300;margin-left: 6%'>仪表盘</label></div></td></td>"
        + "<td><div class='self_right_icon' draggable='true' id='radar' style=' opacity:0.3;'><img class='right-icon' id='radar_image' src='img/radar.svg'><label style='font-weight: 300;margin-left: 6%'>雷达图</label></td></tr>"
        + "<tr><td><div class='self_right_icon' draggable='true' id='mapChartA' style=' opacity:0.3;'><img class='right-icon' id='mapA_image' src='img/map.svg'><label style='font-weight: 300;margin-left: 6%'>点地图</label></div></td>"
        + "<td><div class='self_right_icon' draggable='true' id='mapChart' style=' opacity:0.3;'><img class='right-icon' id='map_image' src='img/lines.svg'><label style='font-weight: 300;margin-left: 6%'>迁移图</label></div></td></tr> "
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

}
//do-nothing
function doNothing(event) {
    event.stopPropagation();
    event.preventDefault();
    // console.log(event.target);
    var id = event.dataTransfer.getData("Text");
    var img_parent_id = document.getElementById(id).parentNode.id;
    // console.log(img_parent_id);
    var target_id = event.target.id;
    switch (img_parent_id){
        case "pieChart":dragPie(target_id);break;
        case "colorLineChart":dragColorLineChart(target_id);break;
        case "lineChart":dragLineChartA(target_id);break;
        case "barChart":dragBarChart(target_id);break;
        case "scatterChart":dragScatterChart(target_id);break;
        case "singleAxisScatterChart":dragSingleAxis(target_id);break;
        case "graph_circle":dragCircleGraph(target_id);break;
        case "graph_random":dragRandomGraph(target_id);break;
        case "funnel":dragFunnel(target_id);break;
        case "candlestick":dragkLineChart(target_id);break;
        case "gaugeChart":dragGaugeChart(target_id);break;
        case "radar":dragRadar(target_id);break;
        case "mapChartA":dragMapChartA(target_id);break;
        case "mapChart":dragMapChart(target_id);break;
        case "main_div":dragInnerHtml(event);break;
        case "div2":dragInnerHtml(event);break;
        case "div3":dragInnerHtml(event);break;
        default:break;
    }
}
function dragInnerHtml(e) {
    //e.target为canvas
    //获取目标canvas的parent(自动生成div）-parent（main/main1/main2）-parent（main_div/div2/div3)
    var canvas_parent = e.target.parentNode; //canvas_parent=div(自动生成）
    var mainIndex = canvas_parent.parentNode;//main
    var main_parent = mainIndex.parentNode;//main_parent=main_div
    //获取source，即main/main1/main2等dom元素的parent(main_div/div2/div3)
    var sourceId = e.dataTransfer.getData("Text");//main/main1/main2
    var source = document.getElementById(sourceId);
    var source_parent = source.parentNode;
    //目标元素的children
    var child = main_parent.childNodes;
    for(var j = 0; j<child.length; j++){
        if(child[j].nodeName != "#text" ){
            //获取目标元素main/main1/main2
            var node = child[j];
            source_parent.appendChild(node);
            main_parent.appendChild(source);
            window.main.resize();
            window.main1.resize();
            window.main2.resize();
        }
    }
}
function dragPie(img_parent_id) {
    if (img_parent_id == "main1") {
        resizeForDiv();
        main.resize();
        pieChart("main1");
    }
    if (img_parent_id == "main2") {
        resizeForDiv();
        main.resize();
        pieChart("main2");
    }
}
function dragRadar(img_parent_id) {
    if (img_parent_id == "main1") {
        resizeForDiv();
        main.resize();
        radar("main1");
    }
    if (img_parent_id == "main2") {
        resizeForDiv();
        main.resize();
        radar("main2");
    }
}
function dragkLineChart(img_parent_id) {
    if (img_parent_id == "main1") {
        resizeForDiv();
        main.resize();
        candlestick("main1");
    }
    if (img_parent_id == "main2") {
        resizeForDiv();
        main.resize();
        candlestick("main2");
    }
}
function dragFunnel(img_parent_id) {
    if (img_parent_id == "main1") {
        resizeForDiv();
        main.resize();
        funnel("main1");
    }
    if (img_parent_id == "main2") {
        resizeForDiv();
        main.resize();
        funnel("main2");
    }
}
function dragGaugeChart(img_parent_id) {
    if (img_parent_id == "main1") {
        resizeForDiv();
        main.resize();
        gaugeChart("main1");
    }
    if (img_parent_id == "main2") {
        resizeForDiv();
        main.resize();
        gaugeChart("main2");
    }
}
function dragScatterChart(img_parent_id) {
    if (img_parent_id == "main1") {
        resizeForDiv();
        main.resize();
        scatterChart("main1");
    }
    if (img_parent_id == "main2") {
        resizeForDiv();
        main.resize();
        scatterChart("main2");
    }
}
function dragLineChartA(img_parent_id) {
    if (img_parent_id == "main1") {
        resizeForDiv();
        main.resize();
        lineChart("main1");
    }
    if (img_parent_id == "main2") {
        resizeForDiv();
        main.resize();
        lineChart("main2");
    }
}
function dragColorLineChart(img_parent_id) {
    if (img_parent_id == "main1") {
        resizeForDiv();
        main.resize();
        lineChart_color("main1");
    }
    if (img_parent_id == "main2") {
        resizeForDiv();
        main.resize();
        lineChart_color("main2");
    }
}
function dragSingleAxis(img_parent_id) {
    if (img_parent_id == "main1") {
        resizeForDiv();
        main.resize();
        singleAxisScatterChart("main1");
    }
    if (img_parent_id == "main2") {
        resizeForDiv();
        main.resize();
        singleAxisScatterChart("main2");
    }
}
function dragBarChart(img_parent_id) {
    if (img_parent_id == "main1") {
        resizeForDiv();
        main.resize();
        barChart("main1");
    }
    if (img_parent_id == "main2") {
        resizeForDiv();
        main.resize();
        barChart("main2");
    }
}
function dragMapChartA(img_parent_id) {
    if (img_parent_id == "main1") {
        resizeForDiv();
        main.resize();
        scatterMap("main1");
    }
    if (img_parent_id == "main2") {
        resizeForDiv();
        main.resize();
        scatterMap("main2");
    }
}
function dragMapChart(img_parent_id) {
    if (img_parent_id == "main1") {
        resizeForDiv();
        main.resize();
        traceMap("main1");
    }
    if (img_parent_id == "main2") {
        resizeForDiv();
        main.resize();
        traceMap("main2");
    }
}
function dragCircleGraph(img_parent_id) {
    if (img_parent_id == "main1") {
        resizeForDiv();
        main.resize();
        relationChartCircle2("main1");
    }
    if (img_parent_id == "main2") {
        resizeForDiv();
        main.resize();
        relationChartCircle2("main2");
    }
}
function dragRandomGraph(img_parent_id) {
    if (img_parent_id == "main1") {
        resizeForDiv();
        main.resize();
        ForceGraphEcharts("main1");
    }
    if (img_parent_id == "main2") {
        resizeForDiv();
        main.resize();
        ForceGraphEcharts("main2");
    }
}
//向series中插入背景
function rgb_maker(r, g, b) {
    return "rgba("+r+","+g+","+b+",";
}
var colorList = [rgb_maker(0,153,153),rgb_maker(153,204,51),rgb_maker(255, 255, 0)];

var limitColor = function () {
    var itemList = [];
    if(chartObject.limitColors.length != 0){
        if(chartObject.limitColors[0].full){
            var len = chartObject.limitColors.length;
            for(var i = 0; i < len; i++){
                var item = {
                    name:chartObject.limitColors[i].name,
                    type:'line',
                    smooth: true,
                    symbolSize: 0,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: colorList[i]+"0.6)"
                            }, {
                                offset: 0.8,
                                color: colorList[i]+"0)"
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: colorList[i]+"0.5)",
                            borderColor: colorList[i]+"0.2)",
                            borderWidth: 12

                        }
                    },
                    data:chartObject.limitColors[i].yValue
                };
                itemList.push(item)
            }
        }
    }
    return itemList;
};
//关系图option --随机撒点
var relationChartOption = function (json) {
    return  {
        title: {
            text: '关联关系图',
            top: 'bottom',
            left: 'right'
        },
        tooltip:{},
        legend: {
            orient:'vertical',
            x:'left',
            y:'top',
            data: json.category.map(function (a) {
                return a.name;
            })

        },
        //animationDurationUpdate: 1500,
        //animationEasingUpdate: 'quinticInOut',
        series : [
            {
                type: 'graph',
                layout: 'none',
                // progressiveThreshold: 700,
                data: json.nodes.map(function (node) {
                    return {
                        x: node.x,
                        y: node.y,
                        id: node.id,
                        name: node.name,
                        symbolSize: node.size,
                        symbol:node.shape,
                        value:node.size,
                        category:node.category,
                        label:{
                            normal: {
                                show: node.size > 10
                            }
                        }
                    };
                }),
                edges: json.edges.map(function (edge) {
                    return {
                        source: edge.source,
                        target: edge.target,
                        value: edge.size,
                        lineStyle:{
                            normal:{
                                width:edge.wid,
                                color:edge.line_color
                            }
                        }
                    };
                }),
                categories:json.category,
                label: {
                    normal: {
                        position: 'right',
                        formatter: '{b}',
                        show:'true'
                    }

                },
                focusNodeAdjacency: true,
                lineStyle: {
                    normal: {
                        width: 1,
                        curveness: 0.5,
                        opacity: 0.3
                    }
                }
            }
        ]
    };
};
//关系图option --circle
var relationChartCircleOption = function (json) {
    return  {
        title: {
            text: '关联关系图',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},
        legend: {
            orient:'vertical',
            x:'left',
            y:'top',
            data: json.category.map(function (a) {
                return a.name;
            })

        },
        //animationDurationUpdate: 1500,
        //animationEasingUpdate: 'quinticInOut',
        series : [
            {
                type: 'graph',
                layout: 'circular',
                circular: {
                    rotateLabel: true
                },
                // progressiveThreshold: 700,
                data: json.nodes.map(function (node) {
                    return {
                        //x: node.x,
                        //y: node.y,
                        id: node.id,
                        name: node.name,
                        symbolSize: node.size,
                        //symbol:node.shape,
                        value:node.size,
                        category:node.category,
                        label:{
                            normal: {
                                show: node.size
                            }
                        }
                    };
                }),
                edges: json.edges.map(function (edge) {
                    return {
                        source: edge.source,
                        target: edge.target,
                        value: edge.size,
                        lineStyle:{
                            normal:{
                                //width:edge.wid,
                                //color:edge.line_color
                                color:'source',
                                curveness: 0.5,
                            }
                        }
                    };
                }),
                categories:json.category,

                label: {
                    normal: {
                        position: 'right',
                        formatter: '{b}',
                        show:'true'
                    }

                },
                focusNodeAdjacency: true,
                lineStyle: {
                    normal: {
                        color:'source',
                        curveness: 0.5,
                        opacity: 0.3
                    }
                }
            }
        ]
    };
};
//关系图option --by liujun
var relationChartCircleOption2 = function(json){
    return {
        title: {
            text: '关联关系图'
        },
        animationDurationUpdate: 1500,
        animationEasing: 'cubicOut',
        animationEasingUpdate: 'quinticInOut',
        legend: {
            orient:'vertical',
            x:'left',
            y:'40',
            formatter: function(name) {
                return echarts.format.truncateText(name, 200, '14px Microsoft Yahei', '…');
            },
            tooltip: {
                show: true
            },
            data: json.category.map(function (a) {
                return a.name;
            })
        },
        series : [
            {
                type: 'graph',
                layout: 'circular',
                // layout:'none',
                focusNodeAdjacency: true,
                legendHoverLink: true,
                hoverAnimation:true,
                symbolSize: 50,
                //edgeSymbolSize: 50,
                roam: true,
                symbol: "roundRect",
                label: {
                    normal: {
                        show: true
                    }
                },
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 15],
                edgeLabel: {
                    normal: {
                        textStyle: {
                            fontSize: 20
                        }
                    }
                },

                data: json.nodes.map(function (node) {
                    return {
                        // x: node.x,
                        // y: node.y,
                        // id: node.id,
                        name: node.name,
                        // symbolSize: node.size,
                        // symbol:node.shape,
                        // value:node.size,
                        category:node.category,
                        // label:{
                        //     normal: {
                        //         show: node.size > 10
                        //     }
                        // }
                    };
                }),
                links:function () {
                    var links =[];
                    json.edges.map(function (edge) {
                        var link = {
                            source: Number(edge.source),
                            target: Number(edge.target),
                            //value: edge.size,
                            label: {
                                'normal': {
                                    'show': true,
                                    'textStyle':{
                                        'fontSize':5
                                    },
                                    'formatter': function (param) {
                                        return param.data.value
                                    }
                                }
                            },
                            lineStyle:{
                                normal:{
                                    width:edge.wid,
                                    //color:edge.line_color,
                                    curveness: 0.1
                                }
                            }
                        };
                        links.push(link);
                    });
                    for (var i = 0, len1 = links.length; i < len1; i++) {
                        for(var j = i+1, len2 = len1; j < len2; j++) {
                            if (links[i].source==links[j].target && links[i].target==links[j].source) {
                                links[j].lineStyle.normal.curveness = -0.1;
                            }
                        }
                    }
                    return links
                }(),
                categories: json.category,
                lineStyle: {
                    normal: {
                        opacity: 0.9,
                        width: 2,
                        curveness: 0,
                        type :'dashed'
                    }
                }
            },
        ]
    };
};
//力导向图option --echarts
var ForceChartOption1 = function(json){
    return  {
        title: {
            text: "关联关系图",
            top: "top",
            left: "left",
            subtextStyle:{
                fontSize:3,
                color:'#8B0000'
            }
        },
        legend: {
            y:'top',
            formatter: function(name) {
                return echarts.format.truncateText(name, 200, '14px Microsoft Yahei', '…');
            },
            tooltip: {
                show: true
            },
            data: json.category.map(function (a) {
                return a.name;
            })
        },
        tooltip: {},
        grid:{
            x: '7%',
            y: '7%',
            width: '100%',
            height: '100%'
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {
                    show: true,
                    readOnly: true
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        animationDuration: 3000,
        animationEasingUpdate: 'quinticInOut',
        series:[{
            name: '关联关系分析',
            type: 'graph',
            layout: 'force',
            force: {
                repulsion: 50
            },
            legend: {
                orient:'vertical',
                x:'left',
                y:'top',
                data: ["班组","部件"]

            },
            data: json.nodes.map(function (node) {
                return {
                    name: node.name,
                    symbolSize: 50,
                    //value:node.value,
                    category:node.category,
                    draggable:"true"
                };
            }),
            links: json.edges.map(function (edge) {
                return {
                    source: Number(edge.source),
                    target: Number(edge.target),
                    lineStyle:{
                        normal:{
                            width:edge.wid
                        }

                    }

                };
            }),
            categories: json.category,
            force: {
                initLayout:'circular',
                edgeLength: [300,100],
                repulsion: 290,
                //gravity: 0.1
            },
            focusNodeAdjacency: true,
            roam: true,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
            lineStyle: {
                normal: {
                    color: 'source',
                    curveness: 0,
                    type: "solid"
                }
            }
        }]
    };
};
