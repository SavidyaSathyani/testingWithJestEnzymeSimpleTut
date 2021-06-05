import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, checkProps } from '../../../utils';
import ListItem from './index';

const setUp = (props = {}) => {
    const component = shallow(<ListItem {...props} />);
    return component;
};

describe('List Item Component', () => {

    describe('Checking Props', () => {

        it('Should render without wranings', () => {
            const expectedProps = {
                title: 'Title',
                description: 'Test description',
            };
            const propErr = checkProps(ListItem, expectedProps);
            expect(propErr).toBeUndefined();
        });

    });

    describe('Component Render', () => {

        let component;
        beforeEach(() => {
            const props = {
                title: 'Title',
                description: 'Test description',
            };
            component = setUp(props);
        });

        it('Should render without errors', () => {
            expect(findByTestAttribute(component, 'itemComponent').length).toBe(1);
        });

        it('Should render a title', () => {
            expect(findByTestAttribute(component, 'itemTitle').length).toBe(1);
        });

        it('Should render a description', () => {
            expect(findByTestAttribute(component, 'itemDescription').length).toBe(1);
        });

    });

    describe('Component should NOT render', () => {

        let component;
        beforeEach(() => {
            const props = {
                description: 'Test description',
            };
            component = setUp(props);
        });

        it('Component should NOT render', () => {
            expect(findByTestAttribute(component, 'itemComponent').length).toBe(0);
        });

    })

});
