const zeleniBrojevi = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41];

export const getBoja = broj => {
  if (broj === 0) {
    return 'yellow';
  }
  return zeleniBrojevi.includes(broj) ? 'green' : 'red' ;
}