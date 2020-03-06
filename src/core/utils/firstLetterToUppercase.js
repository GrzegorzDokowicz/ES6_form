/**
 * Function which change word first letter to Upper Case, and rest of letters to Lower Case
 * @param element {string} - it should be word, which we want to change f.e. element = hello => returns Hello
 * @returns {string}
 */
const firstLetterToUppercase = element => {
    const [firstLetter, ...restOfLetters] = element;

    return `${firstLetter.toString().toUpperCase()}${restOfLetters.join('').toString().toLowerCase()}`;
};

export default firstLetterToUppercase;