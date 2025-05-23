import dynamic from 'next/dynamic';

const Plyr = dynamic(() => import('plyr-react'), { ssr: false });

import Image from 'next/image';
import { Fragment } from 'react'; // -------- custom component -------- //

import { Footer11 } from 'components/blocks/footer';
import { Navbar } from 'components/blocks/navbar';
import { BlogCard2, BlogCard3 } from 'components/reuseable/blog-cards';
import Carousel from 'components/reuseable/Carousel';
import Pagination from 'components/reuseable/Pagination';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink'; // -------- data -------- //

const blogs = [{
  id: 1,
  link: '#',
  category: 'Coding',
  image: '/img/photos/b4.jpg',
  title: 'Ligula tristique quis risus',
  description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
}, {
  id: 2,
  link: '#',
  category: 'Workspace',
  image: '/img/photos/b5.jpg',
  title: 'Nullam id dolor elit id nibh',
  description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
}, {
  id: 3,
  link: '#',
  category: 'Meeting',
  image: '/img/photos/b6.jpg',
  title: 'Ultricies fusce porta elit',
  description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
}, {
  id: 4,
  link: '#',
  category: 'Business Tips',
  image: '/img/photos/b7.jpg',
  title: 'Morbi leo risus porta eget',
  description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
}];

const BlogOne = () => {
  return <Fragment>
      <PageProgress />

      {
      /* ========== header section ========== */
    }
      <header className="wrapper bg-soft-primary">
        <Navbar search button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />} />
      </header>

      <main className="content-wrapper">
        {
        /* ========== title section ========== */
      }
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
            <div className="row">
              <div className="col-md-7 col-lg-6 col-xl-5 mx-auto">
                <h1 className="display-1 mb-3">Business News</h1>
                <p className="lead px-lg-5 px-xxl-8">
                  Welcome to our journal. Here you can find the latest company news and business articles.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="blog classic-view mt-n17">
                  <BlogCard2 link="#" category="TEAMWORK" title="Amet Dolor Bibendum Parturient Cursus" description="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur." cardTop={<figure className="card-img-top overlay overlay-1 hover-scale">
                        <a className="link-dark" href="#">
                          <Image width={960} height={600} src="/img/photos/b1.jpg" alt="blog" style={{
                      width: '100%',
                      height: 'auto'
                    }} />
                          <span className="bg" />
                        </a>

                        <figcaption>
                          <h5 className="from-top mb-0">Read More</h5>
                        </figcaption>
                      </figure>} />

                  <BlogCard2 link="#" category="IDEAS" title="Fringilla Ligula Pharetra Amet" description="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur." cardTop={<div className="post-slider card-img-top">
                        <div className="swiper-container dots-over">
                          <Carousel grabCursor spaceBetween={5} slidesPerView={1}>
                            <Image width={960} height={600} src="/img/photos/b2.jpg" alt="" style={{
                        width: '100%',
                        height: 'auto'
                      }} />
                            <Image width={960} height={600} src="/img/photos/b3.jpg" alt="" style={{
                        width: '100%',
                        height: 'auto'
                      }} />
                          </Carousel>
                        </div>
                      </div>} />

                  <BlogCard2 link="#" category="WORKSPACE" title="Consectetur Bibendum Sollicitudin Vulputate" description="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur." cardTop={<div className="card-img-top">
                        <Plyr options={{
                    loadSprite: true,
                    clickToPlay: true
                  }} source={{
                    type: 'video',
                    sources: [{
                      src: 'j_Y2Gwaj7Gs',
                      provider: 'youtube'
                    }]
                  }} />
                      </div>} />
                </div>

                <div className="blog grid grid-view">
                  <div className="row isotope gx-md-8 gy-8 mb-8">
                    {blogs.map(item => <BlogCard3 {...item} key={item.id} />)}
                  </div>
                </div>

                {
                /* ========== pagination section ========== */
              }
                <Pagination className="justify-content-start" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {
      /* ========== footer section ========== */
    }
      <Footer11 />
    </Fragment>;
};

export default BlogOne;