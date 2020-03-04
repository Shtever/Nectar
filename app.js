
$("#submit").click(function () {
    event.preventDefault();
    console.log("TEST");
    $("#elecTotal").html("$" + Number($("#elec")[0].value));
    $("#waterTotal").html("$" + Number($("#water")[0].value));
    $("#gardTotal").html("$" + Number($("#gard")[0].value));
    $("#wifiTotal").html("$" + Number($("#wifi")[0].value));
    $("#gasTotal").html("$" + Number($("#gas")[0].value));
    splitTotals();
    toEach()
})


function splitTotals() {
    $("#elecSplit").html("$" + (($("#elec")[0]).value)/4)
    $("#waterSplit").html("$" + (($("#water")[0]).value)/4)
    $("#gardSplit").html("$" + ((($("#gard")[0]).value)-10)/4)
    $("#wifiSplit").html("$" + (($("#wifi")[0]).value)/4)
    $("#gasSplit").html("$" + (($("#gas")[0]).value)/4)
}

// TODO ADD TOTALS TO EACH PERSON
function toEach() {
    $("#Leah").html("<u>To Leah:</u><br>$");
    $("#Leah").append((((($("#elec")[0]).value)/4) + (($("#water")[0]).value)/4) + (($("#gas")[0]).value)/4)
    $("#Brit").html("<u>To Brit:</u><br>$");
    $("#Brit").append((($("#water")[0]).value)/4)
    $("#Steve").html("<u>To Steve:</u><br>$");
    $("#Steve").append((((($("#wifi")[0]).value)/4) + ((($("#gard")[0]).value)-10)/4)+ "**")
    $("#Notes").html(" **+$5 Ea. for dog droppings")
}
