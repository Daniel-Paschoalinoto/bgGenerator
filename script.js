const cssText = document.querySelector('h3')
const [input1, input2] = document.querySelectorAll('.input')
const body = document.querySelector('body')

cssText.innerText = body.style.background

function mudarGradient (){
  cssText.innerText = body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`
}

input1.addEventListener('input', mudarGradient)
input2.addEventListener('input', mudarGradient)