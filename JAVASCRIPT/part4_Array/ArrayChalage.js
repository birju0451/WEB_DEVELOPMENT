console.log("1.------------------------------------------");
/*
1.Decelare an array named `teaFlavors` that contains the string `"green tea"`,`"black tea"` , and `oolong tea`.

Access the first element of the array and store it in a variable named `firstTea`
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"];

const firstTea = teaFlavors[0];
console.log(firstTea);

console.log("2.------------------------------------------");
/*
Decelare an array named `cities` containing `"London"` , `"Tokiyo"` ,`"Parish "` and `"New York"`.

Acess the third element in the array ans store it in the a variable named `favoriteCity`.
*/

let cities = ["London", "Tokio", "Parish", "New york"];
const favoriteCity = cities[2];
console.log(favoriteCity);

console.log("3.------------------------------------------");
/*
you hava named teaTypes containing "herbal tea ,white tea  and masala tea "
Change the second element of the array to "jasmine tea".
*/
let teaTypes = ["herbal tea", "white tea ", "masala tea"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes[1]);

console.log("4.------------------------------------------");
/*
4.Declare an array named `citiesVisited` containing `"Mumbai"` and `Sydney`
Add `"Berlin"` to the array using the push method .
 */

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Burley");
console.log(citiesVisited);

// console.log(citiesVisited)
// citiesVisited[citiesVisited.length] = "Berley"
// console.log(citiesVisited);
// console.log(citiesVisited.length)
console.log("5.------------------------------------------");
/*
5.You have an array named 'teaOrder' with `"chai"` ,
`"ice tea"` , `"match"` , and `"earley grey"`.

remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`
*/

let teaOrder = ["chai", "ice tea", "macha tea", "earl grey"];
console.log(teaOrder);
const lastOrder = teaOrder.pop();
console.log(lastOrder);
console.log(teaOrder);
console.log("6.------------------------------------------");
/*6. You have an array named `popularTeas` containing `"green tea"` , `"oolong tea"` and `"chai"`.

Create a Soft copy of this array named `softCopyTea`.
*/

let popularTeas = ["green tea", "ooolong tea", "chai"];
console.log(popularTeas);
let softCopyTea = popularTeas;
console.log(softCopyTea);

console.log("7.------------------------------------------");
/*
7.You have an array named `topCities` containg `"Burlin"` , `"Singapore"` , and `"New York"`.
Create a hard copy of this array named `hardCopyCities`.
 */
let topCities = ["Berlin", "Singapor", "NewYork"];
let hardCopyCities = [...topCities];
let hardCopyCities1 = topCities.slice();
topCities.pop();
console.log(topCities);
console.log(hardCopyCities1);
console.log(hardCopyCities);

console.log("8.------------------------------------------");
/*
8. You have  two array `europeanCities` containg `"paris"` and `"Rome"` , and `asianCities` containing `"Tokio"` and `"Bankok"`.
*/
let europeanCities = ["Paris" , "Rome"];
let asianCities = ["Tokio" , "Bankok"];
let worldCities = [europeanCities , asianCities]
let worldCities1 = europeanCities.concat(asianCities);

console.log(worldCities);
console.log(worldCities1)

console.log("9.------------------------------------------");
/*
9.You have an array named `teaMenu` containing 
`"masala chai"` ,`"oolong tea"` , `"green tea"`
and `"earl tea"`

Find the lenght of the array and store it in a variable named  `menuLength`.
*/
let teaMenu = ["Masala tea" , "oolong tea" , "green tea" , "early grey" ]
let menuLength = teaMenu.length;
console.log(menuLength);

/*
10.You have an array named `cityBucketList` containing `"Kyoto"` ,`"London"` ,`"Cape  Town"` and  `"Vancouver"` . 
Cheak if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["kyoto", "London" , "Cape Town" , "Vancouver"]

let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);
