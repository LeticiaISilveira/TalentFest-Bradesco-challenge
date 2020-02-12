import React, { useState, useEffect } from 'react';
import SelectCoin from './selectCoin';
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

const Chart = () => {
  const [data, setData] = useState([]);

  let historyAPI = "https://economia.awesomeapi.com.br/json/list/USD-BRL/7";

  useEffect(() => {
    fetch(historyAPI)
      .then(res => res.json())
      .then(res => setData(res))
  }, []);

  console.log(data)













  return (
    <>
      <Card>
      </Card>
    </>
  );
}

export default Chart;
