class Observer {
  constructor(state) {
    state.registerObserver(this);
  }

  notify() {}
}

export default Observer;
