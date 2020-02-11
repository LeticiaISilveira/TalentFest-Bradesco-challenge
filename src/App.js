import React, {useState, useEffect} from 'react';
import Card from './components/card'

function App() {
  const [dados, setDados] = useState("");

// let dadosApi = "https://economia.awesomeapi.com.br/all/";
// useEffect(() => {
//   fetch(dadosApi)
//     .then(res => res.json())
//     .then(res => setDados(res))
//   }, []);

  // const array = [dados];
  //   console.log(array.map((elem) => elem))
  return (
    <div className="App">
      <ul>
        <li>{dados}</li>
      </ul>
    </div>
  );
}

export default App;
