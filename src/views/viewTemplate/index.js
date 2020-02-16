import Observer from "../../core/observer";

class ViewTemplate extends Observer {
    constructor(state, element) {
        super(state);
        this.element = element
        this.data = state.get()
    }

    render() { }

    notify() {
        this.render()
    }
}

export default ViewTemplate;