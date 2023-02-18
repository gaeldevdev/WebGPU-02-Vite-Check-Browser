import './style.css'

let message = 'Great, your current browser supports WebGPU!'

function navigatorHasGPU(){
  for (let i in navigator)
  if (i == 'gpu') return true
  return false
}

if (!navigatorHasGPU()){
  message = 'Your current browser does not support WebGPU!'
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `<div><p> ` + message + `</p></div>`
