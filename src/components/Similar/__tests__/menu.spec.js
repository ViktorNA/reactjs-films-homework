import TestRenderer from 'react-test-renderer';
import React from 'react';
import Menu from '../Menu';

describe('channgeState', () =>{
    it('works correctly', () =>  {
        const testRender = TestRenderer.create(<Menu />);
        const testInstance = testRender.getInstance();
        testInstance.changeState({target: {name: 'test'}});
        expect(testInstance.state.active).toEqual('test');
    })
})
