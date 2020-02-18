import Subject from '../../core/subject';

class State extends Subject {
  constructor() {
    super();
    this.state = {};
  }

  update(data = {}) {
    this.state = Object.assign(this.state, data);
    this.notifyObservers(this.state);
  }

  get() {
    return this.state;
  }
}

export default State;
