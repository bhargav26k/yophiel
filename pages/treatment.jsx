import { Fragment } from 'react'; 
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';

const ProjectDetails = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-gradient-primary">
        <Navbar language button={<NextLink title="Contact Us" href="#" className="btn btn-sm btn-light rounded-pill shadow-sm" />} />
      </header>

      <main className="content-wrapper">
        <section className="wrapper bg-gradient-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-22 text-center text-white">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <div className="post-header">
                  <h1 className="display-1 mb-3">Water Treatment Chemicals</h1>
                  <p className="lead px-md-12 px-lg-12 px-xl-15 px-xxl-18" style={{ color: '#000', fontWeight: 'bold' }}>
                    Explore our comprehensive range of high-quality chemicals designed to enhance the efficiency and effectiveness of water treatment processes.
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

                  {/* Insert an image under the main heading */}
                  <figure className="rounded mb-8 mb-md-12 text-center">
                    <img src="img/avatars/Water_treatment.jpeg" alt="Water Treatment" className="rounded" style={{ maxWidth: '100%', height: 'auto' }} />
                  </figure>

                  {/* Content Sections */}
                  <div className="col-md-10 offset-md-1 text-justify">
                    <h2 className="mb-4 text-primary">Coagulants and Flocculants</h2>
                    <p style={{ color: '#333', fontWeight: 'bold' }}>
                      Coagulants and flocculants are essential for removing suspended solids and other impurities from water. Our range includes both organic and inorganic chemicals designed to optimize the settling process and improve water clarity.
                    </p>

                    <h2 className="mb-4 text-primary">Corrosion and Scale Inhibitors</h2>
                    <p style={{ color: '#333', fontWeight: 'bold' }}>
                      Protect your water systems from corrosion and scale buildup with our specially formulated inhibitors. These chemicals help prolong the life of your equipment and maintain optimal operational efficiency.
                    </p>

                    <h2 className="mb-4 text-primary">Biocides and Disinfectants</h2>
                    <p style={{ color: '#333', fontWeight: 'bold' }}>
                      Ensure the microbial safety of your water with our effective biocides and disinfectants. Our products help control bacteria, algae, and other microorganisms, ensuring the water remains safe for use.
                    </p>

                    <h2 className="mb-4 text-primary">pH Adjusters and Alkalinity Control</h2>
                    <p style={{ color: '#333', fontWeight: 'bold' }}>
                      Achieve the perfect pH balance in your water systems with our pH adjusters and alkalinity control chemicals. These products are crucial for maintaining water quality and preventing corrosion.
                    </p>

                    <h2 className="mb-4 text-primary">Defoamers and Antifoaming Agents</h2>
                    <p style={{ color: '#333', fontWeight: 'bold' }}>
                      Manage foam levels in your water systems with our range of defoamers and antifoaming agents. These chemicals help prevent operational issues caused by excessive foam formation.
                    </p>

                    <h2 className="mb-4 text-primary">Oxidants and Reducing Agents</h2>
                    <p style={{ color: '#333', fontWeight: 'bold' }}>
                      Our oxidants and reducing agents are designed to manage and control oxidation-reduction reactions in water treatment processes. They are essential for processes like disinfection, odor control, and color removal.
                    </p>

                    <h2 className="mb-4 text-primary">Specialty Chemicals</h2>
                    <p style={{ color: '#333', fontWeight: 'bold' }}>
                      In addition to the standard range, we offer specialty chemicals tailored to specific water treatment needs. Whether you are dealing with unique water sources or complex treatment processes, we have the right solution for you.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ========== footer section ========== */}
        <Footer8 />
      </main>
    </Fragment>
  );
};

export default ProjectDetails;
