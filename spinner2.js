const spinnerArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let counter = 0;

for (let i = 0; i < 5000; i += 200) {
  const index = counter % 4;

  setTimeout(() => {
    process.stdout.write(spinnerArr[index]);
    counter++;
  }, i);

}
