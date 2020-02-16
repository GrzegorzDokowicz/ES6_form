import Store from '../../core/store'

class State extends Store {
    constructor() {
        super();
        this.state = [];
    }

    update(data = {}) {
        this.state = Object.assign(this.state, data)
        this.notifyObservers(this.state)
    }

    get() {
        return this.state
    }
}

export default State;