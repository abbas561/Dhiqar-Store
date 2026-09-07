// =====================================
// أمازون ذي قار
// Firebase Products System
// =====================================

import { db } from "./firebase.js";

import {
collection,
getDocs
}
from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";



// جلب المنتجات من Firebase

async function getProducts(){

let items = [];

let snapshot = await getDocs(
collection(db,"products")
);


snapshot.forEach(doc=>{

items.push({

id: doc.id,

...doc.data()

});

});


return items;

}





// عرض المنتجات

async function loadProducts(containerId, category=null){


let box =
document.getElementById(containerId);


if(!box) return;



let products =
await getProducts();



if(category){

products =
products.filter(p=>
p.category === category
);

}



box.innerHTML="";



products.forEach(product=>{


let img =
product.images && product.images.length
?
product.images[0]
:
product.image || "";



box.innerHTML += 

<div class="product-card">

<img src="${img}">

<h3>
${product.name}
</h3>

<p>
${product.price}
</p>

<a href="product.html?id=${product.id}">
عرض المنتج
</a>

</div>

;

});


}





function setupContact(){

const whatsapp="9647822980189";

const telegram="https://t.me/ss_iraq1";

const facebook="https://www.facebook.com/share/1FC5hwZSbt/";



document.querySelectorAll(".whatsapp")
.forEach(btn=>{
btn.href="https://wa.me/"+whatsapp;
});



document.querySelectorAll(".telegram")
.forEach(btn=>{
btn.href=telegram;
});



document.querySelectorAll(".facebook")
.forEach(btn=>{
btn.href=facebook;
});


}





document.addEventListener(
"DOMContentLoaded",
()=>{

setupContact();

}
);





export {
loadProducts
};
