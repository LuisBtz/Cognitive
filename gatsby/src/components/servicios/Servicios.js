import React from 'react'
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"



const Servicios = () => {

    return(
        <ServiciosContenedor id='servicios'>
         <div className='container'>
            <img className='logo' src='./images/servicios/logo.svg' alt='Cognitive achievement logo' />
         </div>
         <StaticImage
            src="servicios.png"
            alt="Imagen de servicios"
            placeholder="blurred"
            layout="fullWidth"
            width={200}
            height={200}
        />
        <div className='hombre'></div>
        <div className='container h1'>
            <h2>Consultoría</h2>
            <p>Contamos con expertise y metodologías propias</p>
         </div>
         <div className='container two'>
            <img className='item' src='./images/servicios/grafico1.jpg' alt='Consulting network Coach community' />
            <p className='item padding'>
                <h3>REDISEÑO ORGANIZACIONAL</h3>
                Apoyamos en el análisis y rediseño de estructuras organizacionales, asegurándo que cumplan con las siguientes premisas organizacionales:
                <ul>
                    <li>Estructuras ágiles, esbeltas, planas y flexibles,que faciliten la comunicación fluída y toma oportuna de decisiones, promuevan la rentabilidad y productividad laboral.</li>
                    <li>Cumplan con los principios de auditoría y estén alineación a la estrategia y procesos claves del negocio.</li>
                </ul>
            </p>
         </div>
         <div className='container two'>
            <p className='item padding'>
                <h3>INFRAESTRUCTURA DE COMPENSACIONES</h3>
                Crear la infraestructura de compensaciones, necesaria para asegurar la administración justa y equitativa de los recursos económicos destinados para compensar al personal  a través de:
                <ul>
                    <li>Asignar un valor relativo a cada uno de los puestos de su organización y traducirlos en niveles que sirvan como base para una eficiente administración de la compensación</li>
                    <li>Análisis de Equidad Interna</li>
                    <li>Análisis de Competitividad Externa</li>
                    <li>Elaboración de la Estructura  Salarial (Tabulador) que será el marco de referencia para Administrar sueldos </li>
                    <li>Políticas y lineamientos para la Administración de Compensaciones</li>
                </ul>
            </p>
            <img className='item' src='./images/servicios/grafico2.png' alt='Consulting network Coach community' />
         </div>
         <div className='container two'>
            <img className='item' src='./images/servicios/imges.jpg' alt='Consulting network Coach community' />
            <p className='item padding'>
                <img src='./images/servicios/wits.png' alt='Trabajadores en la Solución (Workers In The Solution)' />
                <h3>Trabajadores en la Solución (Workers In The Solution)</h3>
                Obtener soluciones por parte de la gente que  está íntimamente relacionada con los procesos (recursos  requeridos y acciones requeridas) a través de:
                <ul>
                    <li>Identificar situaciones críticas</li>
                    <li>Proponer alternativas de solución</li>
                    <li>Establecer un Plan y Compromisos de acción  inmediata</li>
                </ul>
            </p>
         </div>
        </ServiciosContenedor>
    )
}

const ServiciosContenedor = styled.section`
position: relative;
width: 100%;
padding-top: 50px;
padding-bottom: 50px;
.container {
    display: flex;
    padding-bottom: 50px;
    @media (max-width: 680px) {
        flex-direction: column;
        .logo {
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
    h2 {
        font-family: var(--bold);
        font-weight: normal;
        font-size: 2rem;
        padding-top: 50px;
        @media (max-width: 680px) {
            font-size: 1.5rem;
        }
    }
}

.logo {
    width: 40%;
    padding-bottom: 50px;
}

.hombre {
        background-image: url('./images/servicios/hombres.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        height: 70vh;
        width: 100vw;
        margin-top: 50px;
        @media (max-width: 680px) {
            height: 350px;
        }
}

.two {
    display: flex;
    @media (max-width: 680px) {
        flex-direction: column;
        img {
                filter: none !important;
                padding: 0;
                &:hover {
                transform: none !important;
            }
            }
        .item {
            width: 100% !important;
            margin-bottom: 50px;
            
        }
    }
    img {
            transition: all .350s ease-in-out;
            &:hover {
                transform: scale(1.05);
            }
        }
    .item {
        width: 50%;
        align-self: center;
        img {
            width: 50%;
            margin: 0 auto;
            padding: 0;
            transition: none;
            text-align: center;
            display: block;
            &:hover {
                transform: none;
            }
        }
        p {
            width: 70%;
            margin: 0 auto;
            padding-top: 15px;
            font-size: 1.2rem;
            text-align: left;
        }
        h3 {
            font-family: var(--bold);
            font-weight: normal;
            font-size: 2rem;
            padding-bottom: 20px;
            @media (max-width: 680px) {
                font-size: 1.5rem;
            }
        }
        ul {
            list-style: inherit;
            margin-top: 20px;
            padding-left: 50px;
            li {
                margin-bottom: 20px;
            }
        }
    }
}
`

export default Servicios;