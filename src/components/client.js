import React, { useState, useEffect } from 'react';
import CurrencySelector from './currencySelector';

function ClientRate({ rates, onUpdate}) {

  const [rate, setRate] = useState([]);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const clientRate = parseFloat(amount) / rate[1];
    console.log('client: broadcast client amount', parseFloat(amount), rate[1], clientRate);
    onUpdate(clientRate);
  }, [onUpdate, amount, rate]);

  function onRateChange(rateCode) {
    console.log('client: explicit rate changed', rateCode);
    const rate = rates.find((r) => r[0] === rateCode);
    setRate(rate);
  };

  useEffect(() => {
    console.log('client: rates refreshed');
    if (rates && rates.length) {
      console.log('client: setting default rate to ', rates[0]);
      setRate(rates[0]);
    }
  }, [rates]);

  return (
    <div>
      <h3>What you charged client</h3>
      <form className="client-form">
        <input type="number" min="0" id="client-cost-rate" value={amount} onChange={(ev) => setAmount(ev.currentTarget.value)} placeholder="e.g. 0.15" />
        <CurrencySelector selected={rate ? rate[0] : ''} rates={rates} onChange={onRateChange} />
        <span>{rate.length === 0 ? 0 : new Intl.NumberFormat('en-IN', {style: 'currency', currency: rate[0]}).format(rate[1])}</span>
      </form>
    </div>
  );
}

export default ClientRate;
