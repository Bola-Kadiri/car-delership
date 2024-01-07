import image1 from "../../assets/lexus-1.png"
import image2 from "../../assets/lexus-2.png"
import image3 from  "../../assets/toyota-1.png"
import image4 from "../../assets/toyota-2.png"
import image5 from "../../assets/toyota-3.png"
import { useState } from "react"

import { LiaTimesSolid } from "react-icons/lia";




const array_image = [image1, image2, image3,  image4, image5,image1, image2, image3, image4, image5, image1, image2]
const SingleCar = ({handleClose}) => {
    const [selectedImage, setSelectedImage] = useState(image1)
    const [allImage] = useState(array_image)


    
 
  return (
    <div style={{width: "100%", display: "flex", justifyContent: "center",  alignItems: "center", position: "relative"}}>
        
    <div style={{display:  "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#fff", width: "50%", height: "620px", position: "relative"}}>
   
        <h1 style={{marginTop: "20px", marginBottom: "10px"}}>2007 Toyota Yaris Mileage:159,425</h1>
     
        <img src={selectedImage} alt="selected-image" width="95%" height={250} style={{marginBottom: "20px"}}/>
        <div style={{display: "flex", flexWrap: "wrap", width: "95%", justifyContent: "space-between"}}>
            {allImage.map((image,  index)=>{
                return(
                    <div style={{ boxShadow: "0px 4px 10px 0px #679FD24F", width: "110px", height: "100px", marginBottom: "10px", borderRadius: "5px",}} key={index}>
                    <img src={image} 
                     onClick={()=>setSelectedImage(image)}
                     width="100%"
                     height="100%"
                     style={{marginBottom: "10px"}}
                    />
                    </div>
                )
            })}
        </div>
        <span style={{position: "absolute", right: "35px", top: "25px"}} onClick={handleClose}>< LiaTimesSolid style={{fontSize: "40px", cursor: "pointer"}}/></span>
    </div>
  
    </div>
  )
}

export default SingleCar