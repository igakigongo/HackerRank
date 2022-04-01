export const YES = 'YES';
export const NO = 'NO';

const cancelled = (threshold, arrivalTimes) => {
  for (let i = 0, early = 0; i < arrivalTimes.length; i += 1) {
    early += (arrivalTimes[i] <= 0) * 1;
    if (early >= threshold) return NO;
  }
  return YES;
};

export default cancelled;
