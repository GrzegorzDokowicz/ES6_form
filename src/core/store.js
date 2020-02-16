class Store {
    constructor() {
        this.observers = []
    }

    registerObserver(observer) {
        this.observers.push(observer)
    }

    unregisterObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(data) {
        if (this.observers.length > 0) {
            this.observers.forEach(observer => observer.notify(data));
        }
    }

}

export default Store;