import React from "react";
import Landscape from './Landscape';
import PCat from './Pcat';


function Board() {

  return(
    <div className="world">
      <Landscape />
      <PCat n_player={4} x={0} y={0} />
      <PCat n_player={3} x={0} y={0} />
      <PCat n_player={2} x={0} y={0} />
      <PCat n_player={1} x={0} y={0} />

    </div>
  );
}

export default Board;
