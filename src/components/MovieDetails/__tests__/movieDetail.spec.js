import TestRenderer from 'react-test-renderer';
import React from 'react';
import MovieDetails from '../MovieDetails';

describe('Snapshot test', () => {
  it('works correctly', () => {
    const testRender = TestRenderer.create(<MovieDetails />);
    expect(testRender.toJSON()).toMatchSnapshot();
  });
});
