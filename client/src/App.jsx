import './App.css'
import {Routes,Route} from "react-router-dom"

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<>hello world</>}/>
      <Route path='/about' element={<>is about</>}/>
     </Routes>
    </>
  )
}

export default App
