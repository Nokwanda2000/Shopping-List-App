import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layoutpage from './pages/layoutpage';
import Landingpage from './pages/landingpage';
import Loginpage from './pages/loginpage';
import Registerpage from './pages/registerpage';
import Listspage from './pages/listspage';
import Footer from './features/components/footer';
import Categorylist from './features/components/categorylist';
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />}></Route>
        <Route path= '/layout' element={<Layoutpage/>}>   </Route>
        <Route path= '/loginpage' element={<Loginpage/>}></Route>
        <Route path='/Registerpage' element={<Registerpage/>}></Route>
<<<<<<< HEAD

        <Route path='/listspage'>
        <Route index element={<Listspage/>}></Route>
        <Route path=':id' element={<Categorylist/>}></Route>
       </Route>
     
        
   
      </Routes>
=======
        <Route path='/listspage' element={<Listspage/>}></Route>
     </Routes>
>>>>>>> f4683752b1f5ed8b40c18c41ca1534cf43186b04
    </BrowserRouter>

    </>
  )
}

export default App
