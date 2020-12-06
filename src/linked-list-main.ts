import { LinkedListElement, LinkedListElementStruct } from "./linked-list-element";

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

// if Symbol is not available in window
if (typeof window !== "undefined") {
  if (typeof Symbol === "undefined") {
    let win: any = window;
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
  insert(item: T[] | T | LinkedListElement<T> | LinkedListElement<T>[]): LinkedListElement<T> {
    if (item instanceof Array) {
      if (item[0] instanceof LinkedListElement) {
        return this._insertLLElemArray(item as LinkedListElement<T>[]);
      } else {
        return this._InsertRawTypeItemArray(item as T[]);
      }
    } else if (item instanceof LinkedListElement) {
      return this._insertLLElem(item);
    } else {
      return this._InsertRawTypeItem(item);
    }
  }

  private _InsertRawTypeItem(item: T) {
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

  private _InsertRawTypeItemArray(item: T[]) {
    const first = new LinkedListElement(item[0]);
    let currElem = first;
    item.splice(0, 1);
    for (const curr of item) {
      const nextElem = new LinkedListElement(curr);
      currElem.next = nextElem as LinkedListElement<T>;
      currElem = currElem.next;
      this._length++;
    }
    return this._insertLLElem(first);
  }

  private _insertLLElem(item: LinkedListElement<T>) {
    let prev: LinkedListElement<T> | null = this._start;
    let finalEl: LinkedListElement<T> = prev;
    while (prev !== null) {
      finalEl = prev;
      prev = prev.next;
    }
    finalEl.next = item;
    this._length++;
    return finalEl.next;
  }

  private _insertLLElemArray(item: LinkedListElement<T>[]) {
    const first = item[0];
    let currElem = first;
    item.splice(0, 1);
    for (const curr of item) {
      const nextElem = curr as LinkedListElement<T>;
      currElem.next = nextElem;
      currElem = currElem.next;
      this._length++;
    }
    return this._insertLLElem(first);
  }

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
  push(item: T[] | T | LinkedListElement<T> | LinkedListElement<T>[]): LinkedListElement<T> {
    return this.insert(item as any);
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
  entries(): IterableIterator<[number, T]> {
    return this.toArray().entries();
  }

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
  [Symbol.iterator](): IterableIterator<T> {
    return this.toArray()[Symbol.iterator]();
  }

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
  each(callback: (elem: LinkedListElement<T>, index: number) => boolean): void {
    return this.traverse(callback);
  }

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
  forEach(callback: (elem: LinkedListElement<T>, index: number) => boolean): void {
    return this.traverse(callback);
  }

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
  map(mappingFnc: (item: T) => T): LinkedList<T> {
    const nLink = new LinkedList(mappingFnc(this._start.data));
    let curr: LinkedListElement<T> | null = this._start.next;
    let newCurr: LinkedListElement<T> | null = nLink._start;
    while (curr !== null) {
      newCurr.next = new LinkedListElement(mappingFnc(curr.data));
      nLink._length++;
      curr = curr.next;
      newCurr = newCurr.next;
    }
    return nLink;
  }

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
  filter(filterFnc: (value: T) => boolean): LinkedList<T> | null {
    let firstItem: T | null = null;
    let curr: LinkedListElement<T> | null | undefined = this._start;
    while (firstItem === null) {
      if (curr) {
        if (filterFnc(curr.data)) {
          firstItem = curr.data;
        }
        curr = curr.next;
      } else {
        break;
      }
    }
    if (firstItem === null) {
      return null;
    }
    const nList = new LinkedList(firstItem);
    let newCurr = nList._start;
    while (curr !== null && curr !== void 0) {
      if (filterFnc(curr.data)) {
        newCurr.next = new LinkedListElement(curr.data);
        nList._length++;
      }
      curr = curr.next;
    }
    return nList;
  }

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
  reduce<T2 = any>(reduceFnc: (next: T2, value: T, index: number, lList: LinkedList<T>) => T2,
    initialValue: T2 = 0 as any): T2 {
    let curr = initialValue;
    this.traverse((elem, index) => {
      curr = reduceFnc(curr, elem.data, index, this);
      return true;
    });
    return curr;
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
  toJSON(): LinkedListElementStruct<T> {
    return this._start.toJSON();
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
