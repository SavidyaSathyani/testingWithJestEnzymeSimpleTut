import { shallow } from 'enzyme';
import React from 'react';
import { findByTestAttribute, checkProps }  from '../../../utils';
import SharedButton from './index';

describe('Shared Button Component', () => {

    describe('Checking Props', () => {

        it('Should render without warnings', () => {
            const expectedProps = {
                buttonText: 'Test',
                emitEvent: () => {},
            };
            expect(checkProps(SharedButton, expectedProps)).toBeUndefined();
        });

    });

    describe('Renders', () => {

        let component;
        beforeEach(() => {
            const props = {
                buttonText: 'Test',
                emitEvent: () => {},
            };
            component = shallow(<SharedButton {...props} />);
        });

        it('Should render a button', () => {
            expect(findByTestAttribute(component, 'sharedButton').length).toBe(1);
        });

    });

});