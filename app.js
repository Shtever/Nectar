
$("#submit").click(function () {
    event.preventDefault();
    console.log("TEST");
    $("#elecTotal").html("$" + Number($("#elec")[0].value));
    $("#waterTotal").html("$" + Number($("#water")[0].value));
    $("#gardTotal").html("$" + Number($("#gard")[0].value));
    $("#wifiTotal").html("$" + Number($("#wifi")[0].value));
    $("#gasTotal").html("$" + Number($("#gas")[0].value));
    splitTotals();
    // toEach()
})


function splitTotals() {
    $("#elecSplit").append("$" + (($("#elec")[0]).value)/4)
    $("#waterSplit").append("$" + (($("#water")[0]).value)/4)
    $("#gardSplit").append("$" + (($("#gard")[0]).value)/4)
    $("#wifiSplit").append("$" + (($("#wifi")[0]).value)/4)
    $("#gasSplit").append("$" + (($("#gas")[0]).value)/4)
}

// TODO ADD TOTALS TO EACH PERSON