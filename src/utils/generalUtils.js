
export const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};


const removeSpecialChars = text => text.replace(/[^a-zA-Z ]/g, "");

export const firstLetterUpperCase = (manipulatedString) => {
    manipulatedString = removeSpecialChars(manipulatedString);
    return manipulatedString.charAt(0).toUpperCase() + manipulatedString.slice(1).toLowerCase();
}