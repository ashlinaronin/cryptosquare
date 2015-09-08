var encode = function(message) {
    var output = "";

    // Remove whitespace and convert to lower case
    output = message.toLowerCase().replace(/[^\w]+/gi, "");

    return output;
}

var columnCount = function(message) {
    var output = "";

    var numberOfCharacters = encode(message).length;

    var numberOfColumns = Math.sqrt(numberOfCharacters);
    if (numberOfColumns % 1 === 0) {
        return numberOfColumns;
    } else {
        return false;
    }
}
