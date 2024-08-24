import { Fragment } from 'react';
import { Tiles11 } from 'components/elements/tiles';
import ListColumn from 'components/reuseable/ListColumn'; // -------- data -------- //

import { aboutList2, aboutList3 } from 'data/about';

const About19 = () => {
  return <Fragment>
      <div className="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mb-10 mb-md-12">
        <div className="col-lg-6">
          <Tiles11 />
        </div>

        <div className="col-lg-6">
          <h2 className="fs-16 text-uppercase text-gradient gradient-1 mb-3">Who Are We?</h2>
          <h3 className="display-4 mb-4"> Welcome from the global arena of Chemicals and Engineering, where excellence, innovation and performance meet.</h3>
          <p className="mb-6">
          Yophiel Internationals is an internationally recognized chemical distribution and engineering services company, having been established in the western region of India in 2023.
Ethics and integrity are the cornerstones upon which this firm was built, and we will endeavour to lead the industry in everything we do.
Our innovative and value-added services include energy management, annual maintenance contracts, tolling and blending, and the procurement of raw materials.
Our strong technical team and allied suppliers within the industry, enables us to strive for our customers and offer a wide range of performance oriented products.
Our wide global network, in-depth knowledge of the industry, and extensive range of products enable us to support our clients with specialized solutions that maximize productivity and profitability.

          </p>

          <ListColumn rowClass="gx-xl-8" list={aboutList2} />
        </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 gy-6 mb-14 mb-md-18">
        {aboutList3.map(({
        id,
        title,
        description
      }) => <div className="col-lg-4" key={id}>
            <div className="d-flex flex-row">
              <div>
                <div className="icon btn btn-circle pe-none btn-soft-primary me-4">
                  <span className="number fs-18">{id}</span>
                </div>
              </div>

              <div>
                <h4>{title}</h4>
                <p className="mb-2">{description}</p>
              </div>
            </div>
          </div>)}
      </div>
    </Fragment>;
};

export default About19;