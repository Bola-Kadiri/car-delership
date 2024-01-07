
import SingleCarTwo from "../SingleCar-2/SingleCarTwo"
import style from "./index.module.css"

const ExactCar = () => {
  return (
  
        <div className={style.exact}>
           <div className={style.exact_left}>
              <SingleCarTwo/>
           </div>
           <div className={style.exact_right}>
              <h3>Economy Efficient & Ground-hugging Bold design!</h3>
              <div className={style.car_info}>
                <h4>Key Features</h4>
              </div>
           </div>
        </div>
    
  )
}

export default ExactCar