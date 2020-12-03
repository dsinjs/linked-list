import { LinkedListElement } from "./linked-list-element";
/**
 * Extended window interface containing DSinJS module.
 */
export declare class ExtendedWindow extends Window {
    DSinJS: {
        LinkedListElement: typeof LinkedListElement;
        LinkedList: typeof LinkedList;
    };
    LinkedListElement: typeof LinkedListElement;
    LinkedList: typeof LinkedList;
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
export declare class LinkedList<T> {
    /**
     * @property _start
     * Is the starting element of the list
     * @type {LinkedListElement<T>}
     * @private
     */
    private _start;
    /**
     * Standard constructor, accepts data values as LinkedListElement or T (actual data).
     * @param {LinkedListElement<T> | T} startElem Starting element of your linked list.
     */
    constructor(startElem: LinkedListElement<T> | T);
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
    insert(item: T): LinkedListElement<T>;
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
    push(item: T): LinkedListElement<T>;
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
    traverse(callback: (elem: LinkedListElement<T>, index: number) => boolean): void;
    /**
     * Returns element at given location.
     * @param {number} index Index to find the element.
     * @public
     * @method traverse
     * @member
     * @public
     * @returns {{T | null}} Returns element found at given element, if its not reachable returns null.
     * @example
     * var lList = new LinkedList(15);
     * lList.insert(30);
     * lList.insert(45);
     * lList.get(2); // => 45
     */
    get(index: number): T | null;
}
