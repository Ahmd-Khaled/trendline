export function createArray(N) {
  let newArr = [];
  for (let i = 1; i <= N; i++) {
    newArr.push(i);
  }
  return newArr;
}

export function createArrayFromNum(N) {
  return Array.from({ length: N }, (_, index) => index + 1);
}


export function createArrayFromTo(N1, N2) {
  let newArr = [];
  for (let i = N1; i <= N2; i++) {
    newArr.push(i);
  }
  return newArr;
}