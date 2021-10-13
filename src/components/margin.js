import React, { useEffect } from 'react';

function Margin({clientRate, supplierCost}) {

  useEffect(() => {
    console.log('margin: ', clientRate, supplierCost);
  }, [clientRate, supplierCost]);

  return(
    <div>
      <h3>Margin</h3>
      <div className="margin__value">{clientRate > 0 ? ((clientRate - supplierCost) / clientRate) * 100 : 0} %</div>
    </div>
  );
}

export default Margin;