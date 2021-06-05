import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, testStore } from '../utils';
import App from './App';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<App store={store} />).childAt(0).dive();
  return component;
};

describe('App Component', () => {

  let component;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: 'Test Title',
          body: 'Test Body'
        },
        {
          title: 'Test Title',
          body: 'Test Body'
        },
        {
          title: 'Test Title',
          body: 'Test Body'
        },
      ],
    }

    component = setUp(initialState);
  });

  it('Should render withot errors', () => {
    expect(findByTestAttribute(component, 'appComponent').length).toBe(1);
  });

});