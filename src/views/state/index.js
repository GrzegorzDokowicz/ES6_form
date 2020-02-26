import Subject from '../../core/subject';

let instance = null;


class State extends Subject {
    constructor(data = {}) {
        super();
        if (!!instance) return instance;
        this.state = data
        instance = this
    }

    update(callback) {
        this.state = callback(this.state);
        this.notifyObservers(this.state);
    }

    get() {
        return this.state;
    }
}

export default State;


