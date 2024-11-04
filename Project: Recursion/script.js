function fibonIt(num) {
  let array = [0, 1];
  for (let i = 2; i < num; i++) {
    let sum = array[array.length - 1] + array[array.length - 2];
    console.log(sum);
    array.push(sum);
  }
  return array;
}

let array = [0, 1];
console.log(fibsRec(8));

function fibsRec(num) {
  if (num == array.length) {
    return array;
  } else if (array.length < num) {
    fibonLast = array[array.length - 1];
    fibonPreLast = array[array.length - 2];
    fibonNext = fibonLast + fibonPreLast;
    array.push(fibonNext);
    return fibsRec(num);
  }
}

let newArray = [];
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));

function mergeSort(array) {
  let myArray = array;

  if (myArray.length == 0) {
    return newArray;
  }

  highest = Math.max(...myArray);
  indexHighest = myArray.indexOf(highest);
  myArray.splice(indexHighest, 1);
  newArray.push(highest);
  return mergeSort(myArray);
}
