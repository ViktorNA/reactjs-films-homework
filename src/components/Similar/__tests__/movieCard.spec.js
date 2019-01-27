import TestRenderer from 'react-test-renderer';
import React from 'react';
import MovieCard from '../MovieCard';

describe('channgeState', () => {
  it('works correctly', () => {
    const testRender = TestRenderer.create(<MovieCard />);
    const testInstance = testRender.getInstance();
    testInstance.changeState({ target: { name: 'test' } });
    expect(testInstance.state.infoType).toEqual('test');
  });
});

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
