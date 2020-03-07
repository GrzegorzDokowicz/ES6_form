import Button from '../button/button';
import renderComponent from '../../core/utils/renderComponent';

class IconButton extends Button {
    constructor(element, {callback, className, children}) {
        super(element, {callback, className, buttonText: children, modifier: 'icon'});
    }

    render() {
        if (this) {
            this.element.innerHTML = '';
            const button = document.createElement('button');
            button.innerHTML = this.properties.buttonText.toString().trim();
            this.element.appendChild(button);

            this.updateElements();
            this.attachEvents();
            renderComponent(this.element, this.getSubcomponents());

        } else super.render()
    }
}

export default IconButton;