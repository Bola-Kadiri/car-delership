import ReactSlider from "react-slider"
 import { useState } from "react"
 import  "./index.css"

 const MIN = 2005;
 const MAX = 2023;

const YearSlider = () => {
    const [values, setValues] = useState([MIN, MAX])
  return (
        <div  className="slider-house">
           <div className="flex-price">
           <p>2005</p>
           <p>2023</p>
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

export default YearSlider