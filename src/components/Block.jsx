import React from 'react';

function Block({ value, onClick }) {
  return (
    <div
      className='block'
      onClick={onClick}
      style={{
         border:"3px solid",
        height: "100px",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      }}
    >
      {value}
    </div>
  );
}

export default Block;
