import firstLetterToUppercase from './firstLetterToUppercase';

//funkcja zmiany nazw na camelCase
/**
 * Change given element (name) to camelCase
 * @param name {string}
 * @returns {string}
 */
const changeAttr = name => {
    const array = name.toString().split('-');
    const [firstElement, ...restOfArray] = array;
    const stringRest = restOfArray.map(firstLetterToUppercase).join('');

    return `${firstElement.toString().toLowerCase()}${stringRest}`
};

export default changeAttr;
