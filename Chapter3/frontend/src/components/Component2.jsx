import React, { useContext, useState } from 'react';
import { CountContext } from '../Context';

export default function Component2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Parent />
      </CountContext.Provider>
    </div>
  );
}

function Parent() {
  return (
    <>
      <Value />
      <Buttons />
    </>
  );
}

function Value() {
  const { count } = useContext(CountContext);
  return (
    <div>
      <h3>Value {count}</h3>
    </div>
  );
}

function Buttons() {
  const { count, setCount } = useContext(CountContext);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
}
