Highcharts.chart('container', {

    chart: {
        type: 'column',
        styledMode: true
    },

    title: {
        text: 'Орлого болон зарлагын график'
    },

    yAxis: [{
        className: 'highcharts-color-0',
        title: {
            text: 'Орлогo'
        }
    }, {
        className: 'highcharts-color-1',
        opposite: true,
        title: {
            text: 'Зарлага'
        }
    }],

    plotOptions: {
        column: {
            borderRadius: 3
        }
    },

    series: [{
        data: [1, 3, 2, 4]
    }, {    
        data: [324, 124, 547, 221],
        yAxis: 1
    }]

});