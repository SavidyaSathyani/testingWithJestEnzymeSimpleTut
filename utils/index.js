import checkPropTypes from 'check-prop-types';

export const findByTestAttribute = (component, attributeValue) => {
    const wrapper = component.find(`[data-test='${attributeValue}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
}
