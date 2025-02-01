import { Link } from 'react-scroll';

const MenuLinks = () => {
   return (
      <div>
         <Link to="about" smooth={true} duration={700}>
            О нас
         </Link>
         <Link to="review" smooth={true} duration={850} offset={-250}>
            Отзыв
         </Link>
         <Link to="catalog" smooth={true} duration={700}>
            Каталог
         </Link>
         <Link to="contact" smooth={true} duration={700}>
            Контакты
         </Link>
      </div>
   );
}

export default MenuLinks;