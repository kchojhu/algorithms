import {bubbleSort, bubbleSortShort} from "./bubbleSort";

test('bubbleSort', () => {
    expect(bubbleSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
});

test('bubbleSortShort', () => {
    expect(bubbleSortShort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
});