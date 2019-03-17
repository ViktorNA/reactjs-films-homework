import TestRenderer from 'react-test-renderer';
import React from 'react';
import Header from '..';

describe('Snapshot test', () => {
  it('works correctly', () => {
    const testRender = TestRenderer.create(<Header />);
    expect(testRender.toJSON()).toMatchSnapshot();
  });
});
