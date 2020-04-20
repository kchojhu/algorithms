import {swap} from "../sortUtil";

export const bubbleSort = (nums: number[]): number[] => {
    for (let i = 0; i < nums.length; i++) {
        console.log('nums', nums);
        for (let j = 0; j < nums.length - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                swap(nums, j, j + 1);
            }
        }
    }
    return nums;
};