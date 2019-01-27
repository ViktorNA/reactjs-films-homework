import TestRenderer from 'react-test-renderer';
import React from 'react';
import Wrapper from '../index';

describe('Snapshot test', () =>{
    it('works correctly', () =>  {
        const testRender = TestRenderer.create(<Wrapper />);
        expect(testRender.toJSON).toMatchSnapshot();
    })
})
