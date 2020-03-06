import template from "./view.tmpl";
import Component from '../component';
import IconButton from '../iconButton/iconButton';

class TableList extends Component {
    constructor(element, props) {
        super(element, template, props);
    }

    getSubcomponents() {
        return {
            IconButton
        }
    }
}

export default TableList;