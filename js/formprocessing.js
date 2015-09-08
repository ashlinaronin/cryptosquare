$(document).ready(function() {
    $("form#cryptosquare").submit(function(event) {
        var message = $("input#message").val();
        var encodedMessage = encode(message);

        var textToPrint = "";

        encodedMessage.forEach(function(row) {
            textToPrint += row + " ";
        });

        $("#result").text(textToPrint);

        $("#result").show();
        event.preventDefault();
    });
});
