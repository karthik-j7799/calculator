
import { useState } from 'react';
import './App.css';

function App() {

  const [values,setValues] = useState("");

  const handleClick = (e) => {
    setValues(values.concat(e.target.name));
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
      <button name="/" onClick={handleClick}>/</button>
      <button name="7" onClick={handleClick}>7</button>
      <button name="8" onClick={handleClick}>8</button>
      <button name="9" onClick={handleClick}>9</button>
      <button name="*" onClick={handleClick}>*</button>
      <button name="4" onClick={handleClick}>4</button>
      <button name="5" onClick={handleClick}>5</button>
      <button name="6" onClick={handleClick}>6</button>
      <button name="-" onClick={handleClick}>-</button>
      <button name="1" onClick={handleClick}>1</button>
      <button name="2" onClick={handleClick}>2</button>
      <button name="3" onClick={handleClick}>3</button>
      <button name="+" onClick={handleClick}>+</button>
      <button name="0" onClick={handleClick}>0</button>
      <button name="." onClick={handleClick}>.</button>
      <button onClick={evaluateResult} className='result' >=</button>

      </div>
      </section>






    </div>
  );
}

export default App;
