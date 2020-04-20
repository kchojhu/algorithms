import {getNumberPosition, maxNumberLength, radixSort} from "./radixSort";

test('radixSort', () => {
    expect(radixSort([65, 25, 12, 22, 11])).toEqual([11, 12, 22, 25, 65]);
    expect(radixSort([1654, 253, 132, 22, 11])).toEqual([11, 22, 132, 253, 1654]);
});

test('maxNumberLength', () => {
    expect(maxNumberLength([1, 12, 123])).toBe(3);
});

test('getNumberPosition', () => {
    expect(getNumberPosition(123, 0)).toBe(3);
    expect(getNumberPosition(123, 1)).toBe(2);
    expect(getNumberPosition(123, 2)).toBe(1);
});