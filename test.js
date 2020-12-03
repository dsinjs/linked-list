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
      done();
    });
    it('insert()', (done) => {
      var lList = new LinkedList(10);
      lList.insert(20);
      lList.insert(30);
      lList._start.next.data.should.equal(20);
      lList._start.next.next.data.should.equal(30);
      done();
    });
    it('push()', (done) => {
      var lList = new LinkedList(10);
      lList.push(20);
      lList.push(30);
      lList._start.next.data.should.equal(20);
      lList._start.next.next.data.should.equal(30);
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
      done();
    });
    it('get()', (done) => {
      var corrMatrix = { 0: 10, 1: 20, 2: 30 };
      var lList = new LinkedList(10);
      lList.insert(20);
      lList.insert(30);
      lList.get(2).should.equal(30);
      should.equal(lList.get(5), null);
      done();
    });
  });
});
