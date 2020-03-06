import getComponentAttributes from './getComponentAttributes';

const renderComponent = (mainElement, components = {}) => Array.from(mainElement.querySelectorAll('[data-component]'))
    .reduce((prev, element) => {
        const {component, reference, ...properties} = getComponentAttributes(element);

        if (components.hasOwnProperty(component)) {
            const componentObject = new (components[component])(element, properties);

            if (reference) {
                prev[reference] = componentObject;
            }
        }

        return prev;
    }, {});

export default renderComponent;