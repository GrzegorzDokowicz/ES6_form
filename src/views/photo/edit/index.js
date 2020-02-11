import Store from '../../../core/store';
import PhotoBaseForm from "../../base-form";

class PhotoEdit extends PhotoBaseForm {
    constructor($el) {
        super($el, false);

        if ($el) {
            this.store = Store.getInstance();
            console.log(this.store.data);
            setTimeout(() => {
                this.store.set({
                    list: [2, 3, 4, 5]
                });
                console.log("Changed store from Photo Edit");
            }, 4000);
        }

        console.log(this.save());
    }
}

export default PhotoEdit;