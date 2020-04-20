import {
    binarySearch, bubbleSort,
    capitalizeWords,
    countUniqueValues,
    factorial,
    fib,
    isSubsequence,
    nestedEventSum, nestedEvstringifyNumber,
    power,
    productOfArray,
    reverse
} from "./index";

test('bubbleSort', () => {
    console.log(bubbleSort([1,5,2,4,8]));
});

test('binarySearch', () => {
    console.log(binarySearch([1,2,3,4,5], 6));
    // console.log(binarySearch([1,2,3,4,5], 4));
    // console.log(binarySearch([1,2,3,4,5], 6));
});

test('nestedEvstringifyNumber', () => {
    let obj = {
        num: 1,
        test: [],
        data: {
            val: 4,
            info: {
                isRight: true,
                random: 66
            }
        }
    };

    console.log(nestedEvstringifyNumber(obj));

});
test('capitalizeWords', () => {
    console.log(capitalizeWords(['abc', 'def', 'ghi']));
});

test('nextedEventSum', () => {
    const obj1 = {
        outer: 2,
        obj: {
            inner: 2,
            otherObj: {
                superInner: 2,
                notANumber: true,
                alsoNotANumber: "yup"
            }
        }
    };

    const obj2 = {
        a: 2,
        b: {b: 2, bb: {b: 3, bb: {b: 2}}},
        c: {c: {c: 2}, cc: 'ball', ccc: 5},
        d: 1,
        e: {e: {e: 2}, ee: 'car'}
    };

    console.log(nestedEventSum(obj1));
    console.log(nestedEventSum(obj2));
});

test('reverse', () => {
    console.log(reverse('abc'));
});

test('reverse', () => {
    console.log(reverse('abc'));
});

test('fib', () => {
    console.log(fib(1));
    console.log(fib(4));
    console.log(fib(10));
});

test('productOfArray', () => {
    console.log(productOfArray([1, 2, 3]));
    console.log(productOfArray([1, 2, 3, 10]));
});

test('factorial', () => {
    console.log(factorial(1));
    console.log(factorial(2));
    console.log(factorial(4));
    console.log(factorial(7));
});

test('power', () => {
    console.log(power(2, 0));
    console.log(power(2, 2));
    console.log(power(2, 4));
});

test('isSubSequence', () => {
    console.log(isSubsequence('hello', 'hello world'));
    console.log(isSubsequence('sing', 'string'));
    console.log(isSubsequence('abc', 'abracabcdabra'));
    console.log(isSubsequence('bra', 'abracabcdabra'));
});

test('x', () => {
    const t = [1, 20, 40, 4];

    console.log(t.sort((a, b): number => {
        return a > b ? 1 : -1;
    }));

});

test('test', () => {
    console.log(countUniqueValues([-2, -1, -1, 0, 1]));
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
});