import { Fragment } from 'react';

// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';

// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import ProjectDetailsNavigation from 'components/common/ProjectDetailsNavigation';

const ProjectDetails = () => {
  // used for image lightbox
  useLightBox();

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-gradient-primary">
        <Navbar
          language
          button={<NextLink title="Contact Us" href="#" className="btn btn-sm btn-light rounded-pill shadow-sm" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <section className="wrapper bg-gradient-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-22 text-center text-white">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <div className="post-header">
                  <div className="post-category text-white-50 mb-3">
                    <NextLink
                      title="Plastics & Rubber Chemicals"
                      href="#"
                      className="hover text-decoration-none text-white"
                    />
                  </div>
                  <h1 className="display-1 mb-4 font-weight-bold">PLASTICS & RUBBER CHEMICALS</h1>
                  <p className="lead px-md-12 px-lg-12 px-xl-15 px-xxl-18 font-weight-bold text-white-80">
                    Explore our comprehensive range of high-quality chemicals designed to enhance the performance of
                    plastics and rubber products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== content section ========== */}
        <section className="wrapper bg-light wrapper-border">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-12">
                <article className="mt-n21">
                  <div className="row mt-8 mt-md-12">
                    <div className="col-md-10 offset-md-1 text-justify">
                      <h2 className="mb-5 text-center text-uppercase text-primary">Our Product Range</h2>
                      <p className="text-muted mb-4">
                        Our wide array of products cater to the diverse needs of the plastics and rubber industry,
                        ensuring high-quality and reliable performance in every application.
                      </p>
                      <ul className="list-unstyled">
                        <li className="mb-3">
                          <strong style={{ color: '#007bff' }}>POLYMERS (PE/PP/PVC/PC/PET):</strong>
                          <p>Essential raw materials for producing a wide variety of plastic products, ensuring durability and flexibility.</p>
                        </li>
                        <li className="mb-3">
                          <strong style={{ color: '#007bff' }}>DESICCANTS:</strong>
                          <p>Protect products from moisture damage, ensuring longevity and quality during storage and transport.</p>
                        </li>
                        <li className="mb-3">
                          <strong style={{ color: '#007bff' }}>STABILIZERS (LEAD/Ca-Zn/TIN):</strong>
                          <p>Enhance the heat stability and lifespan of plastics, crucial for products exposed to varying temperatures.</p>
                        </li>
                        <li className="mb-3">
                          <strong style={{ color: '#007bff' }}>PLASTICIZERS (DOP/ESBO/CPW):</strong>
                          <p>Improve the flexibility and softness of plastics, making them suitable for various applications.</p>
                        </li>
                        <li className="mb-3">
                          <strong style={{ color: '#007bff' }}>ANTI-BLOCK AGENT:</strong>
                          <p>Prevent layers of plastic films from sticking together, ensuring ease of handling and processing.</p>
                        </li>
                        <li className="mb-3">
                          <strong style={{ color: '#007bff' }}>ANTI-STATIC AGENT:</strong>
                          <p>Reduce static electricity buildup in plastics, improving safety and performance in electronic applications.</p>
                        </li>
                        <li className="mb-3">
                          <strong style={{ color: '#007bff' }}>ANTI-FOG AGENT:</strong>
                          <p>Prevents condensation on plastic surfaces, maintaining clarity and visibility in packaging.</p>
                        </li>
                        <li className="mb-3">
                          <strong style={{ color: '#007bff' }}>IRON OXIDES:</strong>
                          <p>Provide vibrant, durable colors for plastics, used extensively in construction and automotive industries.</p>
                        </li>
                        <li className="mb-3">
                          <strong style={{ color: '#007bff' }}>GLYCOLS:</strong>
                          <p>Act as versatile additives, improving the performance of various plastic and rubber products.</p>
                        </li>
                        <li className="mb-3">
                          <strong style={{ color: '#007bff' }}>IMPACT MODIFIERS:</strong>
                          <p>Enhance the toughness and impact resistance of plastics, crucial for durable applications.</p>
                        </li>
                        <li className="mb-3">
                          <strong style={{ color: '#007bff' }}>PROCESSING AIDS:</strong>
                          <p>Facilitate the manufacturing process, ensuring smooth production and consistent product quality.</p>
                        </li>
                        <li className="mb-3">
                          <strong style={{ color: '#007bff' }}>ACTIVATORS:</strong>
                          <p>Accelerate the curing process in rubber, ensuring efficient and reliable production.</p>
                        </li>
                        <li className="mb-3">
                          <strong style={{ color: '#007bff' }}>VULCANIZING AGENT:</strong>
                          <p>Essential for rubber production, providing strength and elasticity to finished products.</p>
                        </li>
                        <li className="mb-3">
                          <strong style={{ color: '#007bff' }}>ACCELERATORS:</strong>
                          <p>Speed up the rubber curing process, improving production efficiency and product performance.</p>
                        </li>
                        <li className="mb-3">
                          <strong style={{ color: '#007bff' }}>ANTI-DEGRADING AGENT:</strong>
                          <p>Protect rubber products from environmental degradation, extending their lifespan.</p>
                        </li>
                        <li className="mb-3">
                          <strong style={{ color: '#007bff' }}>ANTIOXIDANTS:</strong>
                          <p>Prevent oxidation in plastics and rubber, preserving their quality and performance over time.</p>
                        </li>
                        <li className="mb-3">
                          <strong style={{ color: '#007bff' }}>SULPHUR DONOR:</strong>
                          <p>Used in vulcanization, enhancing the cross-linking process for stronger rubber products.</p>
                        </li>
                        <li className="mb-3">
                          <strong style={{ color: '#007bff' }}>RETARDER:</strong>
                          <p>Control the curing speed of rubber, ensuring precise processing and high-quality results.</p>
                        </li>
                        <li className="mb-3">
                          <strong style={{ color: '#007bff' }}>PEPTIZER:</strong>
                          <p>Improve the processing of rubber, making it easier to handle and shape during manufacturing.</p>
                        </li>
                        <li className="mb-3">
                          <strong style={{ color: '#007bff' }}>CARBON BLACK (ASTM Grade/Speciality Grades):</strong>
                          <p>Enhance the strength, durability, and color of rubber products, widely used in tires and industrial applications.</p>
                        </li>
                        <li className="mb-3">
                          <strong style={{ color: '#007bff' }}>OTHER CHEMICALS & OILS:</strong>
                          <p>A comprehensive range of additives and oils to meet the specific needs of plastics and rubber manufacturing.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
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
