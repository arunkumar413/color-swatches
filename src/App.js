import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [red, setRed] = useState(Array.from(Array(255).keys()));

  const blueElements = red.map(function (item, index) {
    return (
      <div
        style={{
          backgroundColor: `rgb(0,0,${item})`,
          height: '2rem',
          margin: 10,
        }}
      >
        {' '}
      </div>
    );
  });

  const greenElements = red.map(function (item, index) {
    return (
      <div
        style={{
          height: '2rem',
          backgroundColor: `rgb(0,${item},0`,
          margin: 10,
        }}
      >
        {' '}
      </div>
    );
  });

  const redElements = red.map(function (item, index) {
    return (
      <div
        style={{
          height: '2rem',
          backgroundColor: `rgb(${item},0,0)`,
          margin: 10,
        }}
      >
        {' '}
      </div>
    );
  });

  return (
    <div className="container">
      <div className="">{blueElements}</div>

      <div className="">{greenElements}</div>

      <div className="">{redElements}</div>
    </div>
  );
}
