import $ from 'jquery';
import Store from './core/store';
import PhotoView from './views/photo';

$(document).ready(() => {
    Store.getInstance();

    $('.js-photo').each(element => {
        new PhotoView($(element));
    })
});