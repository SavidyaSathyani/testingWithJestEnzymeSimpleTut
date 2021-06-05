import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttribute } from '../../../utils';
import Headline from './index';


const setUp = (props={ }) => {
    const component = shallow(<Headline {...props} />);
    return component;
};

describe('Headline Component', () => {

    describe('Checking PropTypes', () => {

        it('Should not throw a warning', () => {

            const expectedProps = {
                header: 'Test Header',
                description: 'Test Description',
                tempArray: [{
                    fName: 'Test Frist Name',
                    lName: 'Test Last Name',
                    email: 'test@email.com',
                    age: 23,
                    onlineStatus: false,
                }]
            };
            const propErr = checkProps(Headline, expectedProps);
            expect(propErr).toBeUndefined();
        });

    });

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
