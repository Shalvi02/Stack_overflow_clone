import React from 'react'
const DisplayAnswer = ({question}) => {
    return (
        <div>
          {
            question.answer.map((ans) => (
                <div className='display-ans' key = {ans._id}>
                    <p>{ans.answerBody}</p>
                    <div className='question-action-user'>
                        <div>
                            <button type = "button">Share</button>
                            <button type ="button">Delete</button>
                        </div>
                        <div>
                            <p>answered {ans.answeredOn}</p>
                            <Link ></Link>
                        </div>
                </div>
            ))
          }
        </div>
    )
}
export default DisplayAnswer