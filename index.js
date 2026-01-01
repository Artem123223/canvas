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
    fullPrice = 0

function plusPrice() {
    idk.textContent = fullPrice + optionPrice
}

function selectColor(btn, w, h, price) {
    colorButton.forEach(b => b.classList.remove("chushpan"))
    btn.classList.add("chushpan")

    good = w
    bad = h

    fullPrice = price
    plusPrice()
}

oneButton.addEventListener("click", function() {
    selectColor(oneButton, "50%", "50%", 100)
})

twoButton.addEventListener("click", function() {
    selectColor(twoButton, "50%", "65%", 150)
})

threeButton.addEventListener("click", function() {
    selectColor(threeButton, "65%", "85%", 220)
})

fourButton.addEventListener("click", function() {
    selectColor(fourButton, "65%", "95%", 280)
})

fullInput.addEventListener("click", function() {
    const w = Number(oneInput.value)
    const h = Number(twoInput.value)

    if (!w || !h) return alert("Введи ширину і висоту")

    picture.style.width = w + "%"
    picture.style.height = h + "%"

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
    block.style.display = "flex"
})