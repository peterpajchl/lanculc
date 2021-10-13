import './App.css';
import ClientRate from './components/client';
import Suppliers from './components/suppliers';
import Margin from './components/margin';
import React, { useState, useEffect } from 'react';
import getRemoteRates from './ratesService';

function App() {

  const [clientRate, setClientRate] = useState(0);
  const [supplierCost, setSupplierCost] = useState(0);
  const [rates, setRates] = useState([]);

  useEffect(() => {
    console.log('#1 - get rates');
    getRemoteRates().then((res) => {
      const rates = Object.entries(res.rates);
      setRates(rates);
    });
  }, []);

  return (
    <div className="app">
      <ClientRate rates={rates} onUpdate={setClientRate} />
      {<Suppliers rates={rates} onUpdate={setSupplierCost} />}
      {<Margin clientRate={clientRate} supplierCost={supplierCost} />}
    </div>
  );
}

export default App;
