import { Fragment } from 'react'; // -------- custom component -------- //

import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import ContactForm from 'components/common/ContactForm';
import NextLink from 'components/reuseable/links/NextLink'; // -------- data -------- //

const ContactTwo = () => {
  return <Fragment>
      <PageProgress />

      {
      /* ========== header section ========== */
    }
      <header className="wrapper bg-soft-primary">
        <Navbar language button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />} />
      </header>

      <main className="content-wrapper">
        {
        /* ========== page title section ========== */
      }
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
            <div className="row">
              <div className="col-sm-10 col-md-8 col-lg-8 col-xl-8 col-xxl-8 mx-auto">
                <h1 className="display-1 mb-3">Get in Touch</h1>
                <p className="lead text-center mb-10">
                  Reach out to us from our contact form and we will get back to you shortly.
                </p>
                <div className="row">
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                

                <ContactForm />
              </div>
            </div>
              </div>
            </div>
          </div>
        </section>

      
      </main>

      {
      /* ========== footer section ========== */
    }
      <Footer8 />
    </Fragment>;
};

export default ContactTwo;