class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let current = this.head;
        let counter = 0;
        while (current && counter <= index) {
            if (counter === index) {
                return current.value
            }
            counter++;
            current = current.next;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newHead = new Node(val);
        newHead.next = this.head;
        this.head = newHead;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (!this.head) return false;
        if (index === 0) {
            this.head = this.head.next;
            return true;
        }

        let counter = 0;
        let current = this.head;
        while (current && current.next) {
            if (counter === index - 1) {
                current.next = current.next.next;
                return true;
            }
            counter++;
            current = current.next;
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}
