import {XNode} from "./XNode";

export class SinglyLinkedList {
    constructor(public head?: XNode, public tail?: XNode, public length: number = 0) {
    }

    shift = (): XNode | null => {
        if (!this.head) {
            return null;
        }

        const headNode = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        }

        this.length--;

        if (this.length === 0) {
            this.head = undefined;
            this.tail = undefined;
        }
        return headNode;
    }

    insert = (index: number, val: string) => {
        if (index > this.length) {
            throw new Error('Insert Error');
        } else if (index === 0) {
            this.unshift(val);
        } else if (index === this.length) {
            this.push(val);
        } else {
            const xNode = this.get(index - 1);
            if (xNode) {
                const newXNode = new XNode(val);
                if (xNode.next) {
                    newXNode.next = xNode.next;
                    xNode.next = newXNode;
                } else {
                    this.tail = xNode;
                }
                this.length++;
            }

        }
    }

    set = (index: number, val: string) => {
        const xNode = this.get(index);
        if (xNode) {
            xNode.val = val;
        }
    }

    reverse = () => {
        let xNode = this.head;
        if (xNode) {
            this.head = this.tail;
            this.tail = xNode;

            let previousNode: XNode | undefined;
            let nextNode: XNode | undefined;

            for (let i = 0; i < this.length; i++) {
                if (xNode) {
                    nextNode = xNode.next;
                    xNode.next = previousNode;
                    previousNode = xNode;
                    xNode = nextNode;
                }
            }
        }
    }

    remove = (index: number): XNode | null => {
        if (index > this.length) {
            return null;
        } else if(index === 0) {
            return this.shift();
        } else if (index + 1 === this.length) {
            return this.pop();
        } else {
            const xNode = this.get(index - 1);
            if (xNode?.next?.next) {
                const removeNode = xNode.next;
                xNode.next = xNode.next.next;
                this.length--;
                return removeNode;
            }
        }

        return null;
    }

    get = (index: number): XNode | null => {
        if (this.length < index) {
            return null;
        }

        let xNode = this.head;
        for (let i = 0; i < index; i++) {
            if (xNode && xNode.next) {
                xNode = xNode.next;
            } else {
                return null;
            }
        }
        return xNode ? xNode : null;
    }

    pop = (): XNode | null => {
        if (!this.tail) {
            return null;
        }

        let xNode = this.head;
        const tailNode = this.tail;
        if (xNode) {
            while (xNode.next && xNode.next.next) {
                xNode = xNode.next;
            }

            xNode.next = undefined;
            this.tail = xNode;
        }

        this.length--;

        if (this.length === 0) {
            this.head = undefined;
            this.tail = undefined;
        }
        return tailNode;
    }

    unshift = (val: string): void => {
        let xNode = new XNode(val);

        if (!this.head) {
            this.head = xNode;
            this.tail = xNode;
        } else {
            xNode.next = this.head;
            this.head = xNode;
        }

        this.length++;
    };

    push = (val: string): void => {
        let xNode = new XNode(val);

        if (!this.head) {
            this.head = xNode;
            this.tail = xNode;
        }

        if (this.tail) {
            this.tail.next = xNode;
            this.tail = xNode;
        }

        this.length++;
    };

    toString = (): string => {
        let str = '';
        let xNode = this.head;

        while (xNode) {
            str += xNode.val + ' > ';
            xNode = xNode.next;
        }

        return `Length: ${this.length}\nNode: ${str}`;
    }
}