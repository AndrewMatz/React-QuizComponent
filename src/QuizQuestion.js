import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component{
    constructor(props){
        super(props);
        this.state = {incorrectAnswer: false};
    }

    render(){
        let options = this.props.quiz_question.answer_options.map((item, index) =>
            <QuizQuestionButton key={index} button_text={item} clickHandler={this.handleClick.bind(this)}/>
        );
        let incorrectMessage = this.state.incorrectAnswer ? <p className='error'>Sorry, that is not right</p> : null;
        return(
            <main>
            <section>
            <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
                <ul>
                    {options}
                </ul>
            </section>
            {incorrectMessage}
          </main>
        )
    }

    handleClick(buttonText){
        if(buttonText == this.props.quiz_question.answer){
            this.props.showNextQuestionHandler();
            this.setState({incorrectAnswer: false});
        }else{
            this.setState({incorrectAnswer: true});
        }
    }
}

export default QuizQuestion;