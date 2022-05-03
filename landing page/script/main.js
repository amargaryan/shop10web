function renderShop(shopName, href) {
	const shops = document.getElementsByClassName("shop-links")[0];
	let link = document.createElement("a");
	link.className = "button";
	link.textContent = shopName;
	link.href = "#" + href;
	shops.append(link);
  }
  let shopList = [
	{ id: 1, name: "Xosqi1" },
	{ id: 2, name: "Xosqi2" },
	{ id: 3, name: "Xosqi3" },
	{ id: 4, name: "Xosqi4" },
	{ id: 5, name: "Xosqi5"},
  ];

  shopList.forEach((item) => renderShop(item.name, item.id));
  function renderProduct(title, imgSrc, rating, price) {
	const products = document.getElementsByClassName("masonry")[0];
	let toClone = products.firstElementChild;
	let clone = toClone.cloneNode(true);
	let img = clone.firstElementChild.firstElementChild;
	img.a = imgSrc;
	products.append(clone);
  }

  let productList = [
	{ id: 1, name: "asdasd" },
	{ id: 2, name: "ADSAFasdsad" },
	{ id: 3, name: "asdasdsaf" },
	{ id: 4, name: "asdasf" },
	{ id: 5, name: "Agdfagfdagafg" },
  ];
  
  productList.forEach((item) => renderProduct());
  // let link = document.createElement("a”);
  // link.href = "#”;
  // let fig = document.createElement("figure”);
  // fig.className = ‘product’;
  // let img = document.cre