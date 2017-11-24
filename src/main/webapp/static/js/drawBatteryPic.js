/**
 * Created by zhanglu on 2017/7/11.
 */
function drawBatteryPic(battery_data) {
    main = echarts.init(document.getElementById("mainChart"));
    var option = {
        title: {
            text: '电池趋势',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            formatter: '{a} <br/>{b} : {c}'
        },
        legend: {
            orient: 'vertical',
            right: 'right',
            data: ['充电曲线', '放电曲线']
        },
        xAxis: {
            type: 'category',
            name:'Cycle',
            splitLine: {show: false},
            data:battery_data[0]
        },
        dataZoom:{
            type:'slider',
            show:true,
            bottom:'1%'
        },
        grid: {
            left: '5%',
            right: '4%',
            bottom: '3%',
            width:'90%',
            height:'87%',
            containLabel: true
        },
        yAxis: {
            type: 'value',
            min:'dataMin',
            max:'dataMax'
        },
        series: [
            {
                name: '充电曲线',
                type: 'line',
                //color:'red',
                data:battery_data[1]
            },
            {
                name: '放电曲线',
                type: 'line',
                //color:'blue',
                data:battery_data[2]
            }
        ]
    };
    main.setOption(option);
}
