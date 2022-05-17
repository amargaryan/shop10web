function openFunc(evt, val) {
    let i, tabcontentAdmin, tablinksAdmin;
    tabcontentAdmin = document.getElementsByClassName("tabcontent_admin");
    for (i = 0; i < tabcontentAdmin.length; i++) {
        tabcontentAdmin[i].style.display = "none";
    }
    tablinksAdmin = document.getElementsByClassName("tablinks_admin");
    for (i = 0; i < tablinksAdmin.length; i++) {
        tablinksAdmin[i].className = tablinksAdmin[i].className.replace(" active", "");
    }
    document.getElementById(val).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpenAdmin").click();