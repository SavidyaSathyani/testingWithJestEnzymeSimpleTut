export const findByTestAttribute = (component, attributeValue) => {
    const wrapper = component.find(`[data-test='${attributeValue}']`);
    return wrapper;
};