import TestRenderer from 'react-test-renderer';
import React from 'react';
import Info from '../Info';

describe('Snapshot test', () => {
  it('works correctly', () => {
    const testRender = TestRenderer.create(<Info />);
    expect(testRender.toJSON()).toMatchSnapshot();
  });
});

describe('channgeState', () => {
  it('works correctly', () => {
    const testRender = TestRenderer.create(<Info />);
    const testInstance = testRender.getInstance();
    const res = testInstance.getRating(5);
    expect(res.props.children.length).toEqual(5);
  });
});
