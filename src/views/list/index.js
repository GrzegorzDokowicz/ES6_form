import {template} from 'lodash';
import ViewTemplate from '../viewTemplate';

class List extends ViewTemplate {
    constructor(state, element) {
        super(state, element);
    }

    createComponent() {
        console.log("From create", this.storeData.photos);
        const tableTemplate = '<table class="<%- tableClassName %>"><thead><tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Photo</th></tr></thead>' +
            '<tbody class="<%- tableBodyClassName %>"><%_.forEach(users, function (user) { %><tr><td><%- user.id %></td> <td><%-user.first_name %></td> <td><%-user.last_name %></td> <td><%-user.email %></td> <td><img src="<%- user.url %>" alt="User Photo"></td>  <% }); %></tr></tbody></table>'
        const compiled = template(tableTemplate);

        return compiled({
            tableClassName: 'authorsList',
            tableBodyClassName: 'authorsListTableBody',
            users: this.storeData.photos,
        });
    }

    render() {
        document.querySelector(this.element).innerHTML = this.createComponent();
    }
}

export default List;
