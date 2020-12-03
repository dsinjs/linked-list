const should = require('should');
const assert = require('assert');
const { LinkedListElement } = require('./dist/index');

describe('@dsinjs/linked-list', () => {
  describe('LinkedListElement', () => {
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
});
