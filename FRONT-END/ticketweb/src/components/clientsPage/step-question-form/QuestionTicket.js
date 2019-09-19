import React, { Component } from 'react';
import Header from './../Header'
import Footer from './../Footer'
import StepOrder from './../step-order/StepOrder'
import BodyQuestionForm from './BodyQuestionForm';
class QuestionTicket extends Component {
    render() {
        return (
            <div>
                <Header />
                <StepOrder color1="green" color2="green" />
                 <BodyQuestionForm />
                <Footer />
            </div>
        );
    }
}

export default QuestionTicket ;