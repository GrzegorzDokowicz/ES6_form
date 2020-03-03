import Button from "../button/button";

class PrimaryButton extends Button {
    constructor(element, callback, className, buttonText) {
        super(element, callback, className, buttonText, "primary");
    }
}

export default PrimaryButton;