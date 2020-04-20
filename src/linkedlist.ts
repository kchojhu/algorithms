type TData = string | number;

class XNode {

    constructor(public data: TData, public next: XNode | null = null) {
    }
}

class LinkedList {
    head: XNode | null = null;

    insertFirst = (data: TData) => {
        this.head = new XNode(data, this.head);
    }

    get length(): number {
        return this.toArray().length;
    }

    clear = (): void => {
        this.head = null;
    }

    getFirst = (): XNode | null => this.head;

    getLast = (): XNode | null => {
        const nodes = this.toArray();
        return nodes.length > 0 ? nodes[nodes.length - 1] : null;
    }

    toArray = (): XNode[] => {
        const data: XNode[] = [];
        let xNode = this.head;
        while (xNode) {
            data.push(xNode);
            xNode = xNode.next;
        }
        return data;
    }

    toValues = (): TData[] => {
        return this.toArray().map((node: XNode): TData => node.data);
    }

    removeFirst = (): XNode | null => {
        if (this.head?.next) {
            const removeNode = this.head;
            this.head = this.head.next;
            return removeNode;
        }

        return null;
    }

    removeLast = (): XNode | null => {
        if (this.head) {
            let node = this.head;
            while (node.next) {
                if (node.next.next) {
                    node = node.next;
                } else {
                    const removeNode = node.next;
                    node.next = null;
                    return removeNode;
                }
            }
        }

        return null;
    }

    insertLast = (data: TData): void => {
        const lastNode = this.getLast();

        if (lastNode) {
            lastNode.next = new XNode(data);
        }
    }
}


const list = new LinkedList();
// const xNode = new XNode('a');
list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');
console.log(list.toValues().join(' > '));
console.log(list.length);
list.insertLast('d');
console.log(list.toValues().join(' > '));