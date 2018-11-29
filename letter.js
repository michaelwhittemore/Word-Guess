let Letter=class {
    constructor(letterString) {
        this.letterString = letterString
        this.guessed = false
        this.returnValue = function () {
            if(this.guessed){
                return(this.letterString)
            } else {
                return ("_")
            }
        }
        this.check=function(guessedLetter){
            if(this.letterString==guessedLetter){
                this.guessed=true
            }
        }
    }
}

module.exports = Letter