function calc(num1) {
  var num2 = 10;
  return function (num3) {
    sum = num1 + num2 + num3;
    console.log(sum);
  };
}

var add = calc(20);

add(15);

function a() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      (function () {
        console.log(i);
      })()
    );
  }
  return arr;
}

a();
