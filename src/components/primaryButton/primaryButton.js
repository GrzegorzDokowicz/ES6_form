import Button from "../button/button";

class PrimaryButton extends Button {
    constructor(element, {callback, className, children}) {
        super(element, {callback, className, buttonText: children, modifier: "primary"});
    }
}

export default PrimaryButton;