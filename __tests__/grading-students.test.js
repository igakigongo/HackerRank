import { transformGrade } from '../src/grading-students';

describe('grading students', () => {
  it('does not round a failing grade', () => {
    expect(transformGrade(29)).toEqual(29);
  });

  it('rounds up a grade >= 38', () => {
    expect(transformGrade(38)).toEqual(40);
    expect(transformGrade(71)).toEqual(71);
    expect(transformGrade(73)).toEqual(75);
  });
});
