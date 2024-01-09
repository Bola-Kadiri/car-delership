import image1 from "../../assets/lexus-1.png"
import image2 from "../../assets/lexus-2.png"
import image3 from  "../../assets/toyota-1.png"
import image4 from "../../assets/toyota-2.png"
import image5 from "../../assets/toyota-3.png"
import { useState } from "react"






const array_image = [image1, image2, image3,  image4, image5,image1, image2, image3, image4, image5]
const SingleCarTwo = () => {
    const [selectedImage, setSelectedImage] = useState(image1)
    const [allImage] = useState(array_image)
    const [modal, setModal] =  useState(false)

    
  const handleModal=()=>{
    setModal(!modal)
  }
  return (
    <div style={{display:  "flex", flexDirection: "column"}}>
        <h3 style={{marginTop: "0px", marginBottom: "0px"}}>2007 Toyota Yaris Mileage:159,425</h3>
     
        <img src={selectedImage} alt="selected-image" width="98%" height={300} style={{marginBottom: "20px"}}/>
        <div style={{display: "flex", flexWrap: "wrap", width: "100%"}}>
            {allImage.map((image)=>{
                return(
                    <div style={{ boxShadow: "0px 4px 10px 0px #679FD24F", width: "100px", height: "100px", borderRadius: "5px",  display: "flex", justifyContent: "space-between", marginBottom: "2px"}} onClick={handleModal}>
                    <img src={image} 
                     onClick={()=>setSelectedImage(image)}
                     width="95%"
                     height="100%"
                     style={selectedImage===image ? {border: "3px solid #FE6C04", cursor: "pointer", marginBottom: "10px"} : {cursor: "pointer", marginBottom: "10px"}}
                    />
                    </div>
                )
            })}
        </div>
       
    </div>
  )
}

export default SingleCarTwo