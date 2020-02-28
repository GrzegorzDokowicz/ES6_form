class Button {
    constructor(element, callback, className, buttonText, modifier = null) {
        this.element = element;
        this.callback = callback;
        this.className = className;
        this.buttonText = buttonText;
        this.modifier = modifier;

        this.render();
    }

    attachClickEvent(callback) { // musi byc przekazany this.callback ! inaczej callback bedzie undefined
        if (this.callback && typeof this.callback === "function") {
            let element = null;
            if (this.modifier) {
                element = document.querySelector(`.${this.className}--${this.modifier}`);
            } else {
                element = document.querySelector(`.${this.className}`);
            }
            element.addEventListener("click", callback);
        }
    }

    prepareNode() {
        let node = document.createElement('button');

        if (this.modifier) {
            node.classList.add(`${this.className}`,`${this.className}--${this.modifier}`);
        } else {
            node.classList.add(`${this.className}`);
        }
        node.textContent = this.buttonText;

        return node;
    }

    render() {
        document.querySelector(this.element).appendChild(this.prepareNode())
        this.attachClickEvent(this.callback);
    }
}

export default Button;