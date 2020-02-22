/*eslint-disable*/
import $ from 'jquery';
import State from './views/state';
import List from './views/list';

$(document).ready(() => {
    const initialStateData = {
        photos: [{name: 'John', lastname: 'Doe'}]
    };
    const application = new State(initialStateData); // State na singletona !

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
});

