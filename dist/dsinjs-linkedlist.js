(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var linked_list_element_1 = require("./linked-list-element");
Object.defineProperty(exports, "LinkedListElement", { enumerable: true, get: function () { return linked_list_element_1.LinkedListElement; } });

},{"./linked-list-element":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
