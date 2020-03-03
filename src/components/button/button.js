import template from "./view.tmpl";
import ViewTemplate from '../../views/viewTemplate';

class Button extends ViewTemplate {
    constructor(element, callback, className, buttonText, modifier = null) {
        super(element);
        this.element = element;
        this.callback = callback;
        this.className = className;
        this.buttonText = buttonText;
        this.modifier = modifier;

        this.updateElements();
        this.render();
    }

    updateElements() {
        this.elements = {
            button:
                this.element.querySelectorAll(`.${this.className}${this.modifier ? `--${this.modifier}`: ''}`)
        };
    }

    attachClickEvent() {
        if (this.callback && typeof this.callback === 'function') {
            this.elements.button.forEach(el => {
                el.addEventListener('click', this.callback);
            })
        }
    }

    render() {
        this.element.innerHTML = '';
        this.element.appendChild(this.createNodeFromTemplate(template({
            modifier: this.modifier,
            className: this.className,
            title: this.buttonText
        })));

        this.updateElements();
        this.attachClickEvent();
    }
}

export default Button;