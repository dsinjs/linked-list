import { LinkedListElement, LinkedListElementStruct } from "./linked-list-element";
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
     * Is the starting element of the list.
     * @type {LinkedListElement<T>}
     * @private
     * @member
     * @property
     */
    private _start;
    /**
     * @property _length
     * Private member of linked list containing length of the list.
     * @type {number}
     * @private
     * @member
     * @property
     */
    private _length;
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
    get length(): number;
    /**
     * Standard constructor, accepts data values as LinkedListElement or T (actual data).
     * @param {LinkedListElement<T> | T} startElem Starting element of your linked list.
     */
    constructor(startElem: LinkedListElement<T> | T);
    /**
     * Inserts the given element at the end of the Linked List.
     * @param {T[]} item New elements array to be inserted.
     * @public
     * @method insert
     * @member
     * @returns {LinkedListElement<T>} newly added element instance.
     * @example
     * var lList = new LinkedList(30);
     * lList.insert([15, 45]);
     * lList.toArray(); // => [30, 15, 45]
     */
    insert(item: T[]): LinkedListElement<T>;
    /**
     * Inserts the given element at the end of the Linked List.
     * @param {T} item New element to be inserted.
     * @public
     * @method insert
     * @member
     * @returns {LinkedListElement<T>} newly first added element instance.
     * @example
     * var lList = new LinkedList(30);
     * lList.insert(15);
     * lList.insert(60);
     * lList.toArray(); // => [30, 15, 60]
     */
    insert(item: T): LinkedListElement<T>;
    /**
     * Inserts the given element at the end of the Linked List.
     * @param {LinkedListElement<T>} item New element to be inserted.
     * @public
     * @method insert
     * @member
     * @returns {LinkedListElement<T>} newly added element instance.
     * @example
     * var lList = new LinkedList(30);
     * var elem = new LinkedListElement(40);
     * lList.insert(elem);
     * lList.toArray(); // => [30, 40]
     */
    insert(item: LinkedListElement<T>): LinkedListElement<T>;
    /**
     * Inserts the given element array at the end of the Linked List.
     * @param {LinkedListElement<T>[]} item New element to be inserted.
     * @public
     * @method insert
     * @member
     * @returns {LinkedListElement<T>} newly first added element instance.
     * @example
     * var lList = new LinkedList(30);
     * var elem = new LinkedListElement(40);
     * lList.insert(elem);
     * lList.toArray(); // => [30, 40]
     */
    insert(item: LinkedListElement<T>[]): LinkedListElement<T>;
    private _InsertRawTypeItem;
    private _InsertRawTypeItemArray;
    private _insertLLElem;
    private _insertLLElemArray;
    /**
     * Inserts the given element at the end of the Linked List.
     * @param {T[]} item New elements array to be inserted.
     * @public
     * @method push
     * @member
     * @returns {LinkedListElement<T>} newly added element instance.
     * @example
     * var lList = new LinkedList(30);
     * lList.push([15, 45]);
     * lList.toArray(); // => [30, 15, 45]
     */
    push(item: T[]): LinkedListElement<T>;
    /**
     * Inserts the given element at the end of the Linked List.
     * @param {T} item New element to be inserted.
     * @public
     * @method push
     * @member
     * @returns {LinkedListElement<T>} newly first added element instance.
     * @example
     * var lList = new LinkedList(30);
     * lList.push(15);
     * lList.push(60);
     * lList.toArray(); // => [30, 15, 60]
     */
    push(item: T): LinkedListElement<T>;
    /**
     * Inserts the given element at the end of the Linked List.
     * @param {LinkedListElement<T>} item New element to be inserted.
     * @public
     * @method push
     * @member
     * @returns {LinkedListElement<T>} newly added element instance.
     * @example
     * var lList = new LinkedList(30);
     * var elem = new LinkedListElement(40);
     * lList.push(elem);
     * lList.toArray(); // => [30, 40]
     */
    push(item: LinkedListElement<T>): LinkedListElement<T>;
    /**
     * Inserts the given element array at the end of the Linked List.
     * @param {LinkedListElement<T>[]} item New element to be inserted.
     * @public
     * @method push
     * @member
     * @returns {LinkedListElement<T>} newly first added element instance.
     * @example
     * var lList = new LinkedList(30);
     * var elem = new LinkedListElement(40);
     * lList.push(elem);
     * lList.toArray(); // => [30, 40]
     */
    push(item: LinkedListElement<T>[]): LinkedListElement<T>;
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
    delete(item: T): LinkedListElement<T> | null;
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
    pop(): LinkedListElement<T> | null;
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
    has(item: T): boolean;
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
    traverse(callback: (elem: LinkedListElement<T>, index: number) => boolean): void;
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
    entries(): IterableIterator<[number, T]>;
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
    [Symbol.iterator](): IterableIterator<T>;
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
    each(callback: (elem: LinkedListElement<T>, index: number) => boolean): void;
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
    forEach(callback: (elem: LinkedListElement<T>, index: number) => boolean): void;
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
    map(mappingFnc: (item: T) => T): LinkedList<T>;
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
    filter(filterFnc: (value: T) => boolean): LinkedList<T> | null;
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
    reduce<T2 = any>(reduceFnc: (next: T2, value: T, index: number, lList: LinkedList<T>) => T2, initialValue?: T2): T2;
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
    get(index: number): T | null;
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
    toString(): string;
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
    toJSON(): LinkedListElementStruct<T>;
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
    toArray(): T[];
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
    static fromArray<T>(array: T[]): LinkedList<T>;
}
