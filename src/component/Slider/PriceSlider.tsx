import ReactSlider from "react-slider"
 import { useState } from "react"
 import  "./index.css"

 const MIN = 5000000;
 const MAX = 20000000;

const PriceSlider = () => {
    const [values, setValues] = useState([MIN, MAX])
  return (
        <div  className="slider-house">
           <div className="flex-price">
           <p>&#8358;5000000</p>
           <p>&#8358;20000000</p>
           </div>
        <ReactSlider 
             className={"slider"}
             value={values}
             onChange={setValues}
             min={MIN}
             max={MAX}
         />
          <div className="flex-price-2">
               <p>{values[0]}</p>
               <p>{values[1]}</p>
           </div>

</div>
 
  )
}

export default PriceSlider