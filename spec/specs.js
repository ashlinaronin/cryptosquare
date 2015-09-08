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

describe('columnCount', function() {
    it("is 8 columns for a 64 character input", function() {
        var inputString = "don't compare yourself to others, compare yourself person you were yesterday";
        var flattenedString = encode(inputString);

        expect(columnCount(flattenedString)).to.equal(8);
    });

    it("is 4 columns for a 16 character input", function() {
        var inputString = "Portlands NachoWk!";
        var flattenedString = encode(inputString);

        expect(columnCount(flattenedString)).to.equal(4);
    });
});
