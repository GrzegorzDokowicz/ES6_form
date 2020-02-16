import $ from 'jquery';
import State from './views/state';
import List from './views/list';

$(document).ready(() => {
    const application = new State();
    application.update([{ name: 'John', lastname: 'Doe' }])
    console.log(application);
    const namesList = new List(application, $(`.js-photo-list`))
    setTimeout(() => application.update([{ name: 'John', lastname: 'Doe' }, { name: 'Grześ' }]), 3000)
});


