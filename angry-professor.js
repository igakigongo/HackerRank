export const YES = 'YES';
export const NO = 'NO';

const cancelled = (threshold, arrivalTimes) => {
  let early = 0;
  for (let i = 0; i < arrivalTimes.length; i += 1) {
    early += arrivalTimes[i] <= 0 ? 1 : 0;
    if (early >= threshold) {
      return NO;
    }
  }
  return YES;
};

export default cancelled;
