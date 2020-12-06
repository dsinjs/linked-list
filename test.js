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
      lList.length.should.equal(1);
      lList.insert(20);
      lList.length.should.equal(2);
      lList.insert(30);
      lList.length.should.equal(3);
      lList._start.next.data.should.equal(20);
      lList._start.next.next.data.should.equal(30);
      lList.length.should.equal(3);

      lList.insert([40, 50]);
      lList._start.next.next.next.data.should.equal(40);
      lList._start.next.next.next.next.data.should.equal(50);
      lList.length.should.equal(5);

      lList.insert(new LinkedListElement(60));
      lList._start.next.next.next.next.next.data.should.equal(60);
      lList.length.should.equal(6);

      lList.insert([new LinkedListElement(70), new LinkedListElement(80)]);
      lList._start.next.next.next.next.next.next.data.should.equal(70);
      lList._start.next.next.next.next.next.next.next.data.should.equal(80);
      lList.length.should.equal(8);
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
    it('[Symbol.iterator]()', (done) => {
      var corrMatrix = { 0: 10, 1: 20, 2: 30 };
      var counter = 0;
      var lList = new LinkedList(10);
      lList.insert(20);
      lList.insert(30);
      for (const item of lList) {
        item.should.equal(corrMatrix[counter]);
        counter++;
      }
      lList.length.should.equal(3);
      done();
    });
    it('entries()', (done) => {
      var corrMatrix = { 0: 10, 1: 20, 2: 30 };
      var counter = 0;
      var lList = new LinkedList(10);
      lList.insert(20);
      lList.insert(30);
      for (const [index, item] of lList.entries()) {
        index.should.equal(counter);
        item.should.equal(corrMatrix[counter]);
        counter++;
      }
      lList.length.should.equal(3);
      done();
    });
    it('map()', (done) => {
      var lList = new LinkedList(5);
      lList.insert(10);
      lList.insert(15);
      var lList2 = lList.map(n => n * 2);
      lList2._start.data.should.equal(10);
      lList2._start.next.data.should.equal(20);
      lList2._start.next.next.data.should.equal(30);
      should.equal(lList2._start.next.next.next, null);
      lList2.length.should.equal(3);

      var lList3 = new LinkedList(5);
      var lList4 = lList3.map(n => n * 2);
      lList4._start.data.should.equal(10);
      should.equal(lList4._start.next, null);
      lList4.length.should.equal(1);
      done();
    });
    it('filter()', (done) => {
      var lList = new LinkedList(10);
      lList.insert(20);
      lList.insert(30);
      lList.insert(40);
      var modBy4Filter = n => !!(n % 4 === 0);
      var modBy3Filter = n => !!(n % 3 === 0);
      var tenOr20Filter = n => !!(n === 10 || n === 20);
      var falseFilter = n => false;

      var lList2 = lList.filter(modBy4Filter);
      lList2._start.data.should.equal(20);
      lList2._start.next.data.should.equal(40);
      should.equal(lList2._start.next.next, null);
      lList2.length.should.equal(2);

      var lList3 = lList.filter(tenOr20Filter);
      lList3._start.data.should.equal(10);
      lList3._start.next.data.should.equal(20);
      should.equal(lList2._start.next.next, null);
      lList2.length.should.equal(2);

      var lList3 = lList.filter(modBy3Filter);
      lList3._start.data.should.equal(30);
      should.equal(lList3._start.next, null);
      lList3.length.should.equal(1);

      var lList3 = lList.filter(falseFilter);
      should.equal(lList3, null);
      done();
    });
    it('reduce()', (done) => {
      var lList = new LinkedList(10);
      lList.insert(20);
      lList.insert(30);
      lList.length.should.equal(3);

      var result = lList.reduce((next, curr) => { return next + curr; });
      result.should.equal(60);
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
    it('toString()', (done) => {
      var lList = LinkedList.fromArray([1, 2, 3, 4, 5]);
      lList.length.should.equal(5);
      lList.toString().should.equal("12345");
      done();
    });
    it('toArray()', (done) => {
      var lList = LinkedList.fromArray([1, 2, 3, 4, 5]);
      lList.length.should.equal(5);
      var listArr = lList.toArray();
      listArr.length.should.equal(5);
      listArr[0].should.equal(1);
      listArr[1].should.equal(2);
      listArr[2].should.equal(3);
      listArr[3].should.equal(4);
      listArr[4].should.equal(5);
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
