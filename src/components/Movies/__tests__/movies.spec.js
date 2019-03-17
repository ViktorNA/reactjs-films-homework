import TestRenderer from 'react-test-renderer';
import React from 'react';
import Movies from '..';

describe('Snapshot test', () => {
  it('works correctly', () => {
    const testRender = TestRenderer.create(<Movies />);
    expect(testRender.toJSON()).toMatchSnapshot();
  });
});

describe('Updater test', () => {
  it('works correctly', () => {
    const testRender = TestRenderer.create(<Movies />);
    const testInstance = testRender.getInstance();
    testInstance.updateData(12);
    expect(testInstance.state.activeId).toEqual(12);
  });
});
