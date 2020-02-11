let storeInstance = null;

class Store {
    constructor() {
        this.callbacks = [];
    }

    subscribe(callback) {
        this.callbacks = [...this.callbacks, callback];
    }

    set(data) {
        for (let callback of this.callbacks) {
            callback(data);
        }
    }

    static getInstance() {
        if (!storeInstance) {
            storeInstance = new this();
        }

        return storeInstance;
    }
}

export default Store;