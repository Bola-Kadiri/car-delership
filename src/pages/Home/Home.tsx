import {useState} from "react"
import user from "../../assets/user.png"
import event from "../../assets/all-event.png"
import req from "../../assets/req.png"
import shortlist from "../../assets/shortlist.png"
import vote from "../../assets/vote.png"
import style from "./index.module.css"
import { feature_cars } from "../../assets/usedCars"
import honda from    "../../assets/honda-logo.png"
import  infiniti from "../../assets/infiniti-logo.png"
import toyota from "../../assets/toyota-logo.png"
import mercedes from "../../assets/mercedes-logo.png"
import lexus from "../../assets/lexus-logo.png"
import mazda from "../../assets/mazda-logo.jpeg"
import Marquee from "react-fast-marquee"
import { Link } from "react-router-dom"
import { IoEye } from "react-icons/io5";
import car_logo from "../../assets/beta.png"
const getLogo = [
    
    honda,
    infiniti,
    toyota,
    mercedes,
    lexus,
    mazda
]


type Data={
  id: number;
  icon: string,
  heading: string;
  path: string;
}[]

   const homeData: Data= [
    {


      id: 0,
      icon: user,
      heading: "Create an Account",
      path: "/"
    },
    {
      id: 1,
      icon:  event ,
      heading: "Join our platform",
      path: "/distribution"
    },
    {
      id: 2,
      icon: req,
      heading: "Search for different cars",
      path: "/save"
    },
    {
      id: 3,
      icon: shortlist,
      heading: 'Inspection',
      path: "/collection"
    },
    {
      id: 4,
        icon: vote,
        heading: 'Payment',
        path: "/wallet"
    },
    {
      id: 5,
        icon: vote,
        heading: 'Support & Maintainance',
        path: "/support"
    }
    
  ];

