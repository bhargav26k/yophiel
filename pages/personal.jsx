import Image from 'next/image';
import { Fragment } from 'react';

// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';

// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
import ProjectDetailsContent from 'components/common/ProjectDetailsContent';
import ProjectDetailsNavigation from 'components/common/ProjectDetailsNavigation';

// -------- data -------- //
const images = [
  '/img/avatars/personal_5.jpg',
  '/img/avatars/personal_3.webp',
  '/img/avatars/personal_4.avif',
  '/img/avatars/personal_6.avif',
];

const ProjectDetails = () => {
  // used for image lightbox
  useLightBox();

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header style={{ backgroundColor: '#f3f8fc', padding: '1rem 0' }}>
        <Navbar
          language
          button={
            <NextLink
              title="Contact"
              href="#"
              className="btn btn-sm btn-primary rounded-pill"
            />
          }
        />
      </header>

      <main style={{ backgroundColor: '#ffffff', color: '#333333' }}>
        <section style={{ backgroundColor: '#f3f8fc', padding: '4rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ margin: '0 auto', maxWidth: '600px' }}>
              <div className="post-header">
                <div className="post-category text-line">
                  <NextLink title="YOPHIEL" href="#" className="hover" />
                </div>

                <h1 style={{ fontSize: '2.5rem', margin: '1rem 0' }}>
                  Personal & Home Care Products
                </h1>
                <p style={{ fontSize: '1.2rem', padding: '0 2rem' }}>
                  Explore our range of high-quality ingredients for personal and home care products, enhancing everyday experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            backgroundColor: '#f9f9f9',
            borderTop: '1px solid #e0e0e0',
            padding: '2rem 0',
          }}
        >
          <div style={{ padding: '0 1rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div>
              <article style={{ marginTop: '-5rem' }}>
                <FigureImage width={2400} height={1640} src="/img/avatars/personal_1.jpg" className="rounded mb-8 mb-md-12" />

                <ProjectDetailsContent title="About YOPHIEL Personal & Home Care" />

                <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                  {images.map((item) => (
                    <div style={{ flex: '1 1 calc(50% - 1.5rem)', boxSizing: 'border-box' }} key={item}>
                      <figure style={{ overflow: 'hidden', borderRadius: '8px', cursor: 'pointer' }}>
                        <a href={item} data-glightbox data-gallery="project-1">
                          <Image
                            width={960}
                            height={640}
                            src={item}
                            alt="Personal and Home Care"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                          />
                        </a>
                      </figure>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '3rem', padding: '0 2rem' }}>
                  <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                      Personal and Home Care Chemicals
                    </h2>
                    <p>
                      We provide essential chemicals used in personal and home care products, designed to enhance product performance, aesthetics, and safety. These chemicals are integral to a wide range of everyday products.
                    </p>

                    <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                      <li>
                        <strong>SURFACTANTS:</strong> Improve the efficiency of cleaning agents and enhance the performance of formulations.
                      </li>
                      <li>
                        <strong>FOAM BOOSTER:</strong> Increase foam volume and stability in products like shampoos and hand washes.
                      </li>
                      <li>
                        <strong>FATTY ESTERS:</strong> Serve as emollients, moisturizers, and viscosity modifiers in skin and hair care products.
                      </li>
                      <li>
                        <strong>PARAFFIN OILS:</strong> Act as moisturizers and softening agents in lotions and creams.
                      </li>
                      <li>
                        <strong>FATTY ALCOHOLS:</strong> Used as emulsifiers, thickeners, and stabilizers in various formulations.
                      </li>
                      <li>
                        <strong>EMULSIFIERS:</strong> Enhance the stability of emulsions in creams, lotions, and other products.
                      </li>
                      <li>
                        <strong>BIOCIDES & PRESERVATIVES:</strong> Protect against microbial contamination and ensure product safety.
                      </li>
                      <li>
                        <strong>PEARLIZERS:</strong> Add a pearlescent effect to products, improving their visual appeal.
                      </li>
                      <li>
                        <strong>FATTY ACIDS:</strong> Provide moisturization and conditioning effects in skincare and haircare products.
                      </li>
                      <li>
                        <strong>PETROLEUM JELLY:</strong> Used as a protective barrier and moisturizer in skincare products.
                      </li>
                      <li>
                        <strong>FRAGRANCES:</strong> Add pleasant scents to products, enhancing the sensory experience.
                      </li>
                      <li>
                        <strong>COLORANTS:</strong> Provide vibrant colors to formulations, making products more visually appealing.
                      </li>
                      <li>And much more…</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ========== navigation section ========== */}
        <ProjectDetailsNavigation />
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default ProjectDetails;
