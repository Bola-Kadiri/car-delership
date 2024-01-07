import style from "./index.module.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div  className={style.footer}>
        <div className={style.footer_content}>
           <div className={style.footer_headings}>
               <p>ABOUT US</p>
               <p>MEDIA</p>
               <p>PARTNER</p>
               <p>CONTACT</p>
           </div>
           <div className={style.footer_headings}>
               <div className={style.body}>
                  <Link to="#">About</Link>
                  <Link to="#">Career</Link>
                  <Link to="#">FAQs</Link>
               </div>
               <div className={style.body}>
                 <Link to="#">Newsroom</Link>
               </div>
               <div className={style.body}>
                  <Link to="#">Become a Betacar Partner</Link>
                  <Link to="#">Become a Freelance Sales Consultant</Link>
               </div>
               <div className={style.body}>
                  <Link to="#">Become a Betacar Partner</Link>
                  <Link to="#">Become a Freelance Sales Consultant</Link>
               </div>
           </div>
        </div>
        
    </div>
  )
}

export default Footer