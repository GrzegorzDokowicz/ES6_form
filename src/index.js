/*eslint-disable*/
import $ from 'jquery';
import State from './views/state';
import List from './views/list';

document.addEventListener("DOMContentLoaded", function () {
    const initialStateData = {
        photos: [{name: 'John', lastname: 'Doe'}]
    };
    const application = new State(initialStateData);

    new List(application, '.js-photo-list');

    setTimeout(() => application.update((lastState) => ({
        ...lastState,
        photos: [
            ...lastState.photos,
            {
                name: 'Marek',
            }
        ]
    })), 3000);
})


