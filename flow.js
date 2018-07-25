var cpuContainer=document.getElementById('cpuContainer'),
    memoryContainer=document.getElementById('memoryContainer');

//基于准备好的dom，初始化echarts实例
var cpuChart=echarts.init(cpuContainer);
//指定图表的配置项和数据
var cpuOption={//0-100
  title:{
    text:'CPU使用率',
    x:'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type:'cross',
      animation: false,
      label: {
        backgroundColor: '#ccc',
        borderColor: '#aaa',
        borderWidth: 1,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        textStyle: {
          color: '#222'
        }
      }
    },
    formatter: function (params) {
      return params[0].value
    }
  },
  xAxis:{
    type: 'category',
    boundaryGap: true,
    data: (function (){
      var now = new Date();
      var res = [];
      var len = 10;
      while (len--) {
        res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
        now = new Date(now - 1000);
      }
      return res;
    })()
  },
  yAxis:{
    type: 'value',
    scale: true,
    name: '%',
    max: 100,
    min: 0,
    boundaryGap: [0.2, 0.2]
  },
  series:[
    {
      name:'CPU使用率',
      type:'line',
      showSymbol: false,
      hoverAnimation: false,
      lineStyle:{
        color: 'green'
      },
      data:(function (){
        var res = [];
        var len = 10;
        while (len--) {
          res.push(Math.round(Math.random() * 100));
        }
        return res;
      })()
    }
  ],
};
//使用刚指定的配置项和数据显示图表
setInterval(function(){
  axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
  cpuOption.xAxis.data.shift();
  cpuOption.xAxis.data.push(axisData);
  var cpuData = cpuOption.series[0].data;
  console.log(cpuData)
  if(cpuData.length>0){
    cpuData.shift();
  }
  
  cpuData.push(Math.round(Math.random() * 100));
  cpuChart.setOption(cpuOption);
},1000)



var memoryChart=echarts.init(memoryContainer);
var memoryOption={//50-60
  title:{
    text:'内存使用率',
    x:'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type:'cross',
      animation: false,
      label: {
        backgroundColor: '#ccc',
        borderColor: '#aaa',
        borderWidth: 1,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        textStyle: {
          color: '#222'
        }
      }
    },
    formatter: function (params) {
      params = params[0]
      return params.value[0]+'</br>'+params.value[1]
    }
  },
  xAxis:{
    type: 'category',
    boundaryGap: true,
    data: (function (){
      var now = new Date();
      var res = [];
      var len = 10;
      while (len--) {
          res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
          now = new Date(now - 1000);
      }
      return res;
    })()
  },
  yAxis:{
    type: 'value',
    scale: true,
    name: '%',
    max: 100,
    min: 0,
    boundaryGap: [0.2, 0.2]
  },
  series:[
    {
      name:'CPU使用率',
      type:'line',
      showSymbol: false,
      hoverAnimation: false,
      lineStyle:{
        color: 'green'
      },
      data:(function (){
        var res = [];
        var len = 10;
        while (len--) {
          res.push(Math.round(Math.random() * 10 + 50));
        }
        return res;
      })()
    }
  ],
};
//使用刚指定的配置项和数据显示图表
setInterval(function(){
  axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
  memoryOption.xAxis.data.shift();
  memoryOption.xAxis.data.push(axisData);
  var memoryData = memoryOption.series[0].data;
  memoryData.shift();
  memoryData.push(Math.round(Math.random() * 10 + 50));
  memoryChart.setOption(memoryOption);
},1000)


document.getElementById('showCpu').onclick=function(){
  cpuContainer.style.display='block';
  memoryContainer.style.display='none';
}
document.getElementById('showMemory').onclick=function(){
  cpuContainer.style.display='none';
  memoryContainer.style.display='block';
}
