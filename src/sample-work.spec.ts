import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';
import { doSampleWork } from './sample-work';

describe('doSampleWork', () => {
  let logStub: sinon.SinonStub;

  beforeEach(() => {
    sinon.restore();
    logStub = sinon.stub(console, 'log');
  });

  it('should work', () => {
    // when
    const result = doSampleWork('abc');
    // then
    sinon.assert.calledOnceWithExactly(logStub, 'doing: abc')
    expect(result).to.equal('abc');
  });
});
