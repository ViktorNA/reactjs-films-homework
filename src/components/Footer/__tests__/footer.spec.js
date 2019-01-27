import TestRenderer from 'react-test-renderer';
import React from 'react';
import Footer from '../Footer';

describe('Snapshot test', () =>{
    it('works correctly', () =>  {
        const testRender = TestRenderer.create(<Footer />);
        expect(testRender.toJSON).toMatchSnapshot();
    })
})