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

let optionPrice = 0,
    fullPrice = 0,
    isOpen = false

function plusPrice() {
    idk.textContent = fullPrice + optionPrice
}

oneInput.addEventListener("input", () => {
    colorButton.forEach(b => b.classList.remove("chushpan"))
})
twoInput.addEventListener("input", () => {
    colorButton.forEach(b => b.classList.remove("chushpan"))
})

oneButton.addEventListener("click", function() {
    oneInput.value = 30
    twoInput.value = 30
    colorButton.forEach(b => b.classList.remove("chushpan"))
    oneButton.classList.add("chushpan")
    fullPrice = 100
    plusPrice()
})

twoButton.addEventListener("click", function() {
    oneInput.value = 30
    twoInput.value = 90
    colorButton.forEach(b => b.classList.remove("chushpan"))
    twoButton.classList.add("chushpan")
    fullPrice = 150
    plusPrice()
})

threeButton.addEventListener("click", function() {
    oneInput.value = 90
    twoInput.value = 120
    colorButton.forEach(b => b.classList.remove("chushpan"))
    threeButton.classList.add("chushpan")
    fullPrice = 220
    plusPrice()
})

fourButton.addEventListener("click", function() {
    oneInput.value = 90
    twoInput.value = 150
    colorButton.forEach(b => b.classList.remove("chushpan"))
    fourButton.classList.add("chushpan")
    fullPrice = 280
    plusPrice()
})

fullInput.addEventListener("click", function() {
    let w = Number(oneInput.value)
    let h = Number(twoInput.value)

    if (!w || !h) return alert("Введи ширину і висоту")

    if (w > 90) w = 90
    if (h > 150) h = 150

    const wiDth = (w / 90) * 50
    const heiGht = (h / 150) * 95

    picture.style.width = wiDth + "%"
    picture.style.height = heiGht + "%"

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