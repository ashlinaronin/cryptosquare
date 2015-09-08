describe('format', function() {
    it("handles uppercase", function() {
        expect(format("SANTACLAUS")).to.equal("santaclaus");
    });

    it("handles whitespace", function() {
        expect(format("SANTA CLAUS")).to.equal("santaclaus");
    });

    it("handles special characters", function() {
        expect(format("$ANTA CLAUS number 1!!")).to.equal("antaclausnumber1");
    });
});

describe('columnCount', function() {
    it("returns the square root for an input with a whole number square root", function() {
        // 64 character input -> 8 columns
        var inputString = "don't compare yourself to others, compare yourself person you were yesterday";
        var flattenedString = format(inputString);

        expect(columnCount(flattenedString)).to.equal(8);
    });

    it("returns the square root for an input with a smaller whole number square root", function() {
        // 16 character input -> 4 columns
        var inputString = "Portlands NachoWk!";
        var flattenedString = format(inputString);

        expect(columnCount(flattenedString)).to.equal(4);
    });

    it("handles a non-whole-number whole root case", function() {
        // 69 character input -> 9 columns
        var inputString = "don't compare yourself to others, compare yourself to the person you were yesterday";
        var flattenedString = format(inputString);

        expect(columnCount(flattenedString)).to.equal(9);
    });
});

describe('splitRows', function() {
    it("creates an array of strings from inputString, each with length equal to number of columns", function() {
        var inputString = "Portlands NachoWk!";
        var flattenedString = format(inputString);
        var rowLength = columnCount(flattenedString);
        var firstItemLength = splitRows(flattenedString)[0].length;

        expect(firstItemLength).to.equal(4);

    });
});

describe('encode', function() {
    // takes array of un-encoded rows as its parameter, returns array of encoded rows
    it("encodes the message of 16 length into 4x4 square", function() {
        var inputString = "Portlands NachoWk!";
        var flattenedString = format(inputString);

        var rowLength = columnCount(flattenedString);
        var rows = splitRows(flattenedString);

        var encodedRows = encode(flattenedString);
        // debugger;
        var firstEncodedRow = encodedRows[0];
        //
        expect(firstEncodedRow).to.equal('plsh');
    });

    it("puts encoded strings into strings with length of 5", function() {
        var inputString = "Portlands NachoWk!";
        var flattenedString = format(inputString);

        var rowLength = columnCount(flattenedString);
        var rows = splitRows(flattenedString);

        var encodedRows = encode(flattenedString);

        // var firstEncodedRow = encodedRows[0];

        expect(encodedRows[0]).to.equal('plsho');
        expect(encodedRows[1]).to.equal('anorn');
        expect(encodedRows[2]).to.equal('awtdc');
        expect(encodedRows[3]).to.equal('k');

    });
});
