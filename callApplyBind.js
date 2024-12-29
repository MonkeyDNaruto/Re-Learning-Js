var person = {
  firstName: "John",
  lastName: "Rai",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

var rob = {
  firstName: "Rob",
  lastName: "Stark",
};

console.log(person.fullName.call(rob));

var definePerson = function (age, job) {
  return console.log(
    this.fullName() + " is " + age + " years old and he is a " + job
  );
};

definePerson.call(person, 19, "devloper");
definePerson.apply(person, [20, "designer"]);
var getPerson = definePerson.bind(person, 30);
getPerson("graphic designer");
getPerson("Teacher");
