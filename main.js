let blockBar = document.querySelectorAll(".myBar");
let divArray = Array.from(blockBar);
let out = document.getElementsByTagName('span');

function progressBar(time) {
    let start = 0;
    let myBarIn = setInterval(() => {
        for (let i = 0; i < divArray.length; i++) {
            if (start > 100) {
                clearInterval(myBarIn);
            }
            else {

                divArray[i].style.width = start + '%';
            }
        }
        out[0].innerHTML =  start + '%';
        start++;
    }, time);
}

progressBar(10);
