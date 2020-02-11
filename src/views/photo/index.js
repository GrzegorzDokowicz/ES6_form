import $ from 'jquery';

import PhotoNew from './new';
import PhotoEdit from './edit';
import PhotoList from './list';

class PhotoView {
    constructor($el) {
        if ($el) {
            this.$elements = {
                new: $('.js-photo-new', $el),
                edit: $('.js-photo-edit', $el),
                list: $('.js-photo-list', $el)
            }

            this.init();
        }
    }

    init() {
        this.initSubviews();
    }

    initSubviews() {
        this.newView = new PhotoNew(this.$elements.new);
        this.listView = new PhotoList(this.$elements.list);
        this.editView = new PhotoEdit(this.$elements.edit);
    }
}

export default PhotoView;