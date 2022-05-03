// render shops
function renderShop(shopName, href) {
    const shops = document.getElementsByClassName('shop-links')[0];
    let link = document.createElement('a');
    link.className = 'button';
    link.textContent = shopName;
    link.href = 'http://shop.test/api/shops/' + href; //////?????????????????
    shops.append(link);
}

// render products
function appendRating(ratingDiv, rating) {
    let starIconSrc = 'assets/img/2048px-Full_Star_Yellow.png';
    for (let i = 0; i < Math.floor(rating); i++) {
        let img = document.createElement('img');
        img.src = starIconSrc;
        img.className = 'star-icon';
        ratingDiv.append(img);
    }
    let afterComma = ('' + rating).split('.')[1];
    if (afterComma) {
        let rate = afterComma / 10;
        let margin = 20 - 20 * rate;
        let div = document.createElement('div');
        div.style = `width: 20px; height: 20px; margin-left: -${margin}px; overflow: hidden`;
        let img = document.createElement('img');
        img.src = starIconSrc;
        img.className = 'star-icon';
        img.style = `margin-left: ${margin}px`;
        div.append(img);
        ratingDiv.append(div);
    }
}

function renderProduct(id, name, imgSrc, rating, price) {
    const products = document.getElementsByClassName('masonry')[0];
    let toClone = document.getElementById('for-clone');
    let clone = toClone.cloneNode(true);
    let link = '#'; //////////////////??????????????????????????
    clone.id = id;
    clone.classList.remove('hide');
    let imgLink = clone.firstElementChild;
    imgLink.href = link;
    let img = imgLink.firstElementChild;
    imgSrc ? (img.src = 'http://shop.test/storage/img/' + imgSrc) : null;
    let figcaption = clone.lastElementChild;
    let title = figcaption.querySelector('h3 a');
    title.textContent = name;
    title.href = link;

    let ratingDiv = figcaption.querySelector('.icons');
    appendRating(ratingDiv, rating);

    let priceField = figcaption.getElementsByClassName('price')[0];
    priceField.textContent = price + '$';

    products.append(clone);
}

const mainURL = 'http://shop.test/api/';
const url1 = mainURL + 'products/populars';
const url2 = mainURL + 'shops/populars';

async function getData(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}
getData(url1).then((data) => {
    let products = data.data;
    products.forEach((item) => {
        renderProduct(
            item.id,
            item.name,
            item.img?.img_url,
            item.rating,
            item.price
        );
    });
});

getData(url2).then((data) => {
    let shops = data.data;
    shops.forEach((item) => renderShop(item.name, item.id));
});
