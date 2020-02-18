import { template } from 'lodash';
import ViewTemplate from '../viewTemplate';

class List extends ViewTemplate {
  constructor(state, element) {
    super(state, element);
    this.notify();
  }

  createComponent() {
    const compiled = template('<ul class="<%- className %>"><% _.forEach(users, function(user) { %><li><%- user.name %></li><% }); %></ul>');

    const component = compiled({
      className: 'userList',
      users: this.data,
    });
    return component;
  }

  render() {
    document.querySelector(this.element).innerHTML = this.createComponent();
  }

  notify() {
    this.render();
  }
}
export default List;
