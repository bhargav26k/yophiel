import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';

// -------- custom hooks and components -------- //
import useLightBox from 'hooks/useLightBox';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import ProjectDetailsNavigation from 'components/common/ProjectDetailsNavigation';
import { Hero18, Hero1, Hero2, Hero3, Hero4, Hero5, Hero6, Hero7, Hero8, Hero9, Hero10, Hero11, Hero12, Hero13, Hero14, Hero15, Hero16, Hero17, Hero19, Hero20, Hero21, Hero22, Hero23, Hero24, Hero25, Hero26, Hero27, Hero28,Hero29, Hero30, Hero31, Hero32, Hero33, Hero34 } from 'components/blocks/hero';


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

  // State for image index
  const [currentImage, setCurrentImage] = useState(0);

  // Automatic image transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  // Handlers for slider buttons
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
        {/* Oil Refinery Section */}
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

        <Hero25 />

        {/* Image Display Section */}
        {/* <section
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

  <div
    style={{
      width: '1000%',
      maxWidth: '1200px', // Increased max width
      overflow: 'hidden',
      borderRadius: '12px',
      position: 'relative',
    }}
  >
    <figure style={{ margin: '0' }}>
      <Image
        width={2000} // Increased image dimensions
        height={900}
        src={images[currentImage]}
        alt="Oil Refinery"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          transition: 'opacity 0.5s ease-in-out',
        }}
      />
    </figure>

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
        width: '50px', // Increased button size
        height: '50px',
        fontSize: '1.5rem', // Increased font size for arrows
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
        width: '50px', // Increased button size
        height: '50px',
        fontSize: '1.5rem', // Increased font size for arrows
        cursor: 'pointer',
      }}
    >
      &gt;
    </button>
  </div>
</section> */}


        {/* Information Section */}
        <section
  style={{
    padding: '4rem 2rem',
    backgroundColor: '#ffffff',
    lineHeight: '1.8',
    fontFamily: "'Roboto', sans-serif",
  }}
>
  <div style={{ maxWidth: '900px', margin: '0 auto' }}>
    {/* Main Heading */}
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
        align:"center"
      }}
    >
      About Our Chemicals
    </h2>

    {/* Introductory Paragraph */}
    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#555' }}>
      Yophiel Internationals is your trusted partner for high-quality oilfield
      and refinery chemicals. We specialize in providing innovative solutions
      that enhance operational efficiency and optimize productivity.
    </p>

    {/* Subheading */}
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

    {/* Services Description */}
    <p style={{ fontSize: '1rem', marginBottom: '1.5rem', color: '#555' }}>
      <strong>Chemical Distribution:</strong> We offer a wide range of
      essential chemicals used in oilfield and refinery operations, including:
    </p>

    {/* List of Services */}
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
        <strong>Corrosion Inhibitors:</strong> Protect equipment from
        corrosion and extend its lifespan.
      </li>
      <li style={{ marginBottom: '0.5rem' }}>
        <strong>Scale Inhibitors:</strong> Prevent mineral scale formation and
        maintain smooth operations.
      </li>
      <li style={{ marginBottom: '0.5rem' }}>
        <strong>Stabilizing Agents:</strong> Ensure the stability of emulsions
        and suspensions.
      </li>
      <li style={{ marginBottom: '0.5rem' }}>
        <strong>Surfactants:</strong> Improve wetting properties and enhance
        cleaning processes.
      </li>
      <li style={{ marginBottom: '0.5rem' }}>
        <strong>Coagulants:</strong> Facilitate the removal of impurities from
        water.
      </li>
      <li style={{ marginBottom: '0.5rem' }}>
        <strong>Emulsifiers:</strong> Promote the formation and stability of
        emulsions.
      </li>
      <li style={{ marginBottom: '0.5rem' }}>
        <strong>Cleaners:</strong> Remove contaminants and maintain equipment
        cleanliness.
      </li>
    </ul>
  </div>
</section>


        {/* Navigation Section */}
        {/* <ProjectDetailsNavigation /> */}
      </main>

      {/* Footer Section */}
      <Footer8 />
    </Fragment>
  );
};

export default ProjectDetails;
