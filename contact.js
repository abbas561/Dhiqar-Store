// =====================================
// أمازون ذي قار
// بيانات التواصل
// =====================================


const contact = {

    // واتساب
    whatsapp: "9647822980189",


    // تلغرام
    telegram: "https://t.me/ss_iraq1",


    // فيسبوك
    facebook: "https://www.facebook.com/share/1FC5hwZSbt/"

};




// إنشاء روابط التواصل تلقائياً

document.addEventListener("DOMContentLoaded", function(){


    // زر واتساب

    const whatsappButtons =
    document.querySelectorAll(".whatsapp");


    whatsappButtons.forEach(button => {

        button.href =
        "https://wa.me/" + contact.whatsapp;

        button.target = "_blank";

    });




    // زر تلغرام

    const telegramButtons =
    document.querySelectorAll(".telegram");


    telegramButtons.forEach(button => {

        button.href =
        contact.telegram;

        button.target = "_blank";

    });





    // زر فيسبوك

    const facebookButtons =
    document.querySelectorAll(".facebook");


    facebookButtons.forEach(button => {

        button.href =
        contact.facebook;

        button.target = "_blank";

    });



});