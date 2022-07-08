const removeFromArray = function(...args) {
    newArray = [];
    array = args[0];
    for (let i = 0; i < array.length; i++) {
        if (!args.includes(array[i])) {
            newArray.push(array[i]);
        } 
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
