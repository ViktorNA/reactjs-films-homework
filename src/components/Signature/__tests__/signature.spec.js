import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Signature from '../index';

const renderer = new ShallowRenderer();

test('Test props', () => {
  renderer.render(<Signature name="Nickname" />);
  const res = renderer.getRenderOutput();
  expect(res.props.children).toEqual(['Hello,', 'Nickname']);
});
