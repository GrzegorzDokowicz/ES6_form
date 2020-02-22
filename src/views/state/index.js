import Subject from '../../core/subject';

class State extends Subject {
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
