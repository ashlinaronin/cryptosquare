describe('encode', function() {
    it("makes SANTACLAUS into santaclaus", function() {
        expect(encode("SANTACLAUS")).to.equal("santaclaus");
    });

    it("makes SANTA CLAUS into santaclaus", function() {
        expect(encode("SANTA CLAUS")).to.equal("santaclaus");
    });

    it("makes $ANTA CLAUS!! into santaclaus", function() {
        expect(encode("$ANTA CLAUS!!")).to.equal("antaclaus");
    });
});
