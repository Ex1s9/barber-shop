import s from "./Price.module.scss";

const services = [
   { title: "Стрижка бороды", prices: [500, 2500, 5000] },
   { title: "Стрижка волос", prices: [400, 2300, 4500] },
   { title: "Укладка", prices: [300, 2000, 4000] },
   { title: "Стрижка бороды", prices: [500, 2500, 5000] },
   { title: "Стрижка волос", prices: [400, 2300, 4500] },
   { title: "Укладка", prices: [300, 2000, 4000] },
   { title: "Стрижка бороды", prices: [500, 2500, 5000] },
   { title: "Стрижка волос", prices: [400, 2300, 4500] },
   { title: "Укладка", prices: [300, 2000, 4000] },
   { title: "Стрижка бороды", prices: [500, 2500, 5000] },
   { title: "Стрижка волос", prices: [400, 2300, 4500] },
   { title: "Укладка", prices: [300, 2000, 4000] },
   
];

export const Price = () => {
   return (
      <div className={s.price}>
         <div className={s.price_title}>
            <div className={s.nothing}></div>
            <p>Барбер</p>
            <p>Старший Барбер</p>
            <p>ТОП-Барбер</p>
         </div>
         {services.map((service, index) => (
            <div key={index} className={s.price_item}>
               <p>{service.title}</p>
               {service.prices.map((price, idx) => (
                  <p key={idx}>{price}</p>
               ))}
            </div>
         ))}
      </div>
   );
};
