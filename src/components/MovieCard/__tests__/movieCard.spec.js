import TestRenderer from 'react-test-renderer';
import React from 'react';
import MovieCard from '../MovieCard';

describe('Snapshot test', () => {
  it('works correctly', () => {
    const testRender = TestRenderer.create(<MovieCard id={12} activeId={12} updater={() => { }} />);
    expect(testRender.toJSON()).toMatchSnapshot();
  });
});

describe('genres to string', () => {
  it('works correctly', () => {
    const testRender = TestRenderer.create(<MovieCard id={12} activeId={12} updater={() => { }} />);
    const testInstance = testRender.getInstance();
    const res = testInstance.renderGenreList([12]);
    expect(res).toEqual('Adventure');
  });
});

describe('changeMode', () => {
  it('reset mode', () => {
    const updater = jest.fn();
    const testRender = TestRenderer.create(<MovieCard id={12} activeId={12} updater={updater} />);
    const testInstance = testRender.getInstance();
    testInstance.changeMode();
    expect(updater).toHaveBeenCalledWith(-1);
  });
  it('set mode', () => {
    const updater = jest.fn();
    const testRender = TestRenderer.create(<MovieCard id={12} activeId={1} updater={updater} />);
    const testInstance = testRender.getInstance();
    testInstance.changeMode();
    expect(updater).toHaveBeenCalledWith(12);
  });
});

describe('checkVisability', () => {
  it('reset mode', () => {
    const testRender = TestRenderer.create(<MovieCard id={12} activeId={12} />);
    const testInstance = testRender.getInstance();
    const res = testInstance.checkVisability('className');
    expect(res).toBe('className');
  });
  it('set mode', () => {
    const testRender = TestRenderer.create(<MovieCard id={12} activeId={1} />);
    const testInstance = testRender.getInstance();
    const res = testInstance.checkVisability('className');
    expect(res).toBe('hidden');
  });
});

describe('getBackStyle', () => {
  it('desc', () => {
    const testRender = TestRenderer.create(<MovieCard id={12} activeId={12} />);
    const testInstance = testRender.getInstance();
    const res = testInstance.getBackStyle();
    expect(res).toBe('back description');
  });
  it('short', () => {
    const testRender = TestRenderer.create(<MovieCard id={12} activeId={1} />);
    const testInstance = testRender.getInstance();
    const res = testInstance.getBackStyle();
    expect(res).toBe('back');
  });
});
