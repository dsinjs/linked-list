const should = require('should');
const assert = require('assert');
const { LinkedListElement, LinkedList } = require('./dist/index');

describe('@dsinjs/linked-list', () => {
  describe('LinkedListElement class', () => {
    it('Constructor', (done) => {
      var elem = new LinkedListElement(10);
      var elem2 = new LinkedListElement(20, elem);
      elem2.next.data.should.equal(10);
      done();
    });
    it('toJSON()', (done) => {
      var elem = new LinkedListElement(30);
      var elem2 = new LinkedListElement(15, elem);
      var json = elem2.toJSON();
      json.data.should.equal(15);
      json.next.data.should.equal(30);
      done();
    });
    it('toString()', (done) => {
      var elem = new LinkedListElement(30);
      var elem2 = new LinkedListElement(15, elem);
      var str = elem2.toString();
      str.should.equal("1530");
      done();
    });
  });

  describe('LinkedList class', () => {
    it('Constructor', (done) => {
      var lList = new LinkedList(10);
      lList._start.data.should.equal(10);
      lList.length.should.equal(1);
      done();
    });
    it('insert()', (done) => {
      var lList = new LinkedList(10);
      lList.insert(20);
      lList.insert(30);
      lList._start.next.data.should.equal(20);
      lList._start.next.next.data.should.equal(30);
      lList.length.should.equal(3);
      done();
    });
    it('push()', (done) => {
      var lList = new LinkedList(10);
      lList.push(20);
      lList.push(30);
      lList._start.next.data.should.equal(20);
      lList._start.next.next.data.should.equal(30);
      lList.length.should.equal(3);
      done();
    });
    it('traverse()', (done) => {
      var corrMatrix = { 0: 10, 1: 20, 2: 30 };
      var lList = new LinkedList(10);
      lList.insert(20);
      lList.insert(30);
      lList.traverse((elem, index) => {
        elem.data.should.equal(corrMatrix[index]);
      });
      lList.length.should.equal(3);
      done();
    });
    it('get()', (done) => {
      var lList = new LinkedList(10);
      lList.insert(20);
      lList.insert(30);
      lList.get(2).should.equal(30);
      should.equal(lList.get(5), null);
      lList.length.should.equal(3);
      done();
    });
    it('delete()', (done) => {
      var lList = new LinkedList(10);
      lList.insert(20);
      lList.insert(30);
      lList.delete(20).data.should.equal(20);
      lList._start.next.data.should.equal(30);
      lList.length.should.equal(2);
      should.equal(lList.delete(40), null);
      lList.length.should.equal(2);
      done();
    });
    it('has()', (done) => {
      var lList = new LinkedList(10);
      lList.insert(20);
      lList.insert(30);
      var shoulBeTrue = lList.has(20);
      var shoulBeFalse = lList.has(40);
      should.equal(shoulBeTrue, true);
      should.equal(shoulBeFalse, false);
      lList.length.should.equal(3);
      done();
    });
    it('pop()', (done) => {
      var lList = new LinkedList(10);
      lList.insert(20);
      lList.insert(30);
      lList.insert(40);
      lList.insert(50);
      lList.length.should.equal(5);
      lList.pop();
      lList.length.should.equal(4);
      should.equal(lList._start.next.next.next.next, null);
      lList.pop();
      lList.length.should.equal(3);
      should.equal(lList._start.next.next.next, null);
      lList.pop();
      lList.length.should.equal(2);
      should.equal(lList._start.next.next, null);
      lList.pop();
      lList.length.should.equal(1);
      should.equal(lList._start.next, null);
      lList.pop();
      lList.length.should.equal(1);
      should.equal(lList._start.data, 10);
      done();
    });
    it('fromArray()', (done) => {
      var lList = LinkedList.fromArray([1, 2, 3, 4, 5]);
      lList._start.data.should.equal(1);
      lList._start.next.data.should.equal(2);
      lList._start.next.next.data.should.equal(3);
      lList._start.next.next.next.data.should.equal(4);
      lList._start.next.next.next.next.data.should.equal(5);
      should.equal(lList._start.next.next.next.next.next, null);
      lList.length.should.equal(5);
      done();
    });
  });
});
