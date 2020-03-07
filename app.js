
$("#submit").click(function () {
    event.preventDefault();
    console.log("TEST");
    // RENDERS TOTALS IN EACH COLUMN
    $("#elecTotal").html("$" + Number($("#elec")[0].value));
    $("#waterTotal").html("$" + Number($("#water")[0].value));
    $("#gardTotal").html("$" + Number($("#gard")[0].value));
    $("#wifiTotal").html("$" + Number($("#wifi")[0].value));
    $("#gasTotal").html("$" + Number($("#gas")[0].value));
    splitTotals();
    toEach();
})

// RENDERS TOTALS DIVIDED BY 4 TO DETERMINE EACH PERSON'S RESPONSIBILITY
function splitTotals() {
    $("#elecSplit").html("$" + (($("#elec")[0]).value) / 4)
    $("#waterSplit").html("$" + (($("#water")[0]).value) / 4)
    $("#wifiSplit").html("$" + (($("#wifi")[0]).value) / 4)
    $("#gasSplit").html("$" + (($("#gas")[0]).value) / 4)
    // *** $10 WAS SUBTRACTED FROM TOTAL TO ACCOUNT FOR COST OF DOG DROPPINGS, SO IT WOULD DIVIDE -10 BY 4, RESULTING IN A NEGATIVE NUMBER.
    // IF/ELSE STATEMENT DIVIDES THE TOTAL IF IT'S POSITIVE, ELSE A '$0' IF THE TOTAL IS A NEGATIVE #.
    if ($("#gardTotal") > 0) {
        $("#gardSplit").html("$" + ((($("#gard")[0]).value) - 10) / 4)
    } else {
        $("#gardSplit").html("$" + 0)
    }

}

// RENDERS TOTAL DUE TO EACH PERSON (LEAH/BRIT/STEVE)
function toEach() {
    $("#Leah").html("<u>To Leah:</u><br>$");
    $("#Leah").append((((($("#elec")[0]).value) / 4) + (($("#water")[0]).value) / 4) + (($("#gas")[0]).value) / 4)
    $("#Brit").html("<u>To Brit:</u><br>$");
    $("#Brit").append((($("#water")[0]).value) / 4);
    $("#Steve").html("<u>To Steve:</u><br>$");
    // IF GARDENER COST HAS A POSITIVE VALUE, 1/4 COST GOES TO STEVE PLUS OTHER UTILITIES AND "**+$5 for dog droppings" renders
    // ELSE ONLY OTHER UTILITIES GOES TO STEVE, AND DOG DROPPING MESSAGE DOES NOT APPEAR
    if ((($("#gard")[0]).value) > 0) {
        $("#Steve").append((((($("#wifi")[0]).value) / 4) + ((($("#gard")[0]).value) - 10) / 4));
        $("#Steve").append("**")
        $("#Notes").html(" **+$5 Ea. for dog droppings")
    } else {
        $("#Notes").html("")
        $("#Steve").append((($("#wifi")[0]).value) / 4)
    }
}