function Home() {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <div className={style.home}>
         <div className={style.bg_home}>   
         </div>
         <div className={style.bg_home_overlay}>
              <div className={style.home_container}>
                   <div className={style.home_content}>
                        <h1>Impacting <br/>Lives of Young<br/> People In Africa.</h1>
                        <p>Making youngsters laverage their skills, abilities and talents
                        stand out as a goal getter
                        </p>
                        <div className={style.shop_now}>
                             <a href="#" >Buy Now</a>
                        </div>
                   </div>
              </div>
         </div>
    </div>
    <div className={style.works}>
         <div className={style.works_content}>
              <h1>How it works</h1>
              <div className={style.works_para}>
                   <p> Lorem ipsum dolor sit amet consectetur adipisicing 
                   elit. Ipsum, perspiciatis autem? Quasi aliquam facilis quae 
                   alias accusamus voluptatum ex cumque facere! Voluptas iure velit 
                   aliquid corrupti, deserunt magnam quia veritatis.
                   </p>
              </div>
         </div>
         <div className={style.home_requirement}>
         <div className={style.home_requirement_content}>
               <div className={style.home_req_left}>
                    

                         {homeData.map((item,index)=>{
                              return(
                              <div className={style.home_req_left_content}>
                                 <div className={style.home_icon}>
                                   <div  className={selected === index 
                                   ? 
                                   `${style.menuItem}
                                    ${style.active}`
                                    : 
                                    `${style.menuItem}`
                                   }
                                   key={index}
                                   onClick={() => setSelected(index)}>
                                   <img src={item.icon} alt="user" style={{width: "48px", height: "57.77px"}}/>
                                   <span>{item.heading}</span>
                                   </div>
                              </div>
                                 </div>

                              )
                         })}       
               </div>
               <div className={style.home_req_center}></div>
              
               <div className={style.home_req_right}>
                    <div className={selected===0 ? style.home_req_right_content : style.collection_content}>
                         <img src={user} alt={user}/>
                         <h2>Create an Account</h2>
                         <p> 
                         Lorem ipsum dolor sit amet consectetur adipisicing 
                   elit. Ipsum, perspiciatis autem? Quasi aliquam facilis quae 
                   alias accusamus voluptatum ex cumque facere! Voluptas iure velit 
                   aliquid corrupti, deserunt magnam quia veritatis.
                   Lorem ipsum dolor sit amet consectetur adipisicing 
                   elit. Ipsum, perspiciatis autem? Quasi aliquam facilis quae 
                   alias accusamus voluptatum ex cumque facere! Voluptas iure velit 
                   aliquid corrupti, deserunt magnam quia veritatis.
                         </p>
                    </div>
                    <div className={selected===1 ? style.home_req_right_content : style.collection_content}>
                         <img src={event} alt={event}/>
                         <h2>Join our platform</h2>
                         <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing 
                   elit. Ipsum, perspiciatis autem? Quasi aliquam facilis quae 
                   alias accusamus voluptatum ex cumque facere! Voluptas iure velit 
                   aliquid corrupti, deserunt magnam quia veritatis.
                   Lorem ipsum dolor sit amet consectetur adipisicing 
                   elit. Ipsum, perspiciatis autem? Quasi aliquam facilis quae 
                   alias accusamus voluptatum ex cumque facere! Voluptas iure velit 
                   aliquid corrupti, deserunt magnam quia veritatis.
                         </p>
                    </div>
                    <div className={selected===2 ?  style.home_req_right_content : style.collection_content}>
                         <img src={req} alt={req}/>
                         <h2>Search for different cars</h2>
                         <p> 
                         Lorem ipsum dolor sit amet consectetur adipisicing 
                   elit. Ipsum, perspiciatis autem? Quasi aliquam facilis quae 
                   alias accusamus voluptatum ex cumque facere! Voluptas iure velit 
                   aliquid corrupti, deserunt magnam quia veritatis.
                   Lorem ipsum dolor sit amet consectetur adipisicing 
                   elit. Ipsum, perspiciatis autem? Quasi aliquam facilis quae 
                   alias accusamus voluptatum ex cumque facere! Voluptas iure velit 
                   aliquid corrupti, deserunt magnam quia veritatis.
                         </p>
                    </div>
                    <div className={selected===3 ? style.home_req_right_content : style.collection_content}>
                         <img src={shortlist} alt={shortlist}/>
                         <h2>inspection</h2>
                         <p> 
                         Lorem ipsum dolor sit amet consectetur adipisicing 
                   elit. Ipsum, perspiciatis autem? Quasi aliquam facilis quae 
                   alias accusamus voluptatum ex cumque facere! Voluptas iure velit 
                   aliquid corrupti, deserunt magnam quia veritatis.
                   Lorem ipsum dolor sit amet consectetur adipisicing 
                   elit. Ipsum, perspiciatis autem? Quasi aliquam facilis quae 
                   alias accusamus voluptatum ex cumque facere! Voluptas iure velit 
                   aliquid corrupti, deserunt magnam quia veritatis.
                         </p>
                    </div>
                    <div className={selected===4 ? style.home_req_right_content : style.collection_content}>
                         <img src={vote} alt={vote}/>
                         <h2>Payment</h2>
                         <p> 
                         Lorem ipsum dolor sit amet consectetur adipisicing 
                   elit. Ipsum, perspiciatis autem? Quasi aliquam facilis quae 
                   alias accusamus voluptatum ex cumque facere! Voluptas iure velit 
                   aliquid corrupti, deserunt magnam quia veritatis.
                   Lorem ipsum dolor sit amet consectetur adipisicing 
                   elit. Ipsum, perspiciatis autem? Quasi aliquam facilis quae 
                   alias accusamus voluptatum ex cumque facere! Voluptas iure velit 
                   aliquid corrupti, deserunt magnam quia veritatis.
                         </p>
                    </div>
                    <div className={selected===5 ? style.home_req_right_content : style.collection_content}>
                         <img src={vote} alt={vote}/>
                         <h2>Support & Maintainance</h2>
                         <p> 
                         Lorem ipsum dolor sit amet consectetur adipisicing 
                   elit. Ipsum, perspiciatis autem? Quasi aliquam facilis quae 
                   alias accusamus voluptatum ex cumque facere! Voluptas iure velit 
                   aliquid corrupti, deserunt magnam quia veritatis.
                   Lorem ipsum dolor sit amet consectetur adipisicing 
                   elit. Ipsum, perspiciatis autem? Quasi aliquam facilis quae 
                   alias accusamus voluptatum ex cumque facere! Voluptas iure velit 
                   aliquid corrupti, deserunt magnam quia veritatis.
                         </p>
                    </div>
               </div>
         </div>
               
         </div>
    </div>
    <div className={style.feature_car}>
        <div className={style.contain_para}>
             <h2>Feature Products</h2>
        </div>
        <hr />
        <div className={style.feature_car_content}>

          {feature_cars.map((car)=>{
               return (
                    <div className={style.box} key={car.id}>
                          <img src={car.image} alt={car.image} />
                          <p>{car.description}</p>
                          <span>Mileage: {car.mileage}</span>
                          <div className={style.price}>&#8358;{car.price}</div>
                          <div>
                              <div className={style.preview}>
                                   <IoEye/>
                              </div>
                          </div>
                    </div>
               )
          })}
             
        </div>
        <div className={style.btn_all_car}>
             <button><Link to="/foreign-car">See All Cars</Link> </button>
        </div>
    </div>
    <div className={style.why_chooses}>
        <div className={style.why_choose_contents}></div>
        <div className={style.why_choose_overlay}>
            <div className={style.why_info}>
                  <div className={style.left_why_choose}>
                      <div className={style.left_why_content}>
                         <div className={style.why_reason}>
                              <h2>Why choose CarByte?</h2>
                              <p>We are building a car buying experience that’s honest, transparent and gives you peace of mind.</p>
                              <div className={style.why_content}>
                                   <div className={style.why_content_item}>
                                        
                                        <h3>Exceptional Quality and Vehicle Reliability</h3>
                                        <p>Our cars are rigorously inspected for quality assurance to ensure zero mechanical faults for your peace of mind</p>
                                   </div>
                                   <div className={style.why_content_item}>
                                        
                                        <h3>Low competitive Pricing</h3>
                                        <p>We make sure you find the best cars for your need and offer it to you at the best prices possible. What you see on our site is what you pay</p>
                                   </div>
                              </div>
                              <div className={style.why_content}>
                                   <div className={style.why_content_item}>
                                       
                                        <h3>Customized Support</h3>
                                        <p>It does not matter whether you know nothing or everything about buying a car, we will help you find the right car</p>
                                   </div>
                                   <div className={style.why_content_item}>
                                  
                                        <h3>Car Financing</h3>
                                        <p>You can now afford your dream car with our flexible and affordable car financing option</p>
                                   </div>
                              </div>
                         </div>
                      </div>
                  </div>
                  <div className={style.right_why_choose}>
                    <img src={car_logo} alt={car_logo} />
                  </div>
            </div>
        </div>
    </div>
    <div className={style.Appcontainer}>
     <div className={style.Wrapper}>
          <div className={style.Text}>With Great Outcomes.</div>
          <div className={style.Note}>Our Customers have gotten offers from awesome companies</div>
          <Marquee className={style.Marquee}>
              <div className={style.MarqueeGroup}>
                {getLogo.map((logo)=>{
                    return(
                         <div className={style.ImageGroup}>
                            <div className={style.overlay}></div>
                            <Link to="/foreign-car">  <img src={logo} alt={logo} /></Link>
                         </div>
                    )
                })}
               </div>  
          </Marquee>
     </div>
    </div>
    </>
  )
}

export default Home
