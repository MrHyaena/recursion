console.log("Hello");

// First

function sumRange(n) {
  x = 0;
  if (n == 1) {
    return n;
  } else {
    return (n = n + sumRange(n - 1));
  }
}

// Secons

function power(x, n) {
  if (n == 0) {
    return 1;
  } else {
    return (x = x * power(x, n - 1));
  }
}

// Third

function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Fourth

var allAreLessThanSeven = all([1, 2, 7], function (num) {
  return num < 7;
});

function all(arr, fun) {
  if (arr.length === 0) return true;

  if (fun(arr[0])) {
    arr.splice(0, 1);
    return all(arr, fun);
  } else {
    return false;
  }
}

// Fifth

var six = productOfArray([1, 2, 3]); // 6
var sixty = productOfArray([10, 3, 10]); // 60

function productOfArray(arr) {
  let num = 0;
  if (arr.length === 1) {
    return arr[0];
  } else {
    num = arr[0];
    arr.splice(0, 1);
    return num * productOfArray(arr);
  }
}

// Sixth

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

let hasIt = contains(nestedObject, 44); // true

function contains(obj, search) {
  // Object has only one property

  let objectLength = Object.keys(obj).length;
  let indexObj = objectLength - 1;
  let propOne = obj[Object.keys(obj)[indexObj]];

  if (objectLength == 1) {
    // Object length is one

    if (obj.propOne == search) {
      // Equals

      return console.log(true);
    } else if (typeof propOne === "object") {
      // Is object

      return contains(propOne, search);
    } else if (obj.propOne !== search) {
      // Doesnt equal

      return console.log(false);
    }
  }

  // Object has more properties
  else {
    let objectArray = Object.keys(obj);
    objectArray.map((prop) => {
      if (typeof obj[prop] !== "object") {
        if (obj[prop] == search) {
          return true;
        } else {
          return false;
        }
      } else typeof obj[prop] === "object";
      contains(obj[prop], search);
    });
  }
}

// Seventh
let intCount = 0;
var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7

function totalIntegers(array) {
  array.map((item) => {
    if (typeof item == "number") {
      intCount = intCount + 1;
    } else if (Array.isArray(item)) {
      totalIntegers(item);
    }
  });

  return;
}

function totalIntegers(array) {
  if (array.length === 0) return 0;

  let total = 0;
  let first = array.shift();

  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }

  return total + totalIntegers(array);
}

// Eight

function SumSquares(array) {
  if (array.length === 0) return 0;

  let total = 0;
  let first = array.shift();

  if (Array.isArray(first)) {
    total += SumSquares(first);
  } else if (Number.isInteger(first)) {
    total = total + first * first;
  }

  return total + SumSquares(array);
}

// Ninth

console.log(replicate(3, 5)); // [5, 5, 5]

function replicate(nas, num) {
  if (nas < 1) {
    return [];
  } else if (nas >= 1) {
    return [num].concat(replicate(nas - 1, num));
  }
}
