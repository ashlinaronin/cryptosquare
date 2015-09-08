describe('encode', function() {
    it("makes SANTACLAUS into santaclaus", function() {
        expect(encode("SANTACLAUS")).to.equal("santaclaus");
    });

    it("makes SANTA CLAUS into santaclaus", function() {
        expect(encode("SANTA CLAUS")).to.equal("santaclaus");
    });

    it("makes $ANTA CLAUS number 1!! into antaclausnumber1", function() {
        expect(encode("$ANTA CLAUS number 1!!")).to.equal("antaclausnumber1");
    });
});

describe('squareSize', function() {
    it("is 8 rows by 9 columns for a 69 character input", function() {
        var inputString = "don't compare yourself to others, compare yourself to the person you were yesterday";
        var flattenedString = encode(inputString);

        expect(squareSize(flattenedString)).to.equal([8,9]);
    });
})
