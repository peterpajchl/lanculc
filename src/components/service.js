import React, { useState, useEffect } from 'react';
import CurrencySelector from './currencySelector';

function Service({rates, service, updateItem, removeItem, index}) {

  const [rate, setRate] = useState([]);

  const updateDescription = (ev) => {
    const s = {
      ...service,
      description: ev.currentTarget.value
    };
    console.log('will update service-desc at index', index, s);
    updateItem(index, s);
  };

  const updateAmount = (ev) => {
    const s = {
      ...service,
      amount: ev.currentTarget.value
    };
    console.log('service: will update service-amount at index', index, s);
    updateItem(index, s);
  };

  function onChangeRate(rateCode) {
    console.log('service: explicit rate changed', rateCode);
    const rate = rates.find((r) => r[0] === rateCode);
    setRate(rate);
    const s = {
      ...service,
      rate
    };
    console.log('service: will update service-rate at index', index, s);
    updateItem(index, s);
  }

  useEffect(() => {
    console.log('service changed', service);
  }, [service]);

  useEffect(() => {
    console.log(`service ${index}: rates refreshed`);
    if (rates && rates.length) {
      console.log(`service ${index}: setting default rate to ${rates[0]}`);
      setRate(rates[0]);
    }
  }, [rates, index]);

  return (
    <li className="service-row">
      <span className="service-row__index">{index + 1}.</span>
      <input className="service-row__description" name="description" type="text" value={service.description} onChange={updateDescription} placeholder="Review" />
      <input className="service-row__amount" name="amount" type="number" min="0" value={service.amount} onChange={updateAmount} placeholder="0.08" />
      <CurrencySelector selected={rate ? rate[0] : ''} rates={rates} onChange={onChangeRate} />
      <span className="service-row__rate">{service.rate.length === 0 ? 0 : new Intl.NumberFormat('en-IN', {style: 'currency', currency: service.rate[0]}).format(service.rate[1])}</span>
      <button type="button" onClick={() => removeItem(index)}>&times;</button>
    </li>
  );
}

export default Service;
