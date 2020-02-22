import { template } from 'lodash';
import ViewTemplate from '../viewTemplate';

class List extends ViewTemplate {
  constructor(state, element) {
    super(state, element);
  }

  createComponent() {
    console.log("From create", this.storeData);
    const compiled = template('<ul class="<%- className %>"><% _.forEach(users, function(user) { %><li><%- console.log(user.name) %></li><% }); %></ul>');

    return compiled({
      className: 'userList',
      users: this.storeData.photos,
    });
  }

  render() {
    document.querySelector(this.element).innerHTML = this.createComponent();
  }
}
export default List;
