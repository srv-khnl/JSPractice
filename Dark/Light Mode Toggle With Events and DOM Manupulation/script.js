
let newBtn = document.createElement("button")
document.body.append(newBtn)
let paragraph= document.querySelector("p")
let body= document.querySelector("body")
let light = true;
toLight()


function toLight(){
  paragraph.style.color="black"
  body.style.backgroundColor="white"
  newBtn.innerText = "Turn On Dark Mode";
  newBtn.style.backgroundColor="white"
  newBtn.style.color="black"
  newBtn.style.border=" 3px solid black"

}


function toDarkMode(){
  paragraph.style.color="white"
  body.style.backgroundColor="black"
  newBtn.innerText = "Turn On Light Mode";
  newBtn.style.backgroundColor="black"
  newBtn.style.backgroundColor="black"
  newBtn.style.color="white"
  newBtn.style.border="3px solid white"

}

function toggle(){
  if(light){
    toDarkMode()
    let light= false;
  }
  else{
    toLight()
  }
  light =!light
}

newBtn.addEventListener("click", toggle )

