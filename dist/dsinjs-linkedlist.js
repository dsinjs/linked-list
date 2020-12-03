(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var linked_list_element_1 = require("./linked-list-element");
Object.defineProperty(exports, "LinkedListElement", { enumerable: true, get: function () { return linked_list_element_1.LinkedListElement; } });
var linked_list_main_1 = require("./linked-list-main");
Object.defineProperty(exports, "LinkedList", { enumerable: true, get: function () { return linked_list_main_1.LinkedList; } });

},{"./linked-list-element":2,"./linked-list-main":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{"./linked-list-element":2}]},{},[1]);
