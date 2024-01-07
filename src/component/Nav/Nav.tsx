import style from "./index.module.css"
import search_text from "../../assets/search_text.png"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import { FaWhatsapp } from "react-icons/fa";

const Nav = () => {
  return (
    <div className={style.nav_header}>
        
         <div className={style.nav_content}>
           <li><Link to ="/"><img src={logo} alt={logo} /></Link></li> 
           <div className={style.search}>
            <div className={style.input_search}>
                
                <input type="text" className={style.input_text} placeholder="Search Store"/>
                <img src={search_text} alt={search_text}/>

            </div>
            <button className={style.search_btn}>Search</button>
            </div>
     </div>
     <div className={style.nav_link}>
        <div><Link to="/foreign-car">Foreign Used</Link></div>
        <div><Link to ="#">All Cars</Link></div>
        <div className={style.phone}><FaWhatsapp style={{color: "green"}}/><span>09176356544</span></div>
     </div>
    </div>
  )
}

export default Nav