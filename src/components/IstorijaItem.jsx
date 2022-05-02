import React from 'react';

export default function IstorijaItem({ naziv, vrednost }) {
  return (
    <div className='d-flex justify-content-between align-items-center border'>
      <div className='display-4'>
        <b>{naziv}</b>
      </div>
      <div className='display-4'>
        {vrednost}
      </div>
    </div>
  );
}