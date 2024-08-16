import { Fragment } from 'react'; // -------- data -------- //

import { serviceList10 } from 'data/service';

const Services20 = () => {
  return <Fragment>
      <div className="row text-center">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h1 className="fs-32 text-uppercase text-gradient gradient-7 mb-3">Business Lines</h1>
         <h5 className="display-4 mb-9 px-xl-09"></h5>
        </div>
      </div>

      <div className="row gy-8 mb-17">
        {serviceList10.map(({
        id,
        title,
        description,
        Icon
      }) => <div className="col-md-6 col-lg-4" key={id}>
            <div className="d-flex flex-row">
              <div>
                <Icon className="icon-svg-sm solid-duo text-grape-fuchsia me-4" />
              </div>
              <div>
                <h3 className="fs-22 mb-1">{title}</h3>
                <p className="mb-0">{description}</p>
              </div>
            </div>
          </div>)}
      </div>
    </Fragment>;
};

export default Services20;