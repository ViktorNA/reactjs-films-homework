import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Signature from '../Signature.jsx';

const renderer = new ShallowRenderer();
renderer.render(<Signature />);
const result = renderer.getRenderOutput();

test('Props not undefined', () => {
  expect(result.props.children).not.toBeUndefined();
});

test('Test props', () => {
  renderer.render(<Signature name="Ivan Ivanov" />);
  const res = renderer.getRenderOutput();
  expect(res.props.children).toEqual(['Hello, ', 'Ivan Ivanov']);
});
