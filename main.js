let allDivBar = document.querySelectorAll('.myBar');
let outResult = document.querySelectorAll('.out');
let start = 0;

function allResult(itembar) {

    outResult.forEach(elem => {
        itembar.style.width = start + '%';
        elem.innerHTML = `${start}%`


    })

}

function getAtt() {
    allDivBar.forEach(itembar => {
        console.log(itembar.getAttribute('data-percent'))
        let a = itembar.getAttribute('data-percent');
        let showProgressBars = setInterval(() => {
            if (start > 100) {
                clearInterval(showProgressBars);
            }
            else {

                allResult(itembar)
            }
            start++
        }, 100);
    })
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
    document.querySelector('.color-gmail').innerHTML = `<li>Email:<a href="mailto:smirnov9323@gmail.com">+${contact.email}</a></li>`;
    document.querySelector('.my-photo').src = contact.photo;

}



getAtt();
myContatnInfo();
