import React from 'react';
import IstorijaItem from '../components/IstorijaItem';

export default function Istorija({ pokusaji }) {
  const ukupanUlog = pokusaji.reduce((ukupno, element) => {
    return ukupno + element.ulog;
  }, 0)
  const ukupanDobitak = pokusaji.reduce((ukupno, element) => {
    return ukupno + element.dobitak;
  }, 0);
  const ukupnoZelena = pokusaji.reduce((ukupno, element) => {
    return ukupno + (element.boja === 'green' ? 1 : 0);
  }, 0);
  const ukupnoCrvena = pokusaji.reduce((ukupno, element) => {
    return ukupno + (element.boja === 'red' ? 1 : 0);
  }, 0);
  const parsed = pokusaji.reduce((ukupno, element) => {
    ukupno[element.broj] = (ukupno[element.broj] || 0) + 1;
    return ukupno;
  }, {})
  const sorted = Object.keys(parsed).sort((a, b) => { return parsed[a] - parsed[b] })
  return (
    <div className='container mt-2'>
      <StatistikaItem naziv='Ukupan broj pogadjanja' vrednost={pokusaji.length} />
      <StatistikaItem naziv='Ukupno dobrih zurki' vrednost={ukupnoZelena} />
      <StatistikaItem naziv='Ukupno losih zurki' vrednost={ukupnoCrvena} />
      <StatistikaItem naziv='Ukupan ulog' vrednost={ukupanUlog} />
      <StatistikaItem naziv='Ukupan broj poena' vrednost={ukupanDobitak} />
      <StatistikaItem naziv='Najcesci broj ljudi na zurci' vrednost={sorted[sorted.length - 1]} />
     
    </div>
  );
}
