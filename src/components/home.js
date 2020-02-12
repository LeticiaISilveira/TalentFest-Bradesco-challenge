import React, {useState, useEffect} from 'react';
import SelectCoin from './selectCoin';
import Card from './card';


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
  // console.log(values)

  const changeCoin = (e) => {
    // const teste = values.map((item) => console.log(item))
    console.log(e.target.value)
    const coinFitered  = values.filter((item) => item.name === e.target.value)
    console.log(coinFitered)
    setDataValues(coinFitered)
    // console.log(dataValues)
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
      <Card>
        <SelectCoin onChange={changeCoin}
          values={values}
        />
        {/* {dataValues} */}
      </Card>
    </>
  );
}

export default Home;
