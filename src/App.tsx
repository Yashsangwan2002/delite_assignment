import './App.css'
import SignIn from './components/functionals/signIn'
import { Routes, Route } from "react-router-dom"
import SignUp from './components/functionals/signUp'

function App() {

  return (
    <>
        <Routes>
        <Route path="/" element={ <SignUp/> } />
        <Route path="/sign-in" element={ <SignIn/> } />


      </Routes>

    </>
  )
}

export default App