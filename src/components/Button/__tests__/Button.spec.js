import TestRenderer from 'react-test-renderer';
import React from 'react';
import Button from '..';

describe('Snapshot test', () => {
  it('watchNow works correctly', () => {
    const testRender = TestRenderer.create(<Button />);
    expect(testRender.toJSON()).toMatchSnapshot();
  });
  it('viewInfo works correctly', () => {
    const testRender = TestRenderer.create(<Button />);
    expect(testRender.toJSON()).toMatchSnapshot();
  });
});
