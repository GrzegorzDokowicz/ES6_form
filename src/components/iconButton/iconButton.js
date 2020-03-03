import Button from '../button/button';

class IconButton extends Button {
    constructor(element, callback, iconHTML, modifier = null) {
        super(element, callback, 'icon-button', null, modifier)
        this.iconHTML = iconHTML;

        this.addIconHTML();
    }

    addIconHTML() {
        let element = null;
        if (this.modifier) {
            element = document.querySelectorAll(`.${this.className}--${this.modifier}`);
        } else {
            element = document.querySelectorAll(`.${this.className}`);
        }

        element.forEach(el => {
            el.innerHTML = this.iconHTML;
        })
    }

}

export default IconButton;