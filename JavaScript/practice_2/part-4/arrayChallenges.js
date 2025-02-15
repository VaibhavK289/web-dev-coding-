/* 1. Declare an array named 'teaflavours' that contains the strings "green tea" , "black tea" , and "oolong tea". Access the first element 
of the array and store it in the variable named 'First tea' */

// let teaFlavours = ["green tea", "black tea", "oolong tea"];
// console.log(teaFlavours);
// let FirstTea = teaFlavours[0];
// console.log(FirstTea);

// Second Problem

// const cities = ["London", "Tokyo", "Paris", "New York"];
// console.log(cities);
// const favoriteCity = cities[2];
// console.log(favoriteCity);

// Third Problem

// let teaTypes = ["herbal tea", "white tea", "masala chai"];
// console.log(teaTypes);
// teaTypes[1] = "jasmine tea";
// console.log(teaTypes);

// // Fourth Problem 

// let citiesVisited = ["Mumbai", "Sydney"];
// citiesVisited.push("Berlin");
// console.log(citiesVisited);

// //Fifth Problem

// let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
// let lastOrder = teaOrders[3];
// teaOrders.pop(3);
// console.log(lastOrder);
// console.log(teaOrders);

//Better Approach
// lastOrder = teaOrders.pop()
// console.log(lastOrder);

// Sixth problem

// let popularTeas = ["green tea", "oolong tea", "chai"];
// let softCopyTeas = popularTeas;
// console.log(softCopyTeas);

// Better method 
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);

//Seventh problem 

// let topCities = ["Berlin", "Singapore", "New York"];
// let hardCopyCities = topCities.copyWithin()
// console.log(topCities);
// console.log(hardCopyCities);

//Eighth problem 

// let topCities = ["Berlin", "Singapore", "New York"];
// let hardCopyCities = [...topCities];   // 1st method
// topCities.pop();
// console.log(hardCopyCities);

//Eighth problem 

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];

let worldCities = europeanCities + "," + asianCities;
let worldCities1 = [europeanCities , asianCities];
let worldCities2 = []
console.log(worldCities);   //It returns a string.
console.log(worldCities1);