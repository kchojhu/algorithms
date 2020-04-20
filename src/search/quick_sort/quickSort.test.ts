import {quickSort} from "./quickSort";

test('quickSort', () => {
    expect(quickSort([65, 25, 12, 22, 11])).toEqual([11, 12, 22, 25, 65]);
});

test('splice test', () => {
    const test = [4,6,3,5,2,1];
    const data = test.splice(2, 1);
    console.log(test, data);
})