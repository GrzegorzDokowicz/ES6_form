class Button {
    constructor(element, callback, className, buttonText, modifier = null) {
        this.element = element;
        this.callback = callback;
        this.className = className;
        this.buttonText = buttonText;
        this.modifier = modifier;
        this.elements = {
            button:
                element.querySelectorAll(`.${this.className}${this.modifier ? `--${this.modifier}`: ''}`)
        };

        this.render();
    }

    attachClickEvent() {
        if (this.callback && typeof this.callback === 'function') {
            this.elements.button.forEach(el =>{
                el.addEventListener('click', this.callback);
            })
        }
    }

    prepareNode() {
        let node = document.createElement('button');

        if (this.modifier) {
            node.classList.add(`${this.className}`, `${this.className}--${this.modifier}`);
        } else {
            node.classList.add(`${this.className}`);
        }
        if (this.buttonText) {
            node.textContent = this.buttonText;
        }

        return node;
    }

    render() {
        const node = this.prepareNode();

        if (this.element.childNodes[0]) {
            this.element.replaceChild(node, this.element.childNodes[0]);
        } else {
            this.element.textContent = '';
            this.element.appendChild(node);
        }
        this.attachClickEvent();
    }
}

export default Button;