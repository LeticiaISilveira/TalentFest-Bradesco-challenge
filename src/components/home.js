import React, { useState, useEffect } from 'react';
import SelectCoin from './selectCoin';
import Card from './card';

const Home = () => {
  const [dados, setDados] = useState([]);
  const [dataValues, setDataValues] = useState([]);
  const [code, setCode] = ([]);

  let dadosApi = "https://economia.awesomeapi.com.br/all/";

  // useEffect(() => {
  //   setCode([...changeCoin])
  // }, [])


  useEffect(() => {
    fetch(dadosApi)
      .then(res => res.json())
      .then(res => setDados(res))
  }, []);

  const values = Object.values(dados)

  const changeCoin = (e) => {
    console.log(e.target.value)
    const coinFitered = values.filter((item) => item.name === e.target.value)[0]
    console.log(coinFitered.name);
    setDataValues(coinFitered);
    // return coinFitered;
    // setCode(coinFitered.code);
  };

  return (
    <>
      <Card>
        <SelectCoin onChange={changeCoin}
          values={values}
        />
        <p>{dataValues.name}</p>
        <p>{dataValues.high}</p>
      </Card>
    </>
  );
}

export default Home;


// const urlStart = "https://economia.awesomeapi.com.br/json/list"
  // const params = []
  // params.push(changeCoin) //coin.code
  // params.push('7')
  // const url = urlStart + '/' + params.join('/')
  // console.log(url)
  // console.log(changeCoin);