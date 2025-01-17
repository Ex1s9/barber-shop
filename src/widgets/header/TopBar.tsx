import { Link } from 'react-scroll';
import s from "./topbar.module.scss";

const TopBar: React.FC = () => {
   return (
      <div className={s.header}>
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
               duration={700}
               offset={-250}
            >
               Отзыв
            </Link>
            <Link 
               to="catalog" 
               smooth={true} 
               duration={500}
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