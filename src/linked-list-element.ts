declare let module: any;

export declare class ExtendedWindow extends Window {
  DSinJS: {
    LinkedListElement: typeof LinkedListElement;
  };
  LinkedListElement: typeof LinkedListElement;
}

declare let window: ExtendedWindow;

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
export class LinkedListElement<T> {
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
  next: LinkedListElement<T> | null = null;

  /**
   * Standard constructor
   * @param {T} data Value to be set
   * @param {LinkedListElement<T>} next Optiona, Next element in the list.
   */
  constructor(data: T, next: LinkedListElement<T> | null = null) {
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
  toJSON(): LinkedListElementStruct<T> {
    const data = this.data as any;
    return {
      data: (typeof data.toJSON as any === "function") ? data.toJSON() : data,
      next: (this.next !== null) ? this.next.toJSON() : null
    };
  }

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
  toString(): string {
    const data = this.data as any;
    return ((typeof data.toString as any === "function") ? data.toString() : String(data)) +
      ((this.next !== null) ? this.next.toString() : "");
  }
}

if (typeof module != "undefined") {
  module.exports = { LinkedListElement };
}
if (typeof window != "undefined") {
  window.DSinJS = window.DSinJS || {};
  window.DSinJS.LinkedListElement = LinkedListElement;
}