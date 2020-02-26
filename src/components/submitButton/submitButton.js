import Button from "../button/button";

class submitButton extends Button {
    constructor(element, callback, className, buttonText) {
        super(element, callback, className, buttonText, "submit");
    }
}

export default Button;