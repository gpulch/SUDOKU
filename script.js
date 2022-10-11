const ajouterErreurChamp = (line, column) => {
    const input = document.getElementById('cell' + line + '-' + column)
    input.classList.add('invalid')
    input.addEventListener('input', () => {
        input.classList.remove('invalid')
    }, { once: true })
}

//bouton check : click = verifier si doublons dans ligne / col / groupe 3x3
const check = () => {
    const listInput = document.querySelectorAll('input')

    // Enlever toutes les classes invalides
    for (const input of listInput) {
        input.classList.remove('invalid')
    }

    //check validity (0-9) of inputs
    for (const input of listInput) {
        const validInput = input.checkValidity()

        if (validInput === false) {
            return
        }
    }

    // table contenant toutes les lignes
    const sudoku = []

    // get every cell value
    for (let line = 0; line < 9; line += 1) {
        const sudokuLine = []

        for (let column = 0; column < 9; column += 1) {
            const cellIdentifier = 'cell' + line + '-' + column
            const input = document.getElementById(cellIdentifier)
            const value = input.value
            let number = value === ''
                ? ''
                : parseInt(value, 10)

            //add value to line
            sudokuLine.push(number)
        }

        sudoku.push(sudokuLine)
    }
    console.log(sudoku)

    // no repeating numbers in lines
    for (let line = 0; line < 9; line += 1) {
        const list = new Set()
        list.add(1)
        console.log(list.has(1))

        for (let column = 0; column < 9; column += 1) {
            const value = sudoku[line][column]
            // tester si la valeur est vide

        }
    }
}



const buttonCheck = document.getElementById('buttonCheck')
buttonCheck.addEventListener('click', check)

//bouton reset : click = reinitialiser toutes les cellules et placer un nombre aleatoire

