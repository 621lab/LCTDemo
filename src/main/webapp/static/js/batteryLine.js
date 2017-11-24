function setData2BatteryOption(data) {
    $("#main_div").css({
        height:$(window).height() * 0.5
    });
    $(".row2").css({
        height:$(window).height() * 0.3
    });
    window.main;
    window.main1;
    window.main2;
    window.batteryData = data;
    main1 = echarts.init(document.getElementById('mainChart1'));
    main2 = echarts.init(document.getElementById('mainChart2'));

    /**
     * Created by sun on 2017/7/11.
     */
    var chargeOption = {
        title: {
            text: '充电',
            textStyle:{
                fontSize:15
            },

        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            orient: 'vertical',
            right: 'right',
            data:['Cycle88_电流','Cycle204_电流','Cycle405_电流','Cycle613_电流',
                'Cycle88_电压','Cycle204_电压','Cycle405_电压','Cycle613_电压']
        },
        dataZoom:{
            type:'slider',
            show:true,
            bottom:'1%'
        },
        grid: {
            top:'7%',
            left: '7%',
            right: '7%',
            bottom: '3%',
            width:'80%',
            height:'83%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: batteryData.xalias
            },
        ],
        yAxis: {
            type: 'value',

        },
        series: function () {
            var series = [];
            var item3V = {
                name:'Cycle88_电压',
                type:'line',
                data:batteryData.charge_3.dataV
            };
            var item3C = {
                name:'Cycle88_电流',
                type:'line',
                data:batteryData.charge_3.dataC
            };
            var item204V = {
                name:'Cycle204_电压',
                type:'line',
                data:batteryData.charge_204.dataV
            };
            var item204C = {
                name:'Cycle204_电流',
                type:'line',
                data:batteryData.charge_204.dataC
            };
            var item405C = {
                name:'Cycle405_电流',
                type:'line',
                data:batteryData.charge_405.dataC
            };
            var item405V = {
                name:'Cycle405_电压',
                type:'line',
                data:batteryData.charge_405.dataV
            };
            var item613V = {
                name:'Cycle613_电压',
                type:'line',
                data:batteryData.charge_613.dataV
            };
            var item613C = {
                name:'Cycle613_电流',
                type:'line',
                data:batteryData.charge_613.dataC
            };

            series.push(item3C);
            series.push(item3V);
            series.push(item204C);
            series.push(item204V);
            series.push(item405C);
            series.push(item405V);
            series.push(item613C);
            series.push(item613V);
            return series;
        }()
    };
    var dischargeOption = {
        title: {
            text: '放电',
            textStyle:{
                fontSize:15
            },

        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            orient: 'vertical',
            right: 'right',
            data:['Cycle4_电流','Cycle206_电流', 'Cycle407_电流', 'Cycle614_电流',
                'Cycle4_电压','Cycle206_电压', 'Cycle407_电压', 'Cycle614_电压']
        },
        dataZoom:{
            type:'slider',
            show:true,
            bottom:'1%'
        },
        grid: {
            top:'7%',
            left: '7%',
            right: '7%',
            bottom: '3%',
            width:'80%',
            height:'83%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: batteryData.xaliasDis
            },
        ],
        yAxis: {
            type: 'value'
        },
        series: function () {
            var series = [];
            var item4V = {
                name:'Cycle4_电压',
                type:'line',
                data:batteryData.discharge_4.dataV
            };
            var item4C = {
                name:'Cycle4_电流',
                type:'line',
                data:batteryData.discharge_4.dataC
            };
            var item206V = {
                name:'Cycle206_电压',
                type:'line',
                data:batteryData.discharge_206.dataV
            };
            var item206C = {
                name:'Cycle206_电流',
                type:'line',
                data:batteryData.discharge_206.dataC
            };
            var item407V = {
                name:'Cycle407_电压',
                type:'line',
                data:batteryData.discharge_407.dataV
            };
            var item407C = {
                name:'Cycle407_电流',
                type:'line',
                data:batteryData.discharge_407.dataC
            };
            var item614V = {
                name:'Cycle614_电压',
                type:'line',
                data:batteryData.discharge_614.dataV
            };
            var item614C = {
                name:'Cycle614_电流',
                type:'line',
                data:batteryData.discharge_614.dataC
            };
            series.push(item4C);
            series.push(item4V);
            series.push(item206V);
            series.push(item206C);
            series.push(item407V);
            series.push(item407C);
            series.push(item614V);
            series.push(item614C);
            return series;
        }()
    };

    main1.setOption(chargeOption);
    main2.setOption(dischargeOption);

    // main1.setOption(chargeOption);
    // main2.setOption(dischargeOption);
}