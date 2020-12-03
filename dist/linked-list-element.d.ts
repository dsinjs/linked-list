export declare class ExtendedWindow extends Window {
    DSinJS: {
        LinkedListElement: typeof LinkedListElement;
    };
    LinkedListElement: typeof LinkedListElement;
}
/**
 * Linked list element structure class.
 * @class LinkedListElementStruct
 */
export declare class LinkedListElementStruct<T> {
    data: T;
    next?: LinkedListElementStruct<T> | null;
}
/**
 * Linked list element class, contains data node and next pointer (element).
 * @class LinkedListElement
 * @public
 * @example
 * var elem = new LinkedListElement(15);
 * var elem2 = new LinkedListElement(30, elem);
 * console.log(elem2.next.data); // 15
 */
export declare class LinkedListElement<T> {
    /**
     * @property data
     * Contains actual value
     * @type {T}
     * @public
     */
    data: T;
    /**
     * @property next
     * Contains next element
     * @type {LinkedListElement<T>}
     * @public
     */
    next: LinkedListElement<T> | null;
    /**
     * Standard constructor
     * @param {T} data Value to be set
     * @param {LinkedListElement<T>} next Optiona, Next element in the list.
     */
    constructor(data: T, next?: LinkedListElement<T> | null);
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
    toJSON(): LinkedListElementStruct<T>;
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
    toString(): string;
}
