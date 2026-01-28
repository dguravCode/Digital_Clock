const sound = document.querySelector('audio');

setInterval(() => {
  const ele = document.querySelector(".clock");

  const time = new Date();
  const options = {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  ele.textContent = time.toLocaleTimeString("en-US", options);
  sound.play();
}, 1000);

