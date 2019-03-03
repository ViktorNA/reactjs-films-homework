import TestRenderer from 'react-test-renderer';
import React from 'react';
import MovieCard from '../MovieCard';

describe('Snapshot test', () => {
  it('works correctly', () => {
    const testRender = TestRenderer.create(<MovieCard />);
    expect(testRender.toJSON()).toMatchSnapshot();
  });
});

describe('genres to string', () => {
  it('works correctly', () => {
    const testRender = TestRenderer.create(<MovieCard />);
    const testInstance = testRender.getInstance();
    const res = testInstance.getGenreList([12]);
    expect(res).toEqual('Adventure');
  });
});

describe('ChangeMode', () => {
  it('works correctly', () => {
    const testRender = TestRenderer.create(<MovieCard />);
    const testInstance = testRender.getInstance();
    expect(testInstance.state.mode).toEqual('short');
    testInstance.changeMode();
    expect(testInstance.state.mode).toEqual('desc');
    testInstance.changeMode();
    expect(testInstance.state.mode).toEqual('short');
  });
});
