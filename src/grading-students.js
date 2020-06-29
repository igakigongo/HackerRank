const MOD = 5;

export const transformGrade = (grade) => {
  if (grade < 38) return grade;

  const remainder = grade % MOD;
  if (remainder <= 2) return grade;

  return grade + (MOD - remainder);
};

export const gradingStudents = (grades) => grades.map(transformGrade);
