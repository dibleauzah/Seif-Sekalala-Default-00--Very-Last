//!_Finally, I'm resuming my algo-practice after (what feels like) an eternity! :-)

//!_Day-1: June 15, 2023.

//?_Wrong Attempt:
// var myArr = [1, 2, 3, 4, 5]
// var min = Infinity;
// var max = -Infinity;
// var sum = 0;
// function minMaxAvg(arr){
//     for (let i = 0; i <= arr.length; i++){
//       sum = sum + arr[i];
//         if (min < arr[i]){
//             min = arr[i];
//             } else {
//         if (max >= arr[i]){
//             max = arr[i];
//             }
//         }
//         var avg = sum / arr.length;
//         console.log("Hi! Please note: your min is " + min + " and your max is " + max + " and finally, your average is " + avg + " thank you; have a great day! :-)")
//     }
// }
// minMaxAvg(([1, 2, 3, 4, 5]));

//?_Attempt 2:

let myArray = [1, 2, 3, 4, 5];

var min = myArray[0];
var max = myArray[0];
var avg = 0;

for (let i = 0; i < myArray.length; i++){
	if (myArray[i] < min) min = myArray[i];
	if (myArray[i] > max) max = myArray[i];
	avg += myArray[i];
}

avg /= myArray.length;

console.log("Min is : " + min);
console.log("Max is : " + max);
console.log("Average is : " + avg);

//*--------------------------------------//

