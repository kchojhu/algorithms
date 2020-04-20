import {swap} from "../sortUtil";

export const selectionSort = (nums: number[]): number[] => {

    for (let i = 0; i < nums.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[minIndex] > nums[j]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            swap(nums, i, minIndex);
        }
    }

    return nums;
}