export const quickSort = (nums: number[], startIndex: number = 0, endIndex: number = nums.length): number[] => {
    if (startIndex < endIndex) {
        const pivotValue = nums[startIndex];
        let pivotIndex = 0;
        for (let i = startIndex; i < endIndex; i++) {
            if (pivotValue > nums[i]) {
                const num = nums.splice(i, 1);
                nums.splice(pivotIndex, 0, ...num);
                pivotIndex++;
            }
        }

        // left sort
        quickSort(nums, startIndex, pivotIndex);

        // right sort
        quickSort(nums, startIndex + pivotIndex + 1, endIndex);
    }
    return nums;
}