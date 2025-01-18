import s from './Linear.module.scss';

const Linear: React.FC = () => {
   return (
      <div className={s.closestShopContainer}>
         <div className={s.lineRight}></div>
         <p className={s.text}>Наш адресс:</p>
         <div className={s.lineLeft}></div>
      </div>
   );
};

export default Linear;