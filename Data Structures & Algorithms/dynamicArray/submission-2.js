class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.length = 0;
        this.cap = capacity;
        this.array = new Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.array[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.length === this.cap) {
            this.resize();
        }
        this.array[this.length] = n;
        this.length++;
    }

    /**
     * @returns {number}
     */
    popback() {
        this.length--;
        return this.array[this.length];
    }

    /**
     * @returns {void}
     */
    resize() {
        this.cap *= 2;
        let newArray = new Array(this.cap);
        for (let i = 0; i < this.length; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.cap;
    }
}
