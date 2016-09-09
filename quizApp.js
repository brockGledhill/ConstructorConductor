//We're going to create the JS for a basic quiz application.

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors.

//Create a QuizUser constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

var QuizUser = function(name, email, password, totalScore){
  this.name       = name;
  this.email      = email;
  this.password   = password;
  this.totalScore = totalScore;
};


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

var Question = function(title, answersArray, rightAnswer, difficulty){
  this.title        = title;
  this.answersArray = answersArray;
  this.rightAnswer  = rightAnswer;
  this.difficulty   = difficulty;
};


//Create a quizUsers Array which is going to hold all of our users.

var quizUsers = [];


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

var charlie = new QuizUser('Charlie', 'chuck@peanuts.com', 'goodgreif', 0);
var monk = new QuizUser('Adrian', 'defective_detective@sfpd.com', 'trudy', 100);
var hopper = new QuizUser('Will', 'theupsidedown@strangerthings.com', 'toothless', 11);

quizUsers.push(charlie, monk, hopper);
//Create a questions Array which is going to hold all of our questions

var questions = [];

//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
  var qOne = new Question('Question 1', 'T/F: Inheritance is achieved in JavaScript through Prototypes?', 'T', 3);
  var qTwo = new Question('Question 2', 'T/F: JavaScript is just a scripting version of Java', 'F', 4);
  var qThree = new Question('Question 3', "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value", 'T', 2);
//Fill in the rest of the required data as you see appropriate.
//Now push all of your instances of Question into the questions Array

questions.push(qOne, qTwo, qThree);

console.log('My users Array and my questions array are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

for (var i = 0; i < quizUsers.length; i++){
  console.log(quizUsers);
}

for (var i = 0; i < questions.length; i++){
  console.log(questions);
}
