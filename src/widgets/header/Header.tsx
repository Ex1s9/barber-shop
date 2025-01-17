import React from 'react';
import s from './header.module.scss';

const Header: React.FC = () => {

   const photos = [
      'src/public/header-bck3.jpg',
      'src/public/header-bck2.jpg',
   ];

   return (
      <div className={s.gallery}>
         {photos.map((photo, index) => (
            <div key={index} className={s.item}>
               <img src={photo} alt={`Photo ${index + 1}`} />
            </div>
         ))}
         <div className={s.text}>
            <h1>Добро пожаловать в <br />In Balance</h1>
            <p>...или же лучшее время в вашем дне</p>
         </div>
      </div>
   );
};

export default Header;
