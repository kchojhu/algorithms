export const mergeSort = (nums: number[]): number[] => {
    if (nums.length === 1) {
        return nums;
    }

    const midIndex = Math.floor(nums.length / 2);

    const left = mergeSort(nums.slice(0, midIndex));
    const right = mergeSort(nums.slice(midIndex));

    const sortArray: number[] = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            sortArray.push(left[0]);
            left.shift();
        } else {
            sortArray.push(right[0]);
            right.shift();
        }
    }

    if (left.length > 0) {
        sortArray.push(...left);
    }

    if (right.length > 0) {
        sortArray.push(...right);
    }

    return sortArray;
}