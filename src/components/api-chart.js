import React, { useState, useEffect } from 'react';
import { Chart } from '@amcharts/amcharts4/charts';

const urlStart = "https://economia.awesomeapi.com.br/json/list"
const params = []
params.push('dataValues')
params.push('7')
url = urlStart + '/'
console.log(url)

const Chart = () => {


  const [data, setData] = useState([]);

  let historyAPI = "https://economia.awesomeapi.com.br/json/list/USD-BRL/7";

  useEffect(() => {
    fetch(historyAPI)
      .then(res => res.json())
      .then(res => setData(res))
  }, []);

  return (
    <div></div>
  )

}
export default Chart;

