// =====================================
// أمازون ذي قار
// Firebase Products Script
// =====================================


import {
    db,
    collection,
    getDocs
} from "./firebase.js";



// جلب المنتجات من Firebase

async function getProducts(){

    let products = [];

    try{

        const snapshot =
        await getDocs(
            collection(db,"products")
        );


        snapshot.forEach(doc=>{

            products.push({

                id:doc.id,
                ...doc.data()

            });

        });


    }catch(error){

        console.log(error);

    }


    return products;

}





// عرض المنتجات

async function loadProducts(containerId, category=null){


const container =
document.getElementById(containerId);


if(!container) return;



let items =
await getProducts();



if(category){

items =
items.filter(p=>
p.category === category
);

}



container.innerHTML="";



items.forEach(product=>{


let img =
product.images &&
product.images.length
?
product.images[0]
:
product.image;



container.innerHTML += 

<div class="product-card">

<img src="${img || ''}">


<h3>
${product.name || ''}
</h3>


<p>
${product.price || ''}
</p>


<a href="product.html?id=${product.id}">
عرض المنتج
</a>


</div>

;

});


}







// البحث

async function setupLiveSearch(){


let input =
document.getElementById("searchInput");


if(!input) return;



let box =
document.createElement("div");


box.id="search-results";


input.parentElement.appendChild(box);



input.addEventListener("input",async function(){


let value =
this.value
.toLowerCase()
.trim();



box.innerHTML="";


if(!value){

box.style.display="none";

return;

}



let products =
await getProducts();



let results =
products
.filter(p=>

p.name
.toLowerCase()
.includes(value)

)
.slice(0,6);



results.forEach(product=>{


box.innerHTML += 

<div onclick="location.href='product.html?id=${product.id}'">

${product.name}

</div>

;

});



box.style.display =
results.length
?
"block"
:
"none";


});

}





document.addEventListener(
"DOMContentLoaded",
()=>{


setupLiveSearch();


}
);



// إتاحة الدالة للصفحات

window.loadProducts =
loadProducts;
