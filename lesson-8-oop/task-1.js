'use strict';

(function () {

  function Question(question, answerChoice, correctAnswer) {
    var self = this;

    self.question = question;
    self.answerChoice = answerChoice;
    self.correctAnswer = correctAnswer;
  }

  Question.prototype.displayQuestion = function () {
    alert(self.question);
    for (var number in self.answerChoice) {
      alert(number + ' ' + self.answerChoice[number]);
    }
  };

  Question.prototype.checkAnswerUser = function () {
    if (answerUser === self.correctAnswer) {
      alert("It's a correct answer!");
    } else {
      alert("It's not a right answer!");
    }
  };

  var questionOne = new Question('What is the fastest car in the world?',
    {'1.': 'Bugatti Chiron', '2.': 'McLaren F1', '3.': 'Zenvo ST1'},
    1);

  var questionTwo = new Question('What speed can develop the fastest car in the world?',
    {'1.': '375 km/h', '2.': '463 km/h', '3.': '502 km/h'},
    2);

  var questionThree = new Question('How much is the fastest car in the world?',
    {'1.': '2,65 mln USD', '2.': '1,22 mln USD', '3.': '850 thousand USD'},
    1);

  var arrQuastion = [questionOne, questionTwo, questionThree];

  /*function randomQuastion(arrQuastion) {
    return Math.floor(
      Math.random() * arrQuastion.length)
    )
  }*/

  var randomQuastion = Math.floor(Math.random() * arrQuastion.length);

  arrQuastion[randomQuastion].displayQuestion();

  var answerUser = parseInt(prompt('Enter the correct answer: ', ''));

  arrQuastion[randomQuastion].checkAnswerUser();
}());
