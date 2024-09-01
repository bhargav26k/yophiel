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
  '/img/avatars/water_6.jpg',
  '/img/avatars/water_3.jpeg',
  '/img/avatars/water_4.jpg',
  '/img/avatars/water_7.webp',
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
                  Water Treatment Chemicals
                </h1>
                <p style={{ fontSize: '1.2rem', padding: '0 2rem' }}>
                  Explore our comprehensive range of chemicals essential for water treatment. Our products are designed to optimize water quality, enhance safety, and meet regulatory standards.
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
                <FigureImage width={2400} height={1640} src="/img/avatars/water_1.jpg" className="rounded mb-8 mb-md-12" />

                <ProjectDetailsContent title="About YOPHIEL Water Treatment Chemicals" />

                <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                  {images.map((item) => (
                    <div style={{ flex: '1 1 calc(50% - 1.5rem)', boxSizing: 'border-box' }} key={item}>
                      <figure style={{ overflow: 'hidden', borderRadius: '8px', cursor: 'pointer' }}>
                        <a href={item} data-glightbox data-gallery="project-1">
                          <Image
                            width={960}
                            height={640}
                            src={item}
                            alt="Water Treatment Chemicals"
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
                      Water Treatment Chemicals Overview
                    </h2>
                    <p>
                      Yophiel Internationals specializes in providing high-quality chemicals for water treatment. Our products are designed to ensure optimal water quality and meet various environmental and safety standards.
                    </p>

                    <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                      <li><strong>SPECIALTY CHEMICALS:</strong> A range of unique chemicals tailored to specific water treatment needs, enhancing the efficiency and effectiveness of the treatment processes.</li>
                      <li><strong>OXIDANTS AND REDUCING AGENTS:</strong> Essential for various water treatment processes, these chemicals help in the removal of contaminants through oxidation and reduction reactions.</li>
                      <li><strong>DEFOAMERS AND ANTIFOAMING AGENTS:</strong> Prevent and eliminate foam in water treatment systems, improving process efficiency and reducing maintenance issues.</li>
                      <li><strong>pH ADJUSTERS AND ALKALINITY CONTROL:</strong> Maintain and control the pH levels and alkalinity of water to ensure optimal conditions for treatment processes and prevent corrosion or scaling.</li>
                      <li><strong>BIOCIDES AND DISINFECTANTS:</strong> Kill or inhibit the growth of microorganisms in water systems, ensuring water safety and preventing biological fouling.</li>
                      <li><strong>CORROSION AND SCALE INHIBITORS:</strong> Protect water treatment equipment from corrosion and scale buildup, extending the lifespan of the equipment and improving operational efficiency.</li>
                      <li><strong>COAGULANTS AND FLOCCULANTS:</strong> Aid in the removal of suspended particles from water by causing them to clump together, making them easier to filter out and improve water clarity.</li>
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
