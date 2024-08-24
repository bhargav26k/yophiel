import Link from 'next/link';
import { Fragment, useRef } from 'react'; // -------- custom hook -------- //

import useSticky from 'hooks/useSticky';
import useNestedDropdown from 'hooks/useNestedDropdown'; // -------- custom component -------- //

import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import ListItemLink from 'components/reuseable/links/ListItemLink';
import DropdownToggleLink from 'components/reuseable/links/DropdownToggleLink'; // -------- partial header component -------- //

import Info from './partials/Info';
import Search from './partials/Search';
import Social from './partials/Social';
import Signin from './partials/Signin';
import Signup from './partials/Signup';
import Language from './partials/Language';
import MiniCart from './partials/MiniCart'; // -------- data -------- //

import { demos, pages, blogsNavigation, blocksNavigation, projectsNavigation, documentionNavigation, aboutus } from 'data/navigation'; // ===================================================================
import IconLink from 'components/reuseable/links/IconLink';
import NavLinko from 'components/reuseable/links/NavLink';

// ===================================================================
const Navbar = props => {
  const {
    navClassName,
    info,
    search,
    social,
    language,
    button,
    cart,
    fancy,
    navOtherClass,
    stickyBox,
    logoAlt
  } = props;
  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef(null); // dynamically render the logo

  const logo = sticky ? 'logo-dark' : logoAlt ?? 'logo-dark'; // dynamically added navbar classname

  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed'; // render inner nav item links

  const renderLinks = links => {
    return links.map(item => <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />);
  }; // all main header contents


  const headerContent = <Fragment>
      <div className="navbar-brand w-100">
        <NextLink href="/" title={<img alt="logo" src={`/img/yophiel-logo.png`} />} />
      </div>

      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none">
          <h3 className="text-white fs-30 mb-0">Yophiel</h3>
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav">
            {
            /* ===================== About us nav item ===================== */
          }
          <li className="nav-item dropdown">
              <DropdownToggleLink title="About Us" className="nav-link dropdown-toggle" />

              <ul className="dropdown-menu">
                <ListItemLink href="/whoweare" title="Who we are" linkClassName="dropdown-item" />
                <ListItemLink href="/ourvalues" title="Our Values" linkClassName="dropdown-item" />
              </ul>
            </li>

            {
            /*  ===================== business Lines nav item  ===================== */
          }
            <li className="nav-item dropdown">
              <DropdownToggleLink title="Business Lines" className="nav-link dropdown-toggle" />

              <ul className="dropdown-menu">
                <ListItemLink href="/oilfield" title="Oilfield & Refinery Chemicals" linkClassName="dropdown-item" />
                <ListItemLink href="/lubricants" title="Lubricants & Grease Additives" linkClassName="dropdown-item" />
                <ListItemLink href="/personal" title="Personal & Home Care" linkClassName="dropdown-item" />
                <ListItemLink href="/plastics" title="Plastics & Rubber" linkClassName="dropdown-item" />
                <ListItemLink href="/treatment" title="Water Treatment Chemicals" linkClassName="dropdown-item" />
              </ul>
            </li>

            {
            /* ===================== Resources nav item  ===================== */
          }
          <li className="nav-item dropdown">
              <DropdownToggleLink title="Resources" className="nav-link dropdown-toggle" />

              <ul className="dropdown-menu">
                <ListItemLink href="/engneering" title="Engineering Services" linkClassName="dropdown-item" />
                <ListItemLink href="/procurement" title="Procurement" linkClassName="dropdown-item" />
                <ListItemLink href="/contracts" title="Maintenance Contracts" linkClassName="dropdown-item" />
                
              </ul>
            </li>

            {
            /* ===================== careers nav item ===================== */
          }
            <li className="nav-item dropdown">
              <NavLinko title="Careers" href="/career-2" className="nav-link" />
            </li>

            {
            /* ===================== contact nav item ===================== */
          }
            <li className="nav-item dropdown dropdown-mega">
              <NavLinko title="Contact Us" href="/contact-2" className="nav-link" />
              
            </li>

            {
            /* ===================== documentation nav item ===================== */
          }
            {/* <li className="nav-item dropdown dropdown-mega">
              <DropdownToggleLink title="Bak" className="nav-link dropdown-toggle" />
              <ul className="dropdown-menu mega-menu">
                <li className="mega-menu-content">
                  <div className="row gx-0 gx-lg-3">
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Usage</h6>
                      <ul className="list-unstyled cc-2 pb-lg-1">{renderLinks(documentionNavigation.usage)}</ul>

                      <h6 className="dropdown-header mt-lg-6">Styleguide</h6>
                      <ul className="list-unstyled cc-2">{renderLinks(documentionNavigation.styleguide)}</ul>
                    </div>

                    <div className="col-lg-8">
                      <h6 className="dropdown-header">Elements</h6>
                      <ul className="list-unstyled cc-3">{renderLinks(documentionNavigation.elements)}</ul>
                    </div>
                  </div>
                </li>
              </ul>
            </li> */}
          </ul>

          {
          /* ============= show contact info in the small device sidebar ============= */
        }
          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink title="info@yophiel.net" className="link-inverse" href="mailto:info@yophiel.net" />
              <br />
              <NextLink href="tel:9637422525" title="+91-9637422525" />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {
      /* ============= right side header content ============= */
    }
      <div className={navOtherClass}>
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {
          /* ============= language dropdwown ============= */
        }
          

          {
          /* ============= info button ============= */
        }
          {info && <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info">
                <i className="uil uil-info-circle" />
              </a>
            </li>}

          {
          /* ============= search icon button ============= */
        }
          {search && <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search">
                <i className="uil uil-search" />
              </a>
            </li>}

          {
          /* ============= contact button ============= */
        }
          

          {
          /* ============= shopping cart button ============= */
        }


          {
          /* ============= social icons link ============= */
        }


          {
          /* ============= humburger button for small device ============= */
        }
          <li className="nav-item d-lg-none">
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav" className="hamburger offcanvas-nav-btn">
              <span />
            </button>
          </li>
        </ul>
      </div>
    </Fragment>;
  return <Fragment>
      {stickyBox && <div style={{
      paddingTop: sticky ? navbarRef.current?.clientHeight : 0
    }} />}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
              {headerContent}
            </div>
          </div> : <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>}
      </nav>

      {
      /* ============= signin modal ============= */
    }
      <Signin />

      {
      /* ============= signup modal ============= */
    }
      <Signup />

      {
      /* ============= info sidebar ============= */
    }
      {info && <Info />}

      {
      /* ============= show search box ============= */
    }
      {search && <Search />}

      {
      /* ============= cart sidebar ============= */
    }
      {cart && <MiniCart />}
    </Fragment>;
}; // set deafult Props


Navbar.defaultProps = {
  cart: false,
  info: false,
  social: false,
  search: false,
  language: false,
  stickyBox: true,
  navOtherClass: 'navbar-other w-100 d-flex ms-auto',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};
export default Navbar;