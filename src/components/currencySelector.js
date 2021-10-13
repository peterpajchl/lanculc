import React, { useEffect, useState } from 'react';

function CurrencySelector({ selected, rates, onChange }) {

  return (
    <select value={selected} onChange={(ev) => onChange(ev.currentTarget.value)}>
      {rates.map(item => <option key={item[0]} value={item[0]}>{item[0]}</option>)}
    </select>
  );

}

export default CurrencySelector;