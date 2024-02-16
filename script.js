// //fetch example
// //calling fetch API and assigning the return value to the fetchPromise variable

// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",

// )

// console.log(fetchPromise);
// fetchPromise.then((Response) => {
//   console.log(`received response: ${Response.status}`);
// });

// console.log("started request...");


// chaining promises
// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );

// // fetchPromise.then((response) => {
// //   const jsonPromise = response.json();
// //   jsonPromise.then((data) => {
// //     console.log(data[0].name);
// //   })
// });

// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );

// fetchPromise
// .then((response) => response.json())
// .then((data) => {
//   console.log(data[0].name);
// });
