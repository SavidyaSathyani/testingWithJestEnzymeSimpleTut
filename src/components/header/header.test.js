import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../../../utils';
import Header from './index';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header Componet', () => {

    let component ;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without errors', () => {
        expect(findByTestAttribute(component, 'headerComponent').length).toBe(1);
    });

    it('Should render the logo', () => {
        expect(findByTestAttribute(component, 'logoIMG').length).toBe(1);
    })

});