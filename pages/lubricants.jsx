import { useState, Fragment } from 'react';
import Image from 'next/image';

// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import ProjectDetailsNavigation from 'components/common/ProjectDetailsNavigation';
import NextLink from 'components/reuseable/links/NextLink';

// -------- data -------- //
const images = [
  '/img/photos/Greaseimg.jpeg',
  '/img/photos/images.jpeg',
  '/img/photos/Grease oil.png',
  '/img/photos/automotiveoil.png',
];

const ProjectDetails = () => {
  // used for current image index in the slider
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Fragment>
      <PageProgress />
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
        {/* Heading Section */}
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

        {/* Image Slider Section */}
        <section
          style={{
            backgroundColor: '#f9f9f9',
            borderTop: '1px solid #e0e0e0',
            padding: '4rem 0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Image Container */}
          <div
            style={{
              width: '100%',
              maxWidth: '1200px',
              overflow: 'hidden',
              borderRadius: '12px',
              position: 'relative',
            }}
          >
            <figure style={{ margin: '0' }}>
              <Image
                width={1600}
                height={900}
                src={images[currentImage]}
                alt="Lubricant Image"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'opacity 0.5s ease-in-out',
                }}
              />
            </figure>

            {/* Slider Buttons */}
            <button
              onClick={handlePrev}
              style={{
                position: 'absolute',
                top: '50%',
                left: '15px',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              style={{
                position: 'absolute',
                top: '50%',
                right: '15px',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
            >
              &gt;
            </button>
          </div>
        </section>
 {/* Improved Information Section */}
 <section
          style={{
            padding: '4rem 2rem',
            backgroundColor: '#ffffff',
            lineHeight: '1.8',
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                marginBottom: '1.5rem',
                color: '#1a1a1a',
                textAlign: 'center',
                textTransform: 'uppercase',
                borderBottom: '3px solid #007bff',
                display: 'inline-block',
                paddingBottom: '0.5rem',
              }}
            >
              About Our Chemicals
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#555' }}>
              Yophiel Internationals is your trusted partner for high-quality oilfield and refinery chemicals. We specialize in providing innovative solutions that enhance operational efficiency and optimize productivity.
            </p>
            <h3
              style={{
                fontSize: '2rem',
                fontWeight: '600',
                marginTop: '2rem',
                marginBottom: '1rem',
                color: '#333',
              }}
            >
              Our Services
            </h3>
            <p style={{ fontSize: '1rem', marginBottom: '1.5rem', color: '#555' }}>
              <strong>Chemical Distribution:</strong> We offer a wide range of essential chemicals used in oilfield and refinery operations, including:
            </p>
            <ul
              style={{
                paddingLeft: '1.5rem',
                listStyleType: 'disc',
                color: '#333',
                fontSize: '1.1rem',
                lineHeight: '1.8',
              }}
            >
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Biocides:</strong> Prevent microbial growth and contamination.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Corrosion Inhibitors:</strong> Protect equipment from corrosion and extend its lifespan.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Scale Inhibitors:</strong> Prevent mineral scale formation and maintain smooth operations.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Stabilizing Agents:</strong> Ensure the stability of emulsions and suspensions.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Surfactants:</strong> Improve wetting properties and enhance cleaning processes.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Coagulants:</strong> Facilitate the removal of impurities from water.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Emulsifiers:</strong> Promote the formation and stability of emulsions.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Cleaners:</strong> Remove contaminants and maintain equipment cleanliness.
              </li>
            </ul>
          </div>
        </section>
        {/* Navigation Section */}
        <ProjectDetailsNavigation />
      </main>

      <Footer8 />
    </Fragment>
  );
};

export default ProjectDetails;
