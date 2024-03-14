import React from 'react';
import styles from './style';
import { Navbar,Hero,Stats,Business,Billing,CardDeal,Testimonials,Clients,CTA,Footer  } from './components';
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      
      <div className={` ${styles.paddingX}  `}>
       <div className={`${styles.boxWidth}`  }>
          <Navbar/>
       </div>
      </div>

      <div className={`bg-primary ${styles.paddingX}  ${styles.flexstart}`}>
        <div className={`${styles.boxwidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary $(styles.paddingX) ${styles.flexstart}`}>
        <div className={`${styles.boxwidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/> 
          <Footer/>    
         </div>
      </div>


    </div>
  )
}

export default App