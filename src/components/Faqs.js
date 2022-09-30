import React from "react"
export default function Faqs(){
    return(
        <section className="faqs">
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
                        <p>CareerBook is an initiative for providing the resources available online on a single place.</p>
                        </div>
                    </div>
                    <div className="accordion-item" id = "question2">
                        <a className="accordion-link" href="#question2">
                            How CareerBook works?
                            <i className="icon ion-md-add"></i>
                            <i className="icon ion-md-remove"></i>

                        </a>
                        <div className="answer">
                        <p> CareerBook has all the resources available from roadmaps to courses at a single place. You just have to browse through :)</p>
                        </div>
                    </div>
                    <div className="accordion-item" id = "question3">
                        <a className="accordion-link" href="#question3">
                            What makes CareerBook the best choice?
                            <i className="icon ion-md-add"></i>
                            <i className="icon ion-md-remove"></i>

                        </a>
                        <div className="answer">
                            <p>Quality content,easy navigability and sequential level wise development are three important ingredients of Careerbook's learning programmes.</p>
                        </div>
                    </div>
                    <div className="accordion-item" id = "question4">
                        <a className="accordion-link" href="#question4">
                            Does CareerBook charges anything?
                            <i className="icon ion-md-add"></i>
                            <i className="icon ion-md-remove"></i>

                        </a>
                        <div className="answer">
                        <p>No, CareerBook is a non-profit initiative.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}