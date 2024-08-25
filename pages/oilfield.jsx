import Image from 'next/image';
import { Fragment } from 'react'; // -------- custom hook -------- //

import useLightBox from 'hooks/useLightBox'; // -------- custom component -------- //

import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
import ProjectDetailsContent from 'components/common/ProjectDetailsContent';
import ProjectDetailsNavigation from 'components/common/ProjectDetailsNavigation'; // -------- data -------- //

const images = ['/img/photos/oilfield.jpeg', '/img/photos/refinary.jpeg', '/img/photos/chemicals.jpeg', '/img/photos/chem.jpeg'];

const ProjectDetails = () => {
  // used for image lightbox
  useLightBox();
  return <Fragment>
      <PageProgress />

      {
      /* ========== header section ========== */
    }
      <header className="wrapper bg-soft-primary">
        <Navbar language button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />} />
      </header>

      <main className="content-wrapper">
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-22 text-center">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <div className="post-header">
                  <div className="post-category text-line">
                    <NextLink title="Identity" href="#" className="hover" />
                  </div>

                  <h1 className="display-1 mb-3">Oilfield & Refinery Chemicals</h1>
                  <p className="lead px-md-12 px-lg-12 px-xl-15 px-xxl-18">
                  We provide specialized chemicals designed to optimize performance in oilfield and refinery operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light wrapper-border">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-12">
                <article className="mt-n21">
                  {/* <FigureImage width={2400} height={1640} src="/img/photos/download.jpg" className="rounded mb-8 mb-md-12" /> */}

                  <ProjectDetailsContent title="About the YOPHIEL Oilfield And Refinery Chemicals" />

                  <div className="row mt-5 gx-md-6 gy-6">
                    {images.map(item => <div className="item col-md-6" key={item}>
                        <figure className="hover-scale rounded cursor-dark">
                          <a href={item} data-glightbox data-gallery="project-1">
                            <Image width={960} height={640} src={item} alt="demo" style={{
                          width: '100%',
                          height: 'auto'
                        }} />
                          </a>
                        </figure>
                      </div>)}
                  </div>

                  <div className="row mt-8 mt-md-12">
                    <div className="col-md-10 offset-md-1 text-justify">
                      <h2 className="mb-4"> YOPHIEL Performance</h2>
                      <p>
                      Our products enhance productivity, efficiency, and safety in oil and gas exploration, production, and refining.<br></br>
                      Global Network: Leveraging our global connections, we ensure the availability of high-quality chemicals tailored to industry needs.
                      </p>

                      <p>
                      Technical Expertise: Supported by a strong technical team, we offer solutions that meet the specific requirements of oilfield and refinery operations.<br></br>
                      Value-Added Services: Our offerings include energy management, tolling, blending, and procurement services, aimed at maximizing operational efficiency.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {
        /* ========== navigation section ========== */
      }
        <ProjectDetailsNavigation />
      </main>

      {
      /* ========== footer section ========== */
    }
      <Footer8 />
    </Fragment>;
};

export default ProjectDetails;