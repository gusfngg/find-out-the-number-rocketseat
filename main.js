// variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keypress", keypresEnter)

// funções callback
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleTryClick(event) {
    event.preventDefault() // não enviar essa linha pro formulario

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
      toggleScreen()

      document.querySelector(".screen2 h2").innerHTML = `Acertou em ${xAttempts} tentativas`} 

      else if (Number(inputNumber.value) < 0){
      alert("Erro! Digite um número positivo.")
      } else if (Number(inputNumber.value) > 10){
        alert("Erro! Digite um número até 10." )
      }

    inputNumber.value = ""
    xAttempts++
}   

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function keypresEnter(e) {
  if(e.key == "Enter" && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}