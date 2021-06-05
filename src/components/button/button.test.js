import { shallow } from 'enzyme';
import React from 'react';
import { findByTestAttribute, checkProps } from '../../../utils';
import SharedButton from './index';

describe('Shared Button Component', () => {

    describe('Checking Props', () => {

        it('Should render without warnings', () => {
            const expectedProps = {
                buttonText: 'Test',
                emitEvent: () => { },
            };
            expect(checkProps(SharedButton, expectedProps)).toBeUndefined();
        });

    });

    describe('Renders', () => {

        let component;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                buttonText: 'Test',
                emitEvent: mockFunc,
            };
            component = shallow(<SharedButton {...props} />);
        });

        it('Should render a button', () => {
            expect(findByTestAttribute(component, 'sharedButton').length).toBe(1);
        });

        it('Should emit callback on click event', () => {
            const button = findByTestAttribute(component, 'sharedButton');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        })

    });

});