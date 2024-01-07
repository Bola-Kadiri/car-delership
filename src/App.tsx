import { BrowserRouter,Routes, Route} from "react-router-dom"
import Nav from "./component/Nav/Nav"
import Footer from "./pages/Footer/Footer"
import Container from "./pages/Container/Container"
import Home from "./pages/Home/Home"


const App = () => {
  return (
    
    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route  path="/*" element={<Container/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
       
    
  )
}

export default App