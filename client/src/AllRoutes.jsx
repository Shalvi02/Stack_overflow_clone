import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from './components/pages/Auth/Auth'
import Home from './components/pages/Home/Home'
import Questions from './components/Questions/Questions'
import AskQuestion from './components/pages/AskQuestion/AskQuestion'
import DisplayQuestion from './components/Questions/DisplayQuestion'
const AllRoutes = () => {
    return (
        <Routes>
         <Route path='/Auth' element={<Auth />}/>
         <Route exact path ="/" element={<Home />}/>
         <Route path ='/Questions' element={<Questions/>}/>
         <Route path = '/AskQuestion' element = {<AskQuestion/>}/>
         <Route path = '/Questions/:id' element = {<DisplayQuestion/>}/>
        </Routes>
    )
}

export default AllRoutes