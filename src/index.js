/*eslint-disable*/
import $ from 'jquery';
import State from './views/state';
import List from './views/list';
import Requests from "./core/requests";
import PrimaryButton from './components/primaryButton/primaryButton';
import IconButton from './components/iconButton/iconButton';


document.addEventListener("DOMContentLoaded", () => {
    const initialStateData = {
        photos: []
    };
    const application = State.getInstance('application', initialStateData);

    /*(async () => {
        await new Requests().get('http://www.mocky.io/v2/5e513b0e3100008500415951').then(data => data.forEach(element => application.state.photos.push(element)));
        new PrimaryButton('.js-photo-new', () => console.log("Add button"),'button', 'Add new record');
        new IconButton('.js-photo-new', () => console.log('Im Edit BTN'), '<i class="material-icons">edit</i>');
        new List(application, '.js-photo-list');
    })();*/

    const listDataPromise = (new Requests()).get('http://www.mocky.io/v2/5e513b0e3100008500415951');
    listDataPromise.then(data => {
        application.update(state => ({...state, photos: [...data]})) //update calego stanu, argument stary stan, zwraca nowy, setState z React.js 1:1
    });

    new PrimaryButton(document.querySelector('.js-photo-edit'), () => console.log("Add button"),'button', 'Add new record');
    new IconButton(document.querySelector('.js-photo-new'), () => console.log('Im Edit BTN'), '<i class="material-icons">edit</i>');
    new List(application, '.js-photo-list');
});


