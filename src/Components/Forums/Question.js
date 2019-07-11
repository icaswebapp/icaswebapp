class Question {
    constructor(question) {
        this.question = question
        this.answers = []
        this.addAnswer = (answer) => this.answers.push(answer)
        this.getComponent = () => (
            { 
                question: this.question,
                answers: this.answers
            }
        )
    }
}  

export default Question