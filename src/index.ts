export const bubbleSort = (nums: number[]): number[] => {
  const sortNums = nums.slice();
  for (let i = 0; i < sortNums.length; i++) {
    for (let j = 0; j < sortNums.length - i; j++) {
      if (sortNums[j] > sortNums[j + 1]) {
        swap(sortNums, j, j + 1);
      }
    }
    // console.log(sortNums);
  }

  return sortNums;
}

export const swap = (nums:number[], idx1: number, idx2: number): void => {
  // [nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]];
  const temp = nums[idx1];
  nums[idx1] = nums[idx2];
  nums[idx2] = temp;
}

export const binarySearch = (nums: number[], findNum: number): number => {
  console.log('nums', nums);
  if (nums.length === 0) {
    return -1;
  }
  let midIndex = Math.floor(nums.length / 2);
  if (nums[midIndex] > findNum) {
    const left = binarySearch(nums.slice(0, midIndex), findNum);
    midIndex -= left;
  } else if (nums[midIndex] < findNum) {
    const right = binarySearch(nums.slice(midIndex + 1), findNum);
    midIndex += right;
  }

  return midIndex;
}

export const nestedEvstringifyNumber = (o: any): number => {
  for(const k in o) {
    if (typeof o[k] === 'number' ) {
      o[k] = o[k].toString();
    } else if (typeof o[k] === 'object' ) {
      o[k] = nestedEvstringifyNumber(o[k]);
    }
  }

  return o;
}

export const capitalizeWords = (strs: string[]) : string[] => {
  if (strs.length === 1) {
    return [capitalizeWord(strs[0])];
  }

  const result = capitalizeWords(strs.slice(0, -1));
  // @ts-ignore
  result.push(capitalizeWord(strs.pop()));
  return result;
}

const capitalizeWord = (str: string): string => str[0].toUpperCase() + str.substring(1)

export const nestedEventSum = (o: any): number => {
  let evenSum = 0;

  for(const k in o) {
    if (typeof o[k] === 'number' ) {
        evenSum += o[k] % 2 === 0 ? o[k] : 0;
    } else if (typeof o[k] === 'object' ) {
        evenSum += nestedEventSum(o[k]);
    }
  }

  return evenSum;
}

export const reverse = (str: string): string => {
  if (str.length === 1) {
    return str;
  }

  return reverse(str.slice(1)) + str[0];
};


export const fib = (num: number): number => {
  if (num === 2 || num === 1) {
    return 1;
  }

  return fib(num - 1) + fib(num - 2);
}

export const productOfArray = (numArray: number[] = []): number=> {
  if (numArray.length == 0) {
    return 0;
  }

  if (numArray.length == 1) {
    return numArray[0];
  }

  const num = numArray.shift() || 0;
  return num * productOfArray(numArray);
}

export const factorial = (num: number): number => {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

export const power = (num: number, p: number): number => {
  if (p === 0) {
    return 1;
  }

  return num * power(num, p - 1);
}



export const isSubsequence = (strA: string, strB: string): boolean => {
  if (strA.length > strB.length) {
    return false;
  }
  let endIndex = strA.length - 1;
  let stringSequence = strB.substring(0, strA.length);

  while(endIndex < strB.length) {
     if (strA === stringSequence) {
       return true;
     }
     stringSequence = stringSequence.substring(1) + strB.substring(endIndex + 1, endIndex + 2);
     endIndex++;
  }

  return false;
};

export const countUniqueValues = (nums: number[]): number => {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j];
    }
  }

  console.log('nums', nums);
  return i + 1;

  //
  // let left = 0;
  // let right = 1;
  // let uniqueCount = 1;
  //
  // while (nums[right] !== undefined) {
  //   if (nums[left] !== nums[right]) {
  //     uniqueCount++;
  //   }
  //    left++;
  //    right++;
  // }
  //
  // return uniqueCount;
}

// const sumZero = (numbers: number[]): [number, number] | null => {
//   let left = 0;
//   let right = numbers.length - 1;
//
//   while (left < right) {
//     const sum = numbers[left] + numbers[right];
//     if (sum === 0) {
//       return [numbers[left], numbers[right]];
//     }
//
//     sum > 0 ? right-- : left++;
//   }
//
//   return null;
// }

// const sumZero = (numbers: number[]): [number, number] | null => {
//   const copyNumbers = numbers.slice();
//
//   while (copyNumbers.length > 0) {
//     const num = copyNumbers.shift();
//     if (num) {
//       const findNum = copyNumbers.filter(n => (num + n) === 0);
//       if (findNum[0]) {
//         return [num, findNum[0]];
//       }
//     }
//   }
//
//   return null;
// }

// console.log(sumZero([-4, -2, -1, 0, 1, 2, 3]));


// const validAnagram = (a: string, b: string) => {
//   return a.split('').slice().sort().join('') === b.split('').slice().sort().join('');
// };
//
// console.log(validAnagram('aaz', 'zza'));
// console.log(validAnagram('anagram', 'nagaram'));

// const same = (a: number[], b: number[]): boolean => {
//   if (a.length !== b.length) return false;
//
//   return b.sort().join(',') === a.map(v => v * v).sort().join(',')
// };
//
// console.log(same([1,2,3], [4,1,9]));
// console.log(same([1,2,3], [1,9]));
// console.log(same([1,2,1], [4, 4, 1]));