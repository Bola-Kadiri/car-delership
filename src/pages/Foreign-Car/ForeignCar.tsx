import style from "./index.module.css"
import { feature_cars } from "../../assets/usedCars"
import { Link } from "react-router-dom";
import SingleCar from "../SingleCar/SingleCar"
import {useState} from "react"
import {styled, Modal} from '@mui/material';


import { IoEye } from "react-icons/io5";

import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


// const StyledModal2 = styled(Modal)({
//   minHeight: "100vh",
//   display:'block',
//   alignItems: "center",
//   background: "rgba(103, 159, 210, 0.2)",

// })


const StyledModal2 = styled(Modal)({
  display: "flex",
 
  background: "rgba(0, 0, 0, 0.2)"
 
})
const ForeignCar = () => {

 

 

 
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault()
    setPage(value);
  };
  const [open, setOpen] = useState(false)
  const handleShow=()=>{
    setOpen(true)
  }
  const handleClose=()=>{
    setOpen(false)
  }

 
  return (
    
   <>
       
        <div className={style.right_foreign}>
          <div className={style.right_foreign_header}>
               <h3>Foreign Used</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus provident quia eius quam error, deleniti sed quod facere! Nulla earum architecto, deleniti esse voluptatibus veritatis corrupti odio enim iste, dolor dolore voluptas vel. Reprehenderit omnis accusantium fugiat exercitationem placeat error itaque praesentium non. Porro corporis quos rem accusamus optio voluptatem vero qui ad totam consequatur similique, dolore voluptatibus doloremque asperiores veniam. Dolor magni quas deserunt facilis deleniti, natus neque, voluptas eius ducimus distinctio quod sint totam eaque tempora autem, omnis impedit asperiores? Et quasi animi beatae in, corrupti inventore dignissimos, praesentium dolorem quaerat ratione reiciendis, rem blanditiis molestias. Tempora, dolor.</p>
          </div>
          <div className={style.content_right_foreign}>
            {feature_cars.map((car)=>{
              return(
                <div className={style.box} key={car.id}>
                  <Link to="/exact-car">   <img src={car.image} alt={car.image}  /></Link>
                     <p>{car.description}</p>
                     <span>Mileage: {car.mileage}</span>
                     <div className={style.price}>&#8358;{car.price}</div>
                     <div onClick={handleShow}>
                         <div className={style.preview}>
                          <IoEye  style={{color: "#fff"}}/>
                         </div>
                     </div>
                </div>
              )
            })}
          </div>
          <div style={{width: "100%", display: "flex", justifyContent: "flex-end", margin: "30px 0px"}}>
          <Stack spacing={2} style={{width: "35%"}}>
      <Pagination count={10} page={page} onChange={handleChange} color="secondary"  />
    </Stack>
    </div>
        </div>
      
      
   
   <StyledModal2
          open={open}
          onClose={handleShow}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
       
         >
           <div  style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", width: "100%"}}>
             
           <SingleCar handleClose={handleClose}/>
           </div>

           </StyledModal2>
         

           
    </>
  )
}

export default ForeignCar