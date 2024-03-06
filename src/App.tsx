import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
