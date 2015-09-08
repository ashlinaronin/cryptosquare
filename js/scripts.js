// We could re-factor this, but found it helpful to break things down into pieces.

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

var splitRows = function(message) {
    var output = [];
    var formattedMessage = format(message);
    var numberOfColumns = columnCount(formattedMessage);

    for (var i = 0; i < formattedMessage.length; i += numberOfColumns) {
        output.push(formattedMessage.slice(i, i + numberOfColumns));
    };
    return output;
};

var encode = function(message) {
    var encodedRows = [];
    var formattedMessage = format(message);
    var unencodedRows = splitRows(formattedMessage);
    var numberOfColumns = columnCount(formattedMessage);

    unencodedRows.forEach(function(row) {

        // Get this unencoded row into a letter array
        var letterArray = row.split("");

        var letterCount = 0;

        // Iterate through letters in this row and add one to the end of each next encoded row
        letterArray.forEach(function(letter) {

            // If this encoded row doesn't exist yet, initialize it to an empty string.
            if (!encodedRows[letterCount]) {
                encodedRows[letterCount] = "";
            }

            // Put this letter of this row in the corresponding position of a new row
            encodedRows[letterCount] += letter;

            // Increment letter count
            letterCount++;
        });
    });

    var encodedString = encodedRows.join("");
    var fiveCharChunks = [];

    for (var i = 0; i < encodedString.length; i += 5) {
        fiveCharChunks.push(encodedString.slice(i, i + 5));
    };

    return fiveCharChunks;
};
