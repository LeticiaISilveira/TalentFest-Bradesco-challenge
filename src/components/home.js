import React, {useState, useEffect} from 'react';
import SelectCoin from './selectCoin';
import Card from './card';
import { StyleSheet, css } from 'aphrodite';
// import SelectCoin from './selectCoin';


const Home = () => {
  const [dados, setDados] = useState([]);

  let dadosApi = "https://economia.awesomeapi.com.br/all/";
  useEffect(() => {
    fetch(dadosApi)
      .then(res => res.json())
      .then(res => setDados(res))
    }, []);
  
  const values = Object.values(dados)

  const changeCoin = () => {
    console.log(values.map((item) => item.high))

  };

  return (
    <>
    {/* {values.map((item) =>
      <ul>
        <li>{item.name}</li>
        <span>{item.code}</span>
        <span>{item.high}</span>
      </ul>
    )} */}

    {/* <select>
      {values.map((item) =>
        <option>{item.name}</option>
      )}
    </select> */}
      <Card className={css(styles.card)}>
        <SelectCoin onChange={changeCoin} values={values} /> 
          <p>{values}</p>
        {/* <p>preço</p>
        <p>change</p> */}
      </Card>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
	card: {
    background: '#1E2938',
    padding: '20px',
    display: 'flex',
    justifyContent: 'flex-start',
    border: '2px solid red',
	}
})