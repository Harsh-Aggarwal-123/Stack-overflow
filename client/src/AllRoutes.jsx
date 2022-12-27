import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Home/Auth/Auth'
import Questions from './pages/Home/Questions/Questions'
import AskQuestion from './pages/Home/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Home/Questions/DisplayQuestion'
import Tags from './pages/Home/Tags/Tags'
import Users from './pages/Home/Users/Users'
import Chat from './Chatbox/Chat'
import UserProfile from './pages/Home/UserProfile/UserProfile'


const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Auth' element={<Auth />}/>
            <Route path='/Questions' element={<Questions />}/>
            <Route path='/AskQuestion' element={<AskQuestion />}/>
            <Route path='/Questions/:id' element={<DisplayQuestion />}/>
            <Route path='/Tags' element={<Tags />}/>
            <Route path='/Users' element={<Users />}/>
            <Route path='/Users/:id' element={<UserProfile />}/>
            <Route path='/Chat' element={<Chat />}/>
        </Routes>
    )
}

export default AllRoutes