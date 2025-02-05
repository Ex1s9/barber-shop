import s from './Footer.module.scss'
import { FooterLeft } from './footerComponents/FooterLeft/FooterLeft'
import { FooterContacts } from './footerComponents/FooterRight/FooterContacts'

export const Footer = () => {
   return (
      <div id='contact' className={s.footer}>
         <div className={s.footerContainer}>
            <FooterLeft />
            <FooterContacts />
         </div>
         <div className={s.footerBottom}>
            <p>
               © 2025 In Balance. Все права защищены.
            </p>
         </div>
      </div>
   )
}
