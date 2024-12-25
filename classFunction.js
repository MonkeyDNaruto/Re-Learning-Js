function sum(a, b, fn) {
  console.log(a + b);
  console.log(fn());
}

function done() {
  return "Function is executed";
}

sum(10, 20, done);

var scores = [45, 66, 34, 80, 87];

function checkResult(arr, fn) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
}

function passOrFail(score) {
  return score >= 50;
}

function calcDiffrence(score) {
  return score - 50;
}

console.log(checkResult(scores, passOrFail));
console.log(checkResult(scores, calcDiffrence));

function finalResult(score) {
  if (score >= 81) {
    return function (name) {
      console.log(
        name + ", you passed an exam and you are student of State University"
      );
    };
  } else if (score >= 50) {
    return function (name) {
      console.log(
        name + ", you passed an exam and you are student of State Collage"
      );
    };
  } else {
    return function (name) {
      console.log(name + ", you failed!");
    };
  }
}

var result1 = finalResult(87);
result1("John");

var result2 = finalResult(67);
result2("Grey");

finalResult(44)("Ami");
