var firstProto = {
  sayHello: function () {
    return "Hello " + this.name;
  },
};

var john = Object.create(firstProto, {
  name: {
    value: "John",
  },
});

console.log(john);

var secondProto = Object.create(firstProto, {
  sayHi: {
    value: function () {
      return "Hi " + this.name;
    },
  },
});

console.log(secondProto);

var bob = Object.create(secondProto, {
  name: {
    value: "Bob",
  },
});

console.log(bob);

var obj = Object.create(null);

console.log(obj);
