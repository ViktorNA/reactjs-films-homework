import TestRenderer from 'react-test-renderer';
import React from 'react';
import App from '../index';

describe('Snapshot test', () =>{
    it('works correctly', () =>  {
        const testRender = TestRenderer.create(<App />);
        expect(testRender.toJSON).toMatchSnapshot();
    })
})