import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layoutpage from './pages/layoutpage';
import Landingpage from './pages/landingpage';
import Loginpage from './pages/loginpage';
import Registerpage from './pages/registerpage';
import Listspage from './pages/listspage';
import Footer from './features/components/footer';
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />}></Route>
        <Route path= '/layout' element={<Layoutpage/>}>   </Route>
        <Route path= '/loginpage' element={<Loginpage/>}></Route>
        <Route path='/Registerpage' element={<Registerpage/>}></Route>
        <Route path='/listspage' element={<Listspage/>}></Route>
     
        
   
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
