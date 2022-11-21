import { useEffect, useState } from 'react';

export default function UseEffectComponent() {
  const [num, setNum] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => setNum((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  console.log('UseEffectComponent is rendered');

  return (
    <div>
      <h1>UseEffect</h1>
      <p>{num}</p>
    </div>
  );
}
