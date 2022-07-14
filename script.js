"use scritct";
let drum = document.getElementById("container")

const sounds = {
  "A": "boom.wav",
  "S": "clap.wav",
  "O": "ride.wav"
}



function createDiv(textt) {
  const div = document.createElement("div")
  div.classList.add("key")
  div.textContent = textt
  div.id = textt
  document.getElementById("container").appendChild(div)

}


function showKeys(sounds) {
  Object.keys(sounds).forEach(createDiv)
}


function playSound(a) {
  const sound = new Audio(`./sounds/${sounds[a]}`)
  sound.play()
}

function activeDrum(eventClick) {
  console.log(eventClick.target.id)
  let drumPart = eventClick.target.id
  playSound(drumPart)

}

showKeys(sounds)

drum.addEventListener("click", activeDrum)