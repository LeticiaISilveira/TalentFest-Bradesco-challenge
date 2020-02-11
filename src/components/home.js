import React, {useState, useEffect} from 'react';
import SelectCoin from './selectCoin';
import Card from './card';
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
      <Card>
        <SelectCoin onChange={changeCoin}
          values={values}
        />
      </Card>
    </>
  );
}

export default Home;
