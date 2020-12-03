"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListElement = void 0;
/**
 * Linked list element class, contains data node and next pointer (element).
 * @class LinkedListElement
 * @public
 * @example
 * var elem = new LinkedListElement(15);
 * var elem2 = new LinkedListElement(30, elem);
 * console.log(elem2.next.data); // 15
 */
var LinkedListElement = /** @class */ (function () {
    /**
     * Standard constructor
     * @param {T} data Value to be set
     * @param {LinkedListElement<T>} next Optiona, Next element in the list.
     */
    function LinkedListElement(data, next) {
        if (next === void 0) { next = null; }
        /**
         * @property next
         * Contains next element
         * @type {LinkedListElement<T>}
         * @public
         */
        this.next = null;
        this.data = data;
        this.next = next;
    }
    /**
     * Converts current element and all next elements in json format.
     * @public
     * @method toJSON
     * @member
     * @public
     * @returns {LinkedListElementStruct<T>} valid json object.
     * @example
     * var elem = new LinkedListElement(30);
     * var elem2 = new LinkedListElement(15, elem);
     * elem2.toJSON(); // =>
     * {
     *  "data": 15,
     *  "next": {
     *    "data": 30,
     *    "next": null
     *  }
     * }
     */
    LinkedListElement.prototype.toJSON = function () {
        var data = this.data;
        return {
            data: (typeof data.toJSON === "function") ? data.toJSON() : data,
            next: (this.next !== null) ? this.next.toJSON() : null
        };
    };
    /**
     * Converts current element and all next elements in string format.
     * @public
     * @method toString
     * @member
     * @public
     * @returns {string} valid string.
     * @example
     * var elem = new LinkedListElement(30);
     * var elem2 = new LinkedListElement(15, elem);
     * elem2.toString(); // => 1530
     */
    LinkedListElement.prototype.toString = function () {
        var data = this.data;
        return ((typeof data.toString === "function") ? data.toString() : String(data)) +
            ((this.next !== null) ? this.next.toString() : "");
    };
    return LinkedListElement;
}());
exports.LinkedListElement = LinkedListElement;
if (typeof module != "undefined") {
    module.exports = { LinkedListElement: LinkedListElement };
}
if (typeof window != "undefined") {
    window.DSinJS = window.DSinJS || {};
    window.DSinJS.LinkedListElement = LinkedListElement;
}
