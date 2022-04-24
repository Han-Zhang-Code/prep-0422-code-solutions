var person = {
  firstName: 'Yuhan',
  lastName: 'Zhang',
  hobby: 'Gaming'
};
console.log(person);

var fullName = "The person's name is: \n" + person.firstName + ' ' + person.lastName;
console.log(fullName);
person.job = 'Programmer';
var job = "The person's current job is: \n" + person.job;
console.log(job);
person.previousJob = 'Student';
var previousjob = "The person's previous job is: \n" + person.previousJob;
console.log(previousjob);
console.log('The complete person Object: ', person);
