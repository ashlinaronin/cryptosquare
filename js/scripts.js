var format = function(message) {
    var output = "";

    // Remove whitespace and convert to lower case
    output = message.toLowerCase().replace(/[^\w]+/gi, "");

    return output;
};

var columnCount = function(message) {
    var output = "";
    var numberOfCharacters = format(message).length;
    var numberOfColumns = Math.sqrt(numberOfCharacters);

    if (numberOfColumns % 1 === 0) {
        return numberOfColumns;
    } else {
        return Math.ceil(numberOfColumns);
    };
};

var encode = function(message) {
    var output = [];
    var formattedMessage = format(message);
    var numberOfColumns = columnCount(formattedMessage);

    for (var i = 0; i < formattedMessage.length; i += numberOfColumns) {
        output.push(formattedMessage.slice(i, i + numberOfColumns));
    };
    return output;
};
