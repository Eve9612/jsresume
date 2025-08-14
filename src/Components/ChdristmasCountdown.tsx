import { useState, useEffect } from "react";

function ChristmasCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const currentYear = now.getFullYear();
      let christmas = new Date(currentYear, 11, 25); // Month is 0-based (11 = December)

      // If Christmas has already passed this year, set it to next year
      if (now > christmas) {
        christmas = new Date(currentYear + 1, 11, 25);
      }

      const diff = christmas.getTime() - now.getTime(); // milliseconds

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }

    updateCountdown(); // run once immediately
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer); // cleanup when component unmounts
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial", fontSize: "1.5rem" }}>
      <h1>Christmas Countdown</h1>
      <p>
        {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes{" "}
        {timeLeft.seconds} Seconds
      </p>
    </div>
  );
}

export default ChristmasCountdown;