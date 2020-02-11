import React, {useState, useEffect} from 'react';


function Home() {
  const [dados, setDados] = useState([]);

let dadosApi = "https://economia.awesomeapi.com.br/all/";
useEffect(() => {
  fetch(dadosApi)
    .then(res => res.json())
    .then(res => setDados(res))
  }, []);
  

  const values = Object.values(dados)
  console.log(values.map((item) => item))
  return (
    <>
    {values.map((item) =>
      <ul>
        <li>{item.name}</li>
        <span>{item.code}</span>
        <span>{item.high}</span>
      </ul>
    )}
    </>
  );
}

export default Home;
