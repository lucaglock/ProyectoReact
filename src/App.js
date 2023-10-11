import React from 'react';
import './App.css';

const numero = 10;
const styleRojo = {
  backgroundColor:'red',
};
const styleAzul = {
  backgroundColor:'blue',
};

function App() {
  return (
    <div style={{backgroundColor: 'aquamarine', border: '2px solid black'}}>
      <h1 className="titulo">Hola</h1>
      <p>Mundo</p>
      <p>{numero}</p>
      <div>
        <ul>
          <li>papu</li>
          <li>lince</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
