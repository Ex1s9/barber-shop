import s from './ReviewsBlock.module.scss';

type ReviewsCardProps = {
   title: string;
   author: string;
   avatar: string;
};

const ReviewsBlock: React.FC<ReviewsCardProps> = ({ title, author, avatar }) => {
   return (
      <div className={s.container}>
         <div className={s.block}>
            <div className={s.textContainer}>
               <p className={s.reviews}>{title}</p>
               <div className={s.authorInfo}>
                  <img src={avatar} alt={author} className={s.avatar} />
                  <h4 className={s.author}>{author}</h4>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ReviewsBlock;