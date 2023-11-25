// NavBar.js
import React, { useState, Suspense, lazy } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const NavContainer = styled.nav`
  background: #2c3e50;
  padding: 10px;
  margin-bottom: 20px;
  animation: ${fadeIn} 1s ease;
  display: flex;
  justify-content: center;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 20px;
  position: relative;

  &:hover {
    &:before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(52, 152, 219, 0.5);
      z-index: -1;
    }
    &:after {
      content: attr(data-hover);
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 24px;
      font-weight: bold;
      z-index: 1;
    }
  }
`;

const NavLink = styled(Link)`
  color: #ecf0f1;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

const LinkItem = styled(Link)`
  color: #ecf0f1;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

// Lazy-loaded components
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Services = lazy(() => import('./Services'));
const Portfolio = lazy(() => import('./Portfolio'));
const Contact = lazy(() => import('./Contact'));
const Careers = lazy(() => import('./Careers'));
const CustomerForm = lazy(() => import('./CustomerForm'));

const pages = {
  Home,
  About,
  Services,
  Portfolio,
  Contact,
  Careers,
  'Customer Form': CustomerForm,
};

const NavBar = () => {
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewContent, setPreviewContent] = useState(null);
  
    const { page } = useParams();
  
    const handleLinkHover = (content) => {
      setPreviewContent(content);
      setPreviewVisible(true);
    };
  
    const handleLinkLeave = () => {
      setPreviewVisible(false);
    };
      return (
        <NavContainer>
          <NavList>
            {Object.keys(pages).map((pageName) => (
              <NavItem key={pageName} data-hover={pageName}>
                <NavLink
                  to={`/${pageName.replace(/\s+/g, '')}`}
                  onMouseEnter={() => handleLinkHover(pageName)}
                  onMouseLeave={handleLinkLeave}
                >
                  {pageName}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
          {previewVisible && (
            <Suspense fallback={<div>Loading...</div>}>
              {pages[page] && React.createElement(pages[page])}
            </Suspense>
          )}
        </NavContainer>
      );
    };
    

export default NavBar;
