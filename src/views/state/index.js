import Subject from '../../core/subject';

let instance = null;

class State extends Subject {
    static getInstance(initialData = {}) {
        if (!instance) {
            instance = new State(initialData);
        }

        return instance;
    }

    constructor(data = {}) {
        super();
        this.state = data;
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


