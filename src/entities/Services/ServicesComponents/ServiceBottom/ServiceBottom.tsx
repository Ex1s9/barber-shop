import { Photo } from "./Photo"
import { Price } from "./Price"
import s from './ServiceBottom.module.scss'


export const ServiceBottom = () => {
   return (
      <div className={s.serviceBottom}>
         <Price />
         <Photo />
      </div>
   )
}
