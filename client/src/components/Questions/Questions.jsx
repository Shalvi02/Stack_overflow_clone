import React from 'react'
import '../../App.css'
import Leftsidebar from '../Leftsidebar/Leftsidebar'
import Rightsidebar from '../Rightsidebar/Rightsidebar'
import Homemainbar from '../Homemainbar/Homemainbar'
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
