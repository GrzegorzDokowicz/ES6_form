import Button from "../button/button";

class editButton extends Button {
    constructor(element, callback, className, buttonText) {
        super(element, callback, className, buttonText, "edit");
    }
}

export default editButton;