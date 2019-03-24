import TestRenderer from 'react-test-renderer';
import React from 'react';
import MovieCard from '..';

describe('Snapshot test', () => {
  it('works correctly', () => {
    const testRender = TestRenderer.create(<MovieCard id={12} activeId={12} onShowInfo={() => { }} />);
    expect(testRender.toJSON()).toMatchSnapshot();
  });
});

describe('genres to string', () => {
  it('works correctly', () => {
    const testRender = TestRenderer.create(<MovieCard id={12} activeId={12} onShowInfo={() => { }} />);
    const testInstance = testRender.getInstance();
    const res = testInstance.renderGenreList([12]);
    expect(res).toEqual('Adventure');
  });
});

describe('changeMode', () => {
  it('set mode', () => {
    const onShowInfo = jest.fn();
    const testRender = TestRenderer.create(<MovieCard
      id={12}
      activeId={1}
      onShowInfo={onShowInfo}
    />);
    const testInstance = testRender.getInstance();
    testInstance.showInfo();
    expect(onShowInfo).toHaveBeenCalledWith(12);
  });
});

describe('closeDesc', () => {
  it('reset mode', () => {
    const onShowInfo = jest.fn();
    const testRender = TestRenderer.create(<MovieCard
      id={12}
      activeId={12}
      onShowInfo={onShowInfo}
    />);
    const testInstance = testRender.getInstance();
    testInstance.closeDescription();
    expect(onShowInfo).toHaveBeenCalledWith(null);
  });
});

describe('getClassName', () => {
  it('reset mode', () => {
    const testRender = TestRenderer.create(<MovieCard
      id={12}
      activeId={12}
      onShowInfo={() => { }}
    />);
    const testInstance = testRender.getInstance();
    const res = testInstance.getClassName('className');
    expect(res).toBe('className');
  });
  it('set mode', () => {
    const testRender = TestRenderer.create(<MovieCard
      id={12}
      activeId={1}
      onShowInfo={() => { }}
    />);
    const testInstance = testRender.getInstance();
    const res = testInstance.getClassName('className');
    expect(res).toBe('hidden');
  });
});

describe('getBackStyle', () => {
  it('desc', () => {
    const testRender = TestRenderer.create(<MovieCard
      id={12}
      activeId={12}
      onShowInfo={() => { }}
    />);
    const testInstance = testRender.getInstance();
    const res = testInstance.getBackStyle();
    expect(res).toBe('back description');
  });
  it('short', () => {
    const testRender = TestRenderer.create(<MovieCard
      id={12}
      activeId={1}
      onShowInfo={() => { }}
    />);
    const testInstance = testRender.getInstance();
    const res = testInstance.getBackStyle();
    expect(res).toBe('back');
  });
});
