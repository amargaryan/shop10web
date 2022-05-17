function myFuncSeller(evt, val) {
    let i, tabcontentSeller, tablinksSeller;
    tabcontentSeller = document.getElementsByClassName("tabcontent-seller");
    for (i = 0; i < tabcontentSeller.length; i++) {
        tabcontentSeller[i].style.display = "none";
    }
    tablinksSeller = document.getElementsByClassName("tablinks_seller");
    for (i = 0; i < tablinksSeller.length; i++) {
        tablinksSeller[i].className = tablinksSeller[i].className.replace(" active", "");
    }
    document.getElementById(val).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpenSeller").click();