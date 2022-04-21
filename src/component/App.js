import React from 'react'
import Home from '../routes/Home';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Detail from '../routes/Detail';

const App = () => {
  return (
    <Router>
        {/* router-dom 6.x 이상부터 Switch 태그 대신 Routes를 사용해야 한다. */}
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/:id' element={<Detail />} ></Route>
        </Routes>
    </Router>
  )
}

export default App