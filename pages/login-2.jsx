import { Fragment } from 'react'; // -------- custom component -------- //

import { Navbar } from 'components/blocks/navbar';
import { Footer11 } from 'components/blocks/footer';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import NextLink from 'components/reuseable/links/NextLink';
import LoginForm from 'components/elements/forms/LoginForm'; // -------- data -------- //

const breadcrumb = [{
  id: 1,
  title: 'Home',
  url: '/'
}, {
  id: 2,
  title: 'Sign In',
  url: '#'
}];

const Login = () => {
  return <Fragment>
      {
      /* ========== header section ========== */
    }
      <header className="wrapper bg-soft-primary">
        <Navbar language stickyBox={false} logoAlt="logo-light" navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark" button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />} />
      </header>

      <main className="content-wrapper">
        {
        /* ========== title section ========== */
      }
        <section className="wrapper bg-dark text-white">
          <div className="container pt-18 pt-md-20 pb-21 pb-md-21 text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h1 className="display-1 text-white mb-3">Sign In</h1>
                <Breadcrumb className="text-white" data={breadcrumb} />
              </div>
            </div>
          </div>
        </section>

        {
        /* ========== form section ========== */
      }
        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col mt-n19">
                <div className="card shadow-lg">
                  <div className="row gx-0 text-center">
                    <div className="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start d-none d-md-block" style={{
                    backgroundImage: 'url(/img/photos/tm3.jpg)'
                  }} />

                    <div className="col-lg-6">
                      <div className="p-10 p-md-11 p-lg-13">
                        <LoginForm />
                      </div>
                    </div>
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
      <Footer11 />
    </Fragment>;
};

export default Login;