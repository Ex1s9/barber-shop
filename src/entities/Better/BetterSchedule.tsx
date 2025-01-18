import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { TextSchedule, TextTime } from "../../shared/text/Txt";
import s from './BetterSchedule.module.scss';
import Maps from "./maps/maps";

const BetterSchedule: React.FC = () => {
   return (
      <div className={s.container}>
         <div className={s.TextBlock}>
            <h3>
               Приходите за уходом. <br />
               Оставайтесь за напитками.
            </h3>
            <p className={s.mtext}>{TextSchedule}</p>
            <ul className={s.list}>
               <li><FaClock className={s.icon}/></li>
               <li >{TextTime}</li>
            </ul>
            <ul className={s.list}>
               <li><FaPhoneAlt className={s.icon}/></li>
               <li> +7 (978) 346-05-26</li>
            </ul>
         </div>
         <div>
            <Maps /> 
         </div>
      </div>
   )
}

export default BetterSchedule;