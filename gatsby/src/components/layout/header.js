import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"

const Header = () => {

  return (
    <HeadeContainer>
      <div className="container">
        <img src='./logo.svg' alt='Logo Cognitive Achievement' />
        <ul>
          <li><Link to='/'>Nosotros</Link></li>
          <li><Link to='/'>Servicios</Link></li>
          <li><Link to='/'>Synapsis Knowledge</Link></li>
          <li><Link to='/'>Blog</Link></li>
          <li><Link to='/'>Contacto</Link></li>
        </ul>
      </div>   
    </HeadeContainer>
  );
};

const HeadeContainer = styled.nav`
background: var(--purple);
color: white;
padding: 15px 0;
div {
  display: flex;
  justify-content: space-between;
}
ul {
  display: flex;
  align-self: center;
  a {
    color: white;
    
  }
  li {
    margin-left: 25px;
    &:hover {
      text-decoration: underline;
    }
  }
}
img {
  width: 120px;
}
`;

export default Header;
