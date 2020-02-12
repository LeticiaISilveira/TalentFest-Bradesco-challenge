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
    console.log(values.map((item) => item))

  };

  // const filterValue = map1.code

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
        <div className={css(styles.divDatas)}>
          <p>PREÇO</p>
          <p>VAR</p>
        </div>
      </Card>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
	card: {
    background: '#1E2938',
    margin: '30px',
    padding: '20px 20px 80px 20px',
    border: '2px solid red',
    color: '#fff'
  },
  divDatas: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})