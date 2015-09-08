var encode = function(message) {
    var output = "";

    // Remove whitespace and convert to lower case
    output = message.toLowerCase().replace(/\s+/g, "");

    return output;
}
