import { memo, useEffect, useState } from "react";

export const Clock = memo(() => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(Date.now());
    }, 10);
  }, []);

  return <div>{time}</div>;
});
