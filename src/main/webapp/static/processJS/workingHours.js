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
                    getOptimizeData(wbs);
                }
            });
        }
    });
});
function getWorkingHoursAnalyzeData(start,end,workshop,train_type) {
    $.ajax({
        url: "workingHours/analyze",
        type: "post",
        data:{"startTime":start,"endTime":end,"workshop":workshop,"trainType":train_type},
        dataType: "json",
        async: true,
        timeout: 6000,
        success:function (data) {
            var option = hoursBarChart(data);
            var main1 = echarts.init(document.getElementById("main"));
            main1.dispose();
            main1 = echarts.init(document.getElementById("main"));
            main1.on('click', function (params) {
                if (params.componentType === 'series') {
                    var optionTitle =this.getOption();

                }
            });
            main1.setOption(option);
        }
    });
}
function hoursBarChart(json){
    var yAxias_data = [];
    for(var key in json){
        yAxias_data.push(key);
    }
    var res = processjson(json);
    return {
        title:{
            text:'实动工时偏差分析'
        },
        tooltip : {
            trigger: 'item',
            formatter:function (params) {
                var process_name = params.seriesName;
                var value = res[process_name]+"%";
                return params.seriesName+": "+value;
            },
            axisPointer : {
                type : 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top:'19%',
            containLabel: true
        },
        yAxis: {
            type: 'category',
            data: yAxias_data,
            name:'偏差',
            axisLabel: {
                formatter: '{value}%'
            }
        },
        xAxis:{
              show:false
              },

        series:function () {
            var list = [];
            for(var j in json){
                var index = yAxias_data.indexOf(j);
                for(var i = 0; i<json[j].length;i++){
                    var wbs = json[j][i].wbs;
                    var item = {
                        name: wbs,
                        type: 'bar',
                        stack: j,
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight',
                                formatter:json[j][i].wbs,
                            }
                        },
                        data: repeatStrNumTimes(json[j][i].extend,index),
                    };
                    list.push(item);
                }
            }
            return list;
        }()
    };
}
function getOptimizeData(process_name){
    var start = $("#startTime").val();
    var end = $("#endTime").val();
    $.ajax({
        url: "workingHours/optimize",
        type: "post",
        data:{"startTime":start,"endTime":end,"wbs":process_name},
        dataType: "json",
        async: true,
        timeout: 6000,
        success:function (data) {
            var option = lineChart(data,process_name);
            window.main = echarts.init(document.getElementById("main1"));
            main.setOption(option);
        }
    });
}
function lineChart(json,process_name){
    return {
        tooltip : {
            trigger: 'axis',

        },
        title:{
            text:'工时定额优化'
        },
        legend:{
            data:["工序："+process_name]
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '8%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                name:'工序',
                data : json.map(function (item) {
                    return"列号:"+ item.wbs
                }),

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
                name:'工序：'+process_name,
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

                })


            }
        ]
    };
}
function repeatStrNumTimes(value,num){
    var data =[];
    while(num>0){
        data.push("");
        num--;
    }
    data.push(value);
    return data;
}
function processjson(json) {
    var data ={};
    for(var key in json){
        for(var item in  json[key]){
            data[json[key][item].wbs] = json[key][item].extend;
        }
    }
    return data;

}

