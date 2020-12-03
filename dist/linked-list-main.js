"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var linked_list_element_1 = require("./linked-list-element");
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
        this._start = startElem;
        if (!(this._start instanceof linked_list_element_1.LinkedListElement)) {
            this._start = new linked_list_element_1.LinkedListElement(this._start);
        }
    }
    /**
     * Inserts the given element at the end of the Linked List.
     * @param {T} item New element to be inserted.
     * @public
     * @method insert
     * @member
     * @public
     * @returns {LinkedListElement<T>} newly added element instance.
     * @example
     * var elem = new LinkedListElement(30);
     * var elem2 = new LinkedListElement(15, elem);
     * elem2.insert(60);
     */
    LinkedList.prototype.insert = function (item) {
        var prev = this._start;
        var finalEl = prev;
        while (prev !== null) {
            finalEl = prev;
            prev = prev.next;
        }
        finalEl.next = new linked_list_element_1.LinkedListElement(item);
        return finalEl.next;
    };
    /**
     * Pushes the given element at the end of the Linked List.
     * @param {T} item New element to be pushed.
     * @public
     * @method push
     * @member
     * @public
     * @returns {LinkedListElement<T>} newly added element instance.
     * @example
     * var elem = new LinkedListElement(30);
     * var elem2 = new LinkedListElement(15, elem);
     * elem2.push(60);
     */
    LinkedList.prototype.push = function (item) {
        return this.insert(item);
    };
    /**
     * Traverses the whole list and calls given callback function for each element.
     * @param {{(elem :LinkedListElement<T>, index: number) => boolean}} callback Callback function to be called
     * for each element instance. If function returns false for any value then it stops traversal.
     * @public
     * @method traverse
     * @member
     * @public
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
     * Returns element at given location.
     * @param {number} index Index to find the element.
     * @public
     * @method get
     * @member
     * @public
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
