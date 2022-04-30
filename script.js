// let x = document.getElementById("kayf");
// let y = document.getElementById("kayf1");
// let json_ = [
//         {
//             "id": 1,
//             "name": "Shoes",
//             "parent_id": null,
//             "created_at": "2022-03-04T17:08:57.000000Z",
//             "updated_at": "2022-03-07T10:06:48.000000Z",
//             "children": [
//                 {
//                     "id": 3,
//                     "name": "Electronics",
//                     "parent_id": "1",
//                     "created_at": "2022-03-05T11:17:41.000000Z",
//                     "updated_at": "2022-03-05T11:17:41.000000Z"
//                 },
//                 {
//                     "id": 4,
//                     "name": "Apple",
//                     "parent_id": "1",
//                     "created_at": "2022-03-06T08:06:51.000000Z",
//                     "updated_at": "2022-03-06T08:06:51.000000Z"
//                 }
//             ]
//         },
//         {
//             "id": 1,
//             "name": "Caps",
//             "parent_id": null,
//             "created_at": "2022-03-04T17:08:57.000000Z",
//             "updated_at": "2022-03-07T10:06:48.000000Z",
//             "children": [
//                 {
//                     "id": 3,
//                     "name": "Electronics",
//                     "parent_id": "1",
//                     "created_at": "2022-03-05T11:17:41.000000Z",
//                     "updated_at": "2022-03-05T11:17:41.000000Z"
//                 },
//                 {
//                     "id": 4,
//                     "name": "Apple",
//                     "parent_id": "1",
//                     "created_at": "2022-03-06T08:06:51.000000Z",
//                     "updated_at": "2022-03-06T08:06:51.000000Z"
//                 }
//             ]
//         }
//     ]

// for(let i = 0; i < json_.length; i++) {
// 	x.innerHTML += `<a href="#" class="dropdown-item">${json_[i].name}</a>`;
// 	for (let j=0; j<json_[i].children.length; j++) {
// 		y.innerHTML += `<a href="#" >${json_[i].children[j].name}</a>`
// 		// console.log(json_[i].children[j].name);
// 	}
// }


let json = [
    {
        "id": 1,
        "name": "Electronics",
        "parent_id": null,
        "created_at": "2022-03-04T17:08:57.000000Z",
        "updated_at": "2022-03-07T10:06:48.000000Z",
        "children": [
            {
                "id": 2,
                "name": "Laptop",
                "parent_id": "1",
                "created_at": "2022-03-05T11:17:41.000000Z",
                "updated_at": "2022-03-05T11:17:41.000000Z"
            },
            {
                "id": 3,
                "name": "Phones",
                "parent_id": "1",
                "created_at": "2022-03-05T11:17:41.000000Z",
                "updated_at": "2022-03-05T11:17:41.000000Z"
            }
        ]
    },
    {
        "id": 4,
        "name": "Clothes",
        "parent_id": null,
        "created_at": "2022-03-04T17:08:57.000000Z",
        "updated_at": "2022-03-07T10:06:48.000000Z",
        "children": [
            {
                "id": 5,
                "name": "Shirts",
                "parent_id": "1",
                "created_at": "2022-03-05T11:17:41.000000Z",
                "updated_at": "2022-03-05T11:17:41.000000Z"
            }
        ]
    },
    {
        "id": 6,
        "name": "Shoes",
        "parent_id": null,
        "created_at": "2022-03-04T17:08:57.000000Z",
        "updated_at": "2022-03-07T10:06:48.000000Z",
        "children": []
    }
]
let menu = document.getElementById("drop");
for (let i = 0; i < json.length; i++) {
    if (json[i].children.length === 0) {
        menu.innerHTML += `<li><a href="#" class="dropdown-item">${json[i].name}</a></li>`;
    } else {
        menu.innerHTML += `<li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">${json[i].name}</a>
        <ul class="dropdown-menu" id="sub-${i}"></ul></li>`;
        let sub = document.getElementById(`sub-${i}`);
        for (let j = 0; j < json[i].children.length; j++) {
            sub.innerHTML += `<li><a class="dropdown-item" href="#">${json[i].children[j].name}</a></li>`;
        }
    }
}