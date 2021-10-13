import React from 'react';

function Rates({rates}) {

  return (
    <div>
      <h3>Rates</h3>
      <ul>
        {rates.map((item) => <li key={item[0]}>{item[0]}@{item[1]}</li>)}
      </ul>
    </div>
  );
}

export default Rates;
