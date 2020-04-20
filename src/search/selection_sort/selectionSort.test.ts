import {selectionSort} from "./selectionSort";

test('selectionSort', () => {
    expect(selectionSort([65, 25, 12, 22, 11])).toEqual([11, 12, 22, 25, 65]);
});
