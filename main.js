let allDivBar = document.getElementsByClassName('myBar');
let outResult = document.getElementsByClassName('out')

function showProgresBar(time) {
    for (let i = 0; i < allDivBar.length; i++) {
        let width = 0;
        let dataA = allDivBar[i].getAttribute("data-percent")
        let show = setInterval(() => {
            if (width >= dataA) {
                clearInterval(show)
            }
            else {
                width++
                allDivBar[i].style.width = width + "%"

                for (let i = 0; i < outResult.length; i++) {
                    outResult[i].innerHTML = allDivBar[i].style.width
                }
            }

        }, time)


    }

}




const year = new Date();
let myAge = year.getFullYear() - 1993;
const contact = {
    age: myAge,
    city: "Kramatorsk",
    phone: 380999233489,
    email: "smirnov9323@gmail.com",
    photo: 'img/my-photo.jpg'
};


function myContatnInfo() {
    document.querySelector('.list-info ').innerHTML += `<li>Age:${contact.age} years</li>`;
    document.querySelector('.list-info').innerHTML += `<li>City:${contact.city}</li>`;
    document.querySelector('.contact').innerHTML += `<li>Phone:<a href="tel:+380999233489">+${contact.phone}</a></li>`;
    document.querySelector('.color-gmail').innerHTML += `<li>Email:<a href="mailto:smirnov9323@gmail.com">+${contact.email}</a></li>`;
    document.querySelector('.my-photo').src = contact.photo;

}
showProgresBar(35);
myContatnInfo();
