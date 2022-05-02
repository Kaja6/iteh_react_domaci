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
      <IstorijaItem naziv='Ukupan broj pogadjanja' vrednost={pokusaji.length} />
      <IstorijaItem naziv='Ukupno dobrih zurki' vrednost={ukupnoZelena} />
      <IstorijaItem naziv='Ukupno losih zurki' vrednost={ukupnoCrvena} />
      <IstorijaItem naziv='Ukupan ulog' vrednost={ukupanUlog} />
      <IstorijaItem naziv='Ukupan broj poena' vrednost={ukupanDobitak} />
      <IstorijaItem naziv='Najcesci broj ljudi na zurci' vrednost={sorted[sorted.length - 1]} />
     
    </div>
  );
}
