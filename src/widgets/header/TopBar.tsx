import { useEffect, useState } from 'react';
import MenuLinks from './headerComponents/MenuLinks';
import MobileMenu from './headerComponents/MobileMenu';
import s from "./topbar.module.scss";

const TopBar: React.FC = () => {

   const [isFixed, setIsFixed] = useState(false);
   const [isAnimating, setIsAnimating] = useState(false);
   

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 500) {
            if (!isFixed) {
               setIsFixed(true);
               setIsAnimating(true);
            }
         } else {
            if (isFixed) {
               setIsAnimating(true);
               setIsFixed(false);
            }
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      }
   }, [isFixed]);

   const handleAnimationEnd = () => {
      setIsAnimating(false);
   };

   return (
      <div 
         className={`${s.header} ${isFixed ? s.fixed : ''} ${!isFixed && isAnimating ? s.removing: ''}`}
         onAnimationEnd={handleAnimationEnd}
      >
         <h2 className={s.logo}>In Balance</h2>
         <span className={s.navigator}>
            <MenuLinks />
         </span>

         <button className={s.button}>
            Записаться онлайн
         </button>
         <MobileMenu />
      </div>
   )
}

export default TopBar;