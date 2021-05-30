let allDivBar = document.querySelectorAll('.myBar');
let div_array = Array.prototype.slice.call(allDivBar);
let outResult = document.querySelectorAll('.out');
let dataParcent;
let start = 0;
let showProgressBars = setInterval(() => {


    if (start > 50) {
        clearInterval(showProgressBars);

    }
    else {
        div_array[1].style.width = start + '%';
        outResult[1].innerHTML = `${start}% STUDY KNOW`
    }

    start++;

}, 10);


const year = new Date();
let myAge = year.getFullYear() - 1993;
const contact = {
    age: myAge,
    city: "Kramatorsk",
    phone: 380999233489,
    email: " smirnov9323@gmail.com",
    photo: 'img/my-photo.jpg'
};


function myContatnInfo() {
    document.querySelector('.list-info ').innerHTML += `<li>Age:${contact.age} years</li>`;
    document.querySelector('.list-info').innerHTML += `<li>City:${contact.city}</li>`;
    document.querySelector('.contact').innerHTML += `<li>Phone:<a href="tel:+380999233489">+${contact.phone}</a></li>`;
    document.querySelector('.color-gmail').innerHTML = `<li>Email:<a href="mailto:smirnov9323@gmail.com">+${contact.email}</a></li>`;
    document.querySelector('.my-photo').src = contact.photo;

}

myContatnInfo();