import {SinglyLinkedList} from "./SinglyLinkedList";

test('Push', () => {
    const singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push('a');
    singlyLinkedList.push('b');
    singlyLinkedList.push('c');

    console.log(singlyLinkedList.toString());
});

test('Pop', () => {
    const singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push('a');
    singlyLinkedList.push('b');
    singlyLinkedList.push('c');
    const popNode = singlyLinkedList.pop();
    console.log('Pop', popNode);
    console.log(singlyLinkedList.toString());
});

test('Shift', () => {
    const singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push('a');
    singlyLinkedList.push('b');
    singlyLinkedList.push('c');
    const shiftNode = singlyLinkedList.shift();
    console.log('Shift', shiftNode);
    console.log(singlyLinkedList.toString());
});

test('Unshift', () => {
    const singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push('a');
    singlyLinkedList.push('b');
    singlyLinkedList.unshift('c');
    console.log(singlyLinkedList.toString());
});

test('Get', () => {
    const singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push('a');
    singlyLinkedList.push('b');
    singlyLinkedList.push('c');
    console.log(singlyLinkedList.get(0)?.val);
    console.log(singlyLinkedList.get(1)?.val);
    console.log(singlyLinkedList.get(2)?.val);
    console.log(singlyLinkedList.get(3)?.val);
});

test('Set', () => {
    const singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push('a');
    singlyLinkedList.push('b');
    singlyLinkedList.push('c');
    singlyLinkedList.set(1, 'z');
    console.log(singlyLinkedList.toString());
});

test('insert', () => {
    const singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push('a');
    singlyLinkedList.push('b');
    singlyLinkedList.push('c');
    singlyLinkedList.insert(3, 'z');
    console.log(singlyLinkedList.toString());
});

test('remove', () => {
    const singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push('a');
    singlyLinkedList.push('b');
    singlyLinkedList.push('c');
    const removeNode = singlyLinkedList.remove(2);
    console.log('removeNode', removeNode);
    console.log(singlyLinkedList.toString());
});

test('reverse', () => {
    const singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push('a');
    singlyLinkedList.push('b');
    singlyLinkedList.push('c');
    singlyLinkedList.reverse();
    console.log(singlyLinkedList.toString());
});
