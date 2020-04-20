import {mergeSort} from "./mergeSort";

test('selectionSort', () => {
    expect(mergeSort([65, 25, 12, 22, 11])).toEqual([11, 12, 22, 25, 65]);
});

test('splice test', () => {
    const nums = [1,2,3,4, 5];
    const midIndex = Math.floor(nums.length / 2);
    console.log(nums.slice(0, midIndex));
    console.log(nums.slice(midIndex));
})

test('unshift test', () => {
    const nums = [1,2,3,4, 5];
    console.log(nums.shift(), nums);
})