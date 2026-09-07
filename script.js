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

let items=[];


let snapshot = await getDocs(
collection(db,"products")
);


snapshot.forEach(doc=>{

items.push({

id:doc.id,

...doc.data()

});


});


return items;

}






// عرض المنتجات

async function loadProducts(containerId, category=null){


let container =
document.getElementById(containerId);


if(!container) return;



let items =
await getProducts();



if(category){

items =
items.filter(p=>
p.category===category
);

}



container.innerHTML="";



items.forEach(product=>{


let img =
product.images && product.images.length
?
product.images[0]
:
product.image || "";



container.innerHTML += 

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







// التواصل

const WHATSAPP="9647822980189";

const TELEGRAM="https://t.me/ss_iraq1";

const FACEBOOK="https://www.facebook.com/share/1FC5hwZSbt/";



function setupContact(){


document.querySelectorAll(".whatsapp")
.forEach(btn=>{

btn.href="https://wa.me/"+WHATSAPP;

btn.target="_blank";

});



document.querySelectorAll(".telegram")
.forEach(btn=>{

btn.href=TELEGRAM;

btn.target="_blank";

});



document.querySelectorAll(".facebook")
.forEach(btn=>{

btn.href=FACEBOOK;

btn.target="_blank";

});


}





document.addEventListener(
"DOMContentLoaded",
()=>{


setupContact();


});



window.loadProducts=loadProducts;
