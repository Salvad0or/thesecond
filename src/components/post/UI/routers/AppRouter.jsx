import { Route, Routes, } from "react-router-dom";

import React from 'react'
import SomethingPage from "../../pages/SomethingPage";
import SomethingPage2 from "../../pages/SomethingPage2";
import { Posts } from "../../pages/Posts";
import Error from "../../pages/Error";

const AppRouter = () => {
    return (

     
        <Routes>
            <Route path='/something' element={<SomethingPage />} />
            <Route path='/something2' element={<SomethingPage2 />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='*' element={<Error></Error>} />
        </Routes>


    )
}

export default AppRouter