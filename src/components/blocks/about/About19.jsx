import { Fragment } from 'react';
import { Tiles11 } from 'components/elements/tiles';
import ListColumn from 'components/reuseable/ListColumn'; // -------- data -------- //

import { aboutList2, aboutList3 } from 'data/about';

const About19 = () => {
  return <Fragment>
      <div className="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mb-10 mb-md-12">
        

        <div className="col-lg-11">
          <h3 className="display-4 mb-2 text-uppercase  mb-5 text-center" style={{background:'linear-gradient(135deg, rgb(0, 166, 228) 0%, rgb(121, 191, 30) 100%)' , color:'white'}}> Welcome to the forefront of Chemicals and Engineering.</h3>
          <p className="mb-6">
<strong style={{background:'linear-gradient(135deg, rgb(0, 166, 228) 0%, rgb(121, 191, 30) 100%)' , color:'white'}}> Yophiel Internationals</strong>   is a global leader in chemical distribution and engineering services, established in India in 2023.
  <br></br>
  Built on ethics and integrity, we aim to lead the industry with excellence.
  <br></br>
  We offer energy management, maintenance contracts, tolling, blending, and raw material procurement.
  <br></br>
  Our expert team and global network provide specialized solutions to boost productivity and profitability.
</p>


          {/* <ListColumn rowClass="gx-xl-8" list={aboutList2} /> */}
        </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 gy-6 mb-14 mb-md-18">
  {aboutList3.map(({ id, title, description }) => (
    <div className="col-lg-4" key={id}>
      <div className="d-flex flex-row">
        <div>
          {/* Apply the gradient to the circle */}
          <div
            className="icon btn btn-circle pe-none me-4"
            style={{
              background: 'linear-gradient(135deg, rgb(0, 166, 228) 0%, rgb(121, 191, 30) 100%)',
              color: 'white', // Ensure the text is visible
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px', // Adjust size as needed
              height: '40px', // Adjust size as needed
              borderRadius: '50%', // Ensure it remains a circle
            }}
          >
            <span className="number fs-18">{id}</span>
          </div>
        </div>

        <div>
          <h4 >{title}</h4>
          <p className="mb-2">{description}</p>
        </div>
      </div>
    </div>
  ))}
</div>
    </Fragment>;
};

export default About19;