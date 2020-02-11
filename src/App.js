import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
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
    <div className="App">
    {values.map((item) =>
          <ul>
          <li>{item.code}</li>
          <span>{item.name}</span>
          <span>{item.high}</span>
        </ul>
    )}

    </div>
  );
}

export default App;
