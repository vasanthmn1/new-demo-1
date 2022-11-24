
let btn = document.querySelector('#btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    addValue()
})

function addValue() {

    let fname = document.querySelector("#fname").value
    let lname = document.querySelector("#lname").value

    console.log(fname, lname);

    if (fname.length == 0, lname.length == 0) {
        alert("enter Value")
    }

    let body1 = document.querySelector('.thead')


    let geter = document.querySelector(".genter")
    let geter1 = document.querySelector("#genter1")

    let genterTemp = []

    if (geter.checked) {
        genterTemp.push(geter.value)
    }
    if (geter1.checked) {
        genterTemp.push(geter1.value)
    }

    let chbox = document.querySelectorAll('#chbox')
    let chtemp = []

    chbox.forEach((val) => {
        if (val.checked) {
            chtemp.push(val.value)
        }
    })
    // console.log(chtemp);

    if (chtemp.length < 2) {
        alert("a")
    }
    // } else if (chtemp.length == 0) {
    //     alert("a")
    // }



    console.log(chtemp);
    body1.innerHTML += `
    
    <tr class="bg-dark text-white ps-5">
                            <th class="py-3 ps-5">${fname}</th>
                            <th>${lname}</th>
                            <th>${genterTemp}</th>
                            <th>${chtemp}</th>
    `


}