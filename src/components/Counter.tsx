import React, { useState } from 'react';

type Counterprops = {
    initialCount: number;
}

export const Counter: React.FC<Counterprops> = ({ initialCount }) => {

  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount((prev) => ++prev);
  };

  const handleDecrement = () => {
    setCount((prev) => --prev);
  };

  const handleRestart = () => {
    setCount(0);
  };

  const handleSwithSigns = () => {
    setCount((prev) => prev * -1);
  }; 
    
  return (
    <>
      <div style={{textAlign: 'center'}}>
        <h3 data-testid='count'>{count}</h3>
      </div>
      <div style={{display: 'flex', justifyContent:'center', marginTop: '.5em'}}>
        <button style={{paddingBlock: '1em', paddingInline: '1em', marginInline: '1em', borderRadius: '.5em', border: 'none', cursor: 'pointer'}} onClick={handleIncrement}>increment</button>
        <button style={{paddingBlock: '1em', paddingInline: '1em', marginInline: '1em', borderRadius: '.5em', border: 'none', cursor: 'pointer'}} onClick={handleDecrement}>decrement</button>
        <button style={{paddingBlock: '1em', paddingInline: '1em', marginInline: '1em', borderRadius: '.5em', border: 'none', cursor: 'pointer'}} onClick={handleRestart}>restart</button>
        <button style={{paddingBlock: '1em', paddingInline: '1em', marginInline: '1em', borderRadius: '.5em', border: 'none', cursor: 'pointer'}} onClick={handleSwithSigns}>switchSigns</button>
      </div>
    </>

  );
};
