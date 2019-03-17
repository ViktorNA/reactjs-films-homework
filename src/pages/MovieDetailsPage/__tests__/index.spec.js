import TestRenderer from 'react-test-renderer';
import React from 'react';
import Page from '..';

describe('Snapshot test', () => {
  it('works correctly', () => {
    const testRender = TestRenderer.create(<Page />);
    expect(testRender.toJSON()).toMatchSnapshot();
  });
});
