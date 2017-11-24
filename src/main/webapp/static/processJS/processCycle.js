// $(function () {
//     alert("134");
//     $.ajax({
//         url: "selector/autoComplete",
//         type: "post",
//         dataType: "json",
//         async: true,
//         timeout: 6000,
//         success:function (data) {
//             $("#input").autocomplete({
//                 source:data.map(function(item){
//                     return item.name;
//                 }),
//                 close:function () {
//                     var wbs = this.value;
//                     getOptimizeData(wbs);
//                 }
//             });
//         }
//     });
// });
function getProcessCycle(start,end,workshop,train_type,flag) {
    $.ajax({
        url: "processCycle/analyze",
        type: "post",
        data:{"startTime":start,"endTime":end,"workshop":workshop,"trainType":train_type,"flag":flag},
        dataType: "json",
        async: true,
        timeout: 6000,
        success:function (data) {
            var option = cycleBarChart(data);
            var main = echarts.init(document.getElementById("main"));
            main.dispose();
            main = echarts.init(document.getElementById("main"));
            main.on('click', function (params) {
                if (params.componentType === 'series') {
                    var optionTitle =this.getOption().title[0].text;
                    if(optionTitle == "制造周期波动分析"){
                        var dataIndex = params.dataIndex;
                        var processName = data[dataIndex].name;
                        var processId = params.name;
                        getOptimizeData(processId);
                    }
                }
            });
            main.setOption(option);
        }
    })
}
//点击返回某一工序的偏差-折线图
function getOptimizeData(processId){
    var start = $("#startTime").val();
    var end = $("#endTime").val();
    $.ajax({
        url: "processCycle/optimize",
        type: "post",
        data:{"processId":processId,"startTime": start,"endTime":end},
        dataType: "json",
        async: true,
        timeout: 6000,
        success:function (data) {
            document.getElementById('motai').innerHTML="";
            document.getElementById('myModalLabel').innerHTML="";
            for (i = 0; i < data.analysisData3List.length; i++){
                if(i==0){
                    document.getElementById('myModalLabel').innerHTML = "工序:"+data.analysisData3List[0].process_ID +" 异常信息";
                }
                 var hang = '<tr><td>' + data.analysisData3List[i].order_HEADER + '</td>'
                     + '<td>' + data.analysisData3List[i].order_LINE + '</td>'
                     + '<td>' + data.analysisData3List[i].process_ID + '</td>'
                     + '<td>' + data.analysisData3List[i].process_NAME + '</td>'
                     + '<td>' + data.analysisData3List[i].project_NAME + '</td>'
                     + '<td>' + data.analysisData3List[i].wbs + '</td>'
                     + '<td>' + data.analysisData3List[i].product_NAME + '</td>'
                     + '<td>' + data.analysisData3List[i].train_NUMBER + '</td>'
                     + '<td>' + data.analysisData3List[i].carriage_NUMBER + '</td>'
                     + '<td>' + data.analysisData3List[i].carriage_TYPE + '</td>'
                     + '<td>' + data.analysisData3List[i].op_START + '</td>'
                     + '<td>' + data.analysisData3List[i].op_END + '</td>'
                     + '<td>' + data.analysisData3List[i].process_CYCLE + '</td>'
                     + '<td>' + data.analysisData3List[i].manu_CYCLE + '</td>'
                     + '<td>' + data.analysisData3List[i].team_ID + '</td>'
                     + '<td>' + data.analysisData3List[i].worker_NUM + '</td></tr>'
                document.getElementById('motai').innerHTML += hang;
            }
            if(data.analysisData3List.length>0){
                $('#myModal2').modal({
                    keyboard: true
                });
            }
            var option = cycleLineChart(processId);
            var dataNew = new Array();
            for(i = 0;i<data.analysisDataList.length;i++){
                dataNew[i]=data.analysisDataList[i].manu_Cycle;
                option.xAxis[0].data[i]=data.analysisDataList[i].manu_Cycle;
                option.series[0].data[i]=data.analysisDataList[i].num;
            }
            option.xAxis[0].data.unshift((Number(data.analysisDataList[0].manu_Cycle)-1).toString());
            option.series[0].data.unshift("0");
            dataNew.unshift((Number(data.analysisDataList[0].manu_Cycle)-1).toString());
            var s = data.cycle;
            var s1 = data.avg;
            insertSort(dataNew,s);
            insertSort(dataNew,s1);
            option.xAxis[1].data=dataNew;
            option.series[1].markLine.data[0].xAxis= s;
            option.series[2].markLine.data[0].xAxis=s1;
            var main1 = echarts.init(document.getElementById("main1"));
            main1.dispose();
            main1 = echarts.init(document.getElementById("main1"));
            main1.setOption(option);
        }
    })
}
//main柱状
function cycleBarChart(json){
    return {
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            },
            formatter:function (param) {
                var marker = param[0].marker;
                var dataIndex = param[0].dataIndex;
                var value = param[0].data;
                var tooltipName = "";
                var process_id = param[0].name;
                var process_name = json[dataIndex].name;
                var extend = json[dataIndex].extend+"%";
                if (value.startsWith("-")){
                    tooltipName= "小于"+value+"%";
                }else {
                    tooltipName= "大于"+value+"%";
                }
                return marker+process_id+" </br>"+process_name+": "+extend;
            }
        },
        title:{
            text:'制造周期波动分析'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '1%',
            containLabel: true
        },
        dataZoom:{show:true},
        xAxis : [
            {
                type : 'category',
                name:'工序',
                data : json.map(function (item) {
                    return item.wbs
                }),
                boundaryGap:true,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                name : "超出工艺周期",
                axisLabel: {
                    formatter: '{value}%'
                },
                max:40,
                min:-30,
                splitLine: {
                    show: true,
                    lineStyle:{
                        color: ["#FF811A","#FFE510","#27FF2F","#27FF2F","#FFE510","#FF811A","#FF0C09"],
                    }
                }

            }
        ],
        series : [
            {
                name:'工序',
                type:'bar',
                // label:{
                //     normal:{
                //         show:true,
                //         position:'inside',
                //         formatter:function (param) {
                //             var index = param.dataIndex;
                //             var value = json[index].extend;
                //             return value+"%";
                //         }
                //     }
                // },
                data:json.map(function (item) {
                    if(item.extend>=40){
                        item.temp = "40";
                    }else if(item.extend<=-30){
                        item.temp="-30";
                    }else{
                        item.temp = item.extend;
                    }
                    return item.temp
                }),
                itemStyle:{
                    normal:{
                        //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}
                        color:function (params) {
                            if(params.value>0 && params.value<=10){
                                return "#27ff2f";
                            }else if(params.value>10 && params.value<=20){
                                return "#ffe510";
                            }else if(params.value>20 && params.value<=30){
                                return "#ff811a";
                            }else if(params.value>30) {
                                params.value=35;
                                return "#ff0c09";
                            }else if(params.value>-10 && params.value<=0) {
                                return "#27ff2f";
                            }
                            else if(params.value>-20 && params.value<=-10) {
                                return "#ffe510";
                            }
                            else if(params.value>-30 && params.value<=-20) {
                                return "#ff811a";
                            }
                            else {
                                return "#ff0c09";
                            }
                        }
                    }
                },
            }
        ]
    };
}
//main1折线图
function cycleLineChart(processId) {
    return {
        title: {
            text: processId+'工艺周期优化',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '8%',
            bottom: '3%',
            top:'20%',
            containLabel: true
        },
        legend: {
            data:[
                {
                   name:'制造周期分布',
                   textStyle:{
                       color:'rgb(52,69,83)'
                   }
                },
                {
                    name:'工艺周期',
                    textStyle:{
                        color:'#ee1f17'
                    }
                },
                {
                    name:'制造周期均值',
                    textStyle:{
                        color:'#000000'
                    }
                }
            ]
        },
        xAxis:  [{
            type: 'category',
            name:'制造周期',
            boundaryGap: false,
            data:[]
        },
            {
            type: 'category',
            boundaryGap: false,
            data:[]
        }
        ],
        yAxis: {
            type: 'value',
            name: '次数',
            nameLocation:'middle',
            axisPointer: {
                snap: true
            }
        },
        series: [
            {
            name:'制造周期分布',
            type:'line',
            lineStyle:{
                    normal:{
                        color:'rgb(52,69,83)'
                    }
                },
            data:[],
            },
            {
                name:'工艺周期',
                type:'line',
                xAxisIndex: 1,
                lineStyle:{
                    normal:{
                        color:'#ee1f17'
                    }
                },
                data:[],
                markLine: {
                    itemStyle:{
                        normal:{lineStyle:{type:'solid',color:'#ee1f17'},label:{show:false,position:'left'}}
                    },
                    large:true,
                    data: [{
                        name: '工艺周期',
                        xAxis:''
                    }]
                }
            },
            {
                name:'制造周期均值',
                type:'line',
                xAxisIndex: 1,
                lineStyle:{
                    normal:{
                        color:'#000000'
                    }
                },
                data:[],
                markLine: {
                    itemStyle:{
                        normal:{lineStyle:{type:'solid',color:'#000000'},label:{show:false,position:'left'}}
                    },
                    large:true,
                    data: [{
                        name: '制造周期均值',
                        xAxis:''
                    }]
                }

            }
        ]

    }
}
//添加横坐标值
function insertSort(data,k) {
    var l = 0,r=data.length;
    while (l<=r){
        if(data[mid]==k) {
            return false;
        }
        var mid = parseInt((l+r)/2);
        if(data[mid]==k) {
            return false;
        }else if(data[mid]>k){
            r=mid-1;
        }else{
            l=mid+1;
        }
    }
    for(p=data.length-1;p>=l;p--){
        data[p+1] = data[p];
    }
    data[l]=k;
}

