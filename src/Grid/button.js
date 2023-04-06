import './grid.css';
import React, { useState } from 'react';
let flag = 0;
export default function (prop) {

  let [OX, OX_fun] = useState('');

  let change = () => {
    if (OX == '' && flag == 0 && (prop.it2 == 0)) {
      OX_fun('O'); flag = 1;
      prop.it(-1);
    }
    else if (OX == '' && flag == 1 && prop.it2 == 0) {
      OX_fun('X'); flag = 0;
      prop.it(1);
    }

  }

  return (
    <div className='btn'>
      <button className='btn' onClick={change} >{OX}</button>
    </div>

  )
}