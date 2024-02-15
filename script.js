new Promise((resolve, reject) => {
  
  
  
  
  
  
  
  
  
})const myfetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  console.log(myfetchPromise);
  
  myfetchPromise.then((response) => {
    console.log(`Received response: ${response.status}`);
  });
  
  console.log("Started request…");

  const myfetchPromisefetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  myfetchPromise.then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((data) => {
      console.log(data[0].name);
    });
  });

//   const myPromise = new Promise((resolve) => {
//   resolve("I am a resolved promise");
// });

// myPromise.then(result => console.log(result));