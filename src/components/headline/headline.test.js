import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../../../utils';
import Headline from './index';

const setUp = (props={ }) => {
    const component = shallow(<Headline {...props} />);
    return component;
};

describe('Headline Component', () => {

    describe('With props', () => {

        let component;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                description: 'Test Description' , 
            };

            component = setUp(props);
        });

        it('Should render a header componet', () => {
            expect(findByTestAttribute(component, 'headlineComponent').length).toBe(1);
        });

        it('Should render header', () => {
            expect(findByTestAttribute(component, 'header').length).toBe(1);
        });

        it('Should render a description', () => {
            expect(findByTestAttribute(component, 'description').length).toBe(1);
        });

    });

    describe('Without props', () => {

        let component
        beforeEach(() => {
            component = setUp();
        });

        it('Should not render a header componet', () => {
            expect(findByTestAttribute(component, 'headlineComponent').length).toBe(0);
        });

    });
});
