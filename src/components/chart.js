import React, { useState, useEffect, Component } from 'react';
// import SelectCoin from './selectCoin';
import Card from './card';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

// const urlStart = "https://economia.awesomeapi.com.br/json/list"
// const params = []
// params.push('dataValues')
// params.push('7')
// url = urlStart + '/'
// console.log(url)

// const Chart = () => {
//   const [data, setData] = useState([]);

//   let historyAPI = "https://economia.awesomeapi.com.br/json/list/USD-BRL/7";

//   useEffect(() => {
//     fetch(historyAPI)
//       .then(res => res.json())
//       .then(res => setData(res))
//   }, []);

// const test = () => {
//   const [data, setData] = useState([]);

//   let historyAPI = "https://economia.awesomeapi.com.br/json/list/USD-BRL/7";

//   useEffect(() => {
//     fetch(historyAPI)
//       .then(res => res.json())
//       .then(res => setData(res))
//   }, []);

//   return (test)
// }


class App extends Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.paddingRight = 20;

    let data = [];
    let visits = 10;
    for (let i = 1; i < 366; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
    }

    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";

    series.tooltipText = "{valueY.value}";
    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <>
        <Card>
          <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
        </Card>
      </>
    );
  }
}

export default App;
