import changeAttr from './changeAttr';
let getComponentAttributes = el => ( //el - dla jakiego elementu ma czytac dane
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

export default getComponentAttributes;