import Button from '../button/button';

class IconButton extends Button {
    constructor(element, callback, iconHTML, modifier = null) {
        super(element, callback, 'icon-button', iconHTML, modifier)
    }

}

export default IconButton;