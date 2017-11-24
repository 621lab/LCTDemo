$(function () {
    $.ajax({
        url: "selector/autoComplete",
        type: "post",
        dataType: "json",
        async: true,
        timeout: 6000,
        success:function (data) {
            $("#input").autocomplete({
                source:data.map(function(item){
                    return item.name;
                }),
                close:function () {
                    var wbs = this.value;
                    getJobSizeData(wbs);
                }
            });
        }
    });
});
function getJobSizeData(wbs) {
    var start = $("#startTime").val();
    var end = $("#endTime").val();
    if (wbs == null){
        wbs = "Z000008"
    }
    // if(wbs == null){
    //     wbs = "GT-C021.P.001.01"
    // }
    $.ajax({
        url: "jobSize/analyze",
        type: "post",
        data:{"startTime":start,"endTime":end,"processId":wbs},
        dataType: "json",
        async: true,
        timeout: 6000,
        success:function (data) {
            var option = lineChart(data,wbs);
            var main = echarts.init(document.getElementById("main1"));
            main.dispose();
            main = echarts.init(document.getElementById("main1"));
            main.setOption(option);
        }
    });
    $.ajax({
        url: "jobSize/optimize",
        type: "post",
        data:{"startTime":start,"endTime":end,"processId":wbs},
        dataType: "json",
        async: true,
        timeout: 6000,
        success:function (data) {
            //产量
            var xAlias = data.yAliasList.map(function (item) {
                return item.name;
            });
            //人数
            var yAlias = data.xAliasList.map(function (item) {
                return item.name;
            });
            var zValue = data.analysisDataList.map(function (item) {
                return Number(item.extend);
            });
            var zValueMax = Math.max.apply(null, zValue);
            var zValueMin = Math.min.apply(null,zValue);
            //seriesData的data必须师[x,y,z]:x,y分别为x轴,y轴data的索引
            var seriesData = data.analysisDataList.map(function (item) {

                var xIndex = xAlias.indexOf(item.name);
                var yIndex = yAlias.indexOf(item.wbs);
                return[xIndex,yIndex,item.extend]
            });
            var option3d = barOption3d(zValueMin,zValueMax,xAlias,yAlias,seriesData);
            var main1 = echarts.init(document.getElementById("main"));
            main1.dispose();
            main1 = echarts.init(document.getElementById("main"));
            main1.setOption(option3d);
        }
    })
};
function getOptimizeData(process_name){
    var start = $("#startTime").val();
    var end = $("#endTime").val();
    $.ajax({
        url: "jobSize/analyze",
        type: "post",
        data:{
            "process_name":process_name,
            "startTime":start,
            "endTime":end,
        },
        dataType: "json",
        async: true,
        timeout: 6000,
        success:function (data){
            window.main1 = echarts.init(document.getElementById("main1"));
        }
    })
}
function lineChart(json,wbs){
        return {
        tooltip : {
            trigger: 'axis',

        },
        title:{
            text:'工序一偏差图'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        legend:{
            data:["工序："+wbs]
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                name:'人数',
                data : json.map(function (item) {
                    return"人数:"+ item.wbs
                })

            }
        ],
        yAxis : [
            {
                type : 'value',
                name : "偏差",
                axisLabel: {
                    formatter: '{value}%'
                }
            }
        ],
        series : [
            {
                name:"工序："+wbs,
                type:'line',
                label:{
                    normal:{
                        show:true,
                        position:'top',
                        formatter:'{c}%'

                    }
                },
                itemStyle:{
                    normal:{
                        color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}
                    }
                },

                data:json.map(function (item) {
                    return item.extend

                }),
                markPoint: {
                    data: [
                        {type: 'min', name: '最小值'}

                    ]
                },
                markLine: {
                    data: [
                        {type: 'min', name: '最小值'}
                    ]
                }

            }
        ]
    };
}
function barOption3d(zValueMin,zValueMax,xAlias,yAlias,seriesData) {
    return {
        title:{
            text:"人数-日产量-偏差图",
            top:"top",
            left:"left"
        },
        tooltip: {
            formatter:function(param){
                var xIndex = param.value[0];
                var yIndex = param.value[1];
                var zValue = param.value[2];
                var output = xAlias[xIndex];
                var worker_num = yAlias[yIndex];
                var marker = param.marker;
                return marker+"人数: "+worker_num+"</br>"+"日产量: "+output+"</br>"+"偏差: "+zValue+"%";

            }
        },
        visualMap: {
            max:zValueMax,
            min:zValueMin,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            }
        },
        xAxis3D: {
            type: 'category',
            name:'产量',
            scale:true,
            axisLabel:{
                // interval:0,
                formatter:'{value}'
            },
            data: xAlias
        },
        yAxis3D: {
            type: 'category',
             name:"人数",
            axisLabel:{
                interval:0,
                formatter:'{value}人'
            },
            data:yAlias
        },
        zAxis3D: {
            name:'偏差',
            type: 'value',
            axisLabel:{
                formatter:'{value}%'
            },
        },
        grid3D: {
            boxHeight: 100,
            boxWidth: 300,
            boxDepth: 80,
            viewControl: {
                // projection: 'orthographic'
            },
            light: {
                main: {
                    intensity: 1.2,
                    shadow: true
                },
                ambient: {
                    intensity: 0.3
                }
            }
        },
        series: [{
            type: 'bar3D',
            data: seriesData.map(function (item) {
                return{
                    value:[item[0],item[1],item[2]],
                    itemStyle:{
                        // opacity:'0.8'
                    }
                }
            }),
            shading: 'lambert',
            label: {
                textStyle: {
                    fontSize: 16,
                    borderWidth: 1
                }
            },
            emphasis: {
                label: {
                    textStyle: {
                        fontSize: 20,
                        color: '#900'
                    }
                },
                itemStyle: {
                    color: '#900'
                }
            }
        }
        ]
    }
}
function generateData(theta, min, max) {
    var noise = new SimplexNoise(Math.random);
    var valMin = Infinity;
    var valMax = -Infinity;
    var data = [];
    for (var i = 0; i <= 20; i++) {
        for (var j = 0; j <= 30; j++) {
            var value = noise.noise2D(i / 20, j / 20);
            valMax = Math.max(valMax, value);
            valMin = Math.min(valMin, value);
            data.push([i, j, value * 2 + 4]);
        }
    }
    return data;
}