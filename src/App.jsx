//importamos useState y Fragment de react para poder usarlos
import { useState, Fragment } from "react";
// aqui mandamos a llamar el lo que hay de estilos en app.css (estios locales)
import "./App.css"
import Card from "./components/Card";

const App = () => {
  //estados useState() aqui recive el valor como array, objetos numeros,texto etc
  const [count, setCount]= useState(50);

  //eventos para el contador
  const handleAdd = () => {
    
    setCount(count+1);
  };

  const handleSubtract = () => {
    setCount(count-1);
  };

  const handleReset = () => {
    setCount(0);
  }


  return (
    < Fragment>
     {/* container id "container" de donde se llamo desde index.css (gloables styles)) dentro de ese div */}
    <div className="container">  
      <h1>Counter: {count} </h1>
      {/* hr es linea divisoria */}
      <hr />
      <button onClick={handleAdd} >+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleReset}>reset</button>
    </div>
    </Fragment>
  );
};



export default Card;