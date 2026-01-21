function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // Write your code below

  let unique1 = arr1.filter((o) => arr2.indexOf(o) === -1);
  let unique2 = arr2.filter((o) => arr1.indexOf(o) === -1);

  const unique = unique1.concat(unique2);

  if(unique){
    return unique;
  }else{
    return [];
  }
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
