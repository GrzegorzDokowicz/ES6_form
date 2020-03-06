import Component from '../../component';
import template from './list-view.tmpl';
import TableList from '../../table-list';

class List extends Component {
    constructor(element) {
        super(element, template, {});
    }

    getSubcomponents() {
        return {
            TableList
        }
    }
}

export default List;
