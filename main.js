let allDivBar = document.querySelectorAll('.myBar');
let outResult = document.querySelectorAll('.out');
let dataAttr;
let out = []
let res = [];

function getAtt() {
    for (let i = 0; i < allDivBar.length; i++) {
        dataAttr = allDivBar[i].dataset.percent
        out.push(allDivBar[i].dataset.percent)
    }
    res = out.map(i => {
        return +i
    })
    return res

}

let timeInterval = setInterval(showProgresBar, 100)
let start = 0;
function showProgresBar() {
    for (let i = 0; i < res.length; i++) {
        if (start > res[i]) {
            console.log(res[i])
            clearInterval(timeInterval)

        }
        else {
            start++
            for (let i = 0; i < allDivBar.length; i++) {
                allDivBar[i].style.width = start + '%'
            }
            // console.log(start)
        }

    }

}
getAtt()




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


// progressBar()/
// getAtt();
showProgresBar()
myContatnInfo();
