const dark = document.querySelector(".dark-bgc"),
      burger = document.querySelector(".burger"),
      menu = document.querySelector(".whats"),
      cancel = document.querySelector(".cancel")

burger.addEventListener("click", function() {
    menu.style.left = "0";
    dark.style.display = "block"
})
function cancelBurger() {
    menu.style.left = "-200%";
    dark.style.display = "none"
}
cancel.addEventListener("click", cancelBurger)
dark.addEventListener("click", cancelBurger)

const oneButton = document.getElementById("btn1"),
      twoButton = document.getElementById("btn2"),
      threeButton = document.getElementById("btn3"),
      fourButton = document.getElementById("btn4"),
      fullButton = document.getElementById("btn5"),
      oneInput = document.getElementById("in1"),
      twoInput = document.getElementById("in2"),
      fullInput = document.getElementById("in3"),
      picture = document.querySelector(".picture"),
      oneBox = document.getElementById("8"),
      twoBox = document.getElementById("9"),
      threeBox = document.getElementById("10"),
      block = document.querySelector(".button-for"),
      idk = document.getElementById("idk"),
      nice = document.getElementById("nice")

const colorButton = [oneButton, twoButton, threeButton, fourButton]
const reg300 = /^(?:300|[12]?\d{1,2})$/;

let optionPrice = 0,
    fullPrice = 0,
    isOpen = false

function plusPrice() {
    idk.textContent = fullPrice + optionPrice
}

oneInput.addEventListener("input", () => {
    if (oneInput.value === "") return
    if (!reg300.test(oneInput.value)) oneInput.value = "300";
    colorButton.forEach(b => b.classList.remove("chushpan"))
})
twoInput.addEventListener("input", () => {
    if (oneInput.value === "") return
    if (!reg300.test(twoInput.value)) twoInput.value = "300";
    colorButton.forEach(b => b.classList.remove("chushpan"))
})

oneButton.addEventListener("click", function() {
    oneInput.value = 30
    twoInput.value = 30
    let w = 30
    let h = 30
    picture.style.width = w + "%"
    picture.style.height = h + "%"
    colorButton.forEach(b => b.classList.remove("chushpan"))
    oneButton.classList.add("chushpan")
    fullPrice = 100
    plusPrice()
})

twoButton.addEventListener("click", function() {
    oneInput.value = 30
    twoInput.value = 90
    let w = 30
    let h = 90
    picture.style.width = w + "%"
    picture.style.height = h + "%"
    colorButton.forEach(b => b.classList.remove("chushpan"))
    twoButton.classList.add("chushpan")
    fullPrice = 150
    plusPrice()
})

threeButton.addEventListener("click", function() {
    oneInput.value = 90
    twoInput.value = 120
    let w = 90
    let h = 120
    const widTh = (w / 50) * 40
    const heigHt = (h / 50) * 31
    picture.style.width = widTh + "%"
    picture.style.height = heigHt + "%"
    colorButton.forEach(b => b.classList.remove("chushpan"))
    threeButton.classList.add("chushpan")
    fullPrice = 220
    plusPrice()
})

fourButton.addEventListener("click", function() {
    oneInput.value = 90
    twoInput.value = 150
    let w = 90
    let h = 150
    const widTh = (w / 50) * 38
    const heigHt = (h / 50) * 29
    picture.style.width = widTh + "%"
    picture.style.height = heigHt + "%"
    colorButton.forEach(b => b.classList.remove("chushpan"))
    fourButton.classList.add("chushpan")
    fullPrice = 280
    plusPrice()
})

fullInput.addEventListener("click", function() {
    let w = Number(oneInput.value)
    let h = Number(twoInput.value)

    if (!w || !h) return alert("Введи ширину і висоту")
    if (w < 0 || h < 0) return alert("Впишіть не мінусове число")
    if (w > 300 || h > 300) return alert("Можна вписати число не більше 300х300")

    let wiDth, heiGht

    console.log(h)

    if (w >= 200 || h >= 200) {
        wiDth = (w / 100) * 28
        heiGht = (h / 150) * 40 
    } else if(w >= 150 || h >= 150) {
        wiDth = (w / 50) * 24
        heiGht = (h / 50) * 22
    } else if (w > 30 || h > 91) {
        wiDth = (w / 50) * 38
        heiGht = (h / 50) * 29
    } else {
        wiDth = w
        heiGht = h
    }

    console.log(wiDth, heiGht)

    picture.style.width = wiDth + "%"
    picture.style.height = heiGht + "%"

    fullPrice = Math.round((w * h) / 10)
    plusPrice()
})

oneBox.addEventListener("change", function() {
    optionPrice += oneBox.checked ? 35 : -35
    plusPrice()
})

twoBox.addEventListener("change", function() {
    optionPrice += twoBox.checked ? 10 : -10
    plusPrice()
})

threeBox.addEventListener("change", function() {
    optionPrice += threeBox.checked ? 40 : -40
    plusPrice()
})

fullButton.addEventListener("click", function() {
    isOpen = !isOpen
    if(isOpen) {
        fullButton.textContent = "Сховати"
    } else {
        fullButton.textContent = "Задати розмір"
    }
    block.style.display = isOpen ? "flex" : "none"
})