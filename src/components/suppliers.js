import React, { useState, useEffect } from 'react';
import Service from './service';

function Suppliers({ rates, onUpdate}) {
  const [services, setServices] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = () => {
    console.log('suppliers: add item');
    const service = {
      description: '',
      amount: 0,
      rate: ['GBP', 1]
    };
    setServices([...services, service]);
  };

  const updateItem = (index, item) => {
    console.log('suppliers: update item');
    const copy = [...services];
    copy[index] = item;
    setServices(copy);
  };

  const removeItem = (index) => {
    console.log('suppliers: remove item at index ', index);
    setServices(services.filter((item, i) => i !== index));
  }

  function calculateTotalCost(arr) {
    const total = arr.reduce((previous, current) => previous += current.amount / current.rate[1], 0);
    console.log('suppliers: total ', total);
    return total;
  }

  // calculate margin and broadcast
  useEffect(() => {
    console.log('suppliers: effect set total');
    if (services.length === 0) {
      setTotal(0);
    } else {
      setTotal(calculateTotalCost(services));
    }
  }, [onUpdate, services]);

  useEffect(() => {
    console.log('suppliers: broadcast total');
    onUpdate(total);
  }, [onUpdate, total]);

  return (
    <div>
      <h3>Paid out to suppliers per service</h3>
      <form action="/" method="post" className="service-form">
        <ol className="service-list">
          {services.map((s, i) => <Service rates={rates} service={s} key={i} updateItem={updateItem} removeItem={removeItem} index={i} />)}
        </ol>
      </form>
      <div className="total-bar">
        <button className="primary-button" type="button" onClick={addItem}>Add item</button>
        <span>Total: {total}</span>
      </div>
    </div>
  );
}

export default Suppliers;
