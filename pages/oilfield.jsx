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
  '/img/photos/Oilfileld Drilling Fluid Additives.jpg',
  '/img/photos/Oilfileld Intermediates.jpg',
  '/img/photos/Oilfileld Production Chemicals.jpg',
  '/img/photos/Oilfileld Refinery.jpg',
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
                  Oilfield & Refinery Chemicals
                </h1>
                <p style={{ fontSize: '1.2rem', padding: '0 2rem' }}>
                  We provide specialized chemicals designed to optimize
                  performance in oilfield and refinery operations.
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
                <FigureImage width={2400} height={1640} src="/img/photos/Oilfied and Refinery.jpg" className="rounded mb-8 mb-md-12" />

                <ProjectDetailsContent title="About the YOPHIEL" />

                <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                  {images.map((item) => (
                    <div style={{ flex: '1 1 calc(50% - 1.5rem)', boxSizing: 'border-box' }} key={item}>
                      <figure style={{ overflow: 'hidden', borderRadius: '8px', cursor: 'pointer' }}>
                        <a href={item} data-glightbox data-gallery="project-1">
                          <Image
                            width={960}
                            height={640}
                            src={item}
                            alt="demo"
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
                      Oilfield and Refinery Chemicals
                    </h2>
                    <p>
                      Yophiel Internationals is your trusted partner for
                      high-quality oilfield and refinery chemicals. We specialize
                      in providing innovative solutions that enhance operational
                      efficiency and optimize productivity.
                    </p>

                    <p>
                      <strong>Our Services</strong>
                      <br />
                      <strong>Chemical Distribution:</strong> We offer a wide range
                      of essential chemicals used in oilfield and refinery
                      operations, including:
                    </p>
                    <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                      <li><b>Biocides:</b> Prevent microbial growth and contamination.</li>
                      <li>
                      <b>Corrosion Inhibitors:</b> Protect equipment from corrosion and
                        extend its lifespan.
                      </li>
                      <li>
                      <b>Scale Inhibitors:</b> Prevent mineral scale formation and
                        maintain smooth operations.
                      </li>
                      <li>
                      <b>Stabilizing Agents:</b> Ensure the stability of emulsions and
                        suspensions.
                      </li>
                      <li>
                      <b>Surfactants:</b> Improve wetting properties and enhance cleaning
                        processes.
                      </li>
                      <li><b>Coagulants:</b> Facilitate the removal of impurities from water.</li>
                      <li><b>Emulsifiers:</b> Promote the formation and stability of emulsions.</li>
                      <li><b>Cleaners:</b> Remove contaminants and maintain equipment cleanliness.</li>
                      <li>
                      <b>Oxygen Scavengers:</b> Prevent corrosion by removing dissolved
                        oxygen.
                      </li>
                      <li><b>Defoamers:</b> Reduce foam formation and improve process efficiency.</li>
                      <li><b>Activated Carbon:</b> Absorb impurities and contaminants.</li>
                      <li>
                      <b>Calcium Chloride:</b> Used as a deicer, desiccant, and drilling
                        fluid additive.
                      </li>
                      <li>
                      <b>Xanthan Gum:</b> A thickening agent and rheology modifier.
                      </li>
                    </ul>
                    <p>
                      <strong>Engineering Services:</strong> Our experienced team
                      provides comprehensive engineering solutions tailored to your
                      specific needs, including:
                    </p>
                    <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                      <li><b>Energy Management:</b> Optimize energy consumption and reduce costs.</li>
                      <li><b>Annual Maintenance Contracts:</b> Ensure regular maintenance and preventive measures.</li>
                      <li><b>Tolling and Blending:</b> Offer flexible production options to meet your requirements.</li>
                      <li><b>Raw Material Procurement:</b> Source high-quality raw materials at competitive prices.</li>
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
