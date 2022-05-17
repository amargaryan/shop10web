async function getData(url) {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        data = data[0];
        drawCategories(data);
    } else {
        alert("Error HTTP: " + response.status);
    }
}

let categoriesUrl = 'http://shop.test/api/categories';
getData(categoriesUrl);

let search = document.getElementById('search');
search.addEventListener("input", async function(e) {
    if (e.target.value.length > 0) {
        let searchUrl = 'http://shop.test/api/products?SearchText=' + e.target.value;
        let response = await fetch(searchUrl);
        if (response.ok) {
            let data = await response.json();
            let searchData = [];
            data['data'].map(item => searchData.push(item.name));
            console.log(searchData);
            autocomplete(search, searchData);
            drawSearchData(e, search, searchData)
        } else {
            alert("Error HTTP: " + response.status);
        }
    }
})


const drawCategories = (data) => {
    let menu = document.getElementById("drop");
    data.map((item, index) => {
        if (item.children.length === 0) {
            menu.innerHTML += `<li><a href="#" class="dropdown-item">${item.name}</a></li>`;
        } else {
            menu.innerHTML += `<li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">${item.name}</a>
        <ul class="dropdown-menu" id="sub-${index}"></ul></li>`;
            let sub = document.getElementById(`sub-${index}`);
            for (let j = 0; j < item.children.length; j++) {
                sub.innerHTML += `<li><a class="dropdown-item" href="#">${item.children[j].name}</a></li>`;
            }
        }
    });
}

function drawSearchData(e, inp, arr) {
    let a, b, i, val = e.target.value;
    if (!val) {
        return false;
    }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    inp.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
        if (arr[i].slice(0, val.length).toUpperCase() === val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].slice(0, val.length) + "</strong>";
            b.innerHTML += arr[i].slice(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            b.addEventListener("click", function (e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
        }
    }
}

function autocomplete(inp, arr) {
    let currentFocus;
    inp.addEventListener('input', function (e) {
        drawSearchData(e, inp, arr);
    });
    inp.addEventListener('keydown', function(e) {
        let x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode === 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode === 38) {
            currentFocus--;
            addActive(x);
        } else if (e.keyCode === 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (let i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elem) {
        let x = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < x.length; i++) {
            if (elem !== x[i] && elem !== inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

async function isLogin () {
    let isLogin = false;
    let id = document.getElementById('login');
    if (isLogin) {

    } else {
        let div = document.createElement('div');
        div.className = "nav-item dropdown";
        div.style = "display: flex";
        div.append(createTagWithValue('Sign in'), createTagWithValue('Sign up'));
        id.append(div);
    }
}

function createTagWithValue (val) {
    let a = document.createElement('a');
    a.className = "nav-link disabled";
    a.textContent = val;
    return a;
}

isLogin();
