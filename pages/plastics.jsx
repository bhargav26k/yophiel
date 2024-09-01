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
  '/img/avatars/rubber_1.jpg',
  '/img/avatars/rubber_2.jpg',
  '/img/avatars/rubber_3.jpg',
  '/img/avatars/rubber_4.webp',
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
                  Plastic and Rubber Chemicals
                </h1>
                <p style={{ fontSize: '1.2rem', padding: '0 2rem' }}>
                  Discover our extensive range of chemicals essential for plastic and rubber manufacturing. Our products are designed to enhance the performance, durability, and quality of your end products.
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
                <FigureImage width={2400} height={1640} src="/img/avatars/rubber_5.webp" className="rounded mb-8 mb-md-12" />

                <ProjectDetailsContent title="About YOPHIEL Plastic & Rubber Chemicals" />

                <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                  {images.map((item) => (
                    <div style={{ flex: '1 1 calc(50% - 1.5rem)', boxSizing: 'border-box' }} key={item}>
                      <figure style={{ overflow: 'hidden', borderRadius: '8px', cursor: 'pointer' }}>
                        <a href={item} data-glightbox data-gallery="project-1">
                          <Image
                            width={960}
                            height={640}
                            src={item}
                            alt="Plastic and Rubber Chemicals"
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
                      Plastic and Rubber Chemicals Overview
                    </h2>
                    <p>
                      Yophiel Internationals specializes in providing high-performance chemicals for the plastic and rubber industries. Our offerings are tailored to meet the rigorous demands of modern manufacturing processes, improving product quality, functionality, and safety.
                    </p>

                    <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                      <li><strong>POLYMERS (PE/PP/PVC/PC/PET):</strong> Essential materials for creating various plastic products with desired properties and performance characteristics.</li>
                      <li><strong>DESICCANTS:</strong> Used to absorb moisture, preventing product degradation and maintaining quality during storage and use.</li>
                      <li><strong>STABILIZERS (LEAD/Ca-Zn/TIN):</strong> Additives that enhance the stability of plastic products against heat, light, and oxidation.</li>
                      <li><strong>PLASTICIZERS (DOP/ESBO/CPW):</strong> Improve the flexibility and processability of plastics, making them easier to work with and enhancing their end-use performance.</li>
                      <li><strong>ANTI-BLOCK AGENT:</strong> Prevents the sticking of plastic films and sheets, ensuring smooth processing and handling.</li>
                      <li><strong>ANTI-STATIC AGENT:</strong> Reduces static electricity buildup, improving the handling and performance of plastic products.</li>
                      <li><strong>ANTI-FOG AGENT:</strong> Enhances the clarity of plastic films by reducing fogging and condensation, ideal for packaging and visibility.</li>
                      <li><strong>IRON OXIDES:</strong> Provide color and opacity to plastic products, including pigments for a wide range of applications.</li>
                      <li><strong>GLYCOLS:</strong> Used as solvents, plasticizers, and performance enhancers in various formulations.</li>
                      <li><strong>IMPACT MODIFIERS:</strong> Improve the toughness and impact resistance of plastics, making them suitable for demanding applications.</li>
                      <li><strong>PROCESSING AIDS:</strong> Facilitate easier processing of plastics, reducing energy consumption and enhancing product quality.</li>
                      <li><strong>ACTIVATORS:</strong> Enhance the performance of other additives and accelerators, improving the overall efficiency of the manufacturing process.</li>
                      <li><strong>VULCANIZING AGENT:</strong> Key component in the rubber industry, promoting the cross-linking of rubber molecules to enhance durability and elasticity.</li>
                      <li><strong>ACCELERATORS:</strong> Speed up the vulcanization process, reducing manufacturing time and improving the properties of rubber products.</li>
                      <li><strong>ANTI-DEGRADING AGENT:</strong> Protects against the degradation of rubber and plastic products caused by environmental factors.</li>
                      <li><strong>ANTIOXIDANTS:</strong> Prevent oxidative damage in rubber and plastic products, extending their lifespan and maintaining performance.</li>
                      <li><strong>SULPHUR DONOR:</strong> Facilitates sulfur vulcanization in rubber, enhancing the strength and elasticity of the final product.</li>
                      <li><strong>RETARDER:</strong> Controls the rate of vulcanization, allowing for better processing and handling of rubber products.</li>
                      <li><strong>PEPTIZER:</strong> Improves the processability of rubber by breaking down large molecules into smaller, more manageable ones.</li>
                      <li><strong>CARBON BLACK (ASTM Grade/Speciality Grades):</strong> Provides reinforcement, color, and UV protection in rubber and plastic products.</li>
                      <li><strong>OTHER CHEMICALS & OILS:</strong> A diverse range of additional chemicals and oils to meet specific needs and enhance product performance.</li>
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
