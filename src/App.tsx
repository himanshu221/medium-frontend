import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { CustomRoutes } from './components/Routes'

function App() {

  return (
    <BrowserRouter>
      <CustomRoutes />
    </BrowserRouter>
  )
}

export default App
