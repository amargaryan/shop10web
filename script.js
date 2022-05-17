async function getCategories() {
    let response = await fetch('http://shop.test/api/categories');
    if (response.ok) {
        let categories = await response.json();
        categories = categories.data;
        drawMenu(categories);
    } else {
        alert("error HTTP: " + response.status);
    }
}

getCategories();

const drawMenu = (categories) => {
    let x = document.getElementById("drop");
    categories.map((item, index) => {
        if (item.children.length === 0) {
            x.innerHTML += `<li><a href="#" class="dropdown-item">${item.name}</a></li>`;
        } else {
            x.innerHTML += `<li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">${item.name}
        </a><ul class="dropdown-menu" id="sub${index}"></ul></li>`;
            let y = document.getElementById(`sub${index}`);
            for (let j = 0; j < item.children.length; j++) {
                y.innerHTML += `<li><a href="#" class="dropdown-item">${item.children[j].name}</a></li>`;
            }
        }
    })
}

function drawSearchItems(e, inp, arr){
    let a, b, i, val = e.target.value;
    /*close any already open lists of autocompleted values*/
    if (!val) { return false;}
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    inp.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].slice(0, val.length).toUpperCase() === val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].slice(0, val.length) + "</strong>";
            b.innerHTML += arr[i].slice(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
        }
    }
}

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    let currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        closeAllLists()
        drawSearchItems(e, inp, arr)
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        let x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode === 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode === 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode === 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (let i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        let x = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}


let search = document.getElementById("search");
search.addEventListener('input', async function(e) {
    if (e.target.value.length > 1) {
        let url = 'http://shop.test/api/products?searchText=' + e.target.value;
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            let searchData = [];
            data.data.forEach(item => searchData.push(item.name));
            autocomplete(search, searchData);
            drawSearchItems(e, search, searchData)
        } else {
            alert("Error HTTP: " + response.status);
        }
    }
})
