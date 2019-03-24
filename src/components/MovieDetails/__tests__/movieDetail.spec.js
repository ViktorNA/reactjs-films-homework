import TestRenderer from 'react-test-renderer';
import React from 'react';
import MovieDetails from '..';

describe('Snapshot test', () => {
  it('works correctly', () => {
    const testRender = TestRenderer.create(<MovieDetails />);
    expect(testRender.toJSON()).toMatchSnapshot();
  });
});
