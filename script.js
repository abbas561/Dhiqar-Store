// =====================================
// أمازون ذي قار
// Final Script v3
// Live Search + Products System
// =====================================



// =============================
// جلب المنتجات
// =============================


function getProducts(){


let saved =
localStorage.getItem("products");



if(saved){

return JSON.parse(saved);

}



return products || [];


}







// =============================
// عرض المنتجات
// =============================


function loadProducts(containerId, category = null){


const container =
document.getElementById(containerId);



if(!container) return;



let items =
getProducts();




if(category){


items =
items.filter(p=>

p.category === category

);


}




container.innerHTML="";




items.forEach(product=>{



let img =

product.images && product.images.length

?

product.images[0]

:

product.image;




container.innerHTML += `


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


`;



});



}








// =============================
// البحث المباشر
// =============================


function setupLiveSearch(){



let input =
document.getElementById("searchInput");



if(!input) return;



// إنشاء صندوق النتائج

let box =
document.createElement("div");


box.id="search-results";


box.style.position="absolute";

box.style.background="white";

box.style.zIndex="999";

box.style.width="300px";

box.style.boxShadow="0 5px 15px #ccc";

box.style.borderRadius="10px";

box.style.overflow="hidden";




input.parentElement.style.position="relative";


input.parentElement.appendChild(box);






input.addEventListener(
"input",
function(){



let value =
this.value
.toLowerCase()
.trim();



box.innerHTML="";



if(!value){

box.style.display="none";

return;

}






let results =

getProducts()

.filter(product=>


product.name
.toLowerCase()
.includes(value)

)

.slice(0,6);






results.forEach(product=>{



let img =

product.images &&
product.images.length

?

product.images[0]

:

product.image;





box.innerHTML += `


<div style="
display:flex;
align-items:center;
gap:10px;
padding:10px;
cursor:pointer;
border-bottom:1px solid #ddd;
"
onclick="window.location='product.html?id=${product.id}'">


<img src="${img}"
width="50"
height="50"
style="object-fit:cover;border-radius:5px;">


<div>


<b>
${product.name}
</b>


<br>


<span>
${product.price}
</span>


</div>



</div>



`;



});





if(results.length){


box.style.display="block";


}

else{


box.style.display="none";


}



});





document.addEventListener(
"click",
function(e){


if(!box.contains(e.target)
&&
e.target!==input){


box.style.display="none";


}



});



}








// =============================
// التواصل
// =============================


const WHATSAPP =
"9647822980189";


const TELEGRAM =
"https://t.me/ss_iraq1";


const FACEBOOK =
"https://www.facebook.com/share/1FC5hwZSbt/";





function setupContact(){



document
.querySelectorAll(".whatsapp")
.forEach(btn=>{


btn.href =
"https://wa.me/"+WHATSAPP;


btn.target="_blank";


});




document
.querySelectorAll(".telegram")
.forEach(btn=>{


btn.href=TELEGRAM;

btn.target="_blank";


});




document
.querySelectorAll(".facebook")
.forEach(btn=>{


btn.href=FACEBOOK;

btn.target="_blank";


});



}







// =============================
// تشغيل
// =============================


document.addEventListener(
"DOMContentLoaded",
function(){


setupLiveSearch();


setupContact();



});
