import s from "./Services.module.scss"
import { ServiceBottom } from "./ServicesComponents/ServiceBottom/ServiceBottom"
import { OurServices } from "./ServicesComponents/ServiceTop/OurServices"

export const Services = () => {
   return (
      <div className={s.service} id="catalog">
         <OurServices />
         <ServiceBottom />
      </div>
   )
}
