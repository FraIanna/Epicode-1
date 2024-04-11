const generateMainBoard = function(numberOfCells){
    const mainBoard = document.getElementById("table")
    for(let i = 0; i < numberOfCells; i++){
        const cell = document.createElement("div")
        cell.classList.add("cell")
        cell.innerText = i + 1
        mainBoard.appendChild(cell)
    }
}


const handleFormSubmit = function (e) {
    e.preventDefault();
    }


const getRandomNumber = function (){
    return Math.floor(Math.random()*(76))
}

const attachNumber = function(){
    const randomNumber = getRandomNumber()
    const textField = document.getElementById("drawnNumber")
    textField.value = randomNumber
}

const attachNumber2 = function(){
    const drawnNumber = document.getElementById("drawnNumber").value
    const cells = document.querySelectorAll(".cell")
    cells.forEach((cell) =>{
        if (cell.innerText == drawnNumber){
            cell.classList.add("selectedCell")
        }
    })

}

const buttonRandom = document.getElementById("button")
    buttonRandom.addEventListener("click", function(){
        attachNumber()
        attachNumber2()
})

generateMainBoard(76);
const form = document.querySelector("form");
form.addEventListener('submit', handleFormSubmit);