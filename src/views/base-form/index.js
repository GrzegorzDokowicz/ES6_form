class PhotoBaseForm {
    constructor($el, isCreate) {
        this.$el = $el;
        this.isCreate = isCreate;
    }

    save() {
        if (this.isCreate) {
            console.log("From creation");
        } else {
            console.log("From edit");
        }
    }
}

export default PhotoBaseForm;