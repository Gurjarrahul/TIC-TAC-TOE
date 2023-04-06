import './grid.css';
import Button from './button.js';
import React, { useState } from 'react';
import Wining_screen from './Wining_screen.js'
let Grid = (prop) => {

  let button_array = [];
  let OX_array = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let OX_fun;
  [OX_array, OX_fun] = useState(OX_array);

  let [win_flag, win_flag_fun] = useState(0);
  let [player, Player_fun] = useState('Player1');

  let [win_lost, win_lost_fun] = useState('Match is Ongoing!');

  let [Player_turn, player_turn_fun] = useState(<div><h2 className='player1_turn'>Player1</h2></div>);


  for (let i = 0; i < 9; i++)
    button_array[i] = (data) => {

      OX_array[i] = data;
      if (data == -1) {
        Player_fun("player2 "); player_turn_fun(<div><h2 className='player2_turn'>Player2</h2></div>);
      }
      else {
        Player_fun('player1'); player_turn_fun(<div><h2 className='player1_turn'>Player1</h2></div>);
      }
      OX_fun(OX_array);
      let draw_flag = 0;

      for (let s = 0; s < 9; s++)
        if (OX_array[s] == 0)
          draw_flag++;


      for (let index = 0; index < 3; index++) {
        if ((OX_array[0 + index * 3] == OX_array[index * 3 + 1] && OX_array[1 + index * 3] == OX_array[2 + index * 3] && OX_array[index * 3 + 1] != 0)
          || (OX_array[0 + index] == OX_array[3 + index] && OX_array[6 + index] == OX_array[3 + index] && OX_array[index + 3] != 0) ||
          (OX_array[0] == OX_array[4] && OX_array[4] == OX_array[8] && OX_array[4] != 0) ||
          ((OX_array[6] == OX_array[4] && OX_array[4] == OX_array[2] && OX_array[4] != 0))) {
          win_flag_fun(1);
          player_turn_fun(<div></div>);
          win_lost_fun(`${player} WIN`);
          draw_flag = -1;
          break;
        }
      }
      if (draw_flag == 0 && win_flag == 0) {
        win_lost_fun("Match Draw");
        player_turn_fun(<div></div>);
        win_flag_fun(1);
      }


    }
  let win_screen = <p></p>;
  if (win_flag == 1) {
    win_screen = <Wining_screen win_lost={win_lost} />;
  }


  return (

    <div>

      <div>
        {win_screen}
      </div>

      {<div id="grid">{
        button_array.map(a => (
          <Button
            it={a} it2={win_flag} it3={prop.win_lost} />
        ))
      }</div>}

      {Player_turn}

    </div>
  )
}

export default Grid;