
import { useState } from 'react';
import './App.css';

function App() {

  const [values,setValues] = useState("");

  const handleClick = (e) => {
    setValues(values.concat(e.target.value));
  }

  const clearInput = () => {
    setValues("");
  }

  const backSpace = () => {
    setValues(values.slice(0,-1));
  }
  const evaluateResult = () => {
    setValues(eval(values).toString());
  }


  return (

    <div className="App">
      <section className='whole'>
      <h1><b>Casio</b></h1>
      <h1 className='label'><b>KJ7799</b></h1>
      
      <form>
        
        <input
        type='text'
        value={values}
        />
      </form>
      
      
      <div className="numpad">

      <button onClick={clearInput} className="clear">C</button>
      <button onClick={backSpace} className="backspace">🔙</button>
      <button value="/" onClick={handleClick}>/</button>
      <button value="7" onClick={handleClick}>7</button>
      <button value="8" onClick={handleClick}>8</button>
      <button value="9" onClick={handleClick}>9</button>
      <button value="*" onClick={handleClick}>*</button>
      <button value="4" onClick={handleClick}>4</button>
      <button value="5" onClick={handleClick}>5</button>
      <button value="6" onClick={handleClick}>6</button>
      <button value="-" onClick={handleClick}>-</button>
      <button value="1" onClick={handleClick}>1</button>
      <button value="2" onClick={handleClick}>2</button>
      <button value="3" onClick={handleClick}>3</button>
      <button value="+" onClick={handleClick}>+</button>
      <button value="0" onClick={handleClick}>0</button>
      <button value="." onClick={handleClick}>.</button>
      <button onClick={evaluateResult} className='result' >=</button>

      </div>
      </section>






    </div>
  );
}

export default App;
