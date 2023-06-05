export function beginCountDown(seconds) {
    let counter = seconds;

    const interval = setInterval(() => {
      counter--;
      setSeconds(counter);

      if (counter < 0) {
        clearInterval(interval);
      }
    }, 1000);
  }