import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../.././node_modules/swiper/swiper-bundle.min.css';
import s from './Reviews.module.scss';
import ReviewsBlock from "./ReviewsBlock";
import ReviewsText from './ReviewsText';

const reviewsData = [
   {
      title: 'Очень понравилось, Всё чётко, рекомендую.',
      author: 'Ex1s9',
      avatar: '/images/header-bck2.jpg',
   },
   {
      title: 'Отличный сервис и профессионализм.',
      author: 'User123',
      avatar: '/images/header-bck2.jpg',
   },
   {
      title: 'Очень вежливый персонал, отзывчивый и коммуникабельный. Веселые ребята, шикарная атмосфера.',
      author: 'Ex1s92',
      avatar: '/images/header-bck2.jpg',
   },
   {
      title: 'Отличный барбершоп! Крутая атмосфера и профи мастера!',
      author: 'User1',
      avatar: '/images/header-bck2.jpg',
   },
   {
      title: 'Великолепное место, где из ваших волос сделают конфетку.Спасибо большое за качественную работу, отличное настроение и вкусный кофе!',
      author: 'User12',
      avatar: '/images/header-bck2.jpg',
   },
   {
      title: 'Отличная стрижка, превосходный мастер Иван сделал все в лучшем виде! Если стричься - то только здесь! Всем советую!',
      author: 'Ex1s93',
      avatar: '/images/header-bck2.jpg',
   }
];

const Reviews: React.FC = () => {
   return (
      <main id='review' className={s.main}>
            <ReviewsText />
            <Swiper
               slidesPerView={2}
               slidesPerGroup={1}
               loop={true}
               autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false
               }}
               allowTouchMove={false}
               modules={[Autoplay]}
               className={s.swiper}
               breakpoints={{
                  0: {
                     slidesPerView: 1,
                     slidesPerGroup: 1,
                  },
                  768: {
                     slidesPerView: 2,
                     slidesPerGroup: 1,
                  },
                  1024: {
                     slidesPerView: 2,
                     slidesPerGroup: 1,
                  }
               }}
            >
               {reviewsData.map((review, index) => (
                  <SwiperSlide key={index} className={s.slide}>
                     <ReviewsBlock
                        title={review.title}
                        author={review.author}
                        avatar={review.avatar}
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
      </main>
   )
}

export default Reviews;
