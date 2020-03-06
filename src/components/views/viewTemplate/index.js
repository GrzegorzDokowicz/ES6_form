import Observer from '../../../core/observer';
import State from '../state';

class ViewTemplate extends Observer {
  constructor(element) {
    super(State.getInstance());
    this.element = element;
    this.state = State.getInstance();
    this.storeData = State.getInstance().get();
    this.notify();
  }

  notify() {
    this.storeData = this.state.get();
    this.renderAll();
  }
  // Extension required
  render() {

  }

  renderAll() {
    this.render();
  }

  createNodeFromTemplate(template) {
    const div = document.createElement('div');
    div.innerHTML = template.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
  }
}

export default ViewTemplate;
