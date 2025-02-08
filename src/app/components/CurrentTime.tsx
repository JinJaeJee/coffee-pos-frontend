import React, { useState, useEffect } from "react";
import { format } from "date-fns";

const CurrentTimeComponent: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = format(now, "MMMM do yyyy, hh:mmaaa");
      setCurrentTime(formattedTime);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{currentTime}</p>
    </div>
  );
};

export default CurrentTimeComponent;
