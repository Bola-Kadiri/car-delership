import {Routes, Route} from "react-router-dom"
import Sidebar from "../../component/SideBar/Sidebar"
import ForeignCar from "../Foreign-Car/ForeignCar"
import ExactCar from "../ExactCar/ExactCar"
import style from "./index.module.css"
import { SidebarData } from "../../component/SideBar/SidebarData"


const Container = () => {
  return (
    <div className={style.all}>
      
        <Sidebar data={SidebarData}/>
    
        <div className={style.foreign_middle}></div>
        <Routes>
           <Route path="/foreign-car" element={<ForeignCar/>}/>
           <Route path="/exact-car" element={<ExactCar/>}/>
           
        </Routes>
        
        
    </div>
  )
}

export default Container