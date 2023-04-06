import React, { useState } from 'react';
import './Grid/grid.css';
import Grid from './Grid/grid.js'
function App() {

  let [state, state1] = useState(1);

  let reset_fun = () => {
    if (state == 1)
      state1(0);
    else
      state1(1);

  }


  return (
    <div >
      <form><button className='reset' onClick={reset_fun}><h3>Reset Game</h3></button></form>
      <div>
        <Grid ok={state} />
      </div>
    </div>

  );
}

export default App;
