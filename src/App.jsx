// aqui mandamos a llamar el lo que hay de estilos en app.css (estios locales)
import { useState } from "react";
import "./App.css"
const App = () => {

  //estados useState() aqui recive el valor como array, objetos numeros,texto etc
  const [count, setCount]= useState(50);


  return (
    // container id "container" de donde se llamo desde index.css (gloables styles)) dentro de ese div
    <div className="container">  
      <h1>Counter: {count} </h1>
      {/* hr es linea divisoria */}
      <hr />
      <button>+</button>
      <button>-</button>
      <button>reset</button>
    </div>
  );
};



export default App;