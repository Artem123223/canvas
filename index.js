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
      idk = document.getElementById("idk"),
      nice = document.getElementById("nice")

let good = "",
    bad = "",
    vals = 0,
    last = 0,
    amount = 0,
    am1 = 0,
    am2 = 0

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
})
    
oneInput.addEventListener("input", function() {
    vals = 0
    good = oneInput.value + "px"
    if(oneInput.value > 300) {
        vals += 70
    } else if(oneInput.value > 500) {
        vals += 100
    } else if(oneInput.value > 700) {
        vals += 130
    } else if(oneInput.value > 100) {
        vals += 40
    }
})

twoInput.addEventListener("input", function() {
    bad = twoInput.value + "px"
})

fullInput.addEventListener("click", function() {
    picture.style.width = good
    picture.style.height = bad
    if(last > 0) {
        last = 0
        return
    } else if(last == 0) {
        last += vals
    }
})

oneButton.addEventListener("click", function() {
    vals = 0
    good = "50%"
    bad = "50%"
    vals += 70
})

twoButton.addEventListener("click", function() {
    vals = 0
    good = "50%"
    bad = "65%"
    vals += 100
})

threeButton.addEventListener("click", function() {
    vals = 0
    good = "65%"
    bad = "85%"
    vals += 130
})

fourButton.addEventListener("click", function() {
    vals = 0
    good = "65%"
    bad = "95%"
    vals += 160
})

fullButton.addEventListener("click", function() {
    last = 0
    picture.style.width = good
    picture.style.height = bad
    last += vals
})

nice.addEventListener("click", function() {
    idk.innerHTML = last
})