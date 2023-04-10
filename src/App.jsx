import { Outlet } from 'react-router-dom'
import './App.css'
import Catagories from './component/Catagories/Catagories'
import Header from './component/Header/Header'
import Navigation from './component/Navigation/Navigation'

function App() {
  

  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <Catagories></Catagories>
    </div>
  )
}

export default App
