class Button {
    constructor(rootElement,buttonText, callback, isModified = false,...modifierName) {
        this.rootElement = rootElement;
        this.buttonText = buttonText;
        this.callback = callback;
        this.isModified = isModified;
        this.modifier = modifierName;

    }

    private prepareComponent() {
        let component = '';
        if (this.isModified) {
            component = `<button class="${this.buttonClassName}--${this.modifierName}">${this.buttonText}</button>`
        } else {
            component = `<button class="${this.buttonClassName}">${this.buttonText}</button>`
        }

        return component;
    }

    private createButton() {

    }

}

export default Button