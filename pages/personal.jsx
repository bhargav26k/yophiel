import { Fragment } from 'react';

// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';

// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import ProjectDetailsNavigation from 'components/common/ProjectDetailsNavigation';

const ProjectDetails = () => {
    // used for image lightbox
    useLightBox();

    return (
        <Fragment>
            <PageProgress />

            {/* ========== header section ========== */}
            <header className="wrapper bg-soft-primary">
                <Navbar language button={<NextLink title="Contact Us" href="#" className="btn btn-sm btn-primary rounded-pill shadow-sm" />} />
            </header>

            <main className="content-wrapper">
                <section className="wrapper bg-soft-primary">
                    <div className="container pt-10 pb-19 pt-md-14 pb-md-22 text-center">
                        <div className="row">
                            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                                <div className="post-header">
                                    <div className="post-category text-line">
                                        <NextLink title="Personal & Home Care" href="#" className="hover text-primary" />
                                    </div>

                                    <h1 className="display-1 mb-4" style={{ color: '#2C3E50' }}>PERSONAL & HOME CARE</h1>
                                    <p className="lead px-md-12 px-lg-12 px-xl-15 px-xxl-18" style={{ color: '#555' }}>
                                        Explore our extensive range of high-quality products designed for personal and home care.
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

                                <div className="row mt-8 mt-md-12">
                                    <div className="col-md-10 offset-md-1 text-justify">
                                        <h2 className="mb-6 text-center text-primary" style={{ fontWeight: 'bold' }}>Our Product Range</h2>

                                        <p className="mb-6" style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                            Our Personal & Home Care products include a wide variety of essential ingredients and materials
                                            tailored to meet the highest standards of quality and safety. Below is an overview of the key
                                            categories:
                                        </p>

                                        <h3 className="text-primary" style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>SURFACTANTS</h3>
                                        <p className="mb-6" style={{ color: '#444', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                            Surfactants are the backbone of many cleaning and personal care products. They lower surface tension,
                                            allowing for effective cleansing and emulsification. Our range includes anionic, cationic, nonionic, and
                                            amphoteric surfactants, suitable for various applications including shampoos, body washes, and household
                                            cleaners.
                                        </p>

                                        <h3 className="text-primary" style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>FOAM BOOSTER</h3>
                                        <p className="mb-6" style={{ color: '#444', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                            Enhance the foaming properties of your products with our foam boosters. They work in conjunction with
                                            surfactants to increase the volume and stability of foam, making them ideal for personal care products like
                                            facial cleansers and shaving creams.
                                        </p>

                                        <h3 className="text-primary" style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>FATTY ESTERS</h3>
                                        <p className="mb-6" style={{ color: '#444', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                            Fatty esters provide emollient properties, making them perfect for skin care products. They offer a silky
                                            texture and improve the spreadability of formulations, making them a key ingredient in lotions, creams, and
                                            conditioners.
                                        </p>

                                        <h3 className="text-primary" style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>PARAFFIN OILS</h3>
                                        <p className="mb-6" style={{ color: '#444', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                            Paraffin oils are widely used in skin care for their moisturizing properties. They form a protective barrier
                                            on the skin, locking in moisture and providing long-lasting hydration. They are also used in hair care to
                                            add shine and softness.
                                        </p>

                                        <h3 className="text-primary" style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>FATTY ALCOHOLS</h3>
                                        <p className="mb-6" style={{ color: '#444', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                            Fatty alcohols act as emulsifiers and thickeners in personal care formulations. They help to stabilize
                                            emulsions and provide a creamy consistency, making them essential in creams, lotions, and hair conditioners.
                                        </p>

                                        <h3 className="text-primary" style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>EMULSIFIERS</h3>
                                        <p className="mb-6" style={{ color: '#444', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                            Emulsifiers are key to creating stable blends of oil and water in your formulations. Our selection of
                                            natural and synthetic emulsifiers ensures that your products remain smooth and homogeneous, whether they
                                            are creams, lotions, or serums.
                                        </p>

                                        <h3 className="text-primary" style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>BIOCIDES & PRESERVATIVES</h3>
                                        <p className="mb-6" style={{ color: '#444', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                            Ensure the safety and longevity of your products with our biocides and preservatives. They protect against
                                            microbial growth, ensuring that your formulations remain safe and effective over time, crucial for products
                                            with natural ingredients.
                                        </p>

                                        <h3 className="text-primary" style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>PEARLIZERS</h3>
                                        <p className="mb-6" style={{ color: '#444', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                            Add a luxurious pearl-like sheen to your products with our pearlizers. They are perfect for shampoos,
                                            body washes, and other personal care items where a visually appealing finish is desired.
                                        </p>

                                        <h3 className="text-primary" style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>FATTY ACIDS</h3>
                                        <p className="mb-6" style={{ color: '#444', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                            Fatty acids are essential for creating rich textures and providing emollient properties in skin and hair
                                            care products. Our range includes various fatty acids suitable for different formulations, from lotions to
                                            shampoos.
                                        </p>

                                        <h3 className="text-primary" style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>PETROLEUM JELLY</h3>
                                        <p className="mb-6" style={{ color: '#444', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                            Petroleum jelly is a versatile ingredient used for its protective and moisturizing properties. It is ideal
                                            for soothing dry skin, healing minor wounds, and creating a barrier against environmental factors.
                                        </p>

                                        <h3 className="text-primary" style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>FRAGRANCES</h3>
                                        <p className="mb-6" style={{ color: '#444', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                            Our fragrances are designed to add a unique scent to your personal care products, enhancing the user
                                            experience. We offer a wide range of scents that can be customized to suit your brand identity.
                                        </p>

                                        <h3 className="text-primary" style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>COLORANTS</h3>
                                        <p className="mb-6" style={{ color: '#444', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                            Add a splash of color to your products with our high-quality colorants. Whether you're looking for
                                            vibrant hues or subtle tints, our colorants are safe, stable, and perfect for use in cosmetics, soaps, and
                                            hair care products.
                                        </p>

                                        <h3 className="text-primary" style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>And Much More...</h3>
                                        <p className="mb-6" style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                            Our catalog extends beyond these categories, offering a wide array of ingredients and materials for
                                            personal and home care. Whatever your formulation needs, we have the right solutions to help you create
                                            exceptional products.
                                        </p>
                                    </div>
                                </div>
                            </div>
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
