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
            <img className='item' src='./images/servicios/grafico1.jpg' alt='REDISEÑO ORGANIZACIONAL' />
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
            <img className='item' src='./images/servicios/grafico2.png' alt='INFRAESTRUCTURA DE COMPENSACIONES' />
         </div>
         <div className='container two'>
            <img className='item' src='./images/servicios/imges.jpg' alt='Trabajadores en la Solución (Workers In The Solution)' />
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
         <div className='container'>
            <img className='soluciones' src='./images/servicios/grafico3.png' alt='Problema solucion trabajando juntos' />
         </div>
         <div className='señores'></div>
         <div className='container h1'>
            <h2>Búsqueda y selección de talento</h2>
         </div>
         <div className='container two'>
            <p className='item padding'>
                <h3>Headhunting</h3>
                Contamos con ejecutivos altamente capacitados en la búsqueda y selección de talento.
                <br />
                <br />
                Sabemos que la selección de personal es clave en el éxito de nuestros clientes, Cognitive Achievement pone énfasis en el cumplimiento de altos estándares en su nivel de servicio a fin de dar una respuesta oportuna a sus requerimientos.
                <br />
                <br />
                Aseguramos la calidad de entrega acorde al perfil solicitado por nuestros clientes, considerando que los valores y creencias de nuestros candidatos, empaten con la cultura y valores de la empresa.  
                <br />
                <br />
                Asesoramos a nuestros clientes y a los candidatos durante todo el proceso de reclutamiento y selección.
            </p>
            <img className='item' src='./images/servicios/entrevista.jpg' alt='Headhunting' />
         </div>
         <div className='container graf4 full'>
            <img  src='./images/servicios/grafico4.png' alt='Problema solucion trabajando juntos' />
         </div>
         <div className='coaching'></div>
         <div className='container h1'>
            <h2>Coaching</h2>
         </div>
         <div className='container two'>
            <img className='item' src='./images/servicios/coaching2.jpg' alt='Coaching Ejecutivo' />
            <p className='item padding'>
                <h3>Coaching Ejecutivo</h3>
                Proceso interactivo de transformación personal en el que el coach y el coachee trabajan por mejorar sus resultados y conseguir diferentes logros y metas en el apartado profesional y personal.
            </p>
         </div>
         <div className='container graf5 full'>
            <img  src='./images/servicios/grafico5.png' alt='Ciclo' />
         </div>
         <div className='container two'>
            <p className='item padding'>
                <h3>Coaching de equipo</h3>
                Guíado por un consultor con amplia experiencia, que ayuda a sus integrantes a modificar las creencias bajo las cuales conciben y realizan el trabajo.                <br />
                <br />
                <br />
                Formar e integrar un equipo de alto desempeño que asegure el cumplimiento de los planes estratégicos y operativos del grupo, a través de trabajar en el estilo de relacionarse entre ellos.
            </p>
            <img className='item' src='./images/servicios/equipo.jpg' alt='Coaching de equipo' />
         </div>
         <div className='container graf6 full'>
            <img  src='./images/servicios/grafico6.png' alt='diagrama cognitive coaching' />
         </div>
         <div className='container two vida'>
            <img className='item' src='./images/servicios/vida.jpg' alt='Coaching Ejecutivo' />
            <p className='item padding'>
                <h3>Coaching de vida</h3>
                Coaching de vida, guíado por un consultor experto que ayuda a trabajar las distintas áreas de su vida, motivar, construir estrategias y concretar cambios por medio de acciones.            </p>
         </div>
         <div className='junta'>
            <h2>Co-creation in-house</h2>
            <img className='bwow' src='./images/servicios/bwow.svg' alt='Co-creation in-house' />
         </div>
         <div className='container two full objetivo'>
            <img className='item' src='./images/servicios/objetivo1.jpg' alt='Smart remote teams' />
            <p className='item padding'>
                <h4>OBJETIVO</h4>
                Facilitar el conocimiento,  metodologías y herramientas  para maximizar la  productividad de los  equipos  de trabajo a distancia.
            </p>
         </div>
         <div className='container two full objetivo'>
            <img className='item' src='./images/servicios/objetivo2.jpg' alt='Liderazgo Multidimensional' />
            <p className='item padding'>
                <h4>OBJETIVO</h4>
                Desarrollar competencias conversacionales, relacionales y emocionales en ejecutivos responsables del logro de resultados a través de sus equipos de trabajo y/o líderes de proyectos estratégicos que requieren manejo de personal que no les reportan directamente.
            </p>
         </div>
         <div className='container two full objetivo'>
            <img className='item' src='./images/servicios/objetivo3.jpg' alt='Micro learning' />
            <p className='item padding'>
                <h4>OBJETIVO</h4>
                Facilita el entrenamiento de los empleados  por medio de micro cápsulas de aprendizaje,  con la cantidad de información necesaria para ayudarlos a alcanzar sus objetivos, haciendo que la transferencia de conocimiento sea más eficiente.
            </p>
         </div>
         <div className='container graf7 full'>
            <img  src='./images/servicios/grafico7.png' alt='diagrama cognitive coaching' />
         </div>
         <div className='container graf8 full'>
            <img  src='./images/servicios/grafico8.png' alt='Fases del proyecto' />
         </div>
         <div className='serviciosEsp'>
            <h2>Servicios especializados</h2>
         </div>
         <div className='container four'>
            <img className='item' src='./images/servicios/serviciosEsp1.jpg' alt='Micro learning' />
            <img className='item' src='./images/servicios/serviciosEsp2.jpg' alt='Micro learning' />
            <img className='item' src='./images/servicios/serviciosEsp3.jpg' alt='Micro learning' />
            <img className='item' src='./images/servicios/serviciosEsp4.jpg' alt='Micro learning' />
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
        h4 {
            font-family: var(--bold);
            font-weight: normal;
            font-size: 1.2rem;
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

.soluciones {
    margin-top: 50px;
}

.señores {
        background-image: url('./images/servicios/señores3.webp');
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
.graf4 {
    margin: 0 auto;
    background-color: rgba(106, 232,180, .2);
    img {
        width: 75%;
        margin: 0 auto;
        padding-top: 50px;
        padding-bottom: 50px;
    }
}

.coaching {
        background-image: url('./images/servicios/coaching1.jpg');
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

.graf5 {
    margin: 0 auto;
    background-color: rgba(245, 241,133, .2);
    img {
        width: 75%;
        margin: 0 auto;
        padding-top: 50px;
        padding-bottom: 50px;
    }
}
.graf6 {
    margin: 0 auto;
    background-color: rgba(168, 165,249, .2);
    img {
        width: 75%;
        margin: 0 auto;
        padding-top: 50px;
        padding-bottom: 50px;
    }
}

.vida {
    padding-top: 50px; 
}

.junta {
        background-image: url('./images/servicios/junta.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        height: 80vh;
        width: 100vw;
        margin-top: 50px;
        position: relative;
        @media (max-width: 680px) {
            height: 350px;
        }
        h2 {
            text-align: center;
            padding-top: 25px;
        }
        img {
            width: 350px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
}

.objetivo {
    padding: 50px 0 !important; 
    margin: 0;
    p {
        display: block;
        max-width: 430px !important;
        margin: 0 auto;
    }
}

.graf7 {
    margin: 0 !important;
    background-color: rgba(106, 232,180, .2);
    img {
        width: 90%;
        margin: 0 auto;
        padding-top: 25px;
        padding-bottom: 25px;
    }
}
.graf8 {
    margin: 0 !important;
    background-color: rgba(245, 241,133, .2);
    img {
        width: 90%;
        margin: 0 auto;
        padding-top: 25px;
        padding-bottom: 25px;
    }
}

.serviciosEsp {
        background-image: url('./images/servicios/seriviosEsp.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        height: 80vh;
        width: 100vw;
        margin-top: 50px;
        position: relative;
        @media (max-width: 680px) {
            height: 350px;
        }
        h2 {
            text-align: center;
            padding-top: 25px;
            font-size: 2rem;
        }
        img {
            width: 350px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
}

.four {
    padding-top: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    @media (max-width: 680px) {
        grid-template-columns: repeat(1, 1fr) !important;
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
        width: 100%;
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

    }
}

`

export default Servicios;