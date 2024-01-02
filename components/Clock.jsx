import React from "react";

export default function Clock(props) {
  const [time, setTime] = React.useState(getTime);

  function getTime() {
    return new Date();
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const dayName = time.toLocaleString([], { weekday: "long" });
  const dayNumber = time.getDate();
  const month = time.toLocaleString([], { month: "long" });
  const year = time.getFullYear();
  const clockTime = time.toLocaleString([], {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h12",
  });

  return (
    <div className="Clock">
      <button
        className="close-button"
        name="Clock"
        onClick={props.toggleClock}
      ></button>
      <div className="date-info">
        <p>{dayName},</p>
        <p>{month} {dayNumber},</p>
        <p>{year}</p>
      </div>
      <div className="time-info">{clockTime}</div>
    </div>
  );
}
