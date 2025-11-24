import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import LoginPage from "./LoginPage"
import ForgotPassword from "./ForgotPassword"
import SignUpPage from "./SignUpPage"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route index element={<LoginPage/>}></Route>
        <Route path='/SignUpPage'  element={<SignUpPage/>}></Route>
        <Route path='/ForgotPassword'  element={<ForgotPassword/>}></Route>
      </Routes>
    </div>
  )
}

export default App
