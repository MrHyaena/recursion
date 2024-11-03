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
let doesntHaveIt = contains(nestedObject, "foo"); // false

function contains(obj, search) {
  if (obj.Object.keys(obj)[0] > -1) {
    return true;
  } else {
    return contains(Object.keys(obj)[0], search);
  }
}

console.log(hasIt);
