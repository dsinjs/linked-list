"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var linked_list_element_1 = require("./linked-list-element");
// if Symbol is not available in window
if (typeof window !== "undefined") {
    if (typeof Symbol === "undefined") {
        var win = window;
        win.Symbol = {};
        win.Symbol.iterator = "==iterator==";
    }
}
/**
 * Main Linked List class, contains start node and basically the whole list.
 * @class LinkedList
 * @public
 * @example
 * var lList = new LinkedList(10);
 * lList.insert(20);
 * lList.insert(30);
 * lList.delete(30);
 * lList.toArray(); // => [10,20]
 */
var LinkedList = /** @class */ (function () {
    /**
     * Standard constructor, accepts data values as LinkedListElement or T (actual data).
     * @param {LinkedListElement<T> | T} startElem Starting element of your linked list.
     */
    function LinkedList(startElem) {
        /**
         * @property _length
         * Private member of linked list containing length of the list.
         * @type {number}
         * @private
         * @member
         * @property
         */
        this._length = 1;
        this._start = startElem;
        if (!(this._start instanceof linked_list_element_1.LinkedListElement)) {
            this._start = new linked_list_element_1.LinkedListElement(this._start);
        }
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        /**
         * @property length
         * Readonly, Public member of linked list containing length of the list.
         * @type {number}
         * @public
         * @member
         * @property
         * @readonly
         * @example
         * var lList = new LinkedList(15);
         * lList.length; // => 1
         */
        get: function () {
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Inserts the given element at the end of the Linked List.
     * @param {T} item New element to be inserted.
     * @public
     * @method insert
     * @member
     * @returns {LinkedListElement<T>} newly added element instance.
     * @example
     * var lList = new LinkedList(30);
     * lList.insert(15);
     * lList.insert(60);
     */
    LinkedList.prototype.insert = function (item) {
        if (item instanceof Array) {
            if (item[0] instanceof linked_list_element_1.LinkedListElement) {
                return this._insertLLElemArray(item);
            }
            else {
                return this._InsertRawTypeItemArray(item);
            }
        }
        else if (item instanceof linked_list_element_1.LinkedListElement) {
            return this._insertLLElem(item);
        }
        else {
            return this._InsertRawTypeItem(item);
        }
    };
    LinkedList.prototype._InsertRawTypeItem = function (item) {
        var prev = this._start;
        var finalEl = prev;
        while (prev !== null) {
            finalEl = prev;
            prev = prev.next;
        }
        finalEl.next = new linked_list_element_1.LinkedListElement(item);
        this._length++;
        return finalEl.next;
    };
    LinkedList.prototype._InsertRawTypeItemArray = function (item) {
        var e_1, _a;
        var first = new linked_list_element_1.LinkedListElement(item[0]);
        var currElem = first;
        item.splice(0, 1);
        try {
            for (var item_1 = __values(item), item_1_1 = item_1.next(); !item_1_1.done; item_1_1 = item_1.next()) {
                var curr = item_1_1.value;
                var nextElem = new linked_list_element_1.LinkedListElement(curr);
                currElem.next = nextElem;
                currElem = currElem.next;
                this._length++;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (item_1_1 && !item_1_1.done && (_a = item_1.return)) _a.call(item_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this._insertLLElem(first);
    };
    LinkedList.prototype._insertLLElem = function (item) {
        var prev = this._start;
        var finalEl = prev;
        while (prev !== null) {
            finalEl = prev;
            prev = prev.next;
        }
        finalEl.next = item;
        this._length++;
        return finalEl.next;
    };
    LinkedList.prototype._insertLLElemArray = function (item) {
        var e_2, _a;
        var first = item[0];
        var currElem = first;
        item.splice(0, 1);
        try {
            for (var item_2 = __values(item), item_2_1 = item_2.next(); !item_2_1.done; item_2_1 = item_2.next()) {
                var curr = item_2_1.value;
                var nextElem = curr;
                currElem.next = nextElem;
                currElem = currElem.next;
                this._length++;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (item_2_1 && !item_2_1.done && (_a = item_2.return)) _a.call(item_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return this._insertLLElem(first);
    };
    /**
     * Pushes the given element at the end of the Linked List.
     * @param {T} item New element to be pushed.
     * @public
     * @method push
     * @member
     * @returns {LinkedListElement<T>} newly added element instance.
     * @example
     * var elem = new LinkedList(30);
     * elem.insert(15);
     * elem.insert(60);
     */
    LinkedList.prototype.push = function (item) {
        return this.insert(item);
    };
    /**
     * Deletes the given element if present and returns element instance otherwise returns null.
     * @param {T} item New element to be pushed.
     * @public
     * @method delete
     * @member
     * @returns {LinkedListElement<T> | null} Returns deleted elemnt or null.
     * @example
     * var elem = new LinkedList(30);
     * elem.insert(15);
     * elem.insert(60);
     * elem.delete(15); // => { data: 15, next: null }
     * elem.delete(50); // null
     */
    LinkedList.prototype.delete = function (item) {
        var curr = this._start;
        var prev = this._start;
        while (curr !== null) {
            if (item === curr.data) {
                break;
            }
            prev = curr;
            curr = curr.next;
        }
        if (prev && curr) {
            prev.next = curr.next;
            curr.next = null;
            this._length--;
        }
        return curr;
    };
    /**
     * Removes last element in the linked list and returns it.
     * @public
     * @method pop
     * @member
     * @returns {LinkedListElement<T> | null} Returns deleted elemnt or null.
     * @example
     * var elem = new LinkedList(30);
     * elem.insert(15);
     * elem.insert(60);
     * elem.pop(15); // => { data: 15, next: null }
     * elem.pop(60); // null
     */
    LinkedList.prototype.pop = function () {
        var curr = this._start;
        var prev = this._start;
        while (curr.next !== null) {
            prev = curr;
            curr = curr.next;
        }
        prev.next = null;
        if (curr === this._start) {
            return null;
        }
        this._length--;
        return curr;
    };
    /**
     * Checks for given item in the entire list and returns true if available.
     * @param {T} item New element to be checked.
     * @public
     * @method has
     * @member
     * @returns {boolean} newly added element instance.
     * @example
     * var elem = new LinkedList(30);
     * elem.insert(15);
     * elem.insert(60);
     * elem.has(15); // true
     * elem.has(50); // false
     */
    LinkedList.prototype.has = function (item) {
        var curr = this._start;
        while (curr !== null) {
            if (curr.data === item) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    };
    /**
     * Traverses the whole list and calls given callback function for each element.
     * @param {{(elem :LinkedListElement<T>, index: number) => boolean}} callback Callback function to be called
     * for each element instance. If function returns false for any value then it stops traversal.
     * @public
     * @method traverse
     * @member
     * @returns {void} Returns undefined.
     * @example
     * var dataPrinter = (el) => { console.log(el.data); };
     * var lList = new LinkedList(15);
     * lList.insert(30);
     * lList.traverse(dataPrinter); // => 15...20
     */
    LinkedList.prototype.traverse = function (callback) {
        var prev = this._start;
        var finalEl = prev;
        var counter = 0;
        while (prev !== null) {
            var retVal = callback(prev, counter);
            if (!retVal) {
                break;
            }
            finalEl = prev;
            prev = prev.next;
            counter++;
        }
    };
    /**
     * Returns an iterable of key, value pairs for element in the Linked List.
     * @public
     * @method entries
     * @member
     * @returns {IterableIterator<[number, T]>} Iterables of index keys and values.
     * @example
     * var lList = LinkedList.fromArray([1, 2, 3]);
     * for (const [index, item] of lList.entries()) {
     *   console.log(index, item); // => 0 1...1 2...2 3
     * }
     */
    LinkedList.prototype.entries = function () {
        return this.toArray().entries();
    };
    /* [Symbol.iterator](): any {
      let curr: LinkedListElement<T> | null | undefined = this._start;
      let isFirst = true;
      const _this: LinkedList<T> = this;
      return {
        [Symbol.iterator]: this[Symbol.iterator].bind(this),
        next: (...args: any[]) => {
          curr = curr?.next;
          let done = (isFirst) ? false : (curr) ? false : true;
          let value = (done) ? void 0 : (curr as LinkedListElement<T>).data;
          if (isFirst) {
            value = _this._start.data;
            done = false;
            isFirst = false;
          }
          return {
            done: done, value: value
          };
        }
      }
    } */
    /**
     * Standard Iterator.
     * @public
     * @method [Symbol.iterator]
     * @member
     * @returns {IterableIterator<T>} Iterables of element values.
     * @example
     * var lList = LinkedList.fromArray([1, 2, 3]);
     * for (const item of lList.entries()) {
     *   console.log(item); // => 1...2...3
     * }
     */
    LinkedList.prototype[Symbol.iterator] = function () {
        return this.toArray()[Symbol.iterator]();
    };
    /**
     * Traverses the whole list and calls given callback function for each element.
     * @param {{(elem :LinkedListElement<T>, index: number) => boolean}} callback Callback function to be called
     * for each element instance. If function returns false for any value then it stops traversal.
     * @public
     * @method each
     * @member
     * @returns {void} Returns undefined.
     * @example
     * var dataPrinter = (el) => { console.log(el.data); };
     * var lList = new LinkedList(15);
     * lList.insert(30);
     * lList.each(dataPrinter); // => 15...20
     */
    LinkedList.prototype.each = function (callback) {
        return this.traverse(callback);
    };
    /**
     * Traverses the whole list and calls given callback function for each element.
     * @param {{(elem :LinkedListElement<T>, index: number) => boolean}} callback Callback function to be called
     * for each element instance. If function returns false for any value then it stops traversal.
     * @public
     * @method forEach
     * @member
     * @returns {void} Returns undefined.
     * @example
     * var dataPrinter = (el) => { console.log(el.data); };
     * var lList = new LinkedList(15);
     * lList.insert(30);
     * lList.forEach(dataPrinter); // => 15...20
     */
    LinkedList.prototype.forEach = function (callback) {
        return this.traverse(callback);
    };
    /**
     * Maps current linked list values to a new linked list with modifying the values using given callback function.
     * Uses BFS.
     * @param {{(value: T) => T}} callback callback function for value modifier.
     * @method map
     * @member
     * @public
     * @returns {LinkedList<T>} A newly mapped linked list.
     * @example
     * var lList = LinkedList.fromArray([10, 20, 30, 40]);
     * var lList2 = lList.map(n => n * 2);
     * var arr2 = lList2.toArray(); // [20, 40, 60, 80]
     */
    LinkedList.prototype.map = function (mappingFnc) {
        var nLink = new LinkedList(mappingFnc(this._start.data));
        var curr = this._start.next;
        var newCurr = nLink._start;
        while (curr !== null) {
            newCurr.next = new linked_list_element_1.LinkedListElement(mappingFnc(curr.data));
            nLink._length++;
            curr = curr.next;
            newCurr = newCurr.next;
        }
        return nLink;
    };
    /**
     * Filters each item based on given filter function and returns new linked list.
     * If no value is filtered then returns null.
     * @param {{(value: T) => boolean}} filterFnc callback function for filtering purpose.
     * @method filter
     * @member
     * @public
     * @returns {LinkedList<T> | null} New filtered instance of tree or null.
     * @example
     * var lList = LinkedList.fromArray([10, 20, 30, 40]);
     * var lList2 = lList.filter(n => !!(n % 4 === 0));
     * var arr2 = lList2.toArray(); // [20, 40]
     */
    LinkedList.prototype.filter = function (filterFnc) {
        var firstItem = null;
        var curr = this._start;
        while (firstItem === null) {
            if (curr) {
                if (filterFnc(curr.data)) {
                    firstItem = curr.data;
                }
                curr = curr.next;
            }
            else {
                break;
            }
        }
        if (firstItem === null) {
            return null;
        }
        var nList = new LinkedList(firstItem);
        var newCurr = nList._start;
        while (curr !== null && curr !== void 0) {
            if (filterFnc(curr.data)) {
                newCurr.next = new linked_list_element_1.LinkedListElement(curr.data);
                nList._length++;
            }
            curr = curr.next;
        }
        return nList;
    };
    /**
     * Reduces each element value using reduceFunction and returns final value.
     * @param {(next: T2, value: T, index: number, tree: BTree<T>) => T2} reduceFnc callback function
     * for reducing each node value to a final value.
     * @param {T2} initialValue Optional, Accumulator/Initial value.
     * @method reduce<T2>
     * @member
     * @public
     * @returns {T2} Returns reduced value
     * @example
     * var lList = LinkedList.fromArray([10, 20, 30, 40]);
     * var sum = lList.reduce((acc, elem) => acc + elem); // => 100
     */
    LinkedList.prototype.reduce = function (reduceFnc, initialValue) {
        var _this = this;
        if (initialValue === void 0) { initialValue = 0; }
        var curr = initialValue;
        this.traverse(function (elem, index) {
            curr = reduceFnc(curr, elem.data, index, _this);
            return true;
        });
        return curr;
    };
    /**
     * Returns element at given location.
     * @param {number} index Index to find the element.
     * @public
     * @method get
     * @member
     * @returns {{T | null}} Returns element found at given element, if its not reachable returns null.
     * @example
     * var lList = new LinkedList(15);
     * lList.insert(30);
     * lList.insert(45);
     * lList.get(2); // => 45
     */
    LinkedList.prototype.get = function (index) {
        var prev = this._start;
        var counter = 0;
        var retElem = null;
        while (prev !== null) {
            if (index === counter) {
                retElem = prev.data;
                break;
            }
            prev = prev.next;
            counter++;
        }
        return retElem;
    };
    /**
     * Returns string form of the linked list.
     * @public
     * @method toString
     * @member
     * @returns {string} Returns string form of the linked list.
     * @example
     * var lList = new LinkedList(1);
     * lList.push(2);
     * lList.toString(); // => "12"
     */
    LinkedList.prototype.toString = function () {
        return this._start.toString();
    };
    /**
     * Returns javascript root object form of the linked list.
     * @public
     * @method toJSON
     * @member
     * @returns {LinkedListElementStruct<T>} Returns javascript root object form of the linked list.
     * @example
     * var lList = new LinkedList(1);
     * lList.push(2);
     * lList.toJSON(); // => { data: 1, next: { data: 2, next: null } }
     */
    LinkedList.prototype.toJSON = function () {
        return this._start.toJSON();
    };
    /**
     * Returns array form of the linked list.
     * @public
     * @method toArray
     * @member
     * @returns {T[]} Returns array form of the linked list.
     * @example
     * var lList = new LinkedList(1);
     * lList.push(2);
     * lList.push(3);
     * lList.toArray(); // => [1, 2, 3]
     */
    LinkedList.prototype.toArray = function () {
        var retArr = [];
        var curr = this._start;
        while (curr !== null) {
            retArr.push(curr.data);
            curr = curr.next;
        }
        return retArr;
    };
    /**
     * A static method, Creates a Linked List instance from given array.
     * @param {T[]} array Array of elements.
     * @public
     * @method fromArray
     * @static
     * @returns {LinkedList<T>} Returns new linked list instance with all elements in array.
     * @example
     * var lList = LinkedList.fromArray([1, 2, 3]);
     * lList.length; // => 3
     */
    LinkedList.fromArray = function (array) {
        var currIndex = 1;
        var lList = new LinkedList(array[0]);
        var curr = lList._start;
        while (currIndex !== array.length) {
            curr.next = new linked_list_element_1.LinkedListElement(array[currIndex]);
            curr = curr.next;
            currIndex++;
            lList._length++;
        }
        return lList;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
if (typeof module != "undefined") {
    module.exports = { LinkedListElement: linked_list_element_1.LinkedListElement, LinkedList: LinkedList };
}
if (typeof window != "undefined") {
    window.DSinJS = window.DSinJS || {};
    window.DSinJS.LinkedList = LinkedList;
}
