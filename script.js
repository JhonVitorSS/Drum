"use scritct";
let drum = document.getElementById("container")

const sounds = {
  "A": "boom.wav",
  "S": "clap.wav",
  "O": "ride.wav",
  "K": "kick.wav",
  "M": "openhat.wav"

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

function activeClass(div) {
  let keyActive = document.getElementById(div)
  keyActive.classList.add("active")

  setTimeout(() => {
    keyActive.classList.remove("active")

  }, 300)

}

function activeDrum(eventClick) {
  const drumPart = eventClick.type == "click" ? eventClick.target.id : eventClick.key.toUpperCase()


  let hasKey = sounds.hasOwnProperty(drumPart)
  if (hasKey) {
    activeClass(drumPart)
    playSound(drumPart)
  }
}

showKeys(sounds)

drum.addEventListener("click", activeDrum)
window.addEventListener("keydown", activeDrum)