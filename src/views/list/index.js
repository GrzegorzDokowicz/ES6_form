
import ViewTemplate from '../viewTemplate';

class List extends ViewTemplate {
    constructor(state, $element) {
        super(state, $element)
        this.notify()
    }

    render() {
        let container = [];
        for (let index = 0; index < this.data.length; index++) {
            container.push(`<div>${this.data[index].name}</div>`)
        }
        this.element.append(container)
    }
    notify() {
        this.render()
    }
}
export default List;