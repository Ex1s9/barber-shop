import { FaStar } from "react-icons/fa6";
import s from "./ReviewsText.module.scss";

const ReviewsText: React.FC = () => {
   const starCount = 5; // количество звезд

   return (
      <div className={s.block}>
         <h2>Что говорят наши клиенты</h2>
         <div className={s.ratingContainer}>
            <ul>
               <li>
                  {Array.from({ length: starCount }, (_, index) => (
                     <span key={index}><FaStar /></span>
                  ))}
               </li>
            </ul>
            <span className={s.reviewInfo}>5/5 | 120+ Яндекс отзывов</span>
         </div>
      </div>
   );
}

export default ReviewsText;