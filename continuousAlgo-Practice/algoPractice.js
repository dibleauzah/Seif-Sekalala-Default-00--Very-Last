
arr = [1, 2, 3, 4, 5];

function minMaxAvg(arr){
    var min = Infinity;
    var max = -Infinity;
    var sum = 0;

    for (let i = 0; i <= arr.length; i++){
      sum = sum + arr[i];
        if (min < arr[i]){
            min = arr[i];
        } else {
        if (max >= arr[i]){
            max = arr[i];
        }
        }
        var avg = sum / arr.length;
        console.log("Hi! Please note: your min is " + min + " and your max is " + max + " and finally, your average is " + avg + " thank you; have a great day! :-)")
    }
}

console.log(minMaxAvg);