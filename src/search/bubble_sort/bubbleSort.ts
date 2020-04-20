import {swap} from "../sortUtil";

export const bubbleSort = (nums: number[]): number[] => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                swap(nums, j, j + 1);
            }
        }
    }
    return nums;
};

export const bubbleSortShort = (nums: number[]): number[] => {
    for (let i = 0; i < nums.length; i++) {
        let isSwap = false;
        for (let j = 0; j < nums.length - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                swap(nums, j, j + 1);
                isSwap = true;
            }
        }
        if (!isSwap) break;
    }
    return nums;
};