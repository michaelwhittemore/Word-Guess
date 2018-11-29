let Word = require("./word")
let inquirer = require("inquirer")

wordList = ['test', 'blue', 'yellow', 'trees', 'sleep']
chosenWord = wordList[Math.floor(Math.random() * wordList.length)]
wordObject = new Word(chosenWord)
wordObject.showWord()


promptUser = function () {
    inquirer.prompt([{
        name: "guessedLetter", message: "Pick a Letter"
    }]).then(function (answer) {
        wordObject.guess(answer.guessedLetter)
        wordObject.showWord()
        if (!wordObject.wordIsDone()) {
            promptUser()
        } else {
            console.log("You are correct! Next Word")
            chosenWord = wordList[Math.floor(Math.random() * wordList.length)]
            wordObject = new Word(chosenWord)
            wordObject.showWord()
            promptUser()
        }
    })
}
promptUser()