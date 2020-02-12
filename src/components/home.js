import React, {useState, useEffect} from 'react';
import SelectCoin from './selectCoin';
import Card from './card';
import { StyleSheet, css } from 'aphrodite';

  const styles = StyleSheet.create({
    card: {
      background: '#1E2938',
      margin: '30px',
      borderRadius: '10px',
      padding: '10px',
      color: '#fff',
      padding: '10px',
      boxShadow: '5px 5px 5px #555'
    },
    divDatas: {
      display: 'flex',
      fontSize:'30px',
      padding:'10px',
      justifyContent: 'center'
    },
    border: {
      display: 'inline'
    },
    textsDiv: {
      display:'flex',
      padding: '3px',
      justifyContent: 'space-around'
    }
  })


const Home = () => {
  const [dados, setDados] = useState([]);
  const [dataValues, setDataValues] = useState([]);

  let dadosApi = "https://economia.awesomeapi.com.br/all/";
  useEffect(() => {
    fetch(dadosApi)
      .then(res => res.json())
      .then(res => setDados(res))
    },[] );
  
  const values = Object.values(dados)

  const changeCoin = (e) => {
    console.log(e.target.value)
    const coinFitered  = values.filter((item) => item.name === e.target.value)[0]
    console.log(coinFitered)
    setDataValues(coinFitered)
  };


  return (
    <>
      <Card className={css(styles.card)}>
        <SelectCoin onChange={changeCoin}
          values={values}
        />
        <p className={css(styles.divDatas)}>{dataValues.code} {dataValues.high}</p>
        <div className={css(styles.textsDiv)}>
          <p className={css(styles.border)}>Var : {dataValues.varBid}</p>
          <p className={css(styles.border)}>Ptc Var : {dataValues.pctChange}</p>
        </div>
      </Card>
    </>
  );
}

export default Home;
