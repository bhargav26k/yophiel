import { Fragment } from 'react'; // -------- custom hook -------- //

import useProgressbar from 'hooks/useProgressbar'; // -------- custom component -------- //

import { Blog4 } from 'components/blocks/blog';
import { Hero18} from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { Facts12 } from 'components/blocks/facts';
import { Footer11 } from 'components/blocks/footer';
import { Contact11, Contact7,  } from 'components/blocks/contact';
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