import { FaPhoneAlt, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import s from './FooterContacts.module.scss'

export const FooterContacts = () => {
   return (
      <div>
         <button className={s.phone}>
            <FaPhoneAlt className={s.icon}/>
            <p>+7 (978) 346-05-26</p>
         </button>
         <div className={s.buttonBlock}>
            <button className={s.button}>
               <FaTelegramPlane />
               Telegram
            </button>
            <button className={s.button}>
               <FaWhatsapp />
               WhatsApp
            </button>
         </div>
      </div>
   )
}
