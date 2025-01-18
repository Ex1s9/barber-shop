import { FaLocationDot } from "react-icons/fa6"
import s from "./Adress.module.scss"

const Adress = () => {
   return (
      <div className={s.block}>
         <FaLocationDot className={s.icon}/>
         <h5>Севастополь, улица Токарева, 18В</h5>
      </div>
   )
}

export default Adress
