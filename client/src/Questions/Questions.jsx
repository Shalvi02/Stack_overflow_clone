import React from 'react'
import '../App.css'
import Leftsidebar from '../components/Leftsidebar/Leftsidebar'
import Rightsidebar from '../components/Rightsidebar/Rightsidebar'
import Homemainbar from '../components/Homemainbar/Homemainbar'
const Questions = ({slidein}) => {
        return (
            <div className='home-container-1'>
                <Leftsidebar slidein={slidein}/>
                <div className='home-container-2'>
                    <Homemainbar/>
                    <Rightsidebar/>
                </div>
            </div>
        )
    }
    export default Questions
