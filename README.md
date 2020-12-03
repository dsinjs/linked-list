# @dsinjs/linked-list
> Data structure in your JavaScript code, Binary Trees.

[![Build Status](https://travis-ci.com/dsinjs/linked-list.svg?branch=main)](https://travis-ci.com/dsinjs/linked-list)
![Node.js CI](https://github.com/dsinjs/linked-list/workflows/Node.js%20CI/badge.svg?branch=main)

## Overview
![linked-list](img/Linkedlist.png)  
Binary Tree in Javascript
- A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations.
- The elements in a linked list are linked using pointers.
- Head is generally used as a pointer currently pointing to an element.
- Given example shows elements are connected with `next` pointers and each element has a data assosiated with it.
## Installation
Using npm
```
npm install @dsinjs/linked-list --save
```
Or directly on your browser, simply download your file from the following:
- [dsinjs-linkedlist.js](dist/dsinjs-linkedlist.js) Development version
- [dsinjs-linkedlist.min.js](dist/dsinjs-linkedlist.min.js) Deployment version
```
<script type="application/javascript" src="dsinjs-linkedlist.js"></script>
<script type="application/javascript" src="dsinjs-linkedlist.min.js"></script>
```
## Usage
```
const { LinkedListElement } = require('@dsinjs/linked-list');
```
```
var elem = new LinkedListElement(30);
var elem2 = new LinkedListElement(15, elem);
elem2.toString(); // => 1530
```
```
var lList = new LinkedList(10);
lList.insert(20);
lList.insert(30);
lList.delete(30);
lList.toArray(); // => [10,20]
```
```
// Classic ES6 iterations
for (const data of lList) {
    console.log(data); // 10, 20
}
```
## All Features:
- All Linked List data structure functionality.
- 25+ Linked List functions.
- Main functions like insert(), delete(), each(), find(), sort() etc.
- Extended functions like entries(), Symbol.iterator, supports `for...of` loops.
- Conversion methods like fromArray(), toArray(), toString(), toJSON().

## Complete Documentation
Checkout [DOCUMENTATION.md](DOCUMENTATION.md) for complete documentation or View Documentation online at [https://dsinjs.github.io/linked-list/](https://dsinjs.github.io/linked-list/)
> Note: May need to use polyfills for Array.entries(), to make BTree work in older browsers like IE11.

## Help us expand
Let me know in issues/github page or on email which javascript functions to include in next release.
Check all the [Contributing authors](CONTRIBUTING.md) to this library.