import { Outlet } from 'react-router-dom'
import './App.css'
import Catagories from './component/Catagories/Catagories'
import Header from './component/Header/Header'
import Navigation from './component/Navigation/Navigation'
import Statistics from './component/Statistics/Statistics'

function App() {
  

  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <Catagories></Catagories>
      <Statistics></Statistics>
    </div>
  )
}

export default App
