import Image from 'next/image';
import { Fragment } from 'react';
import { Navbar } from 'components/blocks/navbar';
import { footer11 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';

const ProjectDetails = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* Navbar Section */}
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

      {/* Header Section */}
      <header style={{ backgroundColor: '#f3f8fc', padding: '1rem 0' }}>
        {/* Full-Width Image */}
        <div style={{ marginBottom: '1rem', padding: '0 1rem' }}>
          <Image
            src="/img/cardimg/plasticbss.jpg"
            alt="Yophiel Header"
            layout="responsive"
            width={1920}
            height={200}
            style={{
              borderRadius: '15px',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Brief Information about Yophiel */}
        <div style={{ textAlign: 'center', margin: '1rem auto', maxWidth: '800px' }}>
          <p style={{ fontSize: '1.4rem', color: '#555' }}>
            Yophiel Internationals is a leader in providing specialized plastic and Rubber Chemicals
             that enhance efficiency and productivity. We strive for innovation and
            excellence in every solution we deliver.
          </p>
        </div>
      </header>

      <main style={{ backgroundColor: '#ffffff', color: '#333333' }}>
        {/* Centered Heading and Subpoints */}
        <section style={{ padding: '4rem 2rem', backgroundColor: '#ffffff' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1
              style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                marginBottom: '2rem',
                color: '#1a1a1a',
                textTransform: 'uppercase',
              }}
            >
              PLASTICS & RUBBER
            </h1>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2rem',
                textAlign: 'left',
              }}
            >
               <ul
          style={{
            paddingLeft: '1.5rem',
            listStyleType: 'disc',
            color: '#333',
            fontSize: '1.3rem',
            lineHeight: '1.8',
          }}
        >
          <li><strong>Plasticizers:</strong> Improve the flexibility and workability of plastics.</li>
          <li><strong>Antioxidants:</strong> Prevent degradation of polymers caused by oxidation.</li>
          <li><strong>Flame Retardants:</strong> Enhance the fire resistance of plastic materials.</li>
          <li><strong>UV Stabilizers:</strong> Protect plastics from UV degradation.</li>
        </ul>
        <ul
          style={{
            paddingLeft: '1.5rem',
            listStyleType: 'disc',
            color: '#333',
            fontSize: '1.3rem',
            lineHeight: '1.8',
          }}
        >
          <li><strong>Processing Aids:</strong> Improve the efficiency of plastic processing.</li>
          <li><strong>Antistatic Agents:</strong> Reduce the buildup of static electricity in plastics.</li>
          <li><strong>Polymerization Inhibitors:</strong> Control the rate of polymerization during production.</li>
          <li><strong>Crosslinking Agents:</strong> Create crosslinks in polymers to enhance material strength.</li>
        </ul>
            </div>
          </div>
        </section>

        <section
          style={{
            padding: '4rem 2rem',
            backgroundColor: '#ffffff',
            lineHeight: '1.8',
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          {/* Additional content can go here */}
        </section>
      </main>

      <footer11 />
    </Fragment>
  );
};

export default ProjectDetails;
