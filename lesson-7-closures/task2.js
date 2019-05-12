'use strict';

function interviewQuestion(profession) {
  var prof = {
    designer: 'John can you please explain what UX design is?',
    teacher: 'What subject do you teach John?',
    other: 'Hello John, what do you do?'
  };
  return function (name) {
    if (name === 'John')
      for (var key in prof) {
        if (key === profession) {
          return prof[key];
        } else {
          return prof.other;
        }
      }
    else {
      console.log('We are interviewing John!')
    }
  }
}

console.log(interviewQuestion('teacher')('Jon'));

module.exports = interviewQuestion;