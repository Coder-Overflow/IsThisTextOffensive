$("#floatingInput").keyup(event => { 
    if (event.target.value == "") {
        $(document.body).css("background-color", "white");
        $("#result").text("-");
        return;
    }

    fetch(`/classifytext/${event.target.value}`, { 
        method: 'POST',
    })
    .then(response => response.text())
    .then(data => {
        if (data == "1") {
            console.log("is offensive");
            $("#result").html("This text is <b>offensive</b>.");
            $(document.body).css("background-color", "#ff5656");
        }
        else if (data == "0") {
            console.log("might be offensive");
            $("#result").html("This text <b>might be offensive</b>.");
            $(document.body).css("background-color", "white");
        }
        else {
            console.log("is not offensive");
            $("#result").html("This text is <b>not offensive</b>.");
            $(document.body).css("background-color", "#95ffc8");
        }
    })
});
