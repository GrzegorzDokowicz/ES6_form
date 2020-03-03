import {template} from 'lodash';
import ViewTemplate from '../viewTemplate';
import iconButton from '../../components/iconButton/iconButton';

class List extends ViewTemplate {
    constructor(state, element) {
        super(state, element);
    }

    createComponent() {
        const tableTemplate = `<table class="<%- tableClassName %>"><thead><tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Photo</th><th>Options</th></tr></thead>` +
            `<tbody class="<%- tableBodyClassName %>"><%_.forEach(users, function (user) { %><tr><td class="user-id"><%- user.id %></td> <td><%-user.first_name %></td> <td><%-user.last_name %></td> <td><%-user.email %></td> <td><img src="<%- user.URL %>" alt="User Photo"></td><td class="options-field"></td></tr>  <% }); %></tbody></table>`
        const compiled = template(tableTemplate);
        return compiled({
            tableClassName: 'authorsList__tableHeaders',
            tableBodyClassName: 'authorsList__tableBody',
            users: this.storeData.photos,
        })
    }

    render() {
        document.querySelector(this.element).innerHTML = this.createComponent();
    }
}

export default List;
