let Letter=require("./letter")

let Word=class{
    constructor(word){
        this.letterArray=[]
        for (let i of word){
            let tempLetterObject=new Letter(i)
            this.letterArray.push(tempLetterObject)
        }
        this.showWord=function(){
            let revealedWord=""
            for (let i in this.letterArray){
                revealedWord+=(this.letterArray[i].returnValue()+" ")
            }
            console.log(revealedWord)
        }
        this.guess=function(guessedLetter){
            for(let i in this.letterArray){
                this.letterArray[i].check(guessedLetter)
            }
        }
        this.wordIsDone=function(){
            for (let i in this.letterArray){
                if(!this.letterArray[i].guessed){
                    return false
                }
            }
            return true
        }
    }
}

module.exports = Word