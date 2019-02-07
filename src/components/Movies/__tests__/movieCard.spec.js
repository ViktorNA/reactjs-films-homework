import TestRenderer from 'react-test-renderer';
import React from 'react';
import MovieCard from '../MovieCard';

describe('Snapshot test', () => {
  it('works correctly', () => {
    const testRender = TestRenderer.create(<MovieCard />);
    expect(testRender.toJSON).toMatchSnapshot();
  });
});

describe('genres to string', () => {
  it('works correctly', () => {
    const testRender = TestRenderer.create(<MovieCard />);
    const testInstance = testRender.getInstance();
    const res = testInstance.getGenresList(['1', '2', '3', '4']);
    expect(res).toEqual('1, 2, 3');
  });
});

describe('State state', () => {
  it('works correctly', () => {
    const testRender = TestRenderer.create(<MovieCard />);
    const testInstance = testRender.getInstance();
    testInstance.setInfoType({ target: { name: 'video' } });
    expect(testInstance.state.infoType).toEqual('video');
    testInstance.setInfoType({ target: { name: 'short' } });
    expect(testInstance.state.infoType).toEqual('short');
    testInstance.setInfoType({ target: { name: 'long' } });
    expect(testInstance.state.infoType).toEqual('long');
  });
});
