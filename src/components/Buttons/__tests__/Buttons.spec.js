import TestRenderer from 'react-test-renderer';
import React from 'react';
import Buttons from '../index';

describe('Snapshot test', () => {
  it('watchNow works correctly', () => {
    const testRender = TestRenderer.create(<Buttons type="watchNow" />);
    expect(testRender.toJSON()).toMatchSnapshot();
  });
  it('viewInfo works correctly', () => {
    const testRender = TestRenderer.create(<Buttons type="viewInfo" />);
    expect(testRender.toJSON()).toMatchSnapshot();
  });
});
