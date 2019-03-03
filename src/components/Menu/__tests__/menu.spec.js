import TestRenderer from 'react-test-renderer';
import React from 'react';
import Menu from '../Menu';

describe('channgeState', () => {
  it('works correctly', () => {
    const testRender = TestRenderer.create(<Menu />);
    const testInstance = testRender.getInstance();
    testInstance.setActive({ target: { name: 'test' } });
    expect(testInstance.state.active).toEqual('test');
  });
});

describe('setActiveGenre', () => {
  it('works correctly', () => {
    const testRender = TestRenderer.create(<Menu />);
    const testInstance = testRender.getInstance();
    testInstance.selectGenre({ target: { id: 12 } });
    expect(testInstance.state.activeGenreIds).toEqual([12]);
    testInstance.selectGenre({ target: { id: 12 } });
    expect(testInstance.state.activeGenreIds).toEqual([]);
  });
});
