import { Outlet } from 'react-router-dom'
import './App.css'
import Navigation from './component/Navigation/Navigation'
import { createContext, useState } from 'react';


export const IdText = createContext(1);

export const ViewDetails = createContext(1);


function App() {

  const [id ,setId] = useState(1);

  const viewDetailsBtn = (id) => {
    setId(id);
  }


  return (
    <div className="App">

      <ViewDetails.Provider value={viewDetailsBtn}>

        <IdText.Provider value={id}>

          <Navigation></Navigation>
          <Outlet></Outlet>

        </IdText.Provider>

      </ViewDetails.Provider>

    </div>
  )
}

export default App
