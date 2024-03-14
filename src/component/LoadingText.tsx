import { useEffect, useState } from 'react';

interface Props {
  items: string[];
  interval?: number;
}

export const LoadingText: React.FC<Props> = ({ items, interval = 1000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [items, interval]);

  return <h3>{items[index]}</h3>;
};