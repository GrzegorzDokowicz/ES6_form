/*eslint-disable*/
import $ from 'jquery';
import State from './views/state';
import List from './views/list';
import Requests from "./core/requests";

document.addEventListener("DOMContentLoaded",  () => {
    const initialStateData = {
        photos: []
    };
    const application = new State(initialStateData);

    new Requests().get('http://www.mocky.io/v2/5e513b0e3100008500415951').then(data => data.forEach(element => application.state.photos.push(element)));
    setTimeout(()=> new List(application, '.js-photo-list'), 3000)

})


