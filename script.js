const cssText = document.querySelector('h3')
const [input1, input2] = document.querySelectorAll('.input')
const body = document.querySelector('body')

cssText.innerText = `background: ${body.style.background};`

function mudarGradient () {
  const gradient = `linear-gradient(to right, ${input1.value}, ${input2.value})`
  body.style.background = gradient
  cssText.innerText = `background: ${gradient};`
}

input1.addEventListener('input', mudarGradient)
input2.addEventListener('input', mudarGradient)
