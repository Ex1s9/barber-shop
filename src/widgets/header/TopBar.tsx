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
         className={`${s.header} ${isFixed ? s.fixed : ''} ${!isFixed && isAnimating ? s.removing : ''}`}
         onAnimationEnd={handleAnimationEnd}
      >
         <div className={s.logoWrapper}>
            <h2 className={s.logo}>In Balance</h2>
         </div>
         <div className={s.navWrapper}>
            <span className={`${s.navigator} ${(isFixed ? s.active : s.activeNon)}`}>
               <MenuLinks />
            </span>
         </div>
         

         <div className={s.menuWrapper}>
            <MobileMenu />
         </div>
      </div>
   )
}

export default TopBar;
