import React from 'react'
import './Homemainbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Questionlist from './Questionlist'
const Homemainbar = () => {
    const location = useLocation()
    const user = 1;
    const navigate = useNavigate()
    var questionlist = [{
        _id: '1',
        upVotes:3,
        downVotes:2,
        noOfAnswers:2,
        questionTitle:"What is a function?",
        questionBody:"It meant to be",
        questionTags:["java","node js","react js","mongodb"],
        userPosted:"mano",
        userId :1,
        askedOn:"jan 1",
        answer : [{
            anwerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn:"jan 2",
            userId:2,
        }]
    },{
        _id:'2',
        upVotes:3,
        downVotes:2,
        noOfAnswers:0,
        questionTitle:"What is a function?",
        questionBody:"It meant to be",
        questionTags:["javaScript","R","python"],
        userPosted:"mano",
        userId: 1,
        askedOn:"jan 1",
        answer : [{
            anwerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn:"jan 2",
            userId:2,
        }]
    },{
        _id:'3',
        upVotes:3,
        downVotes:2,
        noOfAnswers:0,
        questionTitle:"What is a function?",
        questionBody:"It meant to be",
        questionTags:["javaScript","node js","react js","mongodb"],
        userPosted:"mano",
        userId: 1,
        askedOn:"jan 1",
        answer : [{
            anwerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn:"jan 2",
            userId:2,
        }]
    }
    ]

    const checkAuth = () => {
        if(user === null){
            alert("login or signup to ask a question")
            navigate('/Auth')
        }
        else{
            navigate('/AskQuestion')
        }

    }
    return (
        <div className="main-bar">
            <div className="main-bar-header">
                {
                    location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Question</h1>
                
                }
                  <button onClick={checkAuth} className="ask-btn">Ask Question</button>
            </div>
            <div>
                {
                    questionlist === null ?
                    <h1>Loading...</h1> :
                    <>
                    
                    <p>{questionlist.length} questions</p>
                    <Questionlist questionlist = { questionlist}/>    
                    </>
                }
            </div>
            </div>
    )
}
export default Homemainbar

