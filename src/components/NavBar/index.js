/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import Link from 'next/link';
import appData from '@/data/app.json';
import { getSiblings } from '@/scripts';

export function NavBar({ navbarRef, logoRef, logoClass }) {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  // used to toggle the dropdown menu
  // shows siblings via the 'show' class
  // removes them if they are present
  const handleDropdown = e => {
    getSiblings(e.target.parentElement)
      .filter(item => item.classList.contains('show'))
      .forEach(item => {
        item.classList.remove('show');
        if (item.childNodes[0]) {
          item.childNodes[0].setAttribute('aria-expanded', false);
        }
        if (item.childNodes[1]) {
          item.childNodes[1].classList.remove('show');
        }
      });
    e.target.parentElement.classList.toggle('show');
    e.target.setAttribute('aria-expanded', true);
    e.target.parentElement.childNodes[1].classList.toggle('show');
  };

  const handleMobileDropdown = () => {
    document
      .getElementById('navbarSupportedContent')
      .classList.toggle('show-with-trans');
  };

  return (
    <nav
      className="navbar change navbar-expand-lg bg-stone-600"
      ref={navbarRef}
    >
      <div className="container">
        <Link href="/demos">
          <button type="button" className={`logo ${logoClass && logoClass}`}>
            <img src={appData.lightLogo} alt="logo" ref={logoRef} />
          </button>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          onClick={handleMobileDropdown}
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars" />
          </span>
        </button>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            {/* HOME DROP DOWN */}
            <li
              className="nav-item dropdown"
              onClick={handleDropdown}
              onKeyPress={handleDropdown}
            >
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                HOME
              </span>
              <div className="dropdown-menu">
                <Link href="/home7">
                  <a className="dropdown-item">Home Default</a>
                </Link>
                <Link href="/home6">
                  <a className="dropdown-item">Interior Agency</a>
                </Link>
                <Link href="/home5">
                  <a className="dropdown-item">Creative Arch</a>
                </Link>
                <Link href="/home4">
                  <a className="dropdown-item">Architecture Studio</a>
                </Link>
                <Link href="/home1">
                  <a className="dropdown-item">Home Light</a>
                </Link>
                <Link href="/home2">
                  <a className="dropdown-item">Interior Light</a>
                </Link>
                <Link href="/home3">
                  <a className="dropdown-item">Architecture Light</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li
              className="nav-item dropdown"
              onKeyPress={handleDropdown}
              onClick={handleDropdown}
            >
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Portfolio
              </span>
              <div className="dropdown-menu">
                <Link href="/work1">
                  <a className="dropdown-item">Two Column</a>
                </Link>
                <Link href="/work2">
                  <a className="dropdown-item">Three Column</a>
                </Link>
                <Link href="/work3">
                  <a className="dropdown-item">Four Column</a>
                </Link>
                <Link href="/project-details">
                  <a className="dropdown-item">Single Project</a>
                </Link>
              </div>
            </li>
            <li
              className="nav-item dropdown"
              onKeyPress={handleDropdown}
              onClick={handleDropdown}
            >
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </span>
              <div className="dropdown-menu">
                <Link href="/blogs">
                  <a className="dropdown-item">Blogs</a>
                </Link>
                <Link href="/blog-details">
                  <a className="dropdown-item">Post Details</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
