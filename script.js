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

async function loadProducts(containerId, category=null, subcategory=null){


let box =
document.getElementById(containerId);



if(!box) return;



let products =
await getProducts();





if(category){


products =
products.filter(p =>

p.category === category

);


}




if(subcategory){


products =
products.filter(p =>

p.subcategory === subcategory

);


}



box.innerHTML = "";



products.forEach(product=>{


let images = [
  product.images && product.images.length
    ? product.images[0]
    : (product.image || "")
];



box.innerHTML += `


<div class="product-card">


<div class="product-images">
${images.map(img=>`
<img src="${img}">
`).join("")}
</div>


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


`;



});


}
// التواصل


function setupContact(){


const whatsapp =
"9647822980189";


const telegram =
"https://t.me/ss_iraq1";


const facebook =
"https://www.facebook.com/share/1FC5hwZSbt/";





document
.querySelectorAll(".whatsapp")
.forEach(btn=>{


btn.href =
"https://wa.me/"+whatsapp;


btn.target="_blank";


});





document
.querySelectorAll(".telegram")
.forEach(btn=>{


btn.href =
telegram;


btn.target="_blank";


});





document
.querySelectorAll(".facebook")
.forEach(btn=>{


btn.href =
facebook;


btn.target="_blank";


});



}







// البحث المباشر


function setupLiveSearch(){



let input =
document.getElementById("searchInput");



if(!input) return;



input.addEventListener(
"input",
async function(){



let value =
this.value
.toLowerCase()
.trim();



let products =
await getProducts();




let results =
products.filter(p=>

p.name
.toLowerCase()
.includes(value)

);




console.log(results);



});



}







document.addEventListener(
"DOMContentLoaded",
()=>{


setupContact();


setupLiveSearch();



});




// هذا التصدير يسمح للصفحات باستخدام عرض المنتجات

export {

loadProducts

};
