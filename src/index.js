/*eslint-disable*/
import $ from 'jquery';
import State from './views/state';
import List from './views/list';
import Requests from "./core/requests";
import Button from "./components/button/button";
import submitButton from "./components/submitButton/submitButton";
import editButton from "./components/editButton/editButton";

document.addEventListener("DOMContentLoaded",  () => {
    const initialStateData = {
        photos: []
    };
    const application = new State(initialStateData);
    (async ()=> {
        await new Requests().get('http://www.mocky.io/v2/5e513b0e3100008500415951').then(data => data.forEach(element => application.state.photos.push(element)));
        new submitButton('.js-photo-new',()=>console.log("2"),'Button','Click Me !');
        new editButton('.js-photo-new',()=>console.log("3"),'Button','Click Me !');
        new List(application, '.js-photo-list');
    })();

})


