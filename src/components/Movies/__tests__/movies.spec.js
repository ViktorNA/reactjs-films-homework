import TestRenderer from 'react-test-renderer';
import React from 'react';
import Movies from '../Movies';

describe('Snapshot test', () => {
  it('works correctly', () => {
    const testRender = TestRenderer.create(<Movies />);
    expect(testRender.toJSON()).toMatchSnapshot();
  });
});
