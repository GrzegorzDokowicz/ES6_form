import template from "./view.tmpl";
import Component from '../component';

class Button extends Component {
    constructor(element, props) {
        super(element, template, props);

        this.updateElements();
        this.render();
    }

    getTemplateData() {
        return {
            modifier: this.properties.modifier,
            className: this.properties.className,
            title: this.properties.buttonText
        };
    }

    updateElements() {
        return {
            button: this.element.querySelectorAll(`[data-js-reference="innerButton"]`)
        };
    }

    attachEvents() {
        this.attachClickEvent();
    }

    attachClickEvent() {
        const {callback} = this.properties;

        if (callback && typeof callback === 'function') {
            this.elements.button.forEach(el => el.addEventListener('click', callback));
        }
    }

    setClickCallback(callback) {
        this.properties.callback = callback;
        this.attachClickEvent();
    }
}

export default Button;