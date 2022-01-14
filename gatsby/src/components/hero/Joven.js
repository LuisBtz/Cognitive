import React from 'react'
import styled from 'styled-components';



const Joven = () => {

    return(
        <JovenContenedor id='joven'>

            <div className='joven' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
            </div>
            <div className='container' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                <img src='./images/nosotros/nosotrosText.svg' alt='Consulting network Coach community' />
                <p>El propósito de la firma es proporcionar servicio experto a empresas y personas que están convencidas que el cambio que estamos viviendo nos conduce a un replanteamiento constante de nuestras estrategias, a una reinvención y a un reimaginar un modelo diferente que nos lleve a cumplir nuestros objetivos, acompañados del mejor talento humano.</p>
            </div>
        </JovenContenedor>
    )
}

const JovenContenedor = styled.section`
position: relative;
width: 100%;
display: block;
.container {
    display: flex;
    padding-top: 79px;
    @media (max-width: 680px) {
        flex-direction: column;
        img {
            margin: 0 auto;
            width: 60%;
            padding-right: 0;
            padding-bottom: 50px;
        }
    }
    p {
        font-size: 1.2rem;
    }
}

img {
    width: 50%;
    padding-right: 50px;
}

@media (max-width: 680px) {
            padding-top: 79px;
        }
.joven {
        background-image: url('./images/joven.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        height: 70vh;
        width: 100vw;
        @media (max-width: 680px) {
            height: 350px;
            background-attachment: scroll;
        }
}




`

export default Joven;