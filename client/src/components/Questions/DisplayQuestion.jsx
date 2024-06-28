import React from 'react'
import Leftsidebar from '../Leftsidebar/Leftsidebar'
import Rightsidebar from '../Rightsidebar/Rightsidebar'
import QuestionsDetails from './QuestionsDetails'

const DisplayQuestion = ({slidein}) => {
return(
    <div className='home-container-1'>
                <Leftsidebar slidein={slidein}/>
                <div className='home-container-2'>
                    <QuestionsDetails/>
                    <Rightsidebar/>
                </div>
            </div>
)
}
export default DisplayQuestion