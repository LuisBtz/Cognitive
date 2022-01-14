import React from 'react'
import styled from 'styled-components';



const Nosotros = () => {

    return(
        <NosotrosContenedor id='nosotros' >

         <div className='hombre' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800"></div>
         <div className='container h1'>
            <h1 data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">Brindamos una mirada imparcial en apoyo a la toma de decisiones</h1>
         </div>
         <div className='two'>
            <div className='item' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                <img src='./images/nosotros/imagen1.jpg' alt='Mujer viendo pizarrón' />
                <p>Aportamos ideas innovadoras, Consejo experto y participamos en proyectos estratégicos.</p>
            </div>
            <div className='item' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                <img src='./images/nosotros/imagen2.jpg' alt='Mujer viendo pizarrón' />
                <p>Co-creamos ideas de acción y solución en equipos de trabajo con talento interno, asegurando el éxito de los mismos.</p>
            </div>
         </div>
        </NosotrosContenedor>
    )
}

const NosotrosContenedor = styled.section`
position: relative;
width: 100%;
padding-top: 50px;
.container {
    display: flex;
    padding-bottom: 50px;
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
.container.h1  {
    margin: 0 auto;
    text-align: center;
    display: block;
    h1 {
        font-family: var(--bold);
        font-weight: normal;
        font-size: 2rem;
        padding-top: 50px;
        @media (max-width: 680px) {
            font-size: 1.5rem;
        }
    }
}

img {
    width: 50%;
    padding-right: 50px;
}

.hombre {
        background-image: url('./images/nosotros/hombre.jpg');
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

.two {
    display: flex;
    @media (max-width: 680px) {
        flex-direction: column;
        .item {
            width: 100% !important;
            margin-bottom: 50px;
            img {
                filter: none !important;
            }
        }
    }
    .item {
        width: 50%;
        text-align: center;
        img {
            width: 100%;
            padding: 0;
            filter: gray; /* IE5+ */
            -webkit-filter: grayscale(1); /* Webkit Nightlies & Chrome Canary */
            transition: all .350s ease-in-out;
            &:hover {
                filter: none;
                -webkit-filter: grayscale(0);
                transform: scale(1.01);
            }
        }
        p {
            width: 70%;
            margin: 0 auto;
            padding-top: 15px;
            font-size: 1.2rem;
        }
    }
}
`

export default Nosotros;