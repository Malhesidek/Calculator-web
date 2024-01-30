const history = document.querySelector("#history")
const value = document.querySelector("#value")
const btnAC = document.querySelector("#AC")
const division = document.querySelector("#division")
const multiply = document.querySelector("#multiply")

const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")

const dot = document.querySelector("#dot")
const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const equals = document.querySelector("#equals")

const operations = ['division', 'multiply', 'minus', 'plus', '/', '*', '-', '+']

//keyboard buttons
document
  .addEventListener('keydown', (event) => {
    document.querySelectorAll('.btn').forEach(item => {
      if (item.innerHTML === event.key) {
        item.click()
      }
      else if (event.key === 'Backspace') {
        btnAC.click()
      }
      else if (event.key === 'Enter') {
        equals.click()
      }
    })
    // console.log(event)
})

//buttons controller
document
  .querySelectorAll(".btn")
  .forEach(item => item.addEventListener("click", () => {
    if (item.classList.contains('number')) {
      if (value.innerHTML.length >= 20) {
        let temp = value.innerHTML === "            DIGIT LIMIT MET" ? temp : value.innerHTML
        value.innerHTML = "            DIGIT LIMIT MET"
        setTimeout(() => value.innerHTML = temp, 500) 
      }
      else if (value.innerHTML === '0') {
        value.innerHTML = item.innerHTML
        history.innerHTML += item.innerHTML
      }
      else {
        value.innerHTML += item.innerHTML
        history.innerHTML += item.innerHTML
      }
    }
    else if (item.attributes.getNamedItem('id').value === 'AC') {
      history.innerHTML = ''
      value.innerHTML = '0'
    }
    else if (operations.includes(item.attributes.getNamedItem('id').value)) {
      if (operations.includes(history.innerHTML[history.innerHTML.length-1])) {
        history.innerHTML = history.innerHTML.slice(0,-1) + item.innerHTML
        value.innerHTML = item.innerHTML
      }
      else {
        history.innerHTML += item.innerHTML
        value.innerHTML = item.innerHTML
        // console.log(operations.includes(history.innerHTML[history.length-1]))
        // console.log(history.innerText[history.innerHTML.length-1])
      }
    }
    else if (item.attributes.getNamedItem('id').value === 'equals') {
      if (operations.includes(history.innerHTML[history.innerHTML.length-1])){
        history.innerHTML = eval(history.innerHTML.slice(0,-1))
        value.innerHTML = history.innerHTML
      }
      else {
        history.innerHTML = eval(history.innerHTML)
        value.innerHTML = history.innerHTML
      }    
    }
    // console.log(item.attributes)
}))

// console.log(document.querySelectorAll(".btn"))
// console.log(operations.includes(division.attributes.getNamedItem('id').value))
