import React, { useState } from 'react';
import styled from "styled-components";
import scrollTo from 'gatsby-plugin-smoothscroll';

const Header = () => {
  const [menu, showMenu] = useState(false);

  return (
    <HeadeContainer>
      <div className="container">
        <button onClick={() => scrollTo('#hero')}><img src='./logo.svg' alt='Logo Cognitive Achievement' /></button>
        <ul className={menu ? 'show' : 'hide'}>
          <li><button  onClick={() => scrollTo('#nosotros')}>Nosotros</button ></li>
          <li className='hero'><button  onClick={() => scrollTo('#hero')}>Video de Servicio</button ></li>
          <li className='heroMov'><button  onClick={() => scrollTo('#heroMov')}>Video de Servicio</button ></li>
          <li><button  onClick={() => scrollTo('#blog')}>Synapsis Knowledge</button ></li>
          <li><button  onClick={() => scrollTo('#contact')}>Contacto</button ></li>
        </ul>
        <button className={menu ? 'ham click' : 'ham'} onClick={() => showMenu(!menu)}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
        </button>
      </div> 
      
    </HeadeContainer>
  );
};

const HeadeContainer = styled.nav`
background: var(--purple);
color: white;
padding: 15px 0;
position: fixed;
z-index: 2;
width: 100vw;
.hero {
  @media (max-width: 680px) {
    display: none;
  }
}
.heroMov {
  display: none;
  @media (max-width: 680px) {
    display: block;
  }
}
div {
  display: flex;
  justify-content: space-between;
  position: relative;
  @media (max-width: 680px) {
    display: block;
  }
}
button {
    color: white;
    text-align: center;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
ul {
  display: flex;
  align-self: center;
  position: relative;
  @media (max-width: 680px) {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            padding-top: 50px;
            padding-bottom: 50px;
            padding-right: 50px;
            li {
                text-align: right;
                padding-bottom: 10px;
                &::before {
                  display: none;
                }
                button {
                    font-size: 1.5rem;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
  }

  li {
    margin-left: 15px;
    margin-right: 15px;
    text-align: center;
    position: relative;
    &::before {
        content: ""; 
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -10px;
        left: 0;
        background-color: white;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s; 
        transition: all 0.3s ease-in-out 0s; 
    }   

    &:hover {
        color: white;

        &::before {
            visibility: visible;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
        }   
    } 
  }
}

ul.show {
  @media (max-width: 680px) {
    display: block;
  }
  
}

ul.hide {
  @media (max-width: 680px) {
    display: none;
  }
}
img {
  width: 120px;
}

  .click {
            .line {
                &:nth-child(2) {
                    opacity: 0;
                }
                &:nth-child(1) {
                    position: relative;
                    top: 10px;
                    transform: rotate(45deg);
                }
                &:nth-child(3) {
                    position: relative;
                    bottom: 10px;
                    transform: rotate(-45deg);
                }
            }
        }

.ham {
            display: none;
            @media (max-width: 680px) {
                display: block;
                width: 30px;
                height: 30px;
                position: absolute;
                top: 15px;
                right: 25px;
                background: none;
                border: none;
                outline: none;
                .line {
                    width: 100%;
                    height: 1px;
                    margin-bottom: 9px;
                    background-color: white;
                    transition: all 250ms ease-in-out;
                }
            }
        }
`;

export default Header;
