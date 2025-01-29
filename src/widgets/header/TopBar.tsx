import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
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
         <h2>In Balance</h2>
         <span className={s.navigator}>
            <Link 
               to="about" 
               smooth={true} 
               duration={700}
            >
               О нас
            </Link>
            <Link 
               to="review" 
               smooth={true} 
               duration={850}
               offset={-250}
            >
               Отзыв
            </Link>
            <Link 
               to="catalog" 
               smooth={true} 
               duration={900}
            >
               Каталог
            </Link>
         </span>
         <button className={s.button}>
            Записаться онлайн
         </button>
      </div>
   )
}

export default TopBar;