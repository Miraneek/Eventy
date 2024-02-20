function printUkol (){
    let ukol = document.createElement("div")
    ukol.classList.add("ukol")

    let name = document.createElement("h2")
    name.innerText = document.querySelector("#name").value
    ukol.appendChild(name)

    let priorita = document.querySelector("#select").value

    switch (priorita){
        case "Vysoká":
            ukol.style.order = "1"
            break
        case "Střední":
            ukol.style.order = "2"
            break
        case "Malá":
            ukol.style.order = "3"
            break
    }

    let prioritaSpan = document.createElement("span")
    prioritaSpan.innerText = "Priorita :" + priorita
    ukol.appendChild(prioritaSpan)

    let date = document.createElement("span")
    date.innerText = "Datum dokončení: " + document.querySelector("#date").value

    const datum = new Date();
    let handleDate = document.querySelector("#date").value.split("-")
    if (handleDate[1] <= datum.getMonth() && handleDate[0] <= datum.getFullYear()){
        date.style.color = "red"
    }

    ukol.appendChild(date)

    document.querySelector("#result").appendChild(ukol)
}

let muzu = true;
let name = document.querySelector("#name")

document.querySelector("#button").addEventListener("click", () => {
   if (muzu && name.value != "") {
       printUkol()
   } else {
       alert("problemek")
   }
})


name.addEventListener("blur", (event) => {7
    let regex = /^(.{1,100})$/
    if (regex.test(name.value)){
        muzu = false
        name.style.border = "solid red 2px"
    } else {
        muzu = true
        name.style.border = "solid black 2px"
    }
})