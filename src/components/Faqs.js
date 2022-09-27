import React from "react"
export default function Faqs(){
    return(
        <section>
            <h1 className="faq-header">Frequently Asked Questions</h1>
            <div className="faqs-container">
                <div className="accordion">
                    <div className="accordion-item" id = "question1">
                        <a className="accordion-link" href="#question1">
                            What is CareerBook?
                            <i className="icon ion-md-add"></i>
                            <i className="icon ion-md-remove"></i>

                        </a>
                        <div className="answer">
                        <p>lorem ipsum</p>
                        </div>
                    </div>
                    <div className="accordion-item" id = "question2">
                        <a className="accordion-link" href="#question2">
                            How Career Path works?
                            <i className="icon ion-md-add"></i>
                            <i className="icon ion-md-remove"></i>

                        </a>
                        <div className="answer">
                        <p>lorem ipsum</p>
                        </div>
                    </div>
                    <div className="accordion-item" id = "question3">
                        <a className="accordion-link" href="#question3">
                            What makes careerbook the best choice?
                            <i className="icon ion-md-add"></i>
                            <i className="icon ion-md-remove"></i>

                        </a>
                        <div className="answer">
                            <p>quality content,easy navigability and sequential level wise development are three important ingredients of Careerbook's learning programmes.</p>
                        </div>
                    </div>
                    <div className="accordion-item" id = "question4">
                        <a className="accordion-link" href="#question4">
                        How much does an careerbook course cost?
                            <i className="icon ion-md-add"></i>
                            <i className="icon ion-md-remove"></i>

                        </a>
                        <div className="answer">
                        <p>lorem ipsum</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}