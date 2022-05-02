import React from 'react';
import { getBoja } from '../boje';

export default function Broj({ broj }) {
  return (
    <div className={'col-1 pl-3 pr-3 display-3 border d-flex  align-items-center justify-content-center ' + getBoja(broj)} >
      {broj}
    </div>);
}