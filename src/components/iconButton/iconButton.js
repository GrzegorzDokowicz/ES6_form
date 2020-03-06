import Button from '../button/button';

class IconButton extends Button {
    constructor(element, {callback, className, children}) {
        super(element, {callback, className, buttonText: children , modifier: 'icon'});
    }

}

export default IconButton;