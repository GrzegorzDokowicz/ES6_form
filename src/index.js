/*eslint-disable*/
import $ from 'jquery';
import State from './views/state';
import List from './views/list';
import Requests from "./core/requests";
import PrimaryButton from './components/primaryButton/primaryButton';
import IconButton from './components/iconButton/iconButton';

const firstUppercaseLetter = element => {
    const [firstLetter, ...restOfLetters] = element;

    return `${firstLetter.toString().toUpperCase()}${restOfLetters.join('').toString().toLowerCase()}`;
};

//funkcja zmiany nazw na camelCase
const changeAttr = name => {
    const array = name.toString().split('-');
    const [firstElement, ...restOfArray] = array;
    const stringRest = restOfArray.map(firstUppercaseLetter).join('');

    return `${firstElement.toString().toLowerCase()}${stringRest}`
};

const getComponentAttributes = el => ( //el - dla jakiego elementu ma czytac dane
    {
        ...([].filter.call(el.attributes, function (at) {
            return /^data-/.test(at.name);
        })//funkcja pobierajaca wszystkie atrybuty z 'data-' na poczatku https://stackoverflow.com/questions/4187032/get-list-of-data-attributes-using-javascript-jquery
            .map(element => ({
                name: element.name.replace('data-', ''),
                value: element.value
            }))
            .reduce((prev, current) => {
                prev[changeAttr(current.name)] = current.value;

                return prev;
            }, {})),
        children: el.innerHTML || ''
    }
);

const renderComponent = mainElement => mainElement.querySelectorAll('[data-component]').forEach(element => {
    const {component, ...properties} = getComponentAttributes(element);
    const callback = () => {
        console.log("clicked button");
    };

    const components = {
        PrimaryButton,
        IconButton
    };

    if (component === "PrimaryButton") {
        new (components[component])(element, callback, properties.className, properties.children);
    } else if (component === "iconButton") {
        new IconButton(element, callback, properties.children);
    }
    console.log(component, properties);
});

document.addEventListener("DOMContentLoaded", () => {
    const initialStateData = {
        photos: []
    };
    const application = State.getInstance(initialStateData);

    (new Requests()).get('http://www.mocky.io/v2/5e513b0e3100008500415951').then(data => {
        application.update(state => ({...state, photos: [...data]}))
        //update calego stanu, argument stary stan, zwraca nowy, setState z React.js 1:1
    });
    //new PrimaryButton(document.querySelector('.js-photo-edit'), () => console.log("Add button"),'button', 'Add new record');
    new List('.js-photo-list');

    renderComponent(document);
});


