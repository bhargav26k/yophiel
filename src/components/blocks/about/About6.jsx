import Megaphone from 'icons/lineal/Megaphone';
import { Tiles5 } from 'components/elements/tiles';
import ListColumn from 'components/reuseable/ListColumn'; // -------- data -------- //

import { aboutList2 } from 'data/about';

const About6 = () => {
  return <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
      <div className="col-lg-6 position-relative order-lg-2">
        <Tiles5 />
      </div>

      <div className="col-lg-6">
        <Megaphone className="icon-svg-md mb-4" />

        <h2 className="display-4 mb-3">Who Are We?</h2>

        <p className="lead fs-lg">
        Welcome to the global arena of Chemicals and Engineering, where excellence, innovation and performance meet.
        </p>

        <p className="mb-6">
        Yophiel Internationals is an internationally recognized chemical distribution and engineering services company, having been established in the western region of India in 2023.
        </p>

        <ListColumn rowClass="gx-xl-8" list={aboutList2} />
      </div>
    </div>;
};

export default About6;