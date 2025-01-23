import s from './FooterLeft.module.scss'

export const FooterLeft = () => {
   return (
      <div className={s.leftBlock}>
         <img src='public/images/FooterLogo.jpeg' alt='logo' className={s.logo}/>
         <p className={s.text}>
            In Balance - это опыт ухода, который заслуживает каждый мужчина, где традиционное барберство встречается с уютной атмосферой и вкусными напитками.
            Сядьте, расслабьтесь, позаботьтесь о себе — а затем насладитесь кофе или холодным напитком в нашем лаунже.
         </p>
      </div>
   )
}
