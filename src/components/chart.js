import React, { useState, useEffect } from 'react';
import Card from './card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, LineChart, Line } from 'recharts';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  card: {
    background: '#1E2938',
    margin: '30px',
    borderRadius: '10px',
    padding: '10px',
    color: '#fff',
    padding: '10px',
    boxShadow: '5px 5px 5px #555',
  },
  title: {
    padding: "5px"
  }
}
)

const Chart = () => {
  const [data, setData] = useState([]);

  let historyAPI = "https://economia.awesomeapi.com.br/json/list/USD-BRL/15";

  useEffect(() => {
    fetch(historyAPI)
      .then(res => res.json())
      .then(res => setData(res))
  }, []);


  const timeStamp = data.map((item) => {
      const time = new Date(Number(item.timestamp))
      return time
    }
    )

  return (
    <>
      <Card className={css(styles.card)}>
        <h3 className={css(styles.title)}>Variação Dólar Comercial</h3>
    <LineChart width={550} height={300} data={data}>
    <Line type="monotone" dataKey="high" stroke="#42FF11" />
    <CartesianGrid stroke="#1E2939" />
    <XAxis dataKey={timeStamp} />
    <YAxis />
  </LineChart>
      <p>15 Dias</p>
      </Card>
    </>
  );
}

export default Chart;
