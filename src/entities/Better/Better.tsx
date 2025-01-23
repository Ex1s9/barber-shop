import Adress from "./Adress/Adress.tsx";
import s from './Better.module.scss';
import BetterSchedule from "./BetterSchedule.tsx";
import Linear from "./Linear/Linear.tsx";

export const Better = () => {
   return (
      <section id="about" className={s.block}>
         <div className={s.text}>
            <h1>Сделай себя еще лучше</h1>
            <p className={s.text1}>
               In Balance - это опыт ухода, который заслуживает каждый мужчина, где традиционное барберство встречается с уютной атмосферой и вкусными напитками.
               Сядьте, расслабьтесь, позаботьтесь о себе — а затем насладитесь кофе или холодным напитком в нашем лаунже.
            </p> 
         </div>
         <Linear /> 
         <Adress />
         <BetterSchedule />

      </section>
   );
}

