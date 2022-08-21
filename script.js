const mainButton = document.querySelector("button")
const body = document.body

function randomColorGenerator(){
  const red = Math.floor(Math.random()*256)
  const green = Math.floor(Math.random()*256)
  const blue = Math.floor(Math.random()*256)
  return `rgb(${red}, ${green}, ${blue})`
}

mainButton.addEventListener("click", ()=>{
  const randomColor = randomColorGenerator()
  body.style.backgroundColor = randomColor
  document.getElementsByClassName("current-color")[0].innerText = randomColor
})