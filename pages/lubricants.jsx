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
  '/img/photos/Greaseimg.jpeg',
  '/img/photos/images.jpeg',
  '/img/photos/Grease oil.png',
  '/img/photos/automotiveoil.png',
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
                  Lubricants & Grease Additives
                </h1>
                <p style={{ fontSize: '1.2rem', padding: '0 2rem' }}>
                  Yophiel Internationals is your trusted partner for high-quality lubricants and grease additives. We specialize in providing innovative solutions that enhance equipment performance and extend its lifespan.
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
              <article style={{ marginTop: '-5rem', justifyContent:'center',alignItems: 'center', margin:'auto' }}>
                <FigureImage width={2400} height={1640} src="/img/photos/HowGrease.jpg" className="rounded mb-8 mb-md-12" />

                <ProjectDetailsContent title="About the Yophiel" />

                <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', width:'80%', margin:'auto' }}>
                  {images.map((item) => (
                    <div style={{ flex: '1 1 calc(50% - 1.5rem)', boxSizing: 'border-box' }} key={item}>
                      <figure style={{ overflow: 'hidden', borderRadius: '8px', cursor: 'pointer' }}>
                        <a href={item} data-glightbox data-gallery="project-1">
                          <Image
                            width={1060}
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
                    Lubricants & Grease Additives                    </h2>
                    <p>
                    Yophiel Internationals is your trusted partner for high-quality lubricants and grease additives. We specialize in providing innovative solutions that enhance equipment performance and extend its lifespan.
</p>

<p>
                      <strong>Our Services</strong>
                      <br />
                      </p>
                    <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                      <li><b>Engine Oils:</b> For automotive, industrial, and marine applications.</li>
                      <li><b>Gear Oils:</b> For gearboxes and transmissions.</li>
                      <li><b>Hydraulic Oils:</b> For hydraulic systems.</li>
                      <li><b>Greases:</b> For various industrial and automotive applications.</li>
                      <li><b>Specialty Lubricants:</b> For unique and demanding applications.</li>
                    </ul>
                    <p>
                      Grease Additive Distribution: We provide essential additives to enhance the performance of greases, such as:
                    </p>
                    <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                      <li><b>Lithium Hydroxide:</b> Improves water resistance and stability.</li>
                      <li><b>Friction Modifiers:</b> Reduce friction and wear.</li>
                      <li><b>Pour Point Depressants:</b> Improve low-temperature performance.</li>
                      <li><b>Antiwear Additives:</b> Protect against wear and extend equipment life.</li>
                      <li><b>Anti-Foaming Agents: </b>Prevent foam formation and maintain optimal lubrication.</li>
                      <li><b>Extreme Pressure Additives:</b> Provide protection under high-pressure conditions.</li>
                      <li><b>Tackifiers:</b> Improve adhesive properties and prevent slippage.</li>
                      <li><b>Antioxidants:</b> Protect against oxidation and prolong lubricant life.</li>
                      <li><b>TBN Boosters:</b> Neutralize acidic contaminants and prevent corrosion.</li>
                      <li><b>ZDDP:</b> A versatile additive for antiwear and extreme pressure protection.</li>
                      <li><b>Molybdenum Disulfide:</b> Provides excellent lubricity and wear resistance.</li>
                      <li><b>Viscosity Improvers:</b> Maintain viscosity over a wide temperature range.</li>
                      <li><b>Base Oils:</b> The foundation of lubricants, available in various groups (I, II, III, IV) to meet different performance requirements.</li>
                    </ul>
                    <p>
                      Why Choose Yophiel Internationals?
                    </p>
                    <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                      <li><b>Expertise and Experience:</b> Our team has a deep understanding of the lubricants and additives industry, ensuring that we provide the right solutions.</li>
                      <li><b>Quality Products:</b> We source our lubricants and additives from reputable suppliers and adhere to strict quality standards.</li>
                      <li><b>Customized Solutions:</b> We work closely with our clients to develop tailored solutions that meet their unique needs.</li>
                      <li><b>Global Reach:</b> Our extensive network allows us to serve clients worldwide.</li>
                      <li><b>Commitment to Excellence:</b> We strive to provide exceptional service and exceed customer expectations.</li>
                    </ul>
                    <p>
                      Contact us today to learn more about how Yophiel Internationals can help you optimize your equipment performance and reduce maintenance costs.
                    </p>
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
