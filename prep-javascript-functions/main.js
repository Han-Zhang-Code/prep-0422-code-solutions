function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var mins = convertHoursToMinutes(2);
console.log('two hours equal to', mins + ' mins.');

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
console.log(getGreeting('world'));

function addAndMultiplyBy5(num1, num2) {
  var sum = num1 + num2;
  return 5 * sum;
}
console.log('result: ', addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}
console.log('result: ', multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
console.log('result: ', subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return 2 * radius * Math.PI;
}
console.log('result of Circumference: ', getCircleCircumference(5));

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
console.log(getFullName('Yuhan', 'Zhang'));

function cube(number) {
  return number * number * number;
}
console.log('result of cube: ', cube(5));
