import { Fragment } from 'react'; // -------- custom hook -------- //

import useProgressbar from 'hooks/useProgressbar'; // -------- custom component -------- //

import { Blog4 } from 'components/blocks/blog';
import { Hero18, Hero1, Hero2, Hero3, Hero4, Hero5, Hero6, Hero7, Hero8, Hero9, Hero10, Hero11, Hero12, Hero13, Hero14, Hero15, Hero16, Hero17, Hero19, Hero20, Hero21, Hero22, Hero23, Hero24, Hero25, Hero26, Hero27, Hero28,Hero29, Hero30, Hero31, Hero32, Hero33, Hero34 } from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { Facts12 } from 'components/blocks/facts';
import { Footer11 } from 'components/blocks/footer';
import { Contact11, Contact1, Contact2, Contact3, Contact4, Contact5, Contact6, Contact7, Contact8, Contact9, Contact10, Contact14, Contact12, Contact13, } from 'components/blocks/contact';
import { Services20 } from 'components/blocks/services';
import { CTA7 } from 'components/blocks/call-to-action';
import { Testimonial15 } from 'components/blocks/testimonial';
import { About17, About18, About19 } from 'components/blocks/about';
import PageProgress from 'components/common/PageProgress';
import { Portfolio1 } from 'components/blocks/portfolio';


const Demo18 = () => {
  // used for the animated line
  useProgressbar();
  return <Fragment>
      <PageProgress />

      {
      /* ========== header ========== */
    }
      <header className="wrapper">
        <Navbar social navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />
      </header>

      {
      /* ========== main content ========== */
    }
      <main className="content-wrapper">
        {
        /* ========== hero section ========== */
      }
      {/* <Portfolio1 /> */}
        <Hero18 />
{/* <Hero24/> */}



        <section className="wrapper bg-light">
          <div className="container pt-14 pt-md-17 pb-14 pb-md-18">
            {
            /* ========== what we do section ========== */
          }
          <About19 />
            

            {
            /* ========== have perfect section ========== */
          }
          <Services20 />
            {/* <About17 /> */}

            {
            /* ========== what makes section ========== */
          }
          {/* <Contact11 /> */}
          <Contact7 />


          
            {/* <About18 /> */}
          </div>
        </section>
        </main>

        {/* <section className="wrapper bg-light"> */}
          {
          /* ========== facts section ========== */
        }
          {/* <Facts12 /> */}

          {/* <div className="container"> */}
            {
            /* ========== testimonial section ========== */
          }
            {/* <Testimonial15 /> */}

            {
            /* ========== case study section ========== */
          }
            {/* <Blog4 /> */}

            {
            /* ========== who are we section ========== */
          }


            {
            /* ========== contact section ========== */
          }
            
          {/* </div> */}
        {/* </section> */}

        {
        /* ========== call to action section ========== */
      }
        {/* <CTA7 /> */}
      

      {
      /* ========== footer section ========== */
    }
      <Footer11 />
    </Fragment>;
};

export default Demo18;