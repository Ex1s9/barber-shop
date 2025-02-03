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
            <a
               href="https://t.me/+79783460526"
               target='_blank'
               rel="noopener noreferrer" 
               className={s.button}>
               <FaTelegramPlane className={s.icon}/>
               Telegram
            </a>
            <a 
               href='https://api.whatsapp.com/send/?phone=79783460526&text&type=phone_number&app_absent=0'
               target='_blank' 
               rel='noopener noreferrer' 
               className={s.button}>
               <FaWhatsapp className={s.icon}/>
               WhatsApp
            </a>
         </div>
      </div>
   )
}
