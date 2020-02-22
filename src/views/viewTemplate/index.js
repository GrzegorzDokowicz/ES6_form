import Observer from '../../core/observer';

class ViewTemplate extends Observer {
  constructor(state, element) {
    super(state);
    this.element = element;
    this.state = state;
    this.storeData = state.get();
    this.notify();
  }

  notify() {
    this.storeData = this.state.get();
    this.render();
  }
  // Extension required
  render() {}
}

export default ViewTemplate;
