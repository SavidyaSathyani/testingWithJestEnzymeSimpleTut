import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import rootReducers from '../src/reducers';
import { middlewares } from '../src/createStore';

export const findByTestAttribute = (component, attributeValue) => {
    const wrapper = component.find(`[data-test='${attributeValue}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
}

export const testStore = (initialState) => {
    const createStoreWithMiddlesware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddlesware(rootReducers, initialState);
}