import { LinkedListElement } from "./linked-list-element";

declare let module: any;

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

declare let window: ExtendedWindow;

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
export class LinkedList<T> {
  /**
   * @property _start
   * Is the starting element of the list.
   * @type {LinkedListElement<T>}
   * @private
   * @member
   * @property
   */
  private _start: LinkedListElement<T>;

  /**
   * @property _length
   * Private member of linked list containing length of the list.
   * @type {number}
   * @private
   * @member
   * @property
   */
  private _length: number = 1;

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
  get length(): number {
    return this._length;
  }

  /**
   * Standard constructor, accepts data values as LinkedListElement or T (actual data).
   * @param {LinkedListElement<T> | T} startElem Starting element of your linked list.
   */
  constructor(startElem: LinkedListElement<T> | T) {
    this._start = startElem as LinkedListElement<T>;

    if (!(this._start as any instanceof LinkedListElement)) {
      this._start = new LinkedListElement(this._start as any);
    }
  }

  /**
   * Inserts the given element at the end of the Linked List.
   * @param {T} item New element to be inserted.
   * @public
   * @method insert
   * @member
   * @returns {LinkedListElement<T>} newly added element instance.
   * @example
   * var elem = new LinkedList(30);
   * elem.insert(15);
   * elem.insert(60);
   */
  insert(item: T): LinkedListElement<T> {
    let prev: LinkedListElement<T> | null = this._start;
    let finalEl: LinkedListElement<T> = prev;
    while (prev !== null) {
      finalEl = prev;
      prev = prev.next;
    }
    finalEl.next = new LinkedListElement(item);
    this._length++;
    return finalEl.next;
  }

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
  push(item: T): LinkedListElement<T> {
    return this.insert(item);
  }

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
  delete(item: T): LinkedListElement<T> | null {
    let curr: LinkedListElement<T> | null = this._start;
    let prev: LinkedListElement<T> | null = this._start;
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
  }

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
  pop(): LinkedListElement<T> | null {
    let curr: LinkedListElement<T> | null = this._start;
    let prev: LinkedListElement<T> | null = this._start;
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
  }

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
  has(item: T): boolean {
    let curr: LinkedListElement<T> | null = this._start;
    while (curr !== null) {
      if (curr.data === item) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

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
  traverse(callback: (elem: LinkedListElement<T>, index: number) => boolean): void {
    let prev: LinkedListElement<T> | null = this._start;
    let finalEl: LinkedListElement<T> = prev;
    let counter = 0;
    while (prev !== null) {
      const retVal = callback(prev, counter);
      if (!retVal) {
        break;
      }
      finalEl = prev;
      prev = prev.next;
      counter++;
    }
  }

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
  get(index: number): T | null {
    let prev: LinkedListElement<T> | null = this._start;
    let counter = 0;
    let retElem: T | null = null;
    while (prev !== null) {
      if (index === counter) {
        retElem = prev.data;
        break;
      }
      prev = prev.next;
      counter++;
    }
    return retElem;
  }

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
  toString(): string {
    return this._start.toString();
  }

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
  toArray(): T[] {
    const retArr: T[] = [];
    let curr: LinkedListElement<T> | null = this._start;
    while (curr !== null) {
      retArr.push(curr.data);
      curr = curr.next;
    }
    return retArr;
  }

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
  static fromArray<T>(array: T[]): LinkedList<T> {
    let currIndex: number = 1;
    const lList = new LinkedList(array[0]);
    let curr = lList._start;

    while (currIndex !== array.length) {
      curr.next = new LinkedListElement(array[currIndex]);
      curr = curr.next;
      currIndex++;
      lList._length++;
    }

    return lList;
  }
}

if (typeof module != "undefined") {
  module.exports = { LinkedListElement, LinkedList };
}
if (typeof window != "undefined") {
  window.DSinJS = window.DSinJS || {} as any;
  window.DSinJS.LinkedList = LinkedList;
}
