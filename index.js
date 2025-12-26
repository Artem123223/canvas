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

function selectColor(btn, w, h) {
    colorButton.forEach(b => b.classList.remove("chushpan"))

    btn.classList.add("chushpan")

    good = w
    bad = h
    a = true
}

let good = "",
    bad = "",
    vals = 0,
    last = 0,
    amount = 0,
    am1 = 0,
    am2 = 0,
    a = false

oneBox.addEventListener("change", function() {
    if(oneBox.checked) {
        last += 35
        amount += 1
    } else if(!oneBox.checked) {
        last += 0
        if(amount == 1) {
            last -= 35
            amount -= 1
        }
    }
    idk.innerHTML = last
})

twoBox.addEventListener("change", function() {
    if(twoBox.checked) {
        last += 10
        am1 += 1
    } else if(!twoBox.checked) {
        last += 0
        if(am1 == 1) {
            last -= 10
            am1 -= 1
        }
    }
    idk.innerHTML = last
})

threeBox.addEventListener("change", function() {
    if(threeBox.checked) {
        last += 40
        am2 += 1
    } else if(!threeBox.checked) {
        last += 0
        if(am2 == 1) {
            last -= 40
            am2 -= 1
        }
    }
    idk.innerHTML = last
})
    
oneInput.addEventListener("input", function() {
    good = oneInput.value + "%"
    console.log(oneInput.value)
    if (oneInput.value > 70) {
        vals = 80
    } else if (oneInput.value > 50) {
        vals = 65
    } else if (oneInput.value > 30) {
        vals = 50
    } else if (oneInput.value > 10) {
        vals = 35
    }
    console.log(vals)
    last += vals
})

twoInput.addEventListener("input", function() {
    bad = twoInput.value + "%"
    console.log(twoInput.value)
    if (twoInput.value > 70) {
        vals = 80
    } else if (twoInput.value > 50) {
        vals = 65
    } else if (twoInput.value > 30) {
        vals = 50
    } else if (twoInput.value > 10) {
        vals = 35
    }
    last += vals
})

fullInput.addEventListener("click", function() {
    
    picture.style.width = good
    picture.style.height = bad
    idk.textContent = last
})

oneButton.addEventListener("click", function() {
    selectColor(oneButton, "50%", "50%")
})

twoButton.addEventListener("click", function() {
    selectColor(twoButton, "50%", "65%")
})

threeButton.addEventListener("click", function() {
    selectColor(threeButton, "65%", "85%")
})

fourButton.addEventListener("click", function() {
    selectColor(fourButton, "65%", "95%")
})

fullButton.addEventListener("click", function() {
    block.style.display = "flex"
})