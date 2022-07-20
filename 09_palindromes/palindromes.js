const palindromes = function (args) {
    string = args.toLowerCase().replace(/\W/g, "");
  return (string.split("").reverse().join("") === string);
};


// Do not edit below this line
module.exports = palindromes;
