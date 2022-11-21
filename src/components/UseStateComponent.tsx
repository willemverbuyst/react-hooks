import { useState } from 'react';

export default function UseStateComponent() {
  const [numArr, setNumArr] = useState<number[]>([]);

  const handleClick = () => setNumArr([...numArr, numArr.length + 1]);

  console.log('UseStateComponent is rendered');

  return (
    <div>
      <h1>UseState</h1>
      <p>numArr: {JSON.stringify(numArr)}</p>
      <button onClick={handleClick}>Add Number</button>
    </div>
  );
}
