let body = document.body
let reset = document.querySelector("#reset")
let undo = document.querySelector("#undo")
let redo = document.querySelector("#redo")

let undoArr = [];
let redoArr = [];

body.addEventListener("click", function (event) {
  if(event.target.nodeName==="DIV")return 
  if(event.target.nodeName==="BUTTON")return 
  reset.disabled = false;
  undo.disabled = false;
  let x = event.clientX;
  let y = event.clientY;
  let circle = document.createElement("p")
  circle.style.left = `${x -5}px`
  circle.style.top = `${y -5}px`
  body.append(circle)
  undoArr.push(circle)
})

reset.addEventListener("click", function () {
  undoArr.forEach(circle =>{body.removeChild(circle)})
  undoArr = [];
  redoArr = [];
  reset.disabled = true;
  undo.disabled = true;
  reset.disabled = true;
})


undo.addEventListener("click", function () {
  redo.disabled = false;
  let val = undoArr.pop()
  body.removeChild(val)
  // val.style.display = "none"
  redoArr.push(val)
})

redo.addEventListener("click", function () {
  let val2 = redoArr.pop()
  // val2.style.display = "block"
  undoArr.push(val2)
  body.append(val2)
  if (redoArr.length === 0) {
    redo.disabled = true;
  }
})

