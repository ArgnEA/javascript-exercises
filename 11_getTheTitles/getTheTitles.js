const getTheTitles = function(array) {
    let bookNames = [];
    for (let i = 0; i < array.length; i++) {
        bookNames[i] = array[i].title;
    }
    return bookNames;
}

// Do not edit below this line
module.exports = getTheTitles;
