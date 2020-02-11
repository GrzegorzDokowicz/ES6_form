import Store from '../../../core/store';

class PhotoList {
    constructor($el) {
        if ($el) {
            this.store = Store.getInstance();
            console.log(this.store.data);

            this.store.subscribe(data => {
                console.log("Photo list change", data);
            })

            this.store.subscribe(data => {
                console.log("Photo list data changed");
            })
        }
    }
}

export default PhotoList;