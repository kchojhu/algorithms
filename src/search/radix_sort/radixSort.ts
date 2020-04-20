export const maxNumberLength = (num: number[]): number => {
    return num.reduce((previousValue, currenValue) => Math.max(previousValue, currenValue), -Infinity).toString().length;
}

export const getNumberPosition = (num: number, pos: number): number => {
    const numberString = num.toString().split('');
    const numberPosition = numberString[numberString.length - 1 - pos];

    if (numberPosition) {
        return parseInt(numberPosition);
    }

    return 0;
}

interface IBucket {
    [num: number]: number[]
}

export const radixSort = (nums: number[], numberLength?: number) : number[] => {
    numberLength = numberLength ?? maxNumberLength(nums);

    for(let i = 0; i < numberLength; i++) {
        const buckets:IBucket = {};
        for(let j = 0; j < nums.length; j++) {
            const numberPosition = getNumberPosition(nums[j], i);
            buckets[numberPosition] ? buckets[numberPosition].push(nums[j]) : buckets[numberPosition] = [nums[j]];
        }

        nums = [];
        for(let k = 0; k < 10; k++) {
            nums.push(...buckets[k]);
        }
    }

    return nums;
}