class Button {
    constructor(element, callback, className, buttonText, modifier = null) {
        this.element = element;
        this.callback = callback;
        this.className = className;
        this.buttonText = buttonText;
        this.modifier = modifier;

        this.render();
    }

    attachClickEvent(callback) {
        if (this.callback && typeof this.callback === "function") {
            const element = document.querySelector(`.${this.className}`);
            element.addEventListener("click", callback);
        }
    }

    prepareComponent() {
        let component = "";
        if (this.modifier) {
            component = `<button class="${this.className}--${this.modifier}">${
                this.buttonText
            }</button>`;
        } else {
            component = `<button class="${this.className}">${
                this.buttonText
            }</button>`;
        }
        return component;
    }

    render() {
        document.querySelector(this.element).innerHTML = this.prepareComponent();
        this.attachClickEvent(this.callback);
    }
}

export default Button;