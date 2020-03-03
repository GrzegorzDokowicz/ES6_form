import Subject from '../../core/subject';

let instance = {};

class State extends Subject {
    static getInstance(name, initialData = {}) {
        if (!instance[name]) {
            instance[name] = new State(initialData);
        }

        return instance[name];
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


