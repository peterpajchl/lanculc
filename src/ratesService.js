// Module to provide API for exchange rates

async function getRemoteRates(baseCurrency = "GBP") {
  const res = await fetch('https://v6.exchangerate-api.com/v6/427cd3ffeae153ee12b4834e/latest/GBP');
  const json = await res.json();
  //console.log('rates', json);
  return {
    base: json['base_code'],
    rates: json['conversion_rates'],
    lastUpdated: json['time_last_update_unix']
  };
}

export default getRemoteRates;