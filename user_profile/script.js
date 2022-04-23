function openCity(evt, val) {
    var i, tabcontentBuyer, tablinksBuyer;
    tabcontentBuyer = document.getElementsByClassName("tabcontent-buyer");
    for (i = 0; i < tabcontentBuyer.length; i++) {
        tabcontentBuyer[i].style.display = "none";
    }
    tablinksBuyer = document.getElementsByClassName("tablinks-buyer");
    for (i = 0; i < tablinksBuyer.length; i++) {
        tablinksBuyer[i].className = tablinksBuyer[i].className.replace(" active", "");
    }
    document.getElementById(val).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpenBuyer").click();