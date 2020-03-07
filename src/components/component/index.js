import Observer from '../../core/observer';
import State from '../views/state';
import renderComponent from '../../core/utils/renderComponent';

class Component extends Observer {
    constructor(element, template, properties = {}) {
        super(State.getInstance());

        if (!element) {
            throw new Error('Element is not found.');
        }

        this.element = element;
        this.state = State.getInstance();
        this.properties = properties;
        this.template = template;

        this.notify();
    }

    updateElements() {
    }

    getTemplateData() {
    }

    attachEvents() {
    }

    getSubcomponents() {
    }

    notify() {
        this.state.get();
        this.render();
    }

    render() {
        this.element.innerHTML = '';
        this.element.appendChild(this.createNodeFromTemplate(this.template(this.getTemplateData())));

        this.elements = this.updateElements();
        this.attachEvents();
        renderComponent(this.element, this.getSubcomponents());
    }

    createNodeFromTemplate(template) {
        const div = document.createElement('div');
        div.innerHTML = template.trim();

// Change this to div.childNodes to support multiple top-level nodes
        return div.firstChild;
    }
}

export default Component;
