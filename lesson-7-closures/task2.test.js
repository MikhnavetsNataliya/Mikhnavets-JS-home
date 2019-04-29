var interviewQuestion = require('./task2');

describe('Interview with a person', function interview() {
  it('check profesion', function positiveProfession() {
    var prof = {
      designer: 'John can you please explain what UX design is?',
      teacher: 'What subject do you teach John?',
      other: 'Hello John, what do you do?'
    };
    expect(interviewQuestion('teacher')('John')).toEqual('What subject do you teach John?');
  });
  it('negativ check profesion', function negativeProfession() {
    var prof = {
      designer: 'John can you please explain what UX design is?',
      teacher: 'What subject do you teach John?',
      other: 'Hello John, what do you do?'
    };
    expect(interviewQuestion('singer')('John')).toEqual('Hello John, what do you do?');
  });
  it('negativ check name', function negativeName() {
    var prof = {
      designer: 'John can you please explain what UX design is?',
      teacher: 'What subject do you teach John?',
      other: 'Hello John, what do you do?'
    };
    expect(interviewQuestion('teacher')('Mark')).toEqual('We are interviewing John!');
  });
});
