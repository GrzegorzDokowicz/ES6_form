/*eslint-disable*/
import State from './components/views/state';
import List from './components/views/list';

document.addEventListener("DOMContentLoaded", () => {
    const initialStateData = {
        photos: []
    };
    State.getInstance(initialStateData);

    new List(document.querySelector('[data-js-reference="js-photo-list"]'));
});


