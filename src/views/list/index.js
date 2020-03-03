import ViewTemplate from '../viewTemplate';
import template from './view.tmpl';

class List extends ViewTemplate {
    constructor(state, element) {
        super(state, element);
    }

    createComponent() {
        return template({
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
