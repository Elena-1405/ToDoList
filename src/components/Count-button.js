import css from './app.module.css';
import React , { useState } from 'react';


function Count() {
    // Объявление новой переменной состояния «count»
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>Вы кликнули {count} раз(а)</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  
  export default Count