import React from 'react';
import Block from './block';

function BoardRow({ startIndex, state, handleClick }) {
  return (
    <div className='board-row'>
      <Block value={state[startIndex]} onClick={() => handleClick(startIndex)} />
      <Block value={state[startIndex + 1]} onClick={() => handleClick(startIndex + 1)} />
      <Block value={state[startIndex + 2]} onClick={() => handleClick(startIndex + 2)} />
    </div>
  );
}

export default BoardRow;
