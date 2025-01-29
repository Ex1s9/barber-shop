import { FaPhoneAlt, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import s from './FooterContacts.module.scss'

export const FooterContacts = () => {
   return (
      <div className={s.contacts}>
         <button className={s.phone}>
            <FaPhoneAlt />
            <p>+7 (978) 346-05-26</p>
         </button>
         <div className={s.buttonBlock}>
            <button className={s.button}>
               <FaTelegramPlane className={s.icon}/>
               Telegram
            </button>
            <button className={s.button}>
               <FaWhatsapp className={s.icon}/>
               WhatsApp
            </button>
         </div>
      </div>
   )
}
