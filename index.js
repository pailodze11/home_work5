let count = 10;

const interval = setInterval(() => {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

  console.log(count);
  document.body.style.backgroundColor = randomColor;

  if (count === 0) {
    clearInterval(interval);
    setTimeout(() => {
      console.log(`Finished!`);
      document.body.style.backgroundColor = "white";
    }, 2000);
  }
  count--;
}, 1000);
